import SearchIcon from 'assets/icons/search.svg';
import useQueryParams from 'hooks/useQueryParams';
import React, { forwardRef, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { HEB_SEARCH } from 'strings/common';

const SearchInput = forwardRef(({ className, withIcon = true, placeholder, withSearchButton = true }, submitRef) => {
  const find = useQueryParams().get('find');
  const { push } = useHistory();
  const [value, setValue] = useState(find || '');
  const { pathname } = useLocation();

  useEffect(() => {
    setValue(find || '');
  }, [find]);

  return (
    <form
      className="relative flex items-center"
      onSubmit={e => {
        e.preventDefault();
        push(`${pathname}?find=${value}`);
      }}
    >
      <input
        onInput={e => setValue(e.target.value)}
        value={value}
        placeholder={placeholder || HEB_SEARCH}
        className={
          className ||
          `placeholder-p-gray-dark relative my-4 sm:my-0  _text text-2xl border-p-blue border-2 rounded-lg ${
            withIcon && 'pr-8'
          } outline-none`
        }
      />
      <input hidden type="submit" ref={submitRef} />

      {withIcon && (
        <NavLink to={`${pathname}?find=${value}`}>
          <img
            loading="lazy"
            alt=""
            src={SearchIcon}
            style={{
              bottom: '2px',
              right: '5px',
            }}
            className="absolute my-4 sm:my-0"
            width="24px"
            height="24px"
          />
        </NavLink>
      )}

      {withSearchButton && (
        <NavLink
          className="mr-4 _text-lg hover:text-p-brown-dark font-bold "
          to={`${pathname}?find=${value}`}
          style={{
            transition: 'opacity .5s ',
            opacity: value ? '1' : '0',
          }}
        >
          {HEB_SEARCH}
        </NavLink>
      )}
    </form>
  );
});

export default SearchInput;
