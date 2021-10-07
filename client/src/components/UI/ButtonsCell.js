import { DeleteIcon, EditIcon, PreviewIcon } from 'components/Icons/ButtonsCellIcons';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ButtonsCell = ({ onDelete, _id, type, withPreview = true }) => {
  return (
    <div className="flex">
      {withPreview && (
        <NavLink to={`/home/${type}/${_id}`}>
          <PreviewIcon />
        </NavLink>
      )}
      <NavLink to={`/admin/add/${type}/${_id}`} className="cursor-pointer mx-2">
        <EditIcon />
      </NavLink>
      <button>
        <span className="cursor-pointer" onClick={() => onDelete(_id)}>
          <DeleteIcon />
        </span>
      </button>
    </div>
  );
};

export default ButtonsCell;
