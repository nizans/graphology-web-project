import React from 'react';
import MichalDrawings from 'assets/imgs/michal_drawing.png';
import ReadMoreBtn from 'components/UI/ReadMoreBtn';
import Underline from 'components/UI/Underline';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { DimensionsContext } from 'context/DimensionsContext';
import { MichalStrings as strings } from './Michal.strings';

const Michal = React.forwardRef((props, ref) => {
  const { windowHeight, headerHeight } = useContext(DimensionsContext);
  return (
    <div className="items-center" ref={ref}>
      <div className="grid sm:grid-cols-2 mt-10 sm:mt-0">
        <img
          className="mx-auto xl:ml-0 xl:mt-4"
          style={{ maxHeight: windowHeight - headerHeight - 100 + 'px', objectFit: 'cover' }}
          alt=""
          src={MichalDrawings}
        />

        <div className="mt-4 sm:mt-0 flex flex-col items-center sm:items-start justify-center px-4 ">
          <NavLink
            to="/home/about"
            className="_text-bold text-6xl md:text-7xl lg:text-8xl leading-none hover:text-p-brown"
            style={{ minInlineSize: 'max-content' }}
          >
            {strings.title}
          </NavLink>
          <Underline thickness="2" className="w-2/5 sm:w-2/3 xl:w-1/2 2xl:w-2/5 my-4" />
          <p className="_text text-2xl md:text-3xl  lg:pl-12 max-w-2xl leading-normal ">{strings.text}</p>
          <ReadMoreBtn to="/home/about" className="text-3xl ml-auto" />
        </div>
      </div>
    </div>
  );
});

export default Michal;
