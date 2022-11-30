import { createEffect, createSignal } from 'solid-js';
import StyledSquare from './Square.style';

export type SquareProps = {
    x: number;
    y: number;
    active: boolean;
    mouseDown: boolean;
    lastAction: boolean;
    onClick: (x:number, y:number, active:boolean) => void;
}

const Square = (props: SquareProps) => {
    const [active, setActive] = createSignal(false);

    createEffect(() => {
        if (props.active !== active()) setActive(props.active);
    });

    const onClick = () => {
        props.onClick(props.x, props.y, !active());
        setActive(!active());
    }

    const onMouseOver = () => {
        if (props.mouseDown) {
            props.onClick(props.x, props.y, props.lastAction);
            setActive(props.lastAction);
        }
    }

    return (
        <StyledSquare onmouseover={onMouseOver} x={props.x} y={props.y} active={props.active !== undefined ? props.active : active()} onmousedown={onClick}></StyledSquare>
    );
}

export default Square;