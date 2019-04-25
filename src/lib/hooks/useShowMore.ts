// @flow
import { useState } from 'react';

export default interface IHook {
    isOpen: boolean;
    toggleShowMore: () => void;
  }

export const useShowMore = (initialState: boolean = false): IHook => {
  const [isOpen, setState] = useState(initialState);
  const toggleShowMore = () => setState(!isOpen);

  return {
    isOpen,
    toggleShowMore,
  };
};