import React, { Component } from "react";
import { connect } from "react-redux";
import {Card, Text, Heading, Box} from 'rebass';

import { setJars, withdrawJar } from "../redux/actions/balance";
import { updateJars, isMobile } from "../helpers";
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
        <div className="total-balance">Total Balance: ${total.toFixed(2)}</div>
        <div className="balances-container">
          {keys.map(k => {
            return (
              <div key={k} 
              className="balance-card"
              >
                <Heading as="h4">{k}</Heading>
                <Text className="balance-text">${this.props.jars[k].toFixed(2)}</Text>
                {!isMobile() && 
                  <p>{constants.JAR_DESC[k]}</p>
                }
              </div>
            );
          })}
        </div>

       
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
