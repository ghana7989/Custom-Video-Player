const video = document.getElementById("video")
const play = document.getElementById("play")
const stopPlaying = document.getElementById("stop")
const progress = document.getElementById("progress")
const timestamp = document.getElementById("timestamp")

// Play and Pause Video
function toggleVideoStatus() {
    progress.setAttribute("max","100")
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}
// Updates the play/pause Icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = "<i class='fa fa-play fa-2x'></i>"
    } else {

        play.innerHTML = "<i class='fa fa-pause fa-2x'></i>"
    }
}
// Updates the Progress And Timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100
    // Get Minutes
    let mins = Math.floor(video.currentTime / 60)
    if (mins < 10) {
        mins = "0" + mins
    }
    // Get Seconds
    let seconds = Math.floor(video.currentTime % 60)
    if (seconds < 10) {
        seconds = "0" + seconds
    }

    timestamp.innerHTML = `${mins}:${seconds}`
}
// Set Video Time to progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100
}
// Stop the video 
function stopVideo() {
    video.currentTime = 0
    video.pause()

    progress.setAttribute("max","0")
    updatePlayIcon()
    video.load()
}
// Full ScreenMode
function enterFullScreenMode() {
    if (video.requestFullscreen) {
        video.requestFullscreen()
    }
}
// Event Listeners

video.addEventListener("click", toggleVideoStatus)
video.addEventListener("dblclick", enterFullScreenMode)
video.addEventListener("play", updatePlayIcon)
video.addEventListener("pause", updatePlayIcon)
video.addEventListener("timeupdate", updateProgress)

play.addEventListener("click", toggleVideoStatus)

stopPlaying.addEventListener("click", stopVideo)

progress.addEventListener("change", setVideoProgress)