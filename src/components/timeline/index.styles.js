'use strict';

import styled from 'styled-components';

const Wrap = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;

	&:after {
		background-color: #dfdfdf;
		content: '';
		display: block;
		height: 100%;
		left: center;
		position: absolute;
		top: 0;
		width: 3px;
		z-index: 0;
	}
`;

export { Wrap };
