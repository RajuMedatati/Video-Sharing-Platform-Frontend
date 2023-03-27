import React from "react"
import './StreamingPage.css'

function StreamingPage() {
    return (
      <div className="video-player">
        { <video controls className="video">
          <source
            src="https://www.w3schools.com/tags/movie.mp4"
            type="video/mp4"
          />
        </video>}
        <div className="video-info">
          <h1 className="video-title">Video</h1>
          <div className="video-description">
            this video url is taken from the w3schools
          </div>
        </div>
      </div>
    );
  }
  
  function RelatedVideos() {
    return (
      <div className="related-videos">
        <h2 className="related-videos-header">Related Videos</h2>
        <ul className="related-videos-list">
          <li className="related-video">
            <img
              className="related-video"
              src="./img2.jpg"
              alt="Related Video"
              width="300px"
              height="200px"
            />
            <div className="related-video-info">
              <h3 className="related-video-title">Related Video</h3>
              <div className="related-video-description">
                This is from public folder
              </div>
            </div>
          </li>
          <li className="related-video">
            <img
              className="related-video"
              src="./img2.jpg"
              alt="Related Video"
              width="300px"
              height="200px"
            />
            <div className="related-video-info">
              <h3 className="related-video-title">Related Video</h3>
              <div className="related-video-description">
                This is from public folder
              </div>
            </div>
          </li>
          <li className="related-video">
            <img
              className="related-video"
              src="./img2.jpg"
              alt="Related Video"
              width="300px"
              height="200px"
            />
            <div className="related-video-info">
              <h3 className="related-video-title">Related Video</h3>
              <div className="related-video-description">
              This is from public folder
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
export {
    StreamingPage,
    RelatedVideos
}