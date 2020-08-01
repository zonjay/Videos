import React from 'react';
import Bookmarks from './Bookmarks';

export default function Header ({ videos }) {
    return (
        <nav>
            <a>Videos</a>
            <Bookmarks videos={videos}/>
        </nav>
    )
}
