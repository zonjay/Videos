import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '@babel/polyfill';
import '../dist/app.scss';
import Header from './Header';
import KV from './Kv';
import VideoList from './VideoList';
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

    return (
        <>
            <Header />
            <KV />
            <VideoList videos={videos} />
        </>
    )
}
