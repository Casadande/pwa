import React from "react";
import {mergeClasses} from '@magento/venia-ui/lib/classify';
import defaultClasses from './stream.css';
import { TwitchEmbed } from 'react-twitch-embed';

const Stream = props => {
  const classes = mergeClasses(defaultClasses, props.classes);
  return (
    <div>
      <TwitchEmbed
        className={classes.stream}
        channel="loltyler1"
        id="loltyler1"
        theme="dark"
        muted
        width="70%"
        parent={['pwa-t4oyc.local.pwadev']}
        onVideoPause={() => console.log(':(')}
      />
    </div>
  );
}

export default Stream;
