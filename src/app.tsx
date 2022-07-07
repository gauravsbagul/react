import { ClickCounter } from './ClickCounter';

export const App = () => {
	const name = "gaurav"
	return (
		<>
			<h1>
				Hello World edited- {name}</h1>
			<ClickCounter />
		</>
	);
};
