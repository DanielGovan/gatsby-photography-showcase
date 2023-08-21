import { useState, useEffect } from 'react';
// Modified from https://github.com/SMAKSS/react-scroll-direction

type useDetectScrollProps = {
  thr?: number;
  axis?: string;
  scrollUp?: string;
  scrollDown?: string;
  still?: string;
};

function useDetectScroll(props: useDetectScrollProps) {
  const {
    thr = 10,
    axis = 'y',
    scrollUp = axis === 'y' ? 'up' : 'left',
    scrollDown = axis === 'y' ? 'down' : 'right',
    still = 'still',
  } = props;
  const [scrollDir, setScrollDir] = useState(still);

  useEffect(() => {
    const threshold = thr > 0 ? thr : 0;
    let ticking = false;
    let lastScroll: number;

    axis === 'y' ? (lastScroll = window.pageYOffset) : (lastScroll = window.pageXOffset);

    const updateScrollDir = () => {
      let scroll;

      axis === 'y' ? (scroll = window.pageYOffset) : (scroll = window.pageXOffset);

      if (Math.abs(scroll - lastScroll) < threshold) {
        ticking = false;
        setScrollDir('still');
        return;
      }
      setScrollDir(scroll > lastScroll ? scrollDown : scrollUp);
      lastScroll = scroll > 0 ? window.scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir, axis, scrollDown, scrollUp, thr]);

  return [scrollDir];
}

export default useDetectScroll;
