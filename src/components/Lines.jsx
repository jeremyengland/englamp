import React from 'react';

// maps over all lines and adds them to lyric view
export default function Lines(props) {
  return (
    <div>
      {props.lines.map((line, index) => (
        <div>
          <p id={`${line.section}%${line.lineorder}`} onClick={props.selectLine}>{line.linecontent}</p>
        </div>
      ))}
    </div>
  )
}