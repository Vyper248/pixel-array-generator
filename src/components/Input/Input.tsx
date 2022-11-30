import { InputEvent } from '../../App';
import StyledInput from './Input.style';

type InputProps = {
    label: string;
    type: string;
    value: string | number;
    min: string;
    max: string;
    onChange: (e: InputEvent) => void;
}

const Input = (props: InputProps) => {
    return (
        <StyledInput>
            <label>{props.label}</label>
            <input {...props}/>
        </StyledInput>
    );
}

export default Input;