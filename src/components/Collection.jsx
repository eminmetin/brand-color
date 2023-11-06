import { Link, useParams, useNavigate } from 'react-router-dom';
import Download from './Download';
import LazyLoad from 'react-lazy-load';
import Brand from './Brand';
import MainContext from '../MainContext';
import { useContext, useEffect } from 'react';
import { GrLinkPrevious } from 'react-icons/gr';

function Collection() {
  const { slugs } = useParams();
  let history = useNavigate();
  const { setSelectedBrands, selectedBrands, brands } = useContext(MainContext);

  useEffect(() => {
    setSelectedBrands(slugs.split(','));
  }, []);

  const clearSelectedBrands = () => {
    setSelectedBrands([]);
    history.push('/');
  };
  return (
    <main className='content'>
      <header className='header'>
        <Link to='/'>
          <button className='back-btn' onClick={clearSelectedBrands}>
            <GrLinkPrevious />
            All Brands
          </button>
        </Link>
        {selectedBrands.length > 0 && <Download />}
      </header>
      <section className='brands'>
        {selectedBrands.map((slug, index) => {
          let brand = brands.find((brand) => brand.slug === slug);
          return (
            <LazyLoad
              placeholder='Yükleniyor'
              once={true}
              overflow={true}
              key={index}
            >
              <Brand key={index} brand={brand} />
            </LazyLoad>
          );
        })}
      </section>
    </main>
  );
}

export default Collection;
