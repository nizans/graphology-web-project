import Modal from 'components/common/Modal';
import useModal from 'hooks/useModal';
import useProgressiveImg from 'hooks/useProgressiveImg';
import React, { useEffect } from 'react';
import Magnifier from 'react-magnifier';
import ExpandIcon from 'components/UI/ExpandIcon';

const BlurredUpImage = props => {
  const { wrapperClassName, tinySrc, imageSrc, withModal = true, width = '100%', height = '' } = props;
  const [src, { blur }] = useProgressiveImg(tinySrc, imageSrc);
  const { isShowing, toggle } = useModal();

  return (
    <div className={`relative ${wrapperClassName}`}>
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
          objectFit: 'cover',
          margin: 'auto',
          ...props.style,
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
