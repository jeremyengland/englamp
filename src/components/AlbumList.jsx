import React from 'react';
import parseUtils from './utils/customParse.js';
import {
  AlbumListDiv,
  AlbumArt,
  AlbumDiv,
  YourProjects
} from '../styles/Styles.jsx';

// renders the list of albums on the home page
export default class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: this.props.albums,
      albumObject: null,
      songs: this.props.songs
    };
    this.onAlbumClick = this.onAlbumClick.bind(this);
  }

  // grab all songs for the album on click
  onAlbumClick(e, data) {
    // console.log(e.target.innerHTML);
    let albumName = e.target.innerHTML;
    this.props.getSongs(this.state.albumObject[albumName].id, albumName, this.state.albumObject[albumName].artwork);
  }

  componentDidMount() {
    if (typeof this.state.albums === 'object') {
      this.setState((state) => {
        return {
          albums: Object.keys(parseUtils.customParse(state.albums)),
          albumObject: parseUtils.customParse(state.albums)
        }
      })
    }
    console.log('current songs: ', this.state.songs);
  }

  render() {
    return (
        <YourProjects><h1><b>Your Projects</b></h1>
        <AlbumListDiv>
        {this.state.albums && this.state.albumObject && this.state.albums.map((album) => (
          <AlbumDiv>
            <div onClick={this.onAlbumClick}>
              <AlbumArt onClick={this.onAlbumClick} src={this.state.albumObject[album].artwork}></AlbumArt>
              <h2>{this.state.albumObject[album].title}</h2>
            </div>
            <p>{this.state.albumObject[album].type}</p>
            <p>{this.state.albumObject[album].genre}</p>
            {/* <p>{this.state.albumObject[album].bio}</p> */}
          </AlbumDiv>
        ))}
        <AlbumDiv>
          <div>
          <AlbumArt src="https://www.flaticon.com/svg/static/icons/svg/17/17671.svg"></AlbumArt>
          <h2>Create New Project</h2>
          </div>
        </AlbumDiv>
      </AlbumListDiv>
      </YourProjects>
    );
  }
}