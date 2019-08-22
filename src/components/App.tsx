import React from 'react';
import Layout from 'components/Layout';

import Menu from 'components/menu/Menu';
import Coupons from 'components/coupons/Coupons';
import Staff from 'components/staff/Staff';
import Partners from 'components/partners/Partners';
import Contact from 'components/contact/Contact';
import Job from 'components/job/Job';
import Summary from 'components/summary/Summary';
import SummaryConfirmation from 'components/summaryConfirmation/SummaryConfirmation';
import PageNotFound from 'components/pageNotFound/PageNotFound';

import {
	BrowserRouter,
	Switch,
	Route} from 'react-router-dom';


const App: React.FC = () => {

	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Menu} />
					<Route exact path="/menu" component={Menu} />
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
