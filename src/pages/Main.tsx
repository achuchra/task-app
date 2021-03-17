import React, { ReactElement, useState, useEffect, useRef, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAction } from '../store/actions/user-actions';
import setSeedAction from '../store/actions/seed-actions';
import useDebounce from '../hooks/useDebounce';
import useVisible from '../hooks/useVisible';
import Heading from '../components/atoms/heading/Heading';
import Header from '../components/molecules/header/Header';
import Caption from '../components/atoms/caption/Caption';
import Input from '../components/atoms/input/Input';
import Card from '../components/molecules/card/Card';
import GridTemplate from '../templates/GridTemplate';
import { ActionWithPayload } from '../store/action-with-payload.interface';
import placeholder from '../assets/icon-placeholder.png';
import { APP_HEADING, SEARCH_BY_SEED, CURRENT_SEED, ERROR_OCCURED } from '../constants';
import './main.scss';

const Main = (): ReactElement => {
  const dispatch = useDispatch();
  const currState = useSelector((state: TAppState) => state);
  const {
    users: {
      users: { results, fetched, error, page },
    },
    seed: { currentSeed },
  } = currState;
  const [searchValue, setSearchValue] = useState<string>(currentSeed);
  const searchedValue = useDebounce(searchValue, 1000);
  const [setRef, visible] = useVisible();

  const callback = (): ActionWithPayload<IUserActionPayload> => {
    return dispatch(getUsersAction(currentSeed, page + 1, true));
  };

  const savedCallback = useRef<typeof callback>(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (visible) {
      savedCallback.current();
    }
  }, [savedCallback, visible]);

  useEffect(() => {
    dispatch(getUsersAction(currentSeed, 1));
  }, [currentSeed, dispatch]);

  useEffect(() => {
    dispatch(setSeedAction(searchedValue));
  }, [searchedValue, dispatch]);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setSearchValue(e.target.value);
    }
  };

  const userCard = ({ name: { title, first, last }, location, picture }: IUser) => {
    return (
      <Card
        src={picture.large}
        alt={`${first}-${last}`}
        title={title}
        first={first}
        last={last}
        location={location.country}
      />
    );
  };

  const placeholderCard = () => {
    return <Card src={placeholder} alt="" title="-" first="" last="" location="-" />;
  };

  return (
    <>
      <Header>
        <Heading text={APP_HEADING} />
      </Header>
      <main className="content">
        <div className="search">
          <Input name="search" type="text" placeholder={SEARCH_BY_SEED} onChange={handleSearchInputChange} />
          <Caption variant="big" text={`${CURRENT_SEED} ${currentSeed}`} />
        </div>
        {error && <div>{ERROR_OCCURED}</div>}
        {!fetched && <GridTemplate>{Array.from(Array(15)).map(placeholderCard)}</GridTemplate>}
        {fetched && results.length && <GridTemplate>{results.map(userCard)}</GridTemplate>}
        {fetched && results.length && <div ref={setRef} className="loader" />}
      </main>
    </>
  );
};

export default Main;
