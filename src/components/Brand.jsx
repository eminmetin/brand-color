import { useContext, useState } from 'react';
import MainContext from '../MainContext';
import { getContrastYIQ } from '../helpers';
import Clipboard from 'react-clipboard.js';
/* eslint-disable react/prop-types */
function Brand({ brand }) {
  const { selectedBrands, setSelectedBrands, setCopied } =
    useContext(MainContext);
  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  const setColor = (color) => {
    setCopied(color);
  };
  return (
    <div
      className={`brand ${
        selectedBrands.includes(brand.slug) ? 'selected' : ''
      } `}
    >
      <h5 onClick={toggleSelected}>{brand.title}</h5>
      <div className='brand-colors'>
        {brand.colors.map((color, index) => (
          <Clipboard
            onSuccess={() => setColor(color)}
            data-clipboard-text={color}
            component='span'
            style={{
              '--bgColor': `#${color}`,
              '--textColor': `${getContrastYIQ(color)}`,
            }}
            key={index}
          >
            {color}
          </Clipboard>
        ))}
      </div>
    </div>
  );
}

export default Brand;
