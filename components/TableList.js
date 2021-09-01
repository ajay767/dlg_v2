import React from 'react';

function TableList({ data }) {
  return (
    <div className="overflow-x-auto bg-white  shadow overflow-y-auto relative ">
      <table className="w-full whitespace-no-wrap">
        <thead>
          <tr className="bg-gray-200 text-left">
            {Object.keys(data[0]).map((head, index) => (
              <th
                className=" sticky top-0 border-b border-gray-200 bg-gray-100 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"
                key={index}
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((curr, index) => (
            <tr key={index} className="bg-gray-100 rounded overflow-hidden">
              {Object.keys(curr).map((key, index) => (
                <td
                  className="border-dashed border-t border-gray-200"
                  key={index}
                >
                  <span className="w-max text-gray-700 px-6 py-3 text-sm flex items-center">
                    {curr[key]}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableList;
