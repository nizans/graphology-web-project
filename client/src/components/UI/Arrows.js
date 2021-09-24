import Arrow from '../../assets/icons/down_arrow.png';

export const RightArrow = props => {
  const { className, style, onClick, right } = props;
  return (
    <img
      loading="lazy"
      className={className + ` transform transition-all -rotate-90  scale-200 hover:scale-250 `}
      style={{ ...style, right: `${right}px` }}
      onClick={onClick}
      alt=""
      src={Arrow}
    />
  );
};
export const LeftArrow = props => {
  const { className, style, onClick, left } = props;
  return (
    <img
      loading="lazy"
      className={className + ` transform transition-all rotate-90  scale-200 hover:scale-250 `}
      style={{ ...style, left: `${left}px` }}
      onClick={onClick}
      alt=""
      src={Arrow}
    />
  );
};
