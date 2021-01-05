import React from 'react';
import LyricView from './LyricView.jsx';
import Demos from './Demos.jsx';
import Rhymes from './Rhymes.jsx';
import {
  SongTitleDiv
} from '../styles/Styles.jsx';

export default function SongView(props) {
  return (
    <div>
      <LyricView sections={props.sections} lines={props.lines} getLines={props.getLines} postLine={props.postLine} updateLine={props.updateLine} updateLineState={props.updateLineState} songId={props.songId}></LyricView>
      {/* <Demos songId={props.songId} demos={props.demos} getDemos={props.getDemos}></Demos> */}
      <Rhymes></Rhymes>
    </div>
  )
};