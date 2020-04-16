import React from 'react';
import './styles.css';

import {Link} from 'react-router-dom';
class Button extends React.Component {
    state = {
        hover: false
    }    
    hovering = () => {
        this.setState((prevState) => {
            return {hover : !prevState.hover}
        });
    }

    render() {
        let backgroundColor = this.props.backgroundColor;
        let hoverColor = this.props.hoverColor ?? backgroundColor;
        if(!this.state.hover){
            backgroundColor = this.props.backgroundColor;
        }else{
            backgroundColor = hoverColor;
        } 

        return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <Link to={this.props.href} onMouseEnter={this.hovering} onMouseLeave={this.hovering} style={{padding : this.props.padding,boxShadow : this.props.shadow,opacity: this.props.opacity ?? 1,backgroundColor:backgroundColor}} className="button">
                {this.props.label}
            </Link>
        </div>
    }
}

export default Button;