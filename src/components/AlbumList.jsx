import React from 'react';
import parseUtils from './utils/customParse.js';

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
    this.props.getSongs(this.state.albumObject[albumName].id, albumName);
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
      <div>
        {this.state.albums && this.state.albumObject && this.state.albums.map((album) => (
          <div>
            <div onClick={this.onAlbumClick}>
              <h4>{this.state.albumObject[album].title}</h4>
            </div>
            <p>{this.state.albumObject[album].type}</p>
            <p>{this.state.albumObject[album].genre}</p>
            <p>{this.state.albumObject[album].bio}</p>
          </div>
        ))}
      </div>
    );
  }
}