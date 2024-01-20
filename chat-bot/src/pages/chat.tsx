import React, { useEffect } from 'react';

const BotpressChat = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script1.async = true;
    document.head.appendChild(script1);

    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.src = 'https://mediafiles.botpress.cloud/47cf36dd-ec7e-4f5e-a204-9ca09578d0bb/webchat/config.js';
      script2.defer = true;
      document.head.appendChild(script2);

      script2.onload = () => {
        // Customize the appearance of the chat window
        window.botpressWebChat.init({
          host: 'https://mediafiles.botpress.cloud/47cf36dd-ec7e-4f5e-a204-9ca09578d0bb/webchat/bot.htmlhttps://your-botpress-server.com',
          hideWidget: false, // Show the chat window by default
          container: document.getElementById('webchat'), // Specify the container
          position: 'relative',
          left: '50%', // Center horizontally
          top: 0, // Adjust the top position as needed
        });
      };
    };

    return () => {
      document.head.removeChild(script1);
    };
  }, []);

  return <div id="webchat"></div>;
};

export default BotpressChat;
