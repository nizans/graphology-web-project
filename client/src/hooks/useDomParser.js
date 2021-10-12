import { useState, useEffect } from 'react';

const useDomParser = (text = '', mimetype = 'text/html') => {
  const [str, setStr] = useState(text);

  useEffect(() => {
    const childs = new DOMParser().parseFromString(str, mimetype).childNodes;
    let temp = '';
    childs.forEach(child => {
      temp += child.innerText;
    });
    setStr(temp);
  }, [str, mimetype]);
  return [str, setStr];
};

export default useDomParser;
