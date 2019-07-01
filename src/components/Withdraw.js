import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withdrawJar} from '../redux/actions/balance';
import * as constants from '../redux/constants';

export class Withdraw extends Component {

    constructor(props) {
        super(props);
        this.state = {
            withdraw: 0,
            withdrawJar: constants.NEC
        }
    }

    handleWithdraw = () => {
        this.props.withdrawJar(this.state.withdrawJar, this.state.withdraw);
        this.setState({
            withdraw: 0
        });
    }

    render() {
        //console.log(this.props);
        const keys = Object.keys(this.props.jars);
        return (
            <div>

<label>Withdraw</label>

 <input
            type="number"
            className="withdraw-input"
            value={this.state.withdraw}
            onChange={e => this.setState({withdraw: e.target.value})}
          />
          <label>from</label>
             <select id="jar-selector" onChange={e => this.setState({withdrawJar: e.target.value})}>
          {keys.map(key => {
            return (
              <option value={key} key={key}>
                {key} 
              </option>
            );
          })}
        </select>
          <button className="withdraw-btn" onClick={() => this.handleWithdraw()}>
            Withdraw
          </button>
        
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {jars: state};
}

export default connect( mapStateToProps,{withdrawJar})(Withdraw);