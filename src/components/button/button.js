import React from 'react';
import './styles.css';

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
        let backgroundColor;
        if(!this.state.hover){
            backgroundColor = "#4C18FC";
        }else{
            backgroundColor = "#3B0FD1";
        }

        return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <a href={this.props.href} onMouseEnter={this.hovering} onMouseLeave={this.hovering} style={{boxShadow : this.props.shadow,opacity: this.props.opacity ?? 1,backgroundColor:backgroundColor}} className="button">
                {this.props.label}
            </a>
        </div>
    }
}

export default Button;