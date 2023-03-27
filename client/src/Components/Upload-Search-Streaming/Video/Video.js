import React from "react"
import ReactPlayer from "react-player"
function Video() {

    return <>
        <div className="card">
            <ReactPlayer url="https://www.youtube.com/watch?v=XKyyM1VWtUE" type="video/mp4" width='300px' height='200px'></ReactPlayer>
        </div>

    </>
}
export default Video