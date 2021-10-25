import Modal from 'components/common/Modal';
import Spinner from 'components/UI/Spinner';
import { usePostRandomArticles, usePostRandomBooks, usePostRandomContents } from 'dev/randomItemsGen';
import useModal from 'hooks/useModal';
import React, { useState } from 'react';

const AdminNavRandomData = () => {
  const [numberOfItems, setNumberOfItems] = useState(1);
  const [checkboxes, setCheckboxes] = useState({
    articles: false,
    contents: false,
    books: false,
  });
  const { post: createRandomArticles, isLoading: isLoadingArticles } = usePostRandomArticles(numberOfItems);
  const { post: createRandomContents, isLoading: isLoadingContents } = usePostRandomContents(numberOfItems);
  const { post: createRandomBooks, isLoading: isLoadingBooks } = usePostRandomBooks(numberOfItems);

  const handleSubmit = e => {
    e.preventDefault();
    if (checkboxes.articles) createRandomArticles();
    if (checkboxes.contents) createRandomContents();
    if (checkboxes.books) createRandomBooks();
  };
  const { isShowing, toggle } = useModal();
  return (
    <>
      <button className="_text text-xl px-4" onClick={toggle}>
        Developer Tools
      </button>
      <Modal hide={toggle} isShowing={isShowing}>
        <form className="bg-p-gray flex flex-col p-16 h-full w-full rounded-lg" onSubmit={e => handleSubmit(e)}>
          <h5>This area is for development and will not be available in production.</h5>
          <h1 className="_text text-3xl mb-4">Generate random data: </h1>
          <ul className="justify-between _text flex flex-col text-3xl ">
            <li className="mb-4">
              <label htmlFor="number">
                Number of items:
                <input
                  min="1"
                  max="10"
                  className="mx-4 _text text-3xl text-right outline-none border-p-blue border rounded-lg "
                  style={{ maxWidth: '50px' }}
                  type="number"
                  name="number"
                  value={numberOfItems}
                  onChange={e => setNumberOfItems(e.target.value)}
                />
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  onChange={e => setCheckboxes({ ...checkboxes, articles: e.target.checked })}
                  type="checkbox"
                  name="articles"
                  className="transform scale-150 mr-2"
                />
                Articles
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  onChange={e => setCheckboxes({ ...checkboxes, contents: e.target.checked })}
                  type="checkbox"
                  name="contents"
                  className="transform scale-150 mr-2"
                />
                Contents
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  onChange={e => setCheckboxes({ ...checkboxes, books: e.target.checked })}
                  type="checkbox"
                  name="books"
                  className="transform scale-150 mr-2"
                />
                Books
              </label>
            </li>
          </ul>
          <div className="w-full flex justify-around">
            {isLoadingContents || isLoadingBooks || isLoadingArticles ? (
              <Spinner size="50" />
            ) : (
              <input type="submit" className="button" />
            )}
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AdminNavRandomData;
