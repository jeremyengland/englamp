import React from 'react';
import Sections from './Sections.jsx';

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
    // console.log(this.state.sections);
    this.state.sections.forEach(async (section) => {
      await this.props.getLines(section.id).then((res) => {
        allLines.push(res.data);
        // console.log('successfully grabbed lines for section at id ', section.id);
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
      this.state.lines &&
      <div>
        {this.state.lines.map((section) => (
          <div>
            <Sections lines={section}></Sections>
            <p><br></br></p>
          </div>
        ))}
      </div>
    )
  }
}