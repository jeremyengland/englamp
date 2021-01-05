import React from 'react';
import axios from 'axios';
import AlbumList from './AlbumList.jsx';
import SongList from './SongList.jsx';
import SongView from './SongView.jsx';
import {
  Global,
  AlbumArt,
  SongListDiv,
  LogoutBtn
} from '../styles/Styles.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      userId: this.props.userId,
      albums: null,
      currentAlbum: null,
      currentAlbumArt: null,
      albumId: null,
      songs: null,
      currentSong: null,
      songId: null,
      sections: null,
      lines: null,
      demos: null,
      rerender: true
    };
    this.getAlbums = this.getAlbums.bind(this);
    this.getSongs = this.getSongs.bind(this);
    this.getSections = this.getSections.bind(this);
    this.getLines = this.getLines.bind(this);
    this.getDemos = this.getDemos.bind(this);
    this.updateLineState = this.updateLineState.bind(this);
    this.backToAlbums = this.backToAlbums.bind(this);
    this.backToSongs = this.backToSongs.bind(this);
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
  getSongs(albumId, title, artwork) {
    axios({
      method: 'get',
      url: `/api/albums/${albumId}/songs`,
    })
      .then((res) => {
        this.setState({
          currentAlbum: title,
          currentAlbumArt: artwork,
          albumId: albumId,
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
          songId: songId,
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
    return axios({
      method: 'get',
      url: `/api/sections/${sectionId}/lines`,
    })
  }

  // sends a request to get a song's demos
  getDemos(songId) {
    return axios({
      method: 'get',
      url: `/api/songs/${songId}/demos`,
    })
  }

  // posts a line to the db
  postLine(secId, line) {
    return axios({
      method: 'post',
      url: `/api/sections/${secId}/lines`,
      data: {
        linecontent: line.linecontent,
        lineorder: line.lineorder,
        section: secId
      }
    })
  }

  // updates a line's column in the db
  updateLine(secId, line, column) {
    return axios({
      method: 'put',
      url: `/api/sections/${secId}/lines`,
      data: {
        linecontent: line.linecontent,
        lineorder: line.lineorder,
        section: secId,
        column: column
      }
    })
  }

  // changes state for lines
  updateLineState(lines) {
    console.log(lines);
    this.setState({
      lines: lines
    })
  }

  // rerenders the album list component
  backToAlbums() {
    this.setState({
      currentAlbum: null,
      songs: null,
      currentSong: null,
      sections: null,
      currentSection: null,
      lines: null,
      currentLine: null
    })
  }

  // rerenders the song list component
  backToSongs() {
    this.setState({
      currentSong: null,
      sections: null,
      currentSection: null,
      lines: null,
      currentLine: null
    })
  }

  componentDidMount() {
    this.getAlbums();
  }

  render() {
    return (
      <Global>
        {this.state.albums && !this.state.songs &&
          <div>
            <AlbumList albums={this.state.albums} songs={this.state.songs} getSongs={this.getSongs}></AlbumList>
          </div>
        }
        {this.state.songs && !this.state.sections &&
          <div>
            <p onClick={this.backToAlbums}><b>  {'<'} Back To Projects</b></p>
            <SongListDiv>
              <h1><b><b>{this.state.currentAlbum}</b></b></h1>
              <AlbumArt src={this.state.currentAlbumArt}></AlbumArt>
              <SongList songs={this.state.songs} getSections={this.getSections}></SongList>
            </SongListDiv>
          </div>
        }
        {this.state.sections &&
          <div>
            <button onClick={this.backToAlbums}>Projects</button>
            <button onClick={this.backToSongs}>Songs</button>
            <h3>{this.state.currentSong}</h3>
            <SongView sections={this.state.sections} lines={this.state.lines} demos={this.state.demos} getLines={this.getLines} postLine={this.postLine} updateLine={this.updateLine} updateLineState={this.updateLineState} getDemos={this.getDemos} songId={this.state.songId}></SongView>
          </div>
        }
      </Global>
    )
  }
}