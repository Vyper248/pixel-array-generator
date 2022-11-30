import { styled } from 'solid-styled-components';

type ContainerProps = {
    width: number;
    height: number;
    size: number;
}

const StyledContainer = styled('div')`
    position: relative;
    width: ${(props:ContainerProps) => props.width*props.size}px;
    height: ${(props:ContainerProps) => props.height*props.size}px;
`;

export const StyledPage = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

export default StyledContainer;