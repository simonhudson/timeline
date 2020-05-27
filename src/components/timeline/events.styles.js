'use strict';

import styled from 'styled-components';
import { rem } from 'polished';

const Wrap = styled.div`
	background: #fff;
	border-radius: ${rem(5)};
	box-shadow: 0 0 5px #dedede;
	left: 0;
	padding: ${rem(20)};
	position: absolute;
	text-align: left;
	top: 0;
	transform: translateX(110%);
	width: 30vw;
`;

const Title = styled.p`
	font-weight: 700;
`;

export { Wrap, Title };
