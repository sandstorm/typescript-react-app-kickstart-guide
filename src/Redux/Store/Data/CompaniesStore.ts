import {ActionsUnion, createAction, ofType} from '@martin_hotell/rex-tils';
import {ActionsObservable, combineEpics, Epic} from 'redux-observable';
import {ajax} from 'rxjs/ajax';
import {delay, map, mergeMap} from 'rxjs/operators';

import {IApplicationState} from '..';
import ICompany from '../../../Domain/Company';
import {companies as defaultCompanies} from '../../../Domain/mockData';

export interface ICompaniesState {
  readonly rawApiData: ReadonlyArray<ICompany>;
  readonly selectedCompanyId?: string;
}

const initialState: ICompaniesState = {
  rawApiData: defaultCompanies,
  selectedCompanyId: undefined,
};

export enum ActionTypes {
  FETCH_COMPANIES = '@@salt-solutions/Data/Companies/FETCH_COMPANIES',
  SET_COMPANIES = '@@salt-solutions/Data/Companies/SET_COMPANIES',
  SELECT_COMPANY = '@@salt-solutions/Data/Companies/SELECT_COMPANY',
}

export const actions = {
  fetchCompanies: () => createAction(ActionTypes.FETCH_COMPANIES),
  selectCompany: (companyId?: string) => createAction(ActionTypes.SELECT_COMPANY, {companyId}),
  setCompanies: (companies: ReadonlyArray<ICompany>) => createAction(ActionTypes.SET_COMPANIES, {companies}),
};

type CompaniesActions = ActionsUnion<typeof actions>;

export function reducer(state: ICompaniesState = initialState, action: CompaniesActions): ICompaniesState {
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

const companiesSelector = (state: IApplicationState) => state.Data.Companies.rawApiData;
const selectedCompanyIdSelector = (state: IApplicationState) => state.Data.Companies.selectedCompanyId;

export const selectors = {
  companies: companiesSelector,
  selectedCompanyId: selectedCompanyIdSelector,
};

const fetchCompaniesEpic: Epic<CompaniesActions> = (actions$: ActionsObservable<CompaniesActions>) => actions$
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
