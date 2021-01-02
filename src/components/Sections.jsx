import React from 'react';

export default function Sections(props) {
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