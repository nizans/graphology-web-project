import React, { useRef } from 'react';
import { ReactComponent as SearchIcon } from 'assets/icons/searchIcon.svg';
import SearchInput from 'components/UI/SearchInput';
import { ReactComponent as LogoMini } from 'assets/icons/LogoMini.svg';
import { HEB_TYPE_TO_SEARCH } from 'strings/common';

const NavSearchBar = ({ closeSearchBar }) => {
  const submitRef = useRef(null);

  const handleSearch = () => {
    submitRef.current.click();
    closeSearchBar();
  };

  return (
    <div className="fixed bottom-0 top-0 right-0 left-0 z-50 ">
      <span className="absolute top-4 left-3 text-white transform scale-110" onClick={closeSearchBar}>
        <div
          className="w-5  bg-white rounded-3xl outline-none"
          style={{ transformOrigin: '8px', transform: 'rotate(45deg)', height: '2px' }}
        />
        <div
          className={`w-5  bg-white rounded-3xl outline-none`}
          style={{ transformOrigin: '9px', transform: 'rotate(-45deg)', height: '2px' }}
        />
      </span>
      <div className="flex justify-center items-center h-40 bg-p-blue w-full">
        <SearchIcon fill="white" onClick={handleSearch} />
        <SearchInput
          placeholder={HEB_TYPE_TO_SEARCH}
          withSearchButton={false}
          withIcon={false}
          ref={submitRef}
          className="bg-transparent w-full placeholder-white text-white text-lg border-b border-white mx-2 outline-none"
        />
        <LogoMini />
      </div>
      <div className="bg-background h-full w-full opacity-80"></div>
    </div>
  );
};

export default NavSearchBar;
