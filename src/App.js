import React, { useState } from 'react'
import './App.css'
import './flexboxgrid.css'
import { useRef, useEffect } from 'react'
import TimeSlider from './components/time-slider/TimeSlider'
import CommentForm from './components/comment-form/CommentForm'
import VideoButtons from './components/video-buttons/VideoButtons'

function App() {

  const [loading, setLoading] = useState(true);
  const [videoTime, setVideoTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [volume, setVolume] = useState(0);
  const [isVolume, setIsVolume] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const videoElement = useRef(null);

  useEffect(() => {
    setLoading(false);
  }, [])

  const togglePlay = () => {
    if (isVideoPlaying) {
      videoElement.current.pause();
    } else {
      videoElement.current.play();
    }
    setIsVideoPlaying(!isVideoPlaying)
  }

  const toggleVolume = () => {
    if (isVolume) {
      videoElement.current.muted = true;
    } else {
      videoElement.current.muted = false;
    }
    setIsVolume(!isVolume)
  }

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      videoElement.current.requestFullscreen();
    }
    setIsFullScreen(isFullScreen)
  };

  const timeChangeHandler = () => {
    const videoCurrentTime = videoElement.current.currentTime
    setVideoTime(Math.round(videoCurrentTime))
  }

  const metaDataLoadHandler = () => {
    const videoDuration = videoElement.current.duration
    setVideoDuration(videoDuration)
  }

  const volumeChangeHandler = (event) => {
    const newVolume = event.target.value / 10
    setVolume(newVolume)

    if (!newVolume) {
      videoElement.current.muted = true
      return
    }
    videoElement.current.muted = false
    videoElement.current.volume = newVolume
  };

  const timeSliderChangeHandler = (event) => {
    const time = event.target.value
    setVideoTime(time)
    console.log(time)
    videoElement.current.currentTime = time
  }

  if (loading) {
    return (
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-8 col-xs-offset-2">
            Loading..
         </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="container">
        <div className="row video-row">
          <div className="col-xs-8 col-xs-offset-2 video-container">

            <video
              ref={videoElement}
              className="video"
              onTimeUpdate={timeChangeHandler}
              onLoadedMetadata={metaDataLoadHandler}
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>

            <VideoButtons
              togglePlay={togglePlay}
              isVideoPlaying={isVideoPlaying}
              isVolume={isVolume}
              volumeChangeHandler={volumeChangeHandler}
              videoTime={videoTime}
              videoDuration={videoDuration}
              toggleVolume={toggleVolume}
              toggleFullScreen={toggleFullScreen}
            />

            <TimeSlider
              duration={videoDuration}
              time={videoTime}
              changeHandler={timeSliderChangeHandler}
            />
          </div>

          <div className="col-xs-8 col-xs-offset-2 video-title">
            <span>Big Buck Bunny</span>
          </div>

          <CommentForm />
        </div>
      </div>
    </div>
  );
}

export default App;