import React from 'react';

export default class LineEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postedLine: this.props.postedLine,
      typedLine: null
    };
    this.onLineChange = this.onLineChange.bind(this);
    this.postTypedLine = this.postTypedLine.bind(this);
    this.updateLineContent = this.updateLineContent.bind(this);
  }

  postTypedLine(e) {
    console.log('post event: ', e.target);
    let selectedLine = this.props.selectedLine;
    let newOrder = (Number(selectedLine.lineorder) + 1)
    this.props.postLine(selectedLine.section, {
      linecontent: this.state.typedLine,
      lineorder: newOrder,
      section: selectedLine.section
    }).then((res) => {
      this.props.updateLyrics();
      this.setState({
        typedLine: null
      });
      console.log(res);
      console.log('successfully posted line');
    }, (err) => {
      console.log(err);
    })
    e.preventDefault();
  }

  onLineChange(e) {
    this.setState({
      typedLine: e.target.value
    })
  }

  // change the content of the selected line
  updateLineContent(e) {
    let selectedLine = this.props.selectedLine;
    this.props.updateLine(selectedLine.section, {
      id: selectedLine.id,
      linecontent: this.state.typedLine,
      lineorder: selectedLine.lineorder,
      section: selectedLine.section
    }, "linecontent").then((res) => {
      this.props.updateLyrics();
      this.setState({
        typedLine: ""
      });
      console.log(res);
      console.log('successfully updated line');
    }, (err) => {
      console.log(err);
    })
    e.preventDefault();
  }

  render() {
    return (
      <div>
        {this.state.postedLine &&
          <p><b>Latest Line:</b> {this.state.postedLine}</p>
        }
        <form onSubmit={this.postTypedLine}>
          <label>New line: </label>
          <input type='text' onChange={this.onLineChange} />
          <input type='submit' value='Add New Line' />
        </form>
        <button onClick={this.updateLineContent}>Update Current Line</button>
      </div>
    )
  }
}