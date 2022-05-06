import React from "react";
import {mergeClasses} from '@magento/venia-ui/lib/classify';
import defaultClasses from './chat.css';
import { TwitchChat } from 'react-twitch-embed';

const Chat = props => {
  const classes = mergeClasses(defaultClasses, props.classes);
  return (
    <div>
      <TwitchChat
        className={classes.chat}
        channel="loltyler1"
        theme="dark"
        parent={["https://pwa-t4oyc.local.pwadev"]}
      />
    </div>
  );
}

export default Chat;
