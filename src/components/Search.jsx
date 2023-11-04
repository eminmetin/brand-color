import { BsSearch } from 'react-icons/bs';
import MainContext from '../MainContext';
import { useContext } from 'react';
function Search() {
  const { search, setSearch } = useContext(MainContext);
  return (
    <div className='search'>
      <div className='icon'>
        <BsSearch />
      </div>
      <input
        type='text'
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder='Search Brand'
      />
    </div>
  );
}

export default Search;
