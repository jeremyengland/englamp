import React from 'react';
import axios from 'axios';
import AlbumList from './AlbumList.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      userId: this.props.userId,
      albums: null
    };
    this.getAlbums = this.getAlbums.bind(this);
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

  componentDidMount() {
    this.getAlbums();
  }

  render() {
    return (
      this.state.albums &&
      <div>
        <h3>Your Projects:</h3>
        <AlbumList albums={this.state.albums}></AlbumList>
      </div>
    )
  }
}