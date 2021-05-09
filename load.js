import React, {Component} from 'react';
import '.load.css';

const LoadHOC = (propName) => (WrappedComponent) => {
    return class LoadHOC extends Component {
        render(){
            if(this.props.roomate)
            {
                returns.this.props[propName].length === 0 ? <div className = 'load'></div> : <
                WrappedComponent {...this.props} />
            }
            else {
                return <div className = 'load'></div>
            }
        }
    }
}

export default LoadHOC;