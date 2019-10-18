/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */

import React from 'react';
import YouTube from 'react-youtube';
import './youtube.css';

export default class YoutubeElement extends React.Component {
  onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      width: '640px',
      height: '420px',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <YouTube
        videoId={this.props.author.youtube}
        className="youtubePlayer"
        opts={opts}
        onReady={this.onReady}
        style={{ margin: 'auto' }}
      />
    );
  }
}
