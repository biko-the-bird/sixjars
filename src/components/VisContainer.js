import React, {Component} from 'react';
import Visualization from './Visualization';
import Balance from './balance';
import {isMobile} from '../helpers';

class VisContainer extends Component {

    render() {
        console.log(isMobile());
        return (
            <div className="vis-container">
                <Balance/>
                {!isMobile() &&
                <Visualization/>
                }
            </div>
        )  
    }
}
export default VisContainer;