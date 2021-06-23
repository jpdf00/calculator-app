import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const data = calculate(this.state, buttonName);
    this.setState(data);
  }

  render() {
    /* eslint-disable no-unused-vars */
    const { total, next, operation } = this.state;
    /* eslint-enable no-unused-vars */
    const result = !next ? total : next;

    return (
      <>
        <Display result={result || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
