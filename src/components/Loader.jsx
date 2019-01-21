import React from 'react';
import ReactLoading from 'react-loading';

const Loader = ({ type, color, height, width }) => (
	<ReactLoading type={type} color={color} height={height || '10%'}  width={width || '10%'} />
);

export default Loader;