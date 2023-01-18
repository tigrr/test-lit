import { h, render } from 'preact';
import { useLayoutEffect, useRef } from 'preact/hooks'
import './my-element'
import { MyElement } from './my-element';

const App = () => {
	const ref = useRef<MyElement>(null)

	useLayoutEffect(() => {
		console.log('Preact useLayoutEffect called')
		console.log(`Shadow root is ${
			ref.current?.shadowRoot ? 'attached' : 'NOT attached'
		}. Shadow DOM is ${
			ref.current?.shadowRoot?.innerHTML ? 'NOT empty' : 'empty'
		}`)
	}, [])

	return (
		<my-element ref={ref}>
			<h1>Vite + Lit</h1>
		</my-element>
	)
}

// render an instance of Clock into <body>:
render(<App />, document.body);

export {}
