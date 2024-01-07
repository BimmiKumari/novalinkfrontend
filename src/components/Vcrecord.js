import { ReactMediaRecorder } from "react-media-recorder";
import Webcam from "react-webcam";
import { FaPlay, FaStop, FaTimes } from "react-icons/fa";
import { useState } from "react";

const RecordView = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div style={{color :'white',border:'2px solid #3498db',height:'600px'}}>
      <ReactMediaRecorder
        video
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
           
           <h2 className='bright-glowing-text'>Status :  {status}</h2>
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
            <Webcam style={{position:"absolute", zIndex:"-1",width:'500px',height:'400px',left:"850px"}}/>


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
                  style={{zIndex: "2", position:"absolute",width:'500px',height:'400px',left:"850px"}}

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
                    zIndex: "2", 
                    position:"absolute"
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