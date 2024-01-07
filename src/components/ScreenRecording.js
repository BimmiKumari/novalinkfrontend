import { ReactMediaRecorder } from "react-media-recorder";
import { FaPlay, FaStop, FaTimes } from "react-icons/fa";
import { useState } from "react";

const RecordView = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div style={{color :'white',border:'2px solid #3498db',height:'600px'}}>
      <ReactMediaRecorder 
        screen
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div style={{marginLeft:'10px'}}>
            <h4>Screen Recorder</h4>
            <h2 className='bright-glowing-text'>Status :  {status}</h2>
            <h4 className='shinee'>Capture your error and share it to co-memebers </h4>
            Note : <h6>1. Click on green play button to start recoding</h6>
            <h6>2.Click on red pause button to stop.</h6>
            <button
              onClick={() => {
                startRecording();
                setIsRecording(true);
              }}
              style={{
                borderRadius: "50%",
                padding: "10px",
                margin: "5px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              <FaPlay />
            </button>
            {isRecording && status !== "idle" && (
              <div className="stop-button-dropdown">
                <button
                  onClick={() => {
                    stopRecording();
                    setIsRecording(false);
                    setIsVideoPlaying(true);
                  }}
                  style={{
                    borderRadius: "50%",
                    padding: "10px",
                    margin: "5px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FaStop />
                </button>
              </div>
            )}

            {status === "stopped" && mediaBlobUrl && isVideoPlaying && (
              <div>
                <video
                  src={mediaBlobUrl}
                  controls
                  autoPlay
                  loop
                  onPlay={() => setIsVideoPlaying(true)}
                  style={{width:'700px',height :'600px'}}
                />
                <button
                  onClick={() => setIsVideoPlaying(false)}
                  style={{
                    borderRadius: "50%",
                    padding: "5px",
                    margin: "5px",
                    backgroundColor: "gray",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FaTimes />
                </button>
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default RecordView;