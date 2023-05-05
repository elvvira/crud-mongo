import Create from '../create/Create';
import { StyledButton } from './styled';

const Button = ({ setContent, setFetchInfo }) => {
	return (
		<StyledButton
			onClick={() =>
				setContent(
					<Create setContent={setContent} setFetchInfo={setFetchInfo} />
				)
			}
		>
			crear +
		</StyledButton>
	);
};
export default Button;
