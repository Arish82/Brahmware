import React from 'react'

export default function Items(props) {
  return (
    <div className={props.items + " items"} style={{display :props.displays}}>
        {
            (props.data).map((e,i)=>{
                return (
                    <div className="listItem" key={i} >
                        {e}
                    </div>
                )
            })
        }
    </div>
  )
}
