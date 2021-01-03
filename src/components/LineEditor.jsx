import React from 'react';

export default class LineEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedLine: null
    };
    this.onLineChange = this.onLineChange.bind(this);
    this.postTypedLine = this.postTypedLine.bind(this);
  }

  async postTypedLine(e) {
    console.log(this.props.selectedLine);
    let selectedLine = this.props.selectedLine;
    let newOrder = (Number(selectedLine.lineorder) + 1)
    await this.props.postLine(selectedLine.section, {
      linecontent: this.state.typedLine,
      lineorder: newOrder,
      section: selectedLine.section
    })
    this.setState({
      typedLine: null
    })
    e.preventDefault();
  }

  onLineChange(e) {
    this.setState({
      typedLine: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.postTypedLine}>
      <label>New line: </label>
      <input type='text' onChange={this.onLineChange}/>
      <input type='submit' value='Submit'/>
      </form>
    )
  }
}