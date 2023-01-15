import { useMemo } from 'react';

import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';

import { useAppDispatch } from './useAppDispatch';

export const useActions = <T extends ActionCreatorsMapObject>(actions: T): T => {
  const dispatch = useAppDispatch();

  const bindActions = useMemo(() => {
    return bindActionCreators(actions, dispatch);
  }, []);

  return bindActions;
};
