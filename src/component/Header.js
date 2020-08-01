import React from 'react';
import Bookmarks from './Bookmarks';

export default function Header ({ videos, onBookButtonClick }) {
    return (
        <nav>
            <a>Videos</a>
            <Bookmarks
                videos={videos}
                onBookButtonClick={onBookButtonClick}
            />
        </nav>
    )
}
