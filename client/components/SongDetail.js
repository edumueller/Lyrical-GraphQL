import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import { Link } from 'react-router';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song ? song.title : 'Loading...'}</h3>
      </div>
    );
  }
}
export default graphql(fetchSong, {
  // graphql intercepts the props
  options: (props) => {
    return { variables: { id: props.params.id } };
  },
})(SongDetail);
