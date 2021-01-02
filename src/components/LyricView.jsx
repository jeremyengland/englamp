import React from 'react';
import Lines from './Lines.jsx';

export default class LyricView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: null,
      lines: this.props.lines
    };
  }

  componentDidMount() {
    let allSections = {};
    let allLines = [];
    // the promise for a get request for lines is resolved here,
    // so this component can store the data as the requests are made
    this.props.sections.forEach(async (section) => {
      allSections[section.id] = section;
      await this.props.getLines(section.id).then((res) => {
        allLines.push(res.data);
      }, (err) => {
        console.log(err);
      });
      // after all sections and lines are parsed, add it to state
      this.setState({
        lines: allLines,
        sections: allSections
      })
    })
    this.props.updateLineState(allLines);
  }

  render() {
    return (
      this.state.lines && !Array.isArray(this.state.sections) && this.state.sections &&
      <div>
        {this.state.lines.map((section) => (
          <div>
            <p><u><b>[{this.state.sections[section[0].section].section}]</b></u></p>
            <Lines lines={section} sections={this.state.sections}></Lines>
            <p><br></br></p>
          </div>
        ))}
      </div>
    )
  }
}