import Pagintation from 'components/common/Pagintation';
import ErrorSection from 'components/UI/ErrorSection';
import LoadingSection from 'components/UI/LoadingSection';
import SearchInput from 'components/UI/SearchInput';
import SortByMenu from 'features/couch/components/SortByMenu';
import useQueryParams from 'hooks/useQueryParams';
import { useFetchData, useMutateData } from 'lib/reactQuery';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import typesDictionary from 'utils/typesDictionary';
import ButtonsCell from 'components/UI/ButtonsCell';

const strings = {
  actions: 'פעולות',
  addNew: type => `הוספת ${typesDictionary[type]}`,
};

//TODO - fix text shows as html
const Table = ({ type, generateCell, headers, apiRequests }) => {
  const page = useQueryParams().get('page');
  const find = useQueryParams().get('find');
  const sortby = useQueryParams().get('sortby') || '-uploadDate';
  const [searchInput, setSearchInput] = useState('');
  const { mutate, isLoading: isMutating, error: deleteError } = useMutateData(apiRequests.delete);
  const { isLoading, error, data, isSuccess } = useFetchData(apiRequests.read(null, { find, page, sortby }));

  const handleDeleteItem = id => {
    mutate({ uri: id });
  };

  useEffect(() => {
    if (deleteError) alert(deleteError.message);
  }, [deleteError]);

  return (
    <>
      <div className="w-full my-2 flex justify-between">
        <SortByMenu />
        <SearchInput value={searchInput} handleSearch={setSearchInput} />
        <NavLink to={'/admin/add/' + type} className="_text-lg">
          {strings.addNew(type)}
        </NavLink>
      </div>

      {isLoading || isMutating ? (
        <LoadingSection />
      ) : (
        <>
          {error && <ErrorSection error={error} />}
          {isSuccess && (
            <>
              <table className="table-auto w-full ">
                <thead className="bg-p-brown-light border-b-2 border-p-gray-dark text-right _text-bold-xl">
                  <tr>
                    <th>#</th>
                    {headers()}
                    <th>{strings.actions}</th>
                  </tr>
                </thead>
                <tbody className="_text-xl">
                  {data.payload.map((item, i) => (
                    <tr
                      key={item._id}
                      className={`border-p-gray-dark border-b-2 ${i % 2 !== 0 ? 'bg-p-brown-light' : ''}`}>
                      <td>{i + 1}</td>
                      {generateCell(item)}
                      <td>
                        <ButtonsCell type={type} _id={item._id} onDelete={handleDeleteItem} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>{isSuccess && <Pagintation page={data.page} pages={data.pages} />}</div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Table;
