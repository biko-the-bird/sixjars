import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setJars} from '../redux/actions/balance';

export class AdvancedSetting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            jars: "{\"NEC\":0,\"FFA\":0,\"GIV\":0,\"PLA\":0,\"EDU\":0,\"LTS\":0}"
        }
    }

    save = () => {
        console.log("saving");
        this.props.setJars(JSON.parse(this.state.jars));
        this.setState({jars: "{\"NEC\":0,\"FFA\":0,\"GIV\":0,\"PLA\":0,\"EDU\":0,\"LTS\":0}"});
    }
   

    render() {
        return (<div>
            <button className="show-advance-btn" onClick={() => this.setState({show: !this.state.show})}>Show Advanced Settings</button>
            {this.state.show &&
            <div>
            <h4>⚠️Advanced Setting⚠️</h4>
            <p>If you don't know what JSON means stop now. Modifing this setting improperly can delete your data. This input should be valid stringified json.</p>
            <input 
                type="text" 
                className="advanced-setting-input" 
                value={this.state.jars}
                onChange={e => this.setState({jars: e.target.value})} 
            />
            <button className="advanced-setting-btn" onClick={() => this.save()}>Save</button>
            </div>
            }
        </div>)
    }
}


export default connect(undefined, {setJars})(AdvancedSetting);