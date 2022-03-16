import React from 'react'
import ReactPlayer from 'react-player'

export default function Parts(props) {
  const handler=(e)=>{
    props.setcurData((props.data.id)-1);
  }
  return (
    <>
      <div className='recommended' onClick={handler}>
        <ReactPlayer className="playerRec" key={props.data.id} url={props.data.video} playing={false} width={"20%"} height={"100%"} />
        <div className='titleRec'>{props.data.title}</div>
      </div>  
    </>
  )
}
