import React, { useRef, useState, useEffect } from 'react';

const DropDown = ({
  headTitle = null,
  elements,
  handleValueChange = null,
  buttonClassName,
  hoverClassName = 'bg-p-brown',
  elementClassName = 'bg-p-brown',
}) => {
  const [selectedValue, setSelectedValue] = useState(headTitle ? null : elements[0]);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [isSelected, setIsSelected] = useState(headTitle ? false : true);

  const show = () => {
    buttonRef.current.classList.add(hoverClassName);
    buttonRef.current.classList.remove('rounded-b');
    dropdownRef.current.style.display = 'block';
  };

  const hide = () => {
    buttonRef.current.classList.remove(hoverClassName);
    buttonRef.current.classList.add('rounded-b');
    dropdownRef.current.style.display = 'none';
  };

  const handleItemClick = i => {
    if (headTitle) setIsSelected(true);
    setSelectedValue(elements[i]);
    hide();
    if (handleValueChange) handleValueChange(elements[i]);
  };

  const handleBorderY = () => {
    const lastBottom = dropdownRef.current.getElementsByClassName('rounded-b')[0];
    if (lastBottom) lastBottom.classList.remove('rounded-b');
    dropdownRef.current.lastChild.classList.add('rounded-b');
  };

  const handleHover = e => {
    if (e.type === 'mouseenter') {
      show();
    } else {
      hide();
    }
  };

  useEffect(() => {
    handleBorderY();
  }, [selectedValue]);
  useEffect(() => {
    return () => {
      setSelectedValue(headTitle ? headTitle : elements[0]);
      setIsSelected(false);
    };
  }, [headTitle, elements]);
  return (
    <div
      className="relative w-full"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      style={{
        width: '',
      }}>
      <div ref={buttonRef} className={buttonClassName + ' rounded-t inline-flex justify-start items-center '}>
        {!isSelected ? headTitle : selectedValue}
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
        </svg>
      </div>
      <ul ref={dropdownRef} className="absolute hidden right-0 left-0">
        {elements
          .filter(e => e !== selectedValue)
          .map((el, i) => (
            <li
              className={`whitespace-no-wrap overflow-hidden ${elementClassName}`}
              onClick={() => handleItemClick(i)}
              key={i}>
              {el}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DropDown;
