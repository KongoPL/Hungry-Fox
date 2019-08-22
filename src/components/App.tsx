import React from 'react';
import Layout from 'components/Layout';

import Menu from 'components/menu/Menu';
import Coupons from 'components/coupons/Coupons';
import Staff from 'components/staff/Staff';
import Partners from 'components/partners/Partners';
import Contact from 'components/contact/Contact';
import Job from 'components/job/Job';

import {
	BrowserRouter as Router,
	Route,
    BrowserRouter
} from 'react-router-dom';


const App: React.FC = () => {

	return (
		<BrowserRouter>
			<Layout>
				<Route exact path="/" component={Menu} />
				<Route exact path="/menu" component={Menu} />
				<Route exact path="/coupons" component={Coupons} />
				<Route exact path="/staff" component={Staff} />
				<Route exact path="/partners" component={Partners} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/job" component={Job} />
				<Route exact path="/job/:id" component={Job} />
			</Layout>
		</BrowserRouter>
	);
}

export default App;
