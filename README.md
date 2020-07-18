**Instructions**

1. clone repository </br> `git clone https://github.com/it14019/react-videoplayer.git`
2. change directory <br> `cd react-video`
3. install dependencies </br> `npm install`
4. run application </br> `npm start`

**Description**

Video player with following functionality:
- play/pause video;
- turn volume off/on;
- adjust volume;
- full-screen mode;
- view current and remaining video time;
- add comment

![gif](/public/media/videoplayer-gif.gif)

Application consists of three components - `VideoButtons`, `TimeSlider` and `CommentForm`. `VideoButtons` obviously returns all buttons related to video like play/pause, volume, adjust volume, full-screen mode and also video current and remaining time. `TimeSlider` returns video time progress bar and `CommentForm` returns input for comment fields.

When clicked on play button, `togglePlay` function is called. It sets state value to `true`, so when value is `true` video plays `videoElement.current.play()` and stops `videoElement.current.pause()` when value is `false`. `videoElement` is used as `ref` element. Also, when value is `true`, pause icon is showed and when value is changed to `false` play icon is showed.

When clicked on mute button, `toggleVolume` function is called. It works almost exactly as previously mentioned function, except property `muted` is used (`videoElement.current.muted`). So, when `muted` value is `true`, video volume value is `0` and when `false` value is `1`. Icons work exactly as mentioned previously with play/pause icons.

When clicked on volume range slider, `volumeChangeHandler` function is called. It sets state value to user's changed volume value. Value is divided by 10 so that is in range from 0 to 1.

When clicked on full-screen icon `toggleFullScreen` function is called. It uses `requestFullscreen` method to get full-screen mode.

Current time is obtained with video property `currentTime`, which returns current playback position in video. Video duration time is obtained with video property `duration`. Time is formatted with helper function `convertSecondsToMinutes`.

When clicked on video time progress bar, function `timeSliderChangeHandler` is called. It get's clicked second and set's it as current time. 

When input fields for username and comment are filled, `submitForm` function is called. It pushes values username and comment into comments array, which is later *mapped* through and showed. Date is formatted with helper function `getCurrentDate`.