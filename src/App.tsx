import { createEffect, createSignal, For } from 'solid-js';

import type { Component } from 'solid-js';

import StyledContainer, { StyledPage } from './App.style';

import Square from './components/Square/Square';

type Active = {
	[key: string]: boolean;
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
	const width = 5;
	const height = 7;
	const [mouseDown, setMouseDown] = createSignal(false);
	const [lastAction, setLastAction] = createSignal(true);
	const [activeObj, setActiveObj] = createSignal<Active>(initialObject(width,height));

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
		setActiveObj(initialObject(width, height));
	}

	createEffect(() => {
		window.addEventListener('mousedown', () => {
			setMouseDown(true);
		});

		window.addEventListener('mouseup', () => {
			setMouseDown(false);
		});
	});

	return (
		<StyledPage>
			<StyledContainer width={width} height={height}>
				<For each={Object.keys(activeObj())}>
					{
						(coords) => {
							let [x,y] = coords.split('-').map(Number);
							let key = `${x}-${y}`;
							return <Square x={x} y={y} mouseDown={mouseDown()} lastAction={lastAction()} active={activeObj()[key]} onClick={onClickSquare}/>
						}
					}
				</For>
			</StyledContainer>
			<br/>
			<div>[{activeArr().join('],[')}]</div>
			<br/>
			<button onClick={onClear}>Clear</button>
		</StyledPage>
	);
};

export default App;
