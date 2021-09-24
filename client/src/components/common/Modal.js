import React from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from 'assets/icons/Close_Icon.svg';
import useWindowDimensions from 'hooks/useWindowDimensions';

const Modal = ({ isShowing, hide, children }) => {
  const { width } = useWindowDimensions();
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
          onClick={hide}>
          <div className="relative" style={{ zIndex: 120 }} onClick={e => e.stopPropagation()}>
            <img
              onClick={hide}
              loading="lazy"
              alt=""
              src={CloseIcon}
              width="38px"
              className="absolute -right-8 -top-8 cursor-pointer"
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
