import { DimensionsContext } from 'context/DimensionsContext';
import { useContext } from 'react';
import { ReactComponent as SpinnerSVG } from 'assets/icons/Spinner.svg';
import './Spinner.css';
const Spinner = ({ size = 120, speed = 2, style, fill = '#DFBBA6', stroke = '#DFBBA6', className }) => {
  const { windowHeight: width } = useContext(DimensionsContext);

  if (width < 640) size *= 0.5;

  return (
    <div className="w-full h-full flex">
      <SpinnerSVG
        className={'m-auto ' + className}
        width={size}
        height={size}
        fill={fill}
        stroke={stroke}
        style={{
          WebkitAnimation: `spin ${speed}s linear infinite`,
          animation: `spin ${speed}s linear infinite`,
          ...style,
        }}
      />
    </div>
  );
};

export default Spinner;
