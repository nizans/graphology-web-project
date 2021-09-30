import AppContainer from 'components/common/AppContainer';
import ScrollToTop from 'components/common/ScrollToTop';
import { AuthContextProvider } from 'context/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppRoutes from 'routes/AppRoutes';

//TODO - implement all onClick and onHover functions on mobile/touchscreens.
//TODO - contents page -> api call should return contents and videos by default and should be a filter option.
//TODO - finish ImageUploadInput.js -> (img.full ??)

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <Switch>
          <AuthContextProvider>
            <AppContainer>
              <AppRoutes />
            </AppContainer>
          </AuthContextProvider>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
