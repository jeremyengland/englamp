import React from 'react';
import axios from 'axios';
import AlbumList from './AlbumList.jsx';
import SongList from './SongList.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      userId: this.props.userId,
      albums: null,
      currentAlbum: null,
      songs: null,
      currentSong: null,
      sections: null,
      currentSection: null,
      lines: null,
      currentLine: null
    };
    this.getAlbums = this.getAlbums.bind(this);
    this.getSongs = this.getSongs.bind(this);
    this.getSections = this.getSections.bind(this);
    this.getLines = this.getLines.bind(this);
  }

  // sends request to get a user's albums
  getAlbums() {
    axios({
      method: 'get',
      url: `/api/users/${this.state.userId}/albums`,
    })
      .then((res) => {
        this.setState({ albums: res.data });
        console.log(res);
        console.log('successfully grabbed albums');
      }, (err) => {
        console.log(err);
      })
  }

  // sends a request to get a user's songs
  getSongs(albumId, title) {
    axios({
      method: 'get',
      url: `/api/albums/${albumId}/songs`,
    })
      .then((res) => {
        this.setState({
          currentAlbum: title,
          songs: res.data
        });
        console.log(res);
        console.log('successfully grabbed songs');
      }, (err) => {
        console.log(err);
      })
  }

  // sends a request to get a song's sections
  getSections(songId, title) {
    axios({
      method: 'get',
      url: `/api/songs/${songId}/sections`,
    })
      .then((res) => {
        this.setState({
          currentSong: title,
          sections: res.data
        });
        console.log(res);
        console.log('successfully grabbed sections');
      }, (err) => {
        console.log(err);
      })
  }

  // sends a request to get a section's lines
  getLines(sectionId) {
    axios({
      method: 'get',
      url: `/api/songs/${songId}/sections`,
    })
      .then((res) => {
        this.setState({
          lines: res.data
        });
        console.log(res);
        console.log('successfully grabbed lines');
      }, (err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getAlbums();
  }

  render() {
    return (
      <div>
        {this.state.albums && !this.state.songs &&
          <div>
            <h3>Your Projects:</h3>
            <AlbumList albums={this.state.albums} getSongs={this.getSongs} songs={this.state.songs}></AlbumList>
          </div>
        }
        {this.state.songs && !this.state.sections &&
          <div>
            <h3>{this.state.currentAlbum}</h3>
            <SongList songs={this.state.songs} getSections={this.getSections}></SongList>
          </div>
        }
      </div>
    )
  }
}