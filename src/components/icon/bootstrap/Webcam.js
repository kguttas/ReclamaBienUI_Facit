import * as React from 'react';

function SvgWebcam(props) {
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
				d='M0 6a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 01-2 2H9.269c.144.162.33.324.531.475a6.785 6.785 0 00.907.57l.014.006.003.002A.5.5 0 0110.5 13h-5a.5.5 0 01-.224-.947l.003-.002.014-.007a4.473 4.473 0 00.268-.148 6.75 6.75 0 00.639-.421c.2-.15.387-.313.531-.475H2a2 2 0 01-2-2V6zm2-1a1 1 0 00-1 1v3a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H2z'
			/>
			<path
				fillRule='evenodd'
				d='M8 6.5a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0z'
			/>
			<path d='M13 7.5a.5.5 0 11-1 0 .5.5 0 011 0z' />
		</svg>
	);
}

export default SvgWebcam;
