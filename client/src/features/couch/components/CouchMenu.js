import { DimensionsContext } from 'context/DimensionsContext';
import React, { useContext, useState } from 'react';
import SortByMenu from '../../../components/common/SortByMenu';
import BrownSpeechBubbleTriangle from 'assets/icons/Light brown triangle.svg';
import SearchInput from 'components/UI/SearchInput';
import { CouchMenuStrings as strings } from './CouchMenu.strings';

const CouchMenu = ({ searchInput, setSearchInput }) => {
  const [showBubble, setShowBubble] = useState(false);

  const { windowWidth } = useContext(DimensionsContext);

  return (
    <div className="flex my-6 relative">
      <SortByMenu />
      {windowWidth >= 640 && (
        <div className="flex mr-auto">
          <SearchInput value={searchInput} withSearchButton={windowWidth >= 768} handleSearch={setSearchInput} />
          <span
            onMouseEnter={() => setShowBubble(true)}
            onMouseLeave={() => setShowBubble(false)}
            className="_text text-lg md:text-2xl cursor-pointer mr-4"
          >
            ? {strings.moreInfo}
          </span>
        </div>
      )}
      <div
        className="absolute z-40 mt-16 p-5 bg-p-brown-mid w-1/2 rounded-xl"
        style={{ left: '4%', opacity: showBubble ? 1 : 0, transition: 'opacity 0.1s linear' }}
      >
        <img alt="" src={BrownSpeechBubbleTriangle} className="mr-auto ml-4 absolute left-0 -mt-12" />
        <p className="_text text-xl">{strings.bubbleText}</p>
      </div>
    </div>
  );
};

export default CouchMenu;
