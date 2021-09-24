import { SectionHeightContext } from 'context/sectionHeightContext';
import { DeleteIcon } from 'components/UI/ButtonsCell';
import useModal from 'hooks/useModal';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import Modal from './Modal';

const strings = { uploadImage: 'העלה תמונה', mainImage: 'תמונה ראשית', setMainImage: 'בחר כתמונה ראשית' };

const ImageUploadInput = ({ onImageChange }) => {
  const { windowHeight, windowWidth } = useContext(SectionHeightContext);

  const [images, setImages] = useState([]);

  useEffect(() => {}, [images]);

  const handleImageInput = files => {
    let arr = [];
    for (let i = 0; i < files.length; i++) {
      arr.push(files.item(i));
    }
    setImages(arr);
  };

  const handleDeleteImage = img => {
    setImages(images.filter(_img => _img !== img));
  };

  const setMainImage = img => {
    setImages([img, ...images.filter(_img => _img !== img)]);
  };

  //   const createImageArray = files => {
  //     let arr = [];
  //     for (const img of files) {
  //       arr.push(img);
  //     }
  //     return arr;
  //   };

  const { isShowing, toggle } = useModal();

  return (
    <>
      <Modal isShowing={isShowing} hide={toggle}>
        <div
          dir="rtl"
          className="mx-4 bg-background rounded-lg flex justify-start p-8 overflow-scroll"
          style={{ height: windowHeight * 0.7, width: windowWidth * 0.7 }}>
          <div className="flex flex-col">
            <label htmlFor="image" className="_text-3xl">
              {strings.uploadImage}
            </label>
            <input multiple type="file" name="image" onInput={e => handleImageInput(e.target.files)} />
          </div>
          <div className="grid gap-6 grid-cols-3">
            {images.map((img, i) => (
              <div
                key={i}
                className="bg-p-brown border-p-brown border-2 rounded-lg overflow-hidden"
                style={{ height: 'min-content' }}>
                {img instanceof File || img instanceof Blob ? (
                  <img alt="" src={URL.createObjectURL(img)} width="300px" className="object-contain" />
                ) : (
                  <img alt="" src={img} key={i} width="300px" className="object-contain" />
                )}
                <div className="flex items-center p-2 justify-between ">
                  <button
                    className="_text-xl"
                    onClick={() => {
                      if (i !== 0) setMainImage(img);
                    }}>
                    {i !== 0 ? strings.setMainImage : strings.mainImage}
                  </button>
                  <button onClick={() => handleDeleteImage(img)}>
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
      <button type="button" onClick={toggle} className="button">
        {strings.uploadImage}
      </button>
    </>
  );
};

export default ImageUploadInput;
