import { useCallback, useState } from 'react';


export const useSearch = (initialState = null) => {
  const [ searchKeyword, setState ] = useState<string|null>(initialState);
  const searchByKeyword = useCallback(e => {
    if(typeof e !== 'string') {
      return setState(e.target.value);
    }
    return setState(e);
  }, []);

  return {
    searchKeyword,
    searchByKeyword,
  };
};


