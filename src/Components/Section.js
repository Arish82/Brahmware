import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import data from '../data/data.json'
import Items from './Items';
import Parts from './Parts';
import './Section.scss'

data=data.scrolldata;
export default function Section() {
  const [curData, setcurData] = useState(0);
  const [displays, setdisplays] = useState("none")
  const toggleHandler=()=>{
    setdisplays((displays==="block"?"none": "block"));
  }
  return (
    <>
        <div className="playerBox">
          <div className="playerItems" >
            <ReactPlayer className="player" url={data[curData].video} playing={true} loop={true} controls={true} light={false} width={"100%"} />
            <Items key={curData} data={data[curData].items} items={"items-lg"} displays={""} />
          </div>
          <div className='heading title'>{data[curData].title}</div>
          <div className='subtitle heading'>{data[curData].subtitle}</div>
          <div className="toggleBtn" onClick={toggleHandler}>List of Items</div>
            <Items key={curData} data={data[curData].items} items={"items-sm"} displays={displays} />
        </div>

        <div className="rest">
          {
            data.map((e,i)=>{
              if(i===curData) return(<div key={e.id}></div>)
              return(
                  <Parts key={e.id} id={e.id} data={e} setcurData={setcurData} />
              )
            })
          }
        </div>
    </>
  )
}
