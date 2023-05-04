import { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Modal from './modal/Modal';
import AllProducts from './components/all-products/AllProducts';
import Create from './components/create/Create';

const App = () => {
	const [content, setContent] = useState(null);

	return (
		<>
			<GlobalStyles />
			<h1>Products</h1>
			<AllProducts />
			<div>
				<button onClick={() => setContent(<Create setContent={setContent} />)}>
					crear
				</button>
			</div>
			<Modal>{content}</Modal>
		</>
	);
};

export default App;
