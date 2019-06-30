import React, { Component } from "react";
import { connect } from "react-redux";
import { setJars, withdrawJar } from "../redux/actions/balance";
import { updateJars } from "../helpers";
import * as constants from '../redux/constants';

export class Balance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deposit: 0,
      withdraw: 0,
      withdrawJar: constants.NEC 
    };
    this.handleDeposit = this.handleDeposit.bind(this);
  }

  handleDeposit = () => {
    var jars = updateJars(this.state.deposit, this.props.jars);

    this.props.setJars(jars);
    this.setState({
      deposit: 0,
    });
  };

  handleWithdraw = () => {
    this.props.withdrawJar(this.state.withdrawJar, this.state.withdraw);
    this.setState({
        withdraw: 0,
    });
  }

  calcTotal = () => {
    var keys = Object.keys(this.props.jars);
    var t = 0;
    keys.forEach(key => {
      t += this.props.jars[key];
    });
    return t;
  };


  render() {
    const total = this.props.jars ? this.calcTotal() : 0;
    var keys = Object.keys(this.props.jars);
    return (
      <div>
        Total Balance: ${total.toFixed(2)}
        <div>
          <label>Deposit</label>
          <input
            type="number"
            className="deposit-input"
            value={this.state.deposit}
            onChange={e => this.setState({ deposit: e.target.value })}
          />
          <button className="deposit-btn" onClick={() => this.handleDeposit()}>
            Deposit
          </button>
        </div>
        <ul>
          {keys.map(k => {
            return (
              <li key={k}>
                {k}: ${this.props.jars[k].toFixed(2)}
              </li>
            );
          })}
        </ul>
        <hr/>
        <div>
<h3>Make a withdraw</h3>
        </div>
        <select id="jar-selector" onChange={e => this.setState({withdrawJar: e.target.value})}>
          {keys.map(key => {
            return (
              <option value={key} key={key}>
                {key} 
              </option>
            );
          })}
        </select>
        
        <br/>
        <input
            type="number"
            className="withdraw-input"
            value={this.state.withdraw}
            onChange={e => this.setState({withdraw: e.target.value})}
          />
          <button className="withdraw-btn" onClick={() => this.handleWithdraw()}>
            Withdraw
          </button>
        
          <br/>
        <br/>
       
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { jars: state };
};
const mapActions = {
  setJars,
  withdrawJar
};
export default connect(
  mapStateToProps,
  mapActions
)(Balance);
