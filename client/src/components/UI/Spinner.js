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

  //   return (
  //     <div
  //       className={'w-full h-full flex items-center justify-center top-0 right-0 left-0 bottom-0 absolute'}
  //       style={{ ...style }}
  //     >
  //       <span
  //         className={'loader ml-2' + className}
  //         style={{
  //           border: `${Math.ceil(size * 0.13)}px solid ${bgColor}`,
  //           borderRadius: '50%',
  //           borderTop: `${Math.ceil(size * 0.13)}px solid ${fgColor}`,
  //           width: size,
  //           height: size,
  //           WebkitAnimation: `spin ${speed}s linear infinite`,
  //           animation: `spin ${speed}s linear infinite`,
  //         }}
  //       />
  //     </div>
  //   );
};

export default Spinner;
