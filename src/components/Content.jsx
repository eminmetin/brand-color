import Search from './Search';
import Brand from './Brand';
import MainContext from '../MainContext';
import { useContext } from 'react';
import LazyLoad from 'react-lazy-load';
import Download from './Download';
function Content() {
  const { brands, selectedBrands } = useContext(MainContext);
  return (
    <main className='content'>
      <header className='header'>
        <Search />
        {selectedBrands.length > 0 && <Download />}
      </header>
      <section className='brands'>
        {brands.map((brand, index) => (
          <LazyLoad threshold={1} height={120} key={index}>
            <Brand brand={brand} />
          </LazyLoad>
        ))}
      </section>
    </main>
  );
}

export default Content;
