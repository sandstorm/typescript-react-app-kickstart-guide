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

export default () => columns.map((column) => Object.assign({}, globalColumnOptions, column));
