import { styled } from 'solid-styled-components';

import type { SquareProps } from './Square';

const StyledSquare = styled('div')`
    ${(props: SquareProps) => props.active ? 'background-color: black;' : ''}
    position: absolute;
    bottom: ${props => (props.y-1)*50}px;
    left: ${props => (props.x-1)*50}px;
    width: 50px;
    height: 50px;
    border: 1px solid black;
`;

export default StyledSquare;