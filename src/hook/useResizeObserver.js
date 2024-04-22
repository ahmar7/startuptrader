import { useEffect, useState, useRef } from 'react';

const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(null);

  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      // Only care about the first entry
      if (!entries || !entries.length) return;
      setDimensions(entries[0].contentRect);
    });

    if (observeTarget) {
      resizeObserver.observe(observeTarget);
    }

    return () => {
      if (observeTarget) {
        resizeObserver.unobserve(observeTarget);
      }
    };
  }, [ref]);

  return dimensions;
};

export default useResizeObserver;
