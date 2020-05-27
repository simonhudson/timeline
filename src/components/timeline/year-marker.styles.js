'use strict';

import styled, { css } from 'styled-components';
import { rem } from 'polished';

const Marker = styled.div`
	background: #fff;
	border: 5px solid #dfdfdf;
	border-radius: 100%;
	position: relative;
	text-align: center;
	z-index: 1;

	&:not(:last-of-type) {
		margin-bottom: ${rem(20)};
	}

	&:nth-of-type(2n) {
		.timeline__events {
			left: 0;
			position: absolute;
			top: 0;
			transform: translateX(-110%);
		}
	}

	${(props) =>
		props.hasItems &&
		css`
			border-color: ${({ theme }) => theme.palette.primary.a};
		`};
`;

const Button = styled.button`
	background: #fff;
	border: 0;
	border-radius: 100%;
	padding: ${rem(19)} ${rem(12)};
`;

export { Marker, Button };
