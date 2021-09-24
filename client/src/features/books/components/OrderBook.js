import ImageBox from 'components/common/ImageBox';
import Section from 'components/common/Section';
import ErrorSection from 'components/UI/ErrorSection';
import LoadingSection from 'components/UI/LoadingSection';
import { AuthContext } from 'context/authContext';
import { BreadCrumbsTitleContext } from 'context/breadCrumbsTitleContext';
import { SectionHeightContext } from 'context/sectionHeightContext';
import ButtonsCell from 'components/UI/ButtonsCell';
import { useFetchData, useMutateData } from 'lib/reactQuery';
import React, { useContext, useEffect } from 'react';
import { Redirect, useParams } from 'react-router';
import { booksApiCRUDRequests } from '..';
import OrderBookForm from './OrderBookForm';

const OrderBook = () => {
  const { setTitle } = useContext(BreadCrumbsTitleContext);
  const { windowWidth, headerHeight, breadCrumbHeight, footerHeight } = useContext(SectionHeightContext);
  const { id } = useParams();
  const { data: book, isLoading, error } = useFetchData(booksApiCRUDRequests.read(id));
  const { mutate, isLoading: isMutating, isSuccess: isDeleteSuccess } = useMutateData(booksApiCRUDRequests.delete);
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    if (book) setTitle(book._id, book.title);
  }, [book]);

  const handleDelete = () => {
    mutate({ uri: id });
  };

  if (error) return <ErrorSection error={error} />;
  return isLoading || isMutating ? (
    <LoadingSection />
  ) : isDeleteSuccess ? (
    <Redirect to="/home/books" />
  ) : (
    <>
      {isAuth && <ButtonsCell onDelete={handleDelete} withPreview={false} _id={id} type={'books'} />}
      <Section className="flex flex-col md:items-center md:grid gap-x-7 grid-cols-2 mb-16 lg:mb-0">
        <div>
          <ImageBox height={windowWidth < 1024 ? '25vh' : '50vh'} images={book.images} imgClassName=" object-cover" />
        </div>
        <OrderBookForm book={book} />
      </Section>
    </>
  );
};

export default OrderBook;
