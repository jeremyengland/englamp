import React from 'react';

// maps over all lines and adds them to lyric view
export default function Lines(props) {
  return (
    <div>
      {props.lines.map((line) => (
        <div id={line.lineorder}>
          <p>{line.linecontent}</p>
        </div>
      ))}
    </div>
  )
}