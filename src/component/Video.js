import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASEURL, APIKEY } from '../constant';

export default function Video({ video, onBookButtonClick }) {
  const {
    resourceId,
    title,
    publishedAt,
    thumbnails,
    checked,
  } = video;

  const { videoId } = resourceId;
  const [date] = publishedAt.split('T');
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const getVideoData = async () => {
      // 取得頻道資料
      const videoData = await axios.get(`${BASEURL}/videos`, {
        params: {
          part: 'statistics',
          id: videoId,
          key: APIKEY,
        },
      });

      const [items] = videoData.data.items;
      setViewCount(+items.statistics.viewCount);
    };

    getVideoData();
    video.checked = false;
  }, [videoId]);

  return (
    <a className="video" target="_blank" href={`https://www.youtube.com/watch?v=${videoId}`} rel="noreferrer">
      <div className="top">
        <div className="bookmark" onClick={onBookButtonClick}>
          {checked ? '取消收藏' : '加入收藏'}
        </div>
        <div className="cover" style={{ backgroundImage: `url(${thumbnails.medium.url})` }} />
      </div>
      <div className="description">
        <h3 className="title">
          {title}
        </h3>
        <div className="info">
          <span>
            觀看次數：
            {viewCount.toLocaleString()}
            次
          </span>
          <span>{date}</span>
        </div>
      </div>
    </a>
  );
}
