import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '@babel/polyfill';
import '../dist/app.scss';
import Header from './Header';
import KV from './Kv';
import VideoList from './VideoList';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
import { BASEURL, APIKEY } from '../constant';

export default function App () {
    const channelID = 'UC8tyyA-UIbefEexcLatHmUQ';

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideoData().then((data) => setVideos(data));
    }, [channelID])

    const getVideoData = async () => {
        /* 取得頻道資料 */
        const channelData = await axios.get(`${BASEURL}/channels`, {
            params: {
                part: 'contentDetails',
                id: channelID,
                key: APIKEY
            }
        });

        const [ items ] = channelData.data.items;
        const playlistID = items.contentDetails.relatedPlaylists.uploads;

        /* 取得上傳的播放清單資料 */
        const playListData = await axios.get(`${BASEURL}/playlistItems`, {
            params: {
                part: 'snippet,contentDetails',
                playlistId: playlistID,
                key: APIKEY,
                maxResults: 20
            }
        });

        return playListData.data.items;
    }

    const handleBookClick = (event, id) => {
        event.preventDefault();
        setVideos(videos.map((video) => {
            if (id === video.snippet.resourceId.videoId) {
                video.snippet.checked = !video.snippet.checked;
            };

            return video;
        }))
    }

    return (
        <>
            <Header
                videos={videos}
                onBookButtonClick={(event, id) => handleBookClick(event, id)}
            />
            <KV />
            <VideoList
                videos={videos}
                onBookButtonClick={(event, id) => handleBookClick(event, id)}
            />
            <ScrollTop />
            <Footer />
        </>
    )
}
