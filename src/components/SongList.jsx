import React from 'react';
import parseUtils from './utils/customParse.js';

export default class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: this.props.songs,
      songObject: null,
      sections: this.props.sections
    };
    this.onSongClick = this.onSongClick.bind(this);
  }

  onSongClick(e) {
    console.log(e.target.innerHTML);
    let songName = e.target.innerHTML;
    this.props.getSections(this.state.songObject[songName].id, songName);
  }

  componentDidMount() {
    if (typeof this.state.songs === 'object') {
      this.setState((state) => {
        return {
          songs: Object.keys(parseUtils.customParse(state.songs)),
          songObject: parseUtils.customParse(state.songs)
        }
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.songs && this.state.songObject && this.state.songs.map((song) => (
          <div onClick={this.onSongClick}>
            <h4>{this.state.songObject[song].title}</h4>
          </div>
        ))}
      </div>
    )
  }
}