import { styled } from 'solid-styled-components';

const StyledInput = styled('div')`
    display: inline-block;
    margin: 5px;

    & > * {
        display: inline-flex;
        height: 40px;
        vertical-align: middle;
        align-items: center;
        padding: 5px;
    }

    & > label {
        width: 60px;
        border: 1px solid gray;
        border-radius: 5px 0px 0px 5px;
        border-right: none;
        background-color: #EEE;
    }

    & > input {
        width: 60px;
        border: 1px solid gray;
        border-radius: 0px 5px 5px 0px;
        display: inline-block;
    }
`;

export default StyledInput;