const Create = ({ setContent }) => {
	return (
		<div>
			<div>
				<label htmlFor=''>producto</label>
				<input type='text' />
			</div>
			<button onClick={() => setContent(null)}>close</button>
		</div>
	);
};
export default Create;
