import { h, render } from 'preact';
import './my-element'

const App = () => {
	return (
		<my-element>
			<h1>Vite + Lit</h1>
		</my-element>
	)
}

// render an instance of Clock into <body>:
render(<App />, document.body);

export {}
