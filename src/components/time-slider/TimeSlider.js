import React from 'react'
import './time-slider.scss'

const TimeSlider = (props) => { 
    return (
          <div>
            <input className="video-buffer"
              type="range"
              min="0"
              max={Math.round(props.duration)}
              value={props.time} 
              onChange={props.changeHandler}
            />
          </div>
    );
}

export default TimeSlider;