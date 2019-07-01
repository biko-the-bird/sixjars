import React, {Component} from 'react';
import {connect} from 'react-redux';
import { setJars } from "../redux/actions/balance";
import { updateJars } from "../helpers";

export class Deposit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deposit: 0
        }
    }

    handleDeposit = () => {
        const jars = updateJars(this.state.jars, this.props.jars);
        this.props.setJars(jars);
        this.setState({deposit: 0});
    }

    render() {
        return (
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
        )
    }
}

const mapStateToProps = (state) => {
    return {jars: state}
}

export default connect(mapStateToProps,{setJars})(Deposit);