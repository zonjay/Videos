import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '@babel/polyfill';
import '../dist/app.scss';
import Header from './Header';
import KV from './Kv';
import VideoList from './VideoList';

export default function App () {
    const baseUrl = 'https://www.googleapis.com/youtube/v3';
    const apiKey = 'AIzaSyD-oy7wW09Q_W3U14aM-OShgeoAOa_fNL8';
    const channelID = 'UC8tyyA-UIbefEexcLatHmUQ';

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideoData().then((data) => setVideos(data));
    }, [channelID])

    const getVideoData = async () => {
        /* 取得頻道資料 */
        const channelData = await axios.get(`${baseUrl}/channels`, {
            params: {
                part: 'contentDetails',
                id: channelID,
                key: apiKey
            }
        });

        const [ items ] = channelData.data.items;
        const playlistID = items.contentDetails.relatedPlaylists.uploads;

        /* 取得上傳的播放清單資料 */
        const playListData = await axios.get(`${baseUrl}/playlistItems`, {
            params: {
                part: 'snippet,contentDetails',
                playlistId: playlistID,
                key: apiKey,
                maxResults: 20
            }
        });

        return playListData.data.items;
    }

    return (
        <>
            <Header />
            <KV />
            <VideoList videos={videos} />
        </>
    )
}
