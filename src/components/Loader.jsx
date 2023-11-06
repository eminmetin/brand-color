import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={103}
    viewBox='0 0 400 103'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='5' y='9' rx='3' ry='3' width='118' height='8' />
    <rect x='8' y='37' rx='0' ry='0' width='59' height='34' />
    <rect x='4' y='78' rx='0' ry='0' width='236' height='17' />
    <rect x='78' y='37' rx='0' ry='0' width='59' height='34' />
    <rect x='147' y='37' rx='0' ry='0' width='59' height='34' />
  </ContentLoader>
);

export default Loader;
