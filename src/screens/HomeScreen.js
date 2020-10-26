import React, { useState, useEffect } from 'react';
import useFirestore from '../hooks/useFirestore';
import Pagination from '../components/Pagination';

const HomeScreen = () => {
  const { docs } = useFirestore('users');

  const [sortBy, setSortBy] = useState('fullName');
  const [keyword, setKeyword] = useState('');
  const [searchBy, setSearchBy] = useState('fullName');
  const [currentDocs, setCurrentDocs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [docsPerPage, setDocsPerPage] = useState(5);

  // Get current docs
  const indexOfLast = currentPage * docsPerPage;
  const indexOfFirst = indexOfLast - docsPerPage;
  const paginatedDocs = currentDocs.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    if (docs) {
      // Sort by
      let newDocs = handleSortBy(sortBy, docs);

      // Search
      newDocs = handleSearchBy(searchBy, keyword, newDocs);
      if (currentPage > Math.ceil(newDocs.length / docsPerPage)) {
        setCurrentPage(1);
      }

      setCurrentDocs([...newDocs]);
    }
  }, [sortBy, docs, searchBy, keyword, currentPage, docsPerPage]);

  // Sort by handler
  const handleSortBy = (sortBy, docs) => {
    return docs.sort((a, b) => {
      if (sortBy === 'fullName' || sortBy === 'country' || sortBy === 'state') {
        var nameA = a[sortBy].toUpperCase();
        var nameB = b[sortBy].toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      } else {
        return b[sortBy] - a[sortBy];
      }
    });
  };

  // Search by handler
  const handleSearchBy = (searchBy, keyword, docs) => {
    return docs.filter((doc) =>
      doc[searchBy].toLowerCase().includes(keyword.toLowerCase())
    );
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='home-screen'>
      <header className='home-header'>
        <h1>Users Data</h1>
      </header>
      <div className='container'>
        <div className='search-bar'>
          <div className='search-bar-wrapper'>
            <div className='search-group'>
              <label className='search-label'>Search By:</label>
              <select onChange={(e) => setSearchBy(e.target.value)}>
                <option value='fullName' defaultValue>
                  Full Name
                </option>
                <option value='state'>State</option>
                <option value='country'>Country</option>
              </select>
            </div>
            <div className='search-group'>
              <label className='search-label'>Keyword:</label>
              <input
                type='text'
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <div className='search-group'>
              <label className='search-label'>Sort By:</label>
              <select onChange={(e) => setSortBy(e.target.value)}>
                <option value='fullName' defaultValue>
                  Full Name
                </option>
                <option value='balance'>Balance</option>
                <option value='isActive'>Is Active</option>
                <option value='registered'>Is Registered</option>
                <option value='state'>State</option>
                <option value='country'>Country</option>
              </select>
            </div>
            <div className='search-group'>
              <label className='search-label'>Limit:</label>
              <select onChange={(e) => setDocsPerPage(e.target.value)}>
                <option value='5' defaultValue>
                  5
                </option>
                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
              </select>
            </div>
          </div>
        </div>

        <Pagination
          docsPerPage={docsPerPage}
          totalDocs={currentDocs.length}
          paginate={paginate}
          currentPage={currentPage}
        />

        <div className='table-wrapper'>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Balance</th>
                <th>Is Active</th>
                <th>Registered</th>
                <th>State</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {paginatedDocs &&
                paginatedDocs.length > 0 &&
                paginatedDocs.map((user) => (
                  <tr key={user.id}>
                    <td>{user.fullName}</td>
                    <td>{user.balance}</td>
                    <td>
                      {user.isActive ? (
                        <i
                          className='fas fa-check'
                          style={{ color: 'green' }}
                        ></i>
                      ) : (
                        <i
                          className='fas fa-times'
                          style={{ color: 'red' }}
                        ></i>
                      )}
                    </td>
                    <td>
                      {user.registered ? (
                        <i
                          className='fas fa-check'
                          style={{ color: 'green' }}
                        ></i>
                      ) : (
                        <i
                          className='fas fa-times'
                          style={{ color: 'red' }}
                        ></i>
                      )}
                    </td>
                    <td>{user.state}</td>
                    <td>{user.country}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
