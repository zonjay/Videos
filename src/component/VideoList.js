import React from 'react';
import Video from './Video';

export default function VideoList ({ videos, onBookButtonClick }) {
    return (
        <div className='container'>
            {
                videos.map((video, i) => {
                    return (
                        <Video
                            key={video.contentDetails.videoId}
                            video={video.snippet}
                            onBookButtonClick={(event) => onBookButtonClick(event, i)}
                         />
                    )
                })
            }
        </div>
    )
}
