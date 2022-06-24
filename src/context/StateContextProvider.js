import { useContext, createContext, useState } from 'react';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
        searchTerm,
        setSearchTerm,
        data,
        setData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
