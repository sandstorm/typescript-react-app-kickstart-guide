import * as faker from 'faker';

import {Company} from './Company';
import {Employee} from './Employee';

export const companies = createCompaniesMockData(50);
export const employees = createEmployeesMockData(1000, companies.map((company) => company.id));

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
