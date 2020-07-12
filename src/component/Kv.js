import React, { useEffect } from 'react';

export default function Kv () {
    useEffect(() => {
        onYouTubeIframeAPIReady();
    }, [])

    function onYouTubeIframeAPIReady () {
        const player = new YT.Player('youTube-video-player', {
            videoId: 'or5A_ZzB6YI',          
            playerVars: {
                autoplay: 1,            
                controls: 0,           
                showinfo: 0,            
                modestbranding: 0,      
                loop: 1,                
                playlist:'or5A_ZzB6YI', 
                fs: 0,                  
                cc_load_policty: 0,     
                iv_load_policy: 3,      
                autohide: 0,             
            },
            events: {
                onReady: function(e) {
                    e.target.mute();      
                    e.target.playVideo(); 
                }, 
            }
        });
    }

    return <div id="youTube-video-player"></div>;
}
