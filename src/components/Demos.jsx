import React from 'react';
import axios from 'axios';

export default class Demos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songId: this.props.songId,
      demos: this.props.demos
    };
  }

  componentDidMount() {
    this.props.getDemos(this.state.songId).then((res) => {
        this.setState({
          demos: res.data
        });
        console.log('successfully grabbed demos');
      }, (err) => {
        console.log(err);
      })
  }

  render() {
    return (
      this.state.demos &&
      <div>
        <h3>Demos</h3>
        <p>{JSON.stringify(this.state.demos)}</p>
      </div>
    )
  }
}