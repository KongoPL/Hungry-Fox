import React from 'react';
import Layout from 'pages/Layout';

import Menu from 'pages/menu/Menu';
import Coupons from 'pages/coupons/Coupons';
import Staff from 'pages/staff/Staff';
import Partners from 'pages/partners/Partners';
import Contact from 'pages/contact/Contact';
import Job from 'pages/job/Job';
import Summary from 'pages/summary/Summary';
import SummaryConfirmation from 'pages/summaryConfirmation/SummaryConfirmation';
import PageNotFound from 'pages/pageNotFound/PageNotFound';


import {
	BrowserRouter,
	Switch,
	Route
} from 'react-router-dom';
import Cart from 'Cart';


const App: React.FC = () =>
{
	setTimeout( () => Cart.init(), 0 );

	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Menu} />
					<Route exact path="/coupons" component={Coupons} />
					<Route exact path="/staff" component={Staff} />
					<Route exact path="/partners" component={Partners} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/job" component={Job} />
					<Route exact path="/job/:id" component={Job} />
					<Route exact path="/summary" component={Summary} />
					<Route exact path="/summaryConfirmation" component={SummaryConfirmation} />

					<Route component={PageNotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
