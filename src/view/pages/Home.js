import React, { useEffect } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import UserList from '../../components/userList/UserList';
import Loader from '../../components/Loader/Loader';
import Header from '../../components/Header/Header';
import { useDebounce } from '../../utils/hooks/useDebounce';
import { useStateContext } from '../../context/StateContextProvider';
import { fetchUsers } from '../../api/github/Client';

const Home = () => {
  const { searchTerm, setData, setIsLoading } = useStateContext();
  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearch) {
      fetchGithubUsers(debouncedSearch);
    } else {
      setData([]);
    }
  }, [debouncedSearch]);

  function fetchGithubUsers(searchTerm) {
    setIsLoading(true);
    fetchUsers(searchTerm)
      .then((res) => {
        setData(res.items);
      })
      .catch((err) => {
        throw new Error(`${err.message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <main className="container">
      <Header />
      <SearchBar />
      <Loader />
      <UserList />
    </main>
  );
};

export default Home;
