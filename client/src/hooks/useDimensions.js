import { useCallback, useLayoutEffect, useState } from 'react';

const getRect = node => {
  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    bottom: rect.bottom,
  };
};

const useDimensions = (liveMeasure = true) => {
  const [dimensions, setDimensions] = useState();
  const [node, setNode] = useState(null);

  const ref = useCallback(node => {
    setNode(node);
  }, []);
  useLayoutEffect(() => {
    if (node) {
      const measure = () => window.requestAnimationFrame(() => setDimensions(getRect(node)));
      measure();
      if (liveMeasure) {
        window.addEventListener('resize', measure);
        window.addEventListener('scroll', measure);

        return () => {
          window.removeEventListener('resize', measure);
          window.removeEventListener('scroll', measure);
        };
      }
    }
  }, [node, liveMeasure]);

  return [ref, dimensions, node];
};

export default useDimensions;
