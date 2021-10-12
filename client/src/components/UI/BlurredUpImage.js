import Modal from 'components/common/Modal';
import ExpandIcon from 'components/Icons/ExpandIcon';
import useModal from 'hooks/useModal';
import useProgressiveImg from 'hooks/useProgressiveImg';
import React from 'react';
import Magnifier from 'react-magnifier';

const BlurredUpImage = ({ img, withModal = true, width = '100%', height = '', style }) => {
  const [src, { blur }] = useProgressiveImg(img.thumb, img.full);
  const { isShowing, toggle } = useModal();

  return (
    <div className="relative">
      <img
        onClick={withModal ? toggle : null}
        alt=""
        src={src}
        style={{
          cursor: withModal ? 'zoom-in' : 'auto',
          width: width,
          height: height,
          transition: `1s -webkit-filter linear`,
          filter: blur ? 'blur(20px)' : 'none',
          objectFit: 'contain',
          margin: 'auto',
          ...style,
        }}
      />
      {withModal && <ExpandIcon style={{ top: '0', right: '0' }} />}
      {withModal && (
        <Modal isShowing={isShowing} hide={toggle}>
          <Magnifier src={src} mgWidth={200} mgHeight={200} mgShowOverflow={false} />
        </Modal>
      )}
    </div>
  );
};

export default BlurredUpImage;
