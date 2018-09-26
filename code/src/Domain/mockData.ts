import * as faker from 'faker';

import {Company} from './Company';
import {Employee} from './Employee';

const globalColumnOptions = {
  resizable: true,
};

const companyBaseColumns: ReadonlyArray<any> = [
  {
    key: 'id',
    locked: true,
    name: 'ID',
  },
  {
    editable: true,
    key: 'name',
    name: 'Company Name',
  },
  {
    editable: true,
    key: 'country',
    name: 'Country',
  },
  {
    editable: true,
    key: 'phone',
    name: 'Phone',
  },
];

const employeesBaseColumns: ReadonlyArray<any> = [
  {
    key: 'id',
    locked: true,
    name: 'ID',
  },
  {
    key: 'firstName',
    name: 'First Name',
  },
  {
    editable: true,
    key: 'lastName',
    name: 'Last Name',
  },
  {
    editable: true,
    key: 'jobTitle',
    name: 'Job Title',
  },
  {
    editable: true,
    key: 'email',
    name: 'E-Mail',
  },
];

function createCompaniesMockData(amount: number): ReadonlyArray<Company> {
  return new Array(amount)
    .fill(undefined)
    .map(
      (_, index) => ({
        country: faker.address.country(),
        id: faker.random.uuid(),
        name: faker.company.companyName(),
        phone: faker.phone.phoneNumber(),
      })
    );
}

function createEmployeesMockData(amount: number, companyIds: ReadonlyArray<string>): ReadonlyArray<Employee> {
  return new Array(amount)
    .fill(undefined)
    .map(
      (_, index) => ({
        companyId: companyIds[Math.max(0, Math.round(Math.random() * companyIds.length) - 1)],
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        id: index,
        jobTitle: faker.name.jobTitle(),
        lastName: faker.name.lastName(),
      })
    );
}

export const companyColumns = companyBaseColumns.map(column => ({...globalColumnOptions, ...column}));
export const employeesColumns = employeesBaseColumns.map(column => ({...globalColumnOptions, ...column}));

export const companies = createCompaniesMockData(50);
export const employees = createEmployeesMockData(1000, companies.map((company) => company.id));
