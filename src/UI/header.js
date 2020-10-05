
import React from 'react';

export default function Header(props){

    return(
        <div className="header">

        <div className="defaultIcon" onClick={props.slideSidebar}>
          <i className="material-icons" style={{fontSize:30}} >menu</i>
        </div>

        <div className="title" style={{fontSize:25}}>
          Windows
        </div>
      </div>
    )
}