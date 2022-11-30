import { styled } from 'solid-styled-components';

type ContainerProps = {
    width: number;
    height: number;
}

const StyledContainer = styled('div')`
    position: relative;
    width: ${(props:ContainerProps) => props.width*50}px;
    height: ${(props:ContainerProps) => props.height*50}px;
`;

export const StyledPage = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

export default StyledContainer;