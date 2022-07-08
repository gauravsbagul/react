import { ClickCounter } from './ClickCounter';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

export const App = () => {
	const name = 'gaurav';
	return (
		<>
			<DndProvider backend={HTML5Backend}>
				<ClickCounter />
			</DndProvider>
		</>
	);
};
