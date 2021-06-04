// labels for each of columns
export const COLUMNS = [
  {
    Header: () => <div className="left-aligned-cell">Name </div>,
    // map each column to a specific data value in the mock data.
    // Help react table identify what data goes under which column
    // in each row
    accessor: 'firstName',
    align: 'left',
    Cell: (row) => <div className="left-aligned-cell">{row.value}</div>,
  },
  {
    // rendered header title
    Header: () => <div className="left-aligned-cell">Last Name</div>,
    // Json property name
    accessor: 'lastName',
    Cell: (row) => <div className="left-aligned-cell">{row.value}</div>,
  },
  {
    Header: () => <div className="left-aligned-cell">Position</div>,
    accessor: 'positionName',
    Cell: (row) => <div className="left-aligned-cell">{row.value}</div>,
  },
  {
    Header: () => <div className="left-aligned-cell">Department</div>,
    accessor: 'departmentName',
    Cell: (row) => <div className="left-aligned-cell">{row.value}</div>,
  },
  {
    Header: 'Age',
    accessor: 'age',
    Cell: (row) => <div className="center-aligned-cell">{row.value}</div>,
  },
  {
    Header: () => <div className="right-aligned-cell">Salary</div>,
    accessor: 'salaryAnnual',
    Cell: (row) => <div className="right-aligned-cell">{row.value}</div>,
  },
  {
    Header: () => <div className="left-aligned-cell">Employment time</div>,
    accessor: 'employmentTime',
    Cell: (row) => <div className="left-aligned-cell">{row.value}</div>,
  },
];
