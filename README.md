
## 🚀 React Click Outside Handler
Simple Modal close handler while clicking outside of the modal

# installation

```
npm i react-use-click-outside-hook
```

# Example

```jsx
import { useState } from 'react'
import useClickOutside from "react-use-click-outside-hook"
import './App.css'


function App() {
	const [isOpen, setOpen] = useState(false)

	const Modal = () => {
		const handler = () => setOpen(false)

		const modalRef = useClickOutside(handler, "modal-parent-id")

		return (
			<div className="modal" ref={modalRef}>
				<h1>Modal</h1>
				<p>click outside to close this modal</p>
			</div>
		)
	}

	return (
		<div className="wrapper">
			{isOpen && (
				<Modal />
			)}
			<button onClick={e => setOpen(!isOpen)} id="modal-parent-id">
				{isOpen ? "Close" : "Open"}
			</button>
		</div>
	)
}
```


## For more examples

- [@socialwaves-react](https://github.com/safwantaliparamba/socialwaves-react/blob/master/src/components/includes/home/includes/LeftSideBar.jsx#L146)
