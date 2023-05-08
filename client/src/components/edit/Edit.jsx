const Edit = ({ setContent, setFetchInfo, currentId }) => {
	return (
		<div>
			<button onClick={() => setContent(null)}>close</button>
		</div>
	);
};

export default Edit;
