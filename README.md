# videos

demo link: http://34.92.169.254:3000/

* 練習使用 React hooks 開發
* 串接 YouTube IFrame Player API: 利用該 API 在第一屏的 KV 放入一個滿版的影片，持續重複撥放。
* 串接 YouToube Data API，包含：
  * [Channels: list](https://developers.google.com/youtube/v3/docs/channels/list): 用來取得影片清單 playlists ID
  * [PlaylistItems: list](https://developers.google.com/youtube/v3/docs/playlistItems/list): 取得清單內的影片資料。
  * [Videos: list](https://developers.google.com/youtube/v3/docs/videos/list): 取得影片資料，如觀看數。
* 可將影片加入收藏或者取消收藏 (僅前端部分)
