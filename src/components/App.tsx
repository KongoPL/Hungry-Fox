import React from 'react';
import 'scss/components/App.scss';
import Layout from 'components/Layout';



const App: React.FC = () => {
	console.log(process.env);

	return (
		<Layout>
			<h1>Just some content :)</h1>
		</Layout>
	);
}

export default App;
