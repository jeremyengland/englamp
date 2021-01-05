import React from 'react';
import {
  IndLine
} from '../styles/Styles.jsx';

// maps over all lines and adds them to lyric view
export default function Lines(props) {
  return (
    <div>
      {props.lines.map((line, index) => (
        <div>
          <IndLine id={`${line.section}%${line.lineorder}`} onClick={props.selectLine}>{line.linecontent}</IndLine>
        </div>
      ))}
    </div>
  )
}