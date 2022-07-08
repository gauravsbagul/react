import { useState } from 'react';
import { useDrag } from 'react-dnd';

export const ClickCounter = () => {
	const [count, setCount] = useState(0);
	const [{ isDragging }, drag] = useDrag(() => ({
		type: 'Button',
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));
	return (
		<div
			ref={drag}
			style={{
				opacity: isDragging ? 0.5 : 1,
				fontSize: 25,
				fontWeight: 'bold',
				cursor: 'move',
			}}
		>
			<button onClick={() => setCount((c) => c + 1)}>Clicked {count} times</button>
		</div>
	);
};
