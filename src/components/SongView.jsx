import React from 'react';
import LyricView from './LyricView.jsx';
import Demos from './Demos.jsx';

export default function SongView(props) {
  return (
    <div>
      <LyricView sections={props.sections} lines={props.lines} getLines={props.getLines} postLine={props.postLine} updateLineState={props.updateLineState} songId={props.songId}></LyricView>
      <Demos songId={props.songId} demos={props.demos} getDemos={props.getDemos}></Demos>
    </div>
  )
};