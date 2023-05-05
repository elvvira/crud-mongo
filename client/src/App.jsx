import { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Modal from './modal/Modal';
import AllProducts from './components/all-products/AllProducts';
import Button from './components/button/Button';
import { useFetch } from './hooks/useFetch';

const App = () => {
	const [content, setContent] = useState(null);
	const { data, loading, error, setFetchInfo } = useFetch({
		url: 'http://localhost:3000/api/products'
	});
	if (loading) return <h2>loading</h2>;
	if (error) return <h2>Something worng...</h2>;
	return (
		<>
			<GlobalStyles />
			<h1>Products</h1>
			<AllProducts data={data} setFetchInfo={setFetchInfo} />
			<Button setContent={setContent} setFetchInfo={setFetchInfo}></Button>
			<Modal>{content}</Modal>
		</>
	);
};

export default App;
