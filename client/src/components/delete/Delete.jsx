import {
	ButtonCloseDelete,
	ButtonDeleteFinal,
	ContainerDelete
} from './styled';

const Delete = ({ setContent, setFetchInfo, currentId }) => {
	return (
		<ContainerDelete>
			<div>¿deseas eliminar el producto definitivamente?</div>
			<div>
				<ButtonCloseDelete onClick={() => setContent(null)}>
					close
				</ButtonCloseDelete>
				<ButtonDeleteFinal
					onClick={() => {
						DeleteProduct(setFetchInfo, currentId), setContent(null);
					}}
				>
					borrar
				</ButtonDeleteFinal>
			</div>
		</ContainerDelete>
	);
};

const DeleteProduct = (setFetchInfo, currentId) => {
	setFetchInfo({
		url: `http://localhost:3000/api/user/${currentId}`,
		options: {
			method: 'DELETE'
		}
	});
};
export default Delete;
