import styled from 'styled-components';

const CreateContainer = styled.div`
	margin-top: 1rem;
	width: 220px;
	height: 250px;
	background-color: pink;
	border: 2px solid red;
	border-radius: 2rem;
	padding: 2rem;
	font-weight: bold;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	position: relative;
	top: -70px;
	align-items: center;
`;
const ButtonCloseCreate = styled.button`
	border-radius: 100%;
	width: 30px;
	height: 30px;
	background-color: red;
	border: transparent;
	position: absolute;
	top: 0;
	right: 0;
	color: white;
`;
const ButtonOk = styled.button`
	border-radius: 3rem;
	color: white;
	background-color: green;
	border: transparent;
	width: 40px;
	height: 30px;
`;
export { CreateContainer, ButtonCloseCreate, ButtonOk };
