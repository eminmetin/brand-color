import { useContext, useEffect, useState } from 'react';
import MainContext from '../MainContext';
import { SlClose } from 'react-icons/sl';
import { MdFileDownload } from 'react-icons/md';
import { FaLink } from 'react-icons/fa';

function Download() {
  const { selectedBrands, brands, setSelectedBrands } = useContext(MainContext);
  const [downloadURL, setDownloadURL] = useState();
  const [cssMethod, setCssMethod] = useState('css');

  useEffect(() => {
    if (selectedBrands.length > 0) {
      let output = '';

      switch (cssMethod) {
        case 'css':
          output += `:root {\n`;
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `--${slug}--${key}: #${color};\n`;
            });
          });
          output += '}';
          break;
        case 'scss':
          output += `:root {\n`;
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `\$${slug}--${key}: #${color};\n`;
            });
          });
          output += '}';
          break;
        case 'less':
          output += `:root {\n`;
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `@${slug}--${key}: #${color};\n`;
            });
          });
          output += '}';
          break;
      }
      const blob = new Blob([output]);
      const url = URL.createObjectURL(blob);
      setDownloadURL(url);
      return () => {
        URL.revokeObjectURL(output);
        setDownloadURL('');
      };
    }
  }, [selectedBrands, cssMethod]);

  const getLink = () => {
    prompt(
      "Here/'s the URL to share",
      `http://localhost:5173/collection/${selectedBrands.join()}`
    );
  };
  return (
    <div className='download'>
      <div className='actions'>
        <select
          onChange={(e) => {
            setCssMethod(e.target.value);
          }}
        >
          <option value='css'>CSS</option>
          <option value='scss'>SCSS</option>
          <option value='less'>LESS</option>
        </select>
        <a download={`brands.${cssMethod}`} href={downloadURL}>
          <MdFileDownload />
        </a>
        <button
          onClick={() => {
            getLink();
          }}
        >
          <FaLink />
        </button>
      </div>
      <div className='selected'>
        <button
          onClick={() => {
            setSelectedBrands([]);
          }}
        >
          <SlClose />
        </button>
        {selectedBrands.length} brands collected
      </div>
    </div>
  );
}

export default Download;
