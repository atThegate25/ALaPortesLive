import React from 'react'

const importAll = ({r}) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return (images)
  }
  
  export default importAll;
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));