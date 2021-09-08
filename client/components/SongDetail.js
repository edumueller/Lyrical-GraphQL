import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    if (!song) {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    }
    return (
      <div>
        <h3>{song.title}</h3>
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
