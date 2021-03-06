import React from 'react';
import Lines from './Lines.jsx';
import LineEditor from './LineEditor.jsx';
import sortLines from './utils/sortLines.js';
import {
  SongTitleDiv,
  Section
} from '../styles/Styles.jsx';

export default class LyricView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: null,
      lines: this.props.lines,
      lineObject: null,
      sectionIdsAndOrders: null,
      currentSectionOrder: null,
      currentLineOrder: null,
      postedLine: null
    };
    this.selectLine = this.selectLine.bind(this);
    this.updateLyrics = this.updateLyrics.bind(this);
  }

  // grabs lyrics on mount or after any change
  updateLyrics() {
    let allSections = {};
    let idsAndOrders = {};
    let allLines = [];
    let lines = {};
    // the promise for a get request for lines is resolved here,
    // so this component can store the data as the requests are made
    this.props.sections.forEach(async (section) => {
      // this is for splitting up sections
      allSections[section.id] = section;
      idsAndOrders[section.sectionorder] = section.id;
      // this is where a get request for lines happens
      await this.props.getLines(section.id).then((res) => {
        // each line is added to an array and an object
        res.data.forEach((line) => {
          if (!lines[section.sectionorder]) lines[section.sectionorder] = {};
          lines[section.sectionorder][line.lineorder] = line;
        })
        allLines.push(res.data);
        allLines = sortLines(allLines);
      }, (err) => {
        console.log(err);
      });
      // after all sections and lines are parsed, add it to state
      this.setState({
        lines: allLines,
        lineObject: lines,
        sections: allSections,
        sectionIdsAndOrders: idsAndOrders
      })
    })
    this.props.updateLineState(allLines);
  }

  componentWillMount() {
    this.updateLyrics();
  }

  selectLine(e) {
    let orders = e.target.id.split('%');
    this.setState({
      currentSectionOrder: orders[0],
      currentLineOrder: orders[1]
    })
  }

  render() {
    return (
      this.state.lines && !Array.isArray(this.state.sections) && this.state.sections &&
      <div>
        {this.state.lines.map((section) => (
          <div>
            <Section><u><b>[{this.state.sections[section[0].section].section}]</b></u></Section>
            <Lines lines={section}
              sections={this.state.sections}
              selectLine={this.selectLine}>
            </Lines>
            <p><br></br></p>
          </div>
        ))}
        {this.state.currentLineOrder && this.state.currentSectionOrder && this.state.lineObject &&
          <SongTitleDiv>
            <h2>Line Editor</h2>
            <LineEditor postLine={this.props.postLine}
              updateLine={this.props.updateLine}
              selectedLine={this.state.lineObject[this.state.currentSectionOrder][this.state.currentLineOrder]}
              songId={this.props.songId}
              updateLyrics={this.updateLyrics}
              postedLine={this.state.postedLine}>
            </LineEditor>
            <p>
              <b>Current Section: </b>
              {this.state.sections[this.state.sectionIdsAndOrders[this.state.currentSectionOrder]].section}
              <b> [{this.state.currentSectionOrder}]</b>
            </p>
            <p>
              <b>Current Line: </b>
              {this.state.lineObject[this.state.currentSectionOrder][this.state.currentLineOrder].linecontent}
              <b> [{this.state.currentLineOrder}]</b>
            </p>
          </SongTitleDiv>
        }
      </div>
    )
  }
}