'use strict';

import styled from 'styled-components';
import { rem } from 'polished';

const Wrap = styled.div`
	background: #fff;
	border-radius: ${rem(5)};
	box-shadow: 0 0 5px #dedede;
	padding: ${rem(20)};
	position: absolute;
	right: 0;
	text-align: left;
	top: 0;
	transform: translateX(110%);
	width: 30vw;

	&:nth-of-type(2n) {
		left: 0;
		transform: translateX(-110%);
	}
`;

const Title = styled.p`
	font-weight: 700;
`;

export { Wrap, Title };
