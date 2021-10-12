import CloseIcon from 'assets/icons/Close_Icon.svg';
import { DimensionsContext } from 'context/DimensionsContext';
import React, { useContext } from 'react';
import { createPortal } from 'react-dom';

// TODO - fix cant close on full screen - limit max size
const Modal = ({ isShowing, hide, children }) => {
  const { windowHeight: width } = useContext(DimensionsContext);
  if (isShowing && width > 640)
    return createPortal(
      <>
        <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-80" style={{ zIndex: 100 }} />
        <div
          className="fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto outline-none flex justify-center items-center"
          aria-modal
          aria-hidden
          tabIndex={-1}
          role="dialog"
          style={{ zIndex: 110 }}
          onClick={hide}
        >
          <div className="relative" style={{ zIndex: 120 }} onClick={e => e.stopPropagation()}>
            <img
              onClick={hide}
              loading="lazy"
              alt=""
              src={CloseIcon}
              width="38px"
              className="absolute -right-10 -top-10 cursor-pointer"
            />
            {children}
          </div>
        </div>
      </>,
      document.body
    );
  else return null;
};
export default Modal;
