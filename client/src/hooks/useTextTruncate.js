import { useEffect, useState } from 'react';

const defaultOptions = {
  limit: 250,
  endWith: '...',
};
const useTextTruncate = (str, options = defaultOptions) => {
  const [text, setText] = useState();

  useEffect(() => {
    if (str.length > options.limit) {
      setText(str.substring(0, options.limit));
      setText(
        (prev) =>
          prev.substring(0, Math.min(prev.length, prev.lastIndexOf(' '))) +
          options.endWith
      );
    }
  }, [text, str, options]);
  return [text, setText];
};

export default useTextTruncate;
