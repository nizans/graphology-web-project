import { DeleteIcon } from 'components/UI/ButtonsCell';
import { DimensionsContext } from 'context/DimensionsContext';
import useModal from 'hooks/useModal';
import React, { useContext, useRef } from 'react';
import ImageCard from './ImageCard';
import Modal from './Modal';

const strings = {
  uploadImage: 'בחירת תמונות',
  mainImage: 'תמונה ראשית',
  setMainImage: 'בחר כתמונה ראשית',
  maxFiles: 'ניתן להעלות עד 10 תמונות',
};

const ImageUploadInput = ({ images, onImageChange }) => {
  const { windowHeight, windowWidth } = useContext(DimensionsContext);
  const { isShowing, toggle } = useModal();
  const fileInputRef = useRef(null);

  const handleImageInput = files => {
    if (files.length + images.length > 10) {
      alert(strings.maxFiles);
      return;
    }
    onImageChange([...images, ...files]);
  };

  const handleDeleteImage = img => {
    onImageChange(images.filter(_img => _img !== img));
  };

  const setMainImage = img => {
    onImageChange([img, ...images.filter(_img => _img !== img)]);
  };

  const generateImageCard = (img, i) => (
    <ImageCard
      style={i === 0 && { backgroundColor: '#005885', borderColor: '#005885' }}
      imgComponent={
        <img
          alt=""
          src={img instanceof File || img instanceof Blob ? URL.createObjectURL(img) : img}
          key={i}
          style={{ maxHeight: '500px', minHeight: '500px', width: '100%', objectFit: 'cover' }}
        />
      }>
      {i !== 0 && (
        <button className="_text-xl hover:font-bold" onClick={() => setMainImage(img)}>
          {strings.setMainImage}
        </button>
      )}
      <button className="mr-auto" onClick={() => handleDeleteImage(img)}>
        <DeleteIcon />
      </button>
    </ImageCard>
  );

  return (
    <>
      <Modal isShowing={isShowing} hide={toggle}>
        <div
          dir="rtl"
          className="mx-4 bg-background rounded-lg flex flex-col justify-start p-8 overflow-scroll"
          style={{ height: windowHeight * 0.9, width: windowWidth * 0.9 }}>
          <div className="mb-4">
            <button onClick={() => fileInputRef.current.click()} type="button" className="button">
              {strings.uploadImage}
            </button>
            <input hidden ref={fileInputRef} multiple type="file" onChange={e => handleImageInput(e.target.files)} />
          </div>
          <div className="grid gap-6 grid-cols-3">{images.map((img, i) => generateImageCard(img, i))}</div>
        </div>
      </Modal>
      <button type="button" onClick={toggle} className="button">
        {strings.uploadImage}
      </button>
    </>
  );
};

export default ImageUploadInput;
