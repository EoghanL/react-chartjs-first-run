import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import TableOutline from './components/tableOutline'
import Chart from './components/chart'

import showMore from './actions/showMore'
import updateFilter from './actions/updateFilter'
import chartAdaptToYear from './actions/chartAdaptToYear'
import chartAdaptToMonths from './actions/chartAdaptToMonths'

class App extends Component {

  constructor(props){
    super(props)
    this.extendList = this.extendList.bind(this)
    this.yearChart = this.yearChart.bind(this)
    this.monthChart = this.monthChart.bind(this)
    this.increMonth = this.increMonth.bind(this)
    this.decreMonth = this.decreMonth.bind(this)
  }

  extendList(){
    this.props.showMore(this.props.displayLength + 10)
  }

  yearChart(){
    this.props.chartAdaptToYear(this.props.list.slice(0));
  }

  monthChart(){
    let newMonth = this.props.month ? this.props.month : 0 ;
    this.props.chartAdaptToMonths(this.props.list.slice(0), newMonth)
  }

  increMonth(){
    let newMonth = this.props.month < 11 ? this.props.month + 1 : 0
    this.props.chartAdaptToMonths(this.props.list.slice(0), newMonth)
  }

  decreMonth(){
    let newMonth = this.props.month < 0 ? this.props.month - 1 : 11
    this.props.chartAdaptToMonths(this.props.list.slice(0), newMonth)
  }

  buttonDisplay(){
    if(this.props.month != null){
      return(
        <span>
        <button onClick={this.decreMonth}>Prev Month</button>
        <button onClick={this.yearChart}>Yearly View</button>
        <button onClick={this.increMonth}>Next Month</button>
        </span>
      )
    }
    else{ return ( <button onClick={this.monthChart}>Single Month View</button> )}
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React-ChartJS-2</h2>
        </div>
        <div>
          <TableOutline displayList={this.props.list.slice(0, this.props.displayLength)}
          filter={this.props.filter} updateSort={this.props.updateFilter}/>
          <button onClick={this.extendList}>Load More</button>
        </div>
        <hr />
          <Chart data={this.props.stats} year={this.props.year} month={this.props.month}/>
        <hr />
          {this.buttonDisplay()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { ...state }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    showMore: showMore,
    updateFilter: updateFilter,
    chartAdaptToYear: chartAdaptToYear,
    chartAdaptToMonths: chartAdaptToMonths
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
