import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Bookmarks ({ videos, onBookButtonClick }) {
    return (
        <div id="my-bookmarks">
        <span className="name">我的收藏</span>
        <ul className="lists">
            {
            videos.map((video) => {
            return video.snippet.checked && (<li key={video.contentDetails.videoId} className="bookmark">
                <a href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`} target="_blank">
                    <div className="thumbnail">
                        <img src={`${video.snippet.thumbnails.medium.url}`} />
                    </div>
                    <h4>{video.snippet.title}</h4>
                    <span onClick={(event) => onBookButtonClick(event, video.snippet.resourceId.videoId)}><FontAwesomeIcon icon={ faTrash } /></span>
                </a>
            </li>)})
            }
        </ul>
    </div>
    )
}
