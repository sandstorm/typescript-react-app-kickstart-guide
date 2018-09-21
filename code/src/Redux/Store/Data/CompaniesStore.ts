import {ActionsUnion, createAction, ofType} from '@martin_hotell/rex-tils';
import {ActionsObservable, combineEpics, Epic} from 'redux-observable';
import {ajax} from 'rxjs/ajax';
import {delay, map, mergeMap} from 'rxjs/operators';

import {ApplicationState} from '..';
import {Company} from '../../../Domain/Company';
import {companies as defaultCompanies} from '../../../Domain/mockData';

//
// State
//
export interface CompaniesState {
  readonly rawApiData: ReadonlyArray<Company>;
  readonly selectedCompanyId?: string;
}

const initialState: CompaniesState = {
  rawApiData: defaultCompanies,
  selectedCompanyId: undefined,
};

//
// Actions
//
export enum ActionTypes {
  FETCH_COMPANIES = '@@salt-solutions/Data/Companies/FETCH_COMPANIES',
  SET_COMPANIES = '@@salt-solutions/Data/Companies/SET_COMPANIES',
  SELECT_COMPANY = '@@salt-solutions/Data/Companies/SELECT_COMPANY',
}

export const actions = {
  fetchCompanies: () => createAction(ActionTypes.FETCH_COMPANIES),
  selectCompany: (companyId?: string) => createAction(ActionTypes.SELECT_COMPANY, {companyId}),
  setCompanies: (companies: ReadonlyArray<Company>) => createAction(ActionTypes.SET_COMPANIES, {companies}),
};

type CompaniesAction = ActionsUnion<typeof actions>;

//
// Reducer
//
export function reducer(state: CompaniesState = initialState, action: CompaniesAction): CompaniesState {
  switch (action.type) {
    case ActionTypes.SELECT_COMPANY:
      return {...state, selectedCompanyId: action.payload.companyId};
    case ActionTypes.SET_COMPANIES:
      return {...state, rawApiData: action.payload.companies};
    case ActionTypes.FETCH_COMPANIES: // handled by epic
    default:
      return state;
  }
}

//
// Selectors
//
const companiesSelector = (state: ApplicationState) => state.Data.Companies.rawApiData;
const selectedCompanyIdSelector = (state: ApplicationState) => state.Data.Companies.selectedCompanyId;

export const selectors = {
  companies: companiesSelector,
  selectedCompanyId: selectedCompanyIdSelector,
};

//
// Async action handlers (Epics, Sagas, etc)
//
const fetchCompaniesEpic: Epic<CompaniesAction> = (actions$: ActionsObservable<CompaniesAction>) => actions$
  .pipe(
    ofType(ActionTypes.FETCH_COMPANIES),
    delay(1000),
    mergeMap(action =>
      ajax.getJSON('/api/endpoint').pipe(
        map(response => actions.setCompanies([]))
      )
    )
  );

export const epics = combineEpics(
  fetchCompaniesEpic,
);
