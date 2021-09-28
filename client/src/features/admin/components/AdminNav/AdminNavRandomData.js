import React from 'react';
import { usePostRandomArticles, usePostRandomBooks, usePostRandomContents } from 'dev/randomItemsGen';

const AdminNavRandomData = () => {
  const postA = usePostRandomArticles(10);
  const postC = usePostRandomContents(10);
  const postB = usePostRandomBooks(10);
  const postA1 = usePostRandomArticles(1);
  const postC1 = usePostRandomContents(1);
  const postB1 = usePostRandomBooks(1);
  return (
    <div>
      <label>Random Data: </label>
      <ul className="flex justify-between">
        <li>
          <button onClick={postA}>10 Articles</button>
        </li>
        <li>
          <button onClick={postC}>10 Contents</button>
        </li>
        <li>
          <button onClick={postB}>10 Books</button>
        </li>
      </ul>
      <ul className="flex justify-between">
        <li>
          <button onClick={postA1}>1 Articles</button>
        </li>
        <li>
          <button onClick={postC1}>1 Contents</button>
        </li>
        <li>
          <button onClick={postB1}>1 Books</button>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavRandomData;
