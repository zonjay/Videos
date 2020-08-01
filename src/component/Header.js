import React from 'react';
import Bookmarks from './Bookmarks';

export default function Header({ videos, onBookButtonClick }) {
  return (
    <nav>
      <span>Videos</span>
      <Bookmarks
        videos={videos}
        onBookButtonClick={onBookButtonClick}
      />
    </nav>
  );
}
