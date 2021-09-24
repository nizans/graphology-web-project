import useDimensions from 'hooks/useDimensions';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Arrow from '../../assets/icons/down_arrow.png';

const DropDownMenu = ({
  values = [],
  title = false,
  handleChange = () => {},
  itemClassName,
  asLinks = false,
  ulStyle = { width: '100%' },
  liStyle = { padding: '1rem' },
}) => {
  const [valsArray, setValsArray] = useState(values);
  const [show, setShow] = useState(false);
  const [ref, dim] = useDimensions();
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (title && isFirstRender) !values.includes(title) && values.unshift(title);
    if (valsArray.includes(title) && !isFirstRender) {
      const arr = valsArray.filter(v => v != title);
      setValsArray(arr);
    }
  }, [title, valsArray]);

  const handleItemClick = val => {
    setValsArray([val, ...valsArray.filter(i => i !== val)]);
    setShow(false);
    setIsFirstRender(false);
    handleChange(val);
  };

  return (
    <div className="inline-block min-w-full" style={{ height: dim?.height }}>
      <ul
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="bg-p-brown-light px-4 hover:bg-p-brown-dark rounded-xl inline-block"
        style={{
          zIndex: 40,
          maxHeight: show ? dim?.height * valsArray.length + 100 : dim?.height,
          overflow: 'hidden',
          position: 'absolute',
          transition: 'max-height 0.3s ',
          ...ulStyle,
        }}>
        {valsArray.map((val, i) => (
          <li
            key={val + i}
            style={{ ...liStyle }}
            ref={i === 0 ? ref : null}
            onClick={() => {
              if (!asLinks && val === title) return;
              handleItemClick(val);
            }}>
            {asLinks ? (
              <NavLink
                activeClassName="font-bold"
                to={val.to}
                style={{ transition: 'font 0.1s ' }}
                className={
                  '_text-3xl hover:text-p-blue-dark hover:font-semibold cursor-pointer flex items-center ' +
                  itemClassName
                }>
                {val.name}
                {i === 0 && (
                  <img
                    src={Arrow}
                    className="mr-1"
                    style={{ width: '0.75em', transform: 'translateY(0.15rem)' }}
                    alt=""
                  />
                )}
              </NavLink>
            ) : (
              <span
                style={{ transition: 'font 0.1s ' }}
                className={
                  '_text-3xl hover:text-p-blue-dark hover:font-semibold cursor-pointer flex items-center' +
                  itemClassName
                }>
                {val}
                {i === 0 && (
                  <img
                    src={Arrow}
                    className="mr-1"
                    style={{ width: '0.75em', transform: 'translateY(0.15rem)' }}
                    alt=""
                  />
                )}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownMenu;
