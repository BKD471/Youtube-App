import React from 'react';
import './VideoItem.css';

const VideoItem = ({video,onVideoSelect}) =>{


  const onVideoSelection=(video)=>
  {
     onVideoSelect(video)
   }

  return  (
    <div  className="video-item item" onClick={()=>onVideoSelection(video)}>
      <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>

  );
}


export default VideoItem;