import { createEffect, createSignal, For } from 'solid-js';

import type { Component } from 'solid-js';

import StyledContainer, { StyledPage } from './App.style';

import Square from './components/Square/Square';
import Input from './components/Input/Input';

type Active = {
	[key: string]: boolean;
}

export interface InputEvent extends Event {
	currentTarget: HTMLInputElement;
	target: Element;
}

const initialObject = (width:number, height:number) => {
	let obj:Active = {};

	for (let i = 1; i <= width; i++) {
		for (let j = 1; j <= height; j++) {
			let key = `${i}-${j}`;
			obj[key] = false;
		}
	}

	return obj;
}

const App: Component = () => {
	const [width, setWidth] = createSignal(5);
	const [height, setHeight] = createSignal(7);
	const [size] = createSignal(50);
	const [mouseDown, setMouseDown] = createSignal(false);
	const [lastAction, setLastAction] = createSignal(true);
	const [activeObj, setActiveObj] = createSignal<Active>(initialObject(width(),height()));

	const activeArr = () => {
		return Object.keys(activeObj()).flatMap(key => {
			if (activeObj()[key]) return [key.split('-').map(Number)];
			else return [];
		});
	}

	const onClickSquare = (x:number, y:number, active:boolean) => {
		let currentActive = {...activeObj()};
		currentActive[`${x}-${y}`] = active;
		setActiveObj(currentActive);
		setLastAction(active);
	}

	const onClear = () => {
		setActiveObj(initialObject(width(), height()));
	}

	createEffect(() => {
		window.addEventListener('mousedown', () => {
			setMouseDown(true);
		});

		window.addEventListener('mouseup', () => {
			setMouseDown(false);
		});
	});
	
	const onChangeWidth = (e: InputEvent) => {
		let value = parseInt(e.currentTarget.value);
		setWidth(value);
		setActiveObj(initialObject(value, height()));
	}

	const onChangeHeight = (e: InputEvent) => {
		let value = parseInt(e.currentTarget.value);
		setHeight(value);
		setActiveObj(initialObject(width(), value));
	}

	const onCopy = () => {
		let text = '[' + activeArr().join('],[') + ']';
		navigator.clipboard.writeText(text);
	}

	return (
		<StyledPage>
			<div>
				<Input label='Width' type='number' value={width()} onChange={onChangeWidth} min='1' max='20'/>
				<Input label='Height' type='number' value={height()} onChange={onChangeHeight} min='1' max='20'/>
			</div>
			<p>Changing Width or Height will reset the grid.</p>
			<br/>
			<StyledContainer width={width()} height={height()} size={size()}>
				<For each={Object.keys(activeObj())}>
					{
						(coords) => {
							let [x,y] = coords.split('-').map(Number);
							let key = `${x}-${y}`;
							return <Square x={x} y={y} size={size()}
										mouseDown={mouseDown()} 
										lastAction={lastAction()} 
										active={activeObj()[key]} 
										onClick={onClickSquare}/>
						}
					}
				</For>
			</StyledContainer>
			<br/>
			<div id='arrayText'>[{activeArr().join('],[')}]</div>
			<br/>
			<div>
				<button onClick={onCopy}>Copy</button>&nbsp;
				<button onClick={onClear}>Clear</button>
			</div>
		</StyledPage>
	);
};

export default App;
