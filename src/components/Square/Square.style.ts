import { styled } from 'solid-styled-components';

type StyledSquareProps = {
    x: number;
    y: number;
    size: number;
    active: boolean;
    onmousedown: () => void;
    onmouseover: () => void;
}

const StyledSquare = styled('div')`
    ${(props: StyledSquareProps) => props.active ? 'background-color: black;' : ''}
    position: absolute;
    bottom: ${(props: StyledSquareProps) => (props.y-1)*props.size}px;
    left: ${(props: StyledSquareProps) => (props.x-1)*props.size}px;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border: 1px solid black;
`;

export default StyledSquare;