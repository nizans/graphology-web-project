import SearchIcon from 'assets/icons/search.svg';
import useQueryParams from 'hooks/useQueryParams';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
const strings = {
  search: 'חפש',
};
const SearchInput = ({ className, handleSearch }) => {
  const find = useQueryParams().get('find');
  const { push } = useHistory();
  const [value, setValue] = useState(find || '');
  const { path } = useRouteMatch();
  useEffect(() => {
    setValue(find || '');
  }, [find]);
  return (
    <form
      className="relative flex items-center"
      onSubmit={e => {
        e.preventDefault();
        push(`${path}?find=${value}`);
      }}>
      <input
        onInput={e => setValue(e.target.value)}
        value={value}
        placeholder={strings.search}
        className="placeholder-p-gray-dark relative my-4 sm:my-0  _text-bold-2xl border-p-blue border-2 rounded-md pr-8 outline-none"
      />
      <NavLink to={`${path}?find=${value}`}>
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

      <NavLink
        className="mr-4 _text-lg hover:text-p-brown-dark font-bold "
        to={`${path}?find=${value}`}
        style={{
          transition: 'opacity .5s ',
          opacity: value ? '1' : '0',
        }}>
        {strings.search}
      </NavLink>
    </form>
  );
};

export default SearchInput;
