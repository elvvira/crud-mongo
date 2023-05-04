import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
	if (!children) return;
	return createPortal(<>{children}</>, document.getElementById('modal'));
};

export default Modal;
