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
  }

  postTypedLine(e) {
    console.log(this.props.selectedLine);
    let selectedLine = this.props.selectedLine;
    let newOrder = (Number(selectedLine.lineorder) + 1)
    this.props.postLine(selectedLine.section, {
      linecontent: this.state.typedLine,
      lineorder: newOrder,
      section: selectedLine.section
    }).then((res) => {
      this.props.updateAfterPost(res.data, newOrder, selectedLine.section);
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

  render() {
    return (
      <div>
        {this.state.postedLine &&
          <p><b>Latest Line:</b> {this.state.postedLine}</p>
        }
        <form onSubmit={this.postTypedLine}>
          <label>New line: </label>
          <input type='text' onChange={this.onLineChange} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}