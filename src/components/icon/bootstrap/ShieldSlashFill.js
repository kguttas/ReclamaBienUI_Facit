import * as React from 'react';

function SvgShieldSlashFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path
				fillRule='evenodd'
				d='M1.093 3.093c-.465 4.275.885 7.46 2.513 9.589a11.777 11.777 0 002.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 001.048-.625 11.32 11.32 0 001.733-1.525L1.093 3.093zm12.215 8.215L3.128 1.128A61.369 61.369 0 015.073.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 011.044 1.262c.483 3.626-.332 6.491-1.551 8.616zm.338 3.046l-13-13 .708-.708 13 13-.707.707z'
			/>
		</svg>
	);
}

export default SvgShieldSlashFill;