import React from 'react';

export default class LyricView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: this.props.sections,
      lines: this.props.lines
    };
  }

  componentDidMount() {
    let allLines = [];
    console.log(this.state.sections);
    this.state.sections.forEach(async (section) => {
      await this.props.getLines(section.id).then((res) => {
        res.data.forEach((line) => allLines.push(line));
        console.log('successfully grabbed lines for section at id ', section.id);
      }, (err) => {
        console.log(err);
      });
      this.setState({
        lines: allLines
      })
    })
    this.props.updateLineState(allLines);
  }

  render() {
    return (
      <p>{JSON.stringify(this.state.lines)}</p>
    )
  }
}