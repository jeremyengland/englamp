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
    // the promise for a get request for lines is resolved here,
    // so this component can store the data as the requests are made
    this.state.sections.forEach(async (section) => {
      await this.props.getLines(section.id).then((res) => {
        allLines.push(res.data);
      }, (err) => {
        console.log(err);
      });
      // after all lines are in an array, add it to state
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