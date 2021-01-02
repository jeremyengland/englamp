import React from 'react';
import LyricView from './LyricView.jsx';

export default class SongView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: this.props.sections,
      lines: this.props.lines
    };
  }
  render() {
    return (
      <div>
        <LyricView sections={this.props.sections} lines={this.props.lines} getLines={this.props.getLines} updateLineState={this.props.updateLineState} ></LyricView>
      </div>
    )
  }
}