import { useState, useEffect } from 'react';

const useDomParser = (text = '', mimetype = 'text/html') => {
  const [str, setStr] = useState('');

  useEffect(() => {
    const childs = new DOMParser().parseFromString(text, mimetype).childNodes;
    let temp = '';
    childs.forEach(child => {
      temp += child.innerText;
    });
    setStr(temp);
  }, [text, str, mimetype]);
  return [str, setStr];
};

export default useDomParser;
