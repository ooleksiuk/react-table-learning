// labels for each of columns
// ! mock data columns: email & age are intentionally ignored
export const COLUMNS = [
  {
    Header: 'Id',
    // map each column to a specific data value in the mock data.
    // Help react table identify what data goes under which column
    // in each row
    accessor: 'id',
  },
  {
    // rendered header title
    Header: 'First Name',
    // Json property name
    accessor: 'first_name',
  },
  {
    Header: 'Last Name',
    accessor: 'last_name',
  },
  {
    Header: 'Date of Birth',
    accessor: 'date_of_birth',
  },
  {
    Header: 'Country',
    accessor: 'country',
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
];
