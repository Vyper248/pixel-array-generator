import { styled } from 'solid-styled-components';

type StyledSquareProps = {
    x: number;
    y: number;
    active: boolean;
    onmousedown: () => void;
    onmouseover: () => void;
}

const StyledSquare = styled('div')`
    ${(props: StyledSquareProps) => props.active ? 'background-color: black;' : ''}
    position: absolute;
    bottom: ${(props: StyledSquareProps) => (props.y-1)*50}px;
    left: ${(props: StyledSquareProps) => (props.x-1)*50}px;
    width: 50px;
    height: 50px;
    border: 1px solid black;
`;

export default StyledSquare;