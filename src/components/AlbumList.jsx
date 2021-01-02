import React from 'react';
import parseUtils from './utils/customParse.js';

// renders the list of albums on the home page
export default class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: this.props.albums,
      albumObject: null
    };
  }

  // // grab all songs for the album on click
  // onAlbumClick() {

  // }

  componentDidMount() {
    if (typeof this.state.albums === 'object') {
      this.setState((state) => {
        return {
          albums: Object.keys(parseUtils.customParse(state.albums)),
          albumObject: parseUtils.customParse(state.albums)
        }
      })
    }
  }

  render() {
    return (<div>
      {this.state.albums && this.state.albumObject && this.state.albums.map((album) => (
        <div>
          <h4>Title: {this.state.albumObject[album].title}</h4>
          <p>{this.state.albumObject[album].type}</p>
          <p>{this.state.albumObject[album].genre}</p>
          <p>{this.state.albumObject[album].bio}</p>
        </div>
      ))}
    </div>);
  }
}