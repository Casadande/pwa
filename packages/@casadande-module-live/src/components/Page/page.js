import React from "react";
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './page.css';
import { Stream } from '../Stream';
import { Chat } from '../Chat';
import { getLiveConfigData } from '../../talons/getLiveConfigData';

const Page = props => {
  const classes = mergeClasses(defaultClasses, props.classes);
  const { isStreaming, isCustomTitleEnabled, frontendCustomTitle } = getLiveConfigData();
  let result = '';
  let title  = (isCustomTitleEnabled) ? frontendCustomTitle : 'Olá estamos ao vivo! :)';
  
  result = (
    <div className={classes.main}>
      <div className={classes.title}>{ title }</div>
      <Stream/>
      <Chat/>
  </div>);

  if (!isStreaming) {
    result = (
      <div className={classes.main}>
        <div className={classes.title}>{ title }</div>
    </div>);
  }

  return result;
}

export default Page;
