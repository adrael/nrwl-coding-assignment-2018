import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';
import { IState } from '../reducers';

const getRouterState = createFeatureSelector<IState, RouterReducerState<any>>('router');

const { selectCurrentRoute, selectQueryParams, selectRouteParams, selectRouteData, selectUrl, selectQueryParam, selectRouteParam } = getSelectors(getRouterState);

export const routerSelectors = {
    selectCurrentRoute,
    selectQueryParams,
    selectQueryParam,
    selectRouteParams,
    selectRouteParam,
    selectRouteData,
    selectUrl
};
