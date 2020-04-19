import React from 'react';
import './styles.css';

class Textarea extends React.Component{
    render(){
        return <div style={{margin: this.props.margin ?? '30px 0px',display:'flex',width:'100%',alignContent: this.props.alignContent ?? 'center',justifyContent: this.props.justifyContent ?? 'center'}}>
            <textarea rows="3"  placeholder={this.props.placeholder} style={{width: this.props.width}} value={this.props.value} onChange={this.props.valueHandler}></textarea>
            </div>
    }
}

export default Textarea;