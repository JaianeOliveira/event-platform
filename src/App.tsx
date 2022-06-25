import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { client } from './lib/apollo';
import { Event } from './pages';
import Router from './router';

const App = () => (
	<ApolloProvider client={client}>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</ApolloProvider>
);
export default App;
