import React from 'react';

const NavBurgerButton = ({ open, toggleOpen }) => {
  return (
    <button
      type="button"
      onClick={toggleOpen}
      className="absolute mr-4 flex flex-col justify-around w-8 h-8 cursor-pointer p-0 z-50"
      style={{ background: 'transparent' }}>
      <div
        className={`w-8 h-1 ${open ? 'bg-p-blue' : 'bg-p-brown'} rounded-3xl outline-none transition-all relative`}
        style={{ transformOrigin: '1px', transform: open ? 'rotate(45deg)' : 'rotate(0)' }}
      />
      <div
        className={`w-8 h-1 ${open ? 'bg-p-blue' : 'bg-p-brown'} rounded-3xl outline-none transition-all relative`}
        style={{ transformOrigin: '1px', opacity: open ? '0' : '1' }}
      />
      <div
        className={`w-8 h-1 ${open ? 'bg-p-blue' : 'bg-p-brown'} rounded-3xl outline-none transition-all relative`}
        style={{ transformOrigin: '1px', transform: open ? 'rotate(-45deg)' : 'rotate(0)' }}
      />
    </button>
  );
};

export default NavBurgerButton;
