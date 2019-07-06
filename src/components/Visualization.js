import React, {Component} from 'react';
import RC2 from 'react-chartjs2';
import {connect} from 'react-redux';

export class Visualization extends Component {

    constructor(props) {
        super(props);
       
    }

    

   
    formatData = (jars) => {
        console.log(jars);
        const keys = Object.keys(jars);
        var dataSet = [{
            label:'Balances',
        data:[
        ],
        backgroundColor:[
          '#97a675',
          '#f9acbb',
          '#d6ead4',
          '#81b0b2',
          '#eff2d8',
          '#00738c'
        ],
      }]
        keys.forEach(k => {
            dataSet[0].data.push(jars[k]);
        });

     
        
       return  {
            labels: keys,
            datasets: dataSet
        };
       
    }

    render() {
       console.log(this.props, "render vis");
        return (
            <div className="visualization-container">
                {this.props.jars &&
                <RC2 data={this.formatData(this.props.jars)} options={{legend:{display: false}, weight: '400px'}} type='pie' />
                }
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {jars: state};
}

export default connect(mapStateToProps, {})(Visualization);