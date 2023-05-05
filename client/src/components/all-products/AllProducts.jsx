import { useState } from 'react';
import { ButtonCard, ProductContainer } from './styled';
import Delete from '../delete/Delete';
import Modal from '../../modal/Modal';
import Edit from '../edit/Edit';

const AllProducts = ({ data, setFetchInfo }) => {
	const [content, setContent] = useState(null);

	{
		return (
			<>
				{data.map(product => {
					return (
						<ProductContainer key={product._id}>
							<h2>{product.name}</h2>
							<p>talla: {product.size}</p>
							<p>precio: {product.price}</p>
							<div>
								{' '}
								<ButtonCard
									onClick={() => setContent(<Edit setContent={setContent} />)}
								>
									editar
								</ButtonCard>
								<ButtonCard
									onClick={() =>
										setContent(
											<Delete
												setContent={setContent}
												setFetchInfo={setFetchInfo}
												currentId={product._id}
											/>
										)
									}
								>
									borrar
								</ButtonCard>
							</div>
						</ProductContainer>
					);
				})}
				<Modal>{content}</Modal>
			</>
		);
	}
};

export default AllProducts;
