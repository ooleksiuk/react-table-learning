import React, { useMemo } from 'react';
import { useTable, usePagination, useRowSelect } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import './table.css';
import { Checkbox } from './Checkbox';

export const Table = () => {
  // memorizes the rows & columns to
  // ensure that the data isn't recreated on every render [6:10]
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA.employees, []);

  // Primary hook: the starting point for every option and every plugin hook
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        // returns array of columns
        return [
          {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div className="checkbox-header">
                <Checkbox {...getToggleAllRowsSelectedProps()} />
              </div>
            ),
            Cell: ({ row }) => (
              <div className="checkbox-body">
                <Checkbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
        ];
      });
    }
  );


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    selectedFlatRows,
    // * Pagination *
    page,
    // helper functions for navigarion buttons:
    nextPage,
    previousPage,
    //  boolean properties: indicate whether you can go next or previous
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
  } = tableInstance;

  return (
    <div class="main-container ">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          &#9668;
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          &#9658;
        </button>
      </div>
      {/* checking selected rows feature*/}
      <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            '\t'
          )}
        </code>
      </pre>
    </div>
  );
};
