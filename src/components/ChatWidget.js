// ChatWidget.js
import React, { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    Tawk_API.onLoad = function () {
      Tawk_API.setAttributes({
        disableSounds: true // Mute all sounds
      });
    };
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement('script');
      var s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/66d77206ea492f34bc0d59c2/1i6spar3j';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return null;
};

export default ChatWidget;
