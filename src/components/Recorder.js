import React from 'react'
import ScreenRecording from './ScreenRecording'
import Vcrecord from './Vcrecord'
const Recorder = () => {
  return (
    <div style={{display:'flex',flexdirection:'row'}}>
         <div style={{width:'700px',height:'1000px'}}> <ScreenRecording/></div>
         <div style={{width:'700px',height:'1000px'}}><Vcrecord/></div>
     
    </div>
  )
}

export default Recorder