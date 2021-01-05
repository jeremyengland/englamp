import React from 'react';
import axios from 'axios';

export default class Rhymes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rhymes: null,
      typedLine: '',
      meansLike: ''
    };
    this.grabRhymes = this.grabRhymes.bind(this);
    this.onLineChange = this.onLineChange.bind(this);
    this.onSecondLineChange = this.onSecondLineChange.bind(this);
    this.grabSynonyms = this.grabSynonyms.bind(this);
  }

  grabRhymes(e) {
    e.preventDefault();
    axios({
      method: 'get',
      url: 'https://api.datamuse.com/words',
      params: {
        rel_rhy: this.state.typedLine
      }
    })
      .then((res) => {
        this.setState({
          rhymes: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  grabSynonyms(e) {
    e.preventDefault();
    axios({
      method: 'get',
      url: 'https://api.datamuse.com/words',
      params: {
        ml: this.state.meansLike
      }
    })
      .then((res) => {
        this.setState({
          rhymes: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  onLineChange(e) {
    e.preventDefault();
    this.setState({
      typedLine: e.target.value
    })
  }

  onSecondLineChange(e) {
    e.preventDefault();
    this.setState({
      meansLike: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.grabRhymes}>
          <label>Find Rhyme: </label>
          <input type='text' onChange={this.onLineChange} />
          <input type='submit' value='Search' />
        </form>
        <form onSubmit={this.grabSynonyms}>
          <label>Find Synonyms: </label>
          <input type='text' onChange={this.onSecondLineChange} />
          <input type='submit' value='Search' />
        </form>
        {Array.isArray(this.state.rhymes) &&
          <div>
            {this.state.rhymes.map((rhyme) => (
              <div>
                <p>{rhyme.word}</p>
              </div>
            ))}
          </div>
        }
      </div>
    )
  }
}