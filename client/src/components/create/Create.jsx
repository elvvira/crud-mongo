import { useState } from 'react';
import { ButtonCloseCreate, ButtonOk, CreateContainer } from './styled';

const Create = ({ setContent, setFetchInfo }) => {
	const [productInfo, setProductInfo] = useState({
		name: '',
		size: '',
		price: ''
	});
	return (
		<CreateContainer>
			<ButtonCloseCreate onClick={() => setContent(null)}>x</ButtonCloseCreate>
			<form onSubmit={e => handleSubmit(e, productInfo, setFetchInfo)}>
				<div>
					<label htmlFor=''>producto</label>
					<input
						type='text'
						onChange={e =>
							setProductInfo({ ...productInfo, name: e.target.value })
						}
					/>
				</div>
				<div>
					<label htmlFor=''>talla</label>
					<input
						type='text'
						onChange={e =>
							setProductInfo({ ...productInfo, size: e.target.value })
						}
					/>
				</div>
				<div>
					<label htmlFor=''>precio</label>
					<input
						type='text'
						onChange={e =>
							setProductInfo({ ...productInfo, price: e.target.value })
						}
					/>
				</div>
				<ButtonOk>ok</ButtonOk>
			</form>
		</CreateContainer>
	);
};

const handleSubmit = (e, productInfo, setFetchInfo) => {
	e.preventDefault();
	setFetchInfo({
		url: 'http://localhost:3000/api/products',
		options: {
			method: 'POST',
			body: JSON.stringify(productInfo),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		}
	});
	e.target.reset();
};
export default Create;
