// eslint-disable-next-line no-unused-vars
import { Action, handleActions, createActions, Reducer } from 'redux-actions';
import { createSelector } from 'reselect';
import { Dispatch } from 'redux';
// API
import api from 'lib/api';

// INITIAL STATE
const initialState = {
  orders: null,
  loading: false,
  errorMessage: null,
};

// ACTIONS
const actions = createActions<IOrdersState>(
  'FETCH_ORDERS_REQUEST',
  'FETCH_ORDERS_SUCCESS',
  'FETCH_ORDERS_FAILURE',
);

const effects = {
  fetchOrders: () => async (dispatch: Dispatch<any>) => {
    try {
      await dispatch(actions.fetchOrdersRequest());
      const data = await api.getOrders();
      await dispatch(actions.fetchOrdersSuccess(data));
      return true;
    } catch (error) {
      dispatch(actions.fetchOrdersFailure(error.message));
      return new Promise(resolve => resolve(error.message));
    }
  },
};

const reducer: Reducer<IOrdersState, IOrdersState> = handleActions<
  IOrdersState,
  IOrdersState
>(
  {
    [actions.fetchOrdersRequest.toString()]: (state: IOrdersState) => ({
      ...state,
      loading: true,
    }),
    [actions.fetchOrdersSuccess.toString()]: (
      state: IOrdersState,
      { payload: orders }: Action<IOrdersState>,
    ) => ({
      ...state,
      orders,
      loading: false,
    }),
    // [actions.fetchOrdersFailure.toString()]: (
    //   state: IOrders,
    //   { payload: errorMessage }: Action<IOrders>,
    // ) => ({
    //   ...state,
    //   errorMessage,
    //   loading: false,
    // }),
    //     [actions.fetchOrdersFailure.toString()]: (
    //   state: IOrders,
    //   { payload: errorMessage }: Action<IOrders>,
    // ) => ({
    //   ...state,
    //   errorMessage,
    //   loading: false,
    // }),
    // [actions.fetchOrdersFailure.toString()]: (
    //   state: IOrders,
    //   { payload: errorMessage }: Action<IOrders>,
    // ) => ({
    //   ...state,
    //   errorMessage,
    //   loading: false,
    // }),
  },
  initialState,
);

const getState = (state: IOrdersState) => state.orders;
const getProps = (state: IOrdersState, props) => props;
const cs = (cb: any): any =>
  createSelector(
    [getState, getProps],
    cb,
  );

// $FlowFixMe
const selectors = {
  getOrders: cs((s: IOrdersState) => s.orders),
  getErrors: cs((s: IOrdersState) => s.errorMessage),
  getLoading: cs((s: IOrdersState) => s.loading),
};

export { initialState as state, actions, effects, reducer, selectors };
