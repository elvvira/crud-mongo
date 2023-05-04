import { useEffect, useState } from 'react';
import { ButtonCard, ProductContainer } from './styled';

const AllProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getAllProducts(setProducts);
	}, []);
	if (products.length === 0) return <p>wait...</p>;

	{
		return products.map(product => {
			return (
				<ProductContainer key={product._id}>
					<h2>{product.name}</h2>
					<p>talla: {product.size}</p>
					<p>precio: {product.price}</p>
					<div>
						{' '}
						<ButtonCard>editar</ButtonCard>
						<ButtonCard>borrar</ButtonCard>
					</div>
				</ProductContainer>
			);
		});
	}
};

const fetchData = async (url, ...options) => {
	const request = await fetch(url, ...options);
	const data = await request.json();
	return data;
};

const getAllProducts = async setProducts => {
	const data = await fetchData('http://localhost:3000/api/products', {
		method: 'GET'
	});
	setProducts(data);
};
export default AllProducts;
