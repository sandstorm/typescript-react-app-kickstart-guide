const globalColumnOptions = {
  resizable: true,
};

const columns: ReadonlyArray<any> = [
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

export default () => columns.map((column) => Object.assign({}, globalColumnOptions, column));
