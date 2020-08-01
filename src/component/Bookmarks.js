import React from 'react';

export default function Bookmarks ({ videos }) {
    return (
        <div id="my-bookmarks">
        <span className="name">我的收藏</span>
        <ul className="lists">
            {
            videos.map((video, index) => {
            return video.snippet.checked && (<li key={video.contentDetails.videoId} className="bookmark">
                <a href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`} target="_blank">
                    <div className="thumbnail">
                        <img src={`${video.snippet.thumbnails.medium.url}`} />
                    </div>
                    <h4>{video.snippet.title}</h4>
                </a>
            </li>)})
            }
        </ul>
    </div>
    )
}
