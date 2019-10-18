import React from 'react';
import Popup from 'reactjs-popup';
import YoutubePlayer from 'react-youtube-player';
import './YoutubeModalWindow.css';

export default function YoutubeModalWindow(param) {
  return (
    <Popup
      // eslint-disable-next-line react/button-has-type
      trigger={<button className="button" />}
      modal
      closeOnDocumentClick
    >
      <div style={{ height: '400px' }}>
        <YoutubePlayer
          videoId={param.youtube}
          playbackState="unstarted"
          configuration={
          {
            showinfo: 0,
            controls: 0,
          }
      }
        />
      </div>
    </Popup>
  );
}
