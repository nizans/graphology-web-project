import ImageBox from 'components/common/ImageBox';
import Section from 'components/common/Section';
import ErrorSection from 'components/UI/ErrorSection';
import LoadingSection from 'components/UI/LoadingSection';
import Underline from 'components/UI/Underline';
import { AuthContext } from 'context/authContext';
import { BreadCrumbsTitleContext } from 'context/breadCrumbsTitleContext';
import ButtonsCell from 'components/UI/ButtonsCell';
import useWindowDimensions from 'hooks/useWindowDimensions';
import parse from 'html-react-parser';
import { useFetchData, useMutateData } from 'lib/reactQuery';
import React, { useContext, useEffect } from 'react';
import { Redirect, useParams } from 'react-router';
import { toDate } from 'utils/toDate';
import { contentsApiCRUDRequests } from '..';

const CouchItemPage = () => {
  const { setTitle } = useContext(BreadCrumbsTitleContext);
  const { height } = useWindowDimensions();
  const { id } = useParams();
  const { isLoading, error, data: item, isSuccess } = useFetchData(contentsApiCRUDRequests.read(id));
  const { mutate, isLoading: isMutating, isSuccess: isDeleteSuccess } = useMutateData(contentsApiCRUDRequests.delete);
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    if (item) {
      setTitle(item._id, item.title);
    }
  }, [item]);

  const handleDelete = () => {
    mutate({ uri: id });
  };

  if (error) return <ErrorSection error={error} />;
  return isLoading || isMutating ? (
    <LoadingSection />
  ) : isDeleteSuccess ? (
    <Redirect to="/home/couch" />
  ) : (
    isSuccess && (
      <Section className="pb-6 ">
        {isAuth && <ButtonsCell onDelete={handleDelete} withPreview={false} _id={id} type={'contents'} />}
        <div className="flex justify-between items-center pb-1">
          <h1 className="_text-bold-dark-5xl">{item.title}</h1>
          <h3 className="_text-2xl">{toDate(item.publishDate || item.uploadDate)}</h3>
        </div>
        <Underline />
        <h2 className="py-10 _text-bold-3xl  ">{item.subtitle}</h2>
        <div>
          <div>
            <ImageBox
              sliderWrapperClassName="lg:w-1/2 lg:float-right p-8 ml-4"
              images={item.images}
              height={height < 600 ? height - 100 : 500}
            />
          </div>
          <div className="_text-2xl break-words leading-normal w-full">{parse(item.text)}</div>
        </div>
      </Section>
    )
  );
};

export default CouchItemPage;
