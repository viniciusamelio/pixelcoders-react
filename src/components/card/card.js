import React from 'react';
import './styles.css';


class Card extends React.Component{

    state={
        hover: false
    }

    hovering = () =>{
        this.setState((prevState)=>{
            return {hover : !prevState.hover};
          });
    }

    render(){
        let style;
        if(!this.state.hover){
            style = {backgroundImage: `url(${this.props.image})`,borderLeft: `3px solid ${this.props.borderColor}`};
        }else{
            style = {backgroundImage: `url(${this.props.image})`,border: `3px solid ${this.props.borderColor}`};
        }
        return <div onMouseLeave={this.hovering} onMouseEnter={this.hovering} style={style} className="card">
            {this.props.content}
        </div>
    }
}


export default Card;