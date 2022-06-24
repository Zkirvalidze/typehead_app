import React from 'react';
import NoResult from './noResult/NoResult';
import UserItem from './UserItem/UserItem';
import { useStateContext } from '../../context/StateContextProvider';

const UserList = () => {
  const { data, isLoading, searchTerm } = useStateContext();

  return (
    <div>
      <NoResult />
      {searchTerm &&
        data &&
        !isLoading &&
        data.slice(0, 10).map((user) => <UserItem key={user.id} user={user} />)}
    </div>
  );
};

export default UserList;
