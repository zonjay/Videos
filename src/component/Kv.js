import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default React.memo(() => {
  useEffect(() => {
    const playYoutube = () => {
      if (typeof (YT) === 'undefined' || typeof (YT.Player) === 'undefined') {
        createYouTubeScript();
        window.onYouTubePlayerAPIReady = function() {
          onYouTubePlayer();
        };
      } else {
        onYouTubePlayer();
      }
    };

    playYoutube();
  }, []);

  const createYouTubeScript = () => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  };

  function onYouTubePlayer() {
    const player = new YT.Player('youTube-video-player', {
      videoId: 'or5A_ZzB6YI',
      playerVars: {
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 0,
        loop: 1,
        playlist: 'or5A_ZzB6YI',
        fs: 0,
        cc_load_policty: 0,
        iv_load_policy: 3,
        autohide: 0,
      },
      events: {
        onReady(e) {
          e.target.mute();
          e.target.playVideo();
        },
      },
    });
  }

  return (
    <div id="kv">
      <div id="youTube-video-player" />
      <div className="bottom-arrow">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
});
