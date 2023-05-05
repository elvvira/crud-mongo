import {
	ButtonCloseDelete,
	ButtonDeleteFinal,
	ContainerDelete
} from './styled';

const Delete = ({ setContent, setFetchInfo }) => {
	return (
		<ContainerDelete>
			<div>¿deseas eliminar el producto definitivamente?</div>
			<div>
				<ButtonCloseDelete onClick={() => setContent(null)}>
					close
				</ButtonCloseDelete>
				<ButtonDeleteFinal onClick={() => DeleteProduct(setFetchInfo)}>
					borrar
				</ButtonDeleteFinal>
			</div>
		</ContainerDelete>
	);
};

const DeleteProduct = setFetchInfo => {};
export default Delete;
