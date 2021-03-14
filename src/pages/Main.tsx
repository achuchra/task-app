import React, { ReactElement, useState, useEffect, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAction } from '../store/actions/user-actions';
import setSeedAction from '../store/actions/seed-actions';
import useDebounce from '../hooks/useDebounce';

import Heading from '../components/atoms/heading/Heading';
import Header from '../components/molecules/header/Header';
import Caption from '../components/atoms/caption/Caption';
import Input from '../components/atoms/input/Input';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/card/Card';

import { APP_HEADING, SEARCH_BY_SEED, CURRENT_SEED, ERROR_OCCURED } from '../constants';

const Main = (): ReactElement => {
  const dispatch = useDispatch();
  const currState = useSelector((state: TAppState) => state);
  const {
    users: {
      users: { results, fetching, fetched, error },
    },
    seed: { currentSeed },
  } = currState;
  const [searchValue, setSearchValue] = useState<string>(currentSeed);
  const searchedValue = useDebounce(searchValue, 1000);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setSearchValue(e.target.value);
    }
  };

  useEffect(() => {
    dispatch(getUsersAction(currentSeed, 1));
  }, [currentSeed, dispatch]);

  useEffect(() => {
    dispatch(setSeedAction(searchedValue));
  }, [searchedValue, dispatch]);

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

  return (
    <>
      <Header>
        <Heading text={APP_HEADING} />
      </Header>
      <Input name="search" type="text" placeholder={SEARCH_BY_SEED} onChange={handleSearchInputChange} />
      <Caption text={`${CURRENT_SEED} ${currentSeed}`} />
      {error && <div>{ERROR_OCCURED}</div>}
      {fetching && (
        <GridTemplate>
          {Array.from(Array(10)).map((item) => (
            <div>Placeholder</div>
          ))}
        </GridTemplate>
      )}
      {fetched && results.length && <GridTemplate>{results.map(userCard)}</GridTemplate>}
    </>
  );
};

export default Main;
