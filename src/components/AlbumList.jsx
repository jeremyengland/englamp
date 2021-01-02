import React from 'react';

// renders the list of albums on the home page
export default class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: this.props.albums
    };
  }
  render() {
    return (<div>
      {this.state.albums.map((album) => (
        <div>
          <h4>Title: {album.title}</h4>
          <p>{album.type}</p>
          <p>{album.genre}</p>
          <p>{album.bio}</p>
        </div>
      ))}
    </div>);
  }
}