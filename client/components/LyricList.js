import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import mutation from '../queries/likeLyric';

class LyricList extends Component {
  onLike(id) {
    this.props.mutate({
      variables: { id },
    });
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => (
      <li className="collection-item" key={id}>
        {content}
        <i className="material-icons" onClick={() => this.onLike(id)}>
          thumb_up
        </i>
        {likes}
      </li>
    ));
  }
  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

export default graphql(mutation)(LyricList);
