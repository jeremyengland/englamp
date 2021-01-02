import React from 'react';
import LyricView from './LyricView.jsx';

export default function SongView(props) {
  return (
    <div>
      <LyricView sections={props.sections} lines={props.lines} getLines={props.getLines} updateLineState={props.updateLineState} ></LyricView>
    </div>
  )
};