import Arrow from 'assets/icons/down_arrow.png';
import { ThemeContext } from 'context/ThemeContext';
import { useContext } from 'react';

export const RightArrow = props => {
  const { className, style, onClick, right } = props;
  const { isMobile } = useContext(ThemeContext);

  return (
    <img
      loading="lazy"
      className={className + ` transform transition-all -rotate-90 scale-200 ${!isMobile && 'hover:scale-250'}`}
      style={{ ...style, right: `${right}px` }}
      onClick={onClick}
      onTouchStart={e => e.target.classList.add('scale-250')}
      onTouchEnd={e => {
        setTimeout(() => {
          e.target.classList.remove('scale-250');
        }, 100);
      }}
      alt=""
      src={Arrow}
    />
  );
};
export const LeftArrow = props => {
  const { className, style, onClick, left } = props;
  const { isMobile } = useContext(ThemeContext);
  return (
    <img
      loading="lazy"
      className={className + ` transform transition-all rotate-90 scale-200 ${!isMobile && 'hover:scale-250'}`}
      style={{ ...style, left: `${left}px` }}
      onClick={onClick}
      onTouchStart={e => {
        e.target.classList.add('scale-250');
      }}
      onTouchEnd={e => {
        setTimeout(() => {
          e.target.classList.remove('scale-250');
        }, 100);
      }}
      alt=""
      src={Arrow}
    />
  );
};

export const UpArrow = props => {
  const { className, style, onClick } = props;
  return (
    <img
      className={
        className +
        ` transform -translate-x-1/2 translate-y-5 transition-all scale-300 hover:scale-350 hover:translate-y-7 `
      }
      style={{ ...style, left: '50%', right: 0, top: '100%' }}
      onClick={onClick}
      alt=""
      src={Arrow}
    />
  );
};
export const DownArrow = props => {
  const { className, style, onClick } = props;
  return (
    <img
      className={
        className +
        ` transform -translate-x-1/2 transition-all -translate-y-8 rotate-180 scale-300 hover:scale-350 hover:-translate-y-10   `
      }
      style={{ ...style, left: '50%', right: 0, bottom: 0, top: 0 }}
      onClick={onClick}
      alt=""
      src={Arrow}
    />
  );
};
