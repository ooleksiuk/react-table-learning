// labels for each of columns
export const COLUMNS = [
  {
    Header: 'Name',
    // map each column to a specific data value in the mock data.
    // Help react table identify what data goes under which column
    // in each row
    accessor: 'firstName',
  },
  {
    // rendered header title
    Header: 'Last Name',
    // Json property name
    accessor: 'lastName',
  },
  {
    Header: 'Position',
    accessor: 'positionName',
  },
  {
    Header: 'Department',
    accessor: 'departmentName',
  },
  {
    Header: 'Age',
    accessor: 'age',
  },
  {
    Header: 'Salary',
    accessor: 'salaryAnnual',
    Cell: (props) => <div> toCurrency(props.value) </div>,
  },
  {
    Header: 'Employment time',
    accessor: 'employmentTime',
  },
];
