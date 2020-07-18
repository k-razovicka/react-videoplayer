import React from 'react'
import './video-buttons.scss'
import { convertSecondsToMinutes } from '../../helpers/functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'


const VideoButtons = (props) => {
  return (
    <div>
      <div className="absolute-top">
        <button className="button-play-pause" onClick={props.togglePlay}>
          {props.isVideoPlaying ?
            <FontAwesomeIcon icon={faPauseCircle} className="fa-play-icon" /> :
            <FontAwesomeIcon icon={faPlayCircle} className="fa-play-icon" />
          }
        </button>
      </div>
      <div className="volume-container absolute-top">
        <button className="button-volume" onClick={props.toggleVolume}>
          {props.isVolume ?
            <img src="./media/mute.png" width="20px" height="20px" alt="mute" /> :
            <img src="./media/volume.png" width="20px" height="20px" alt="sound" />
          }
        </button>
      </div>
      <div className="audio-container absolute-top">
        <input
          type="range"
          min="0"
          max="10"
          onChange={props.volumeChangeHandler}
        />
      </div>
      <div className="video-time-container absolute-top">
        <span className="video-time">
          {convertSecondsToMinutes(props.videoTime)} / {convertSecondsToMinutes(props.videoDuration)}
        </span>
      </div>
      <div className="full-screen-container absolute-top">
        <button className="button-full-screen" onClick={props.toggleFullScreen}>
          <img src="./media/maximize.png" width="20px" height="20px" alt="full screen" />
        </button>
      </div>
    </div>
  );
}

export default VideoButtons;