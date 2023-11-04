import { getContrastYIQ } from '../helpers';

// eslint-disable-next-line react/prop-types
function Copied({ color }) {
  return (
    <div
      className='copied'
      style={{
        '--bgColor': `#${color}`,
        '--textColor': `${getContrastYIQ(color)}`,
      }}
    >
      Copied to #{color} clipboard
    </div>
  );
}

export default Copied;
