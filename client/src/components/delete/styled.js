import styled from 'styled-components';

const ContainerDelete = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgb(180, 180, 180);
	border: 2px solid red;
	font-weight: bold;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const Button = styled.button`
	border-radius: 2rem;
	padding: 0.3rem;
	border: transparent;
	width: 50px;
	margin-top: 0.5rem;
	margin-right: 0.5rem;
`;
const ButtonCloseDelete = styled(Button)`
	background-color: red;
`;
const ButtonDeleteFinal = styled(Button)`
	background-color: whtie;
`;
export { ContainerDelete, ButtonCloseDelete, ButtonDeleteFinal };
