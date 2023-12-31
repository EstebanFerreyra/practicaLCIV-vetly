import { Switch, Route } from 'wouter'
import { Layout } from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import UserPage from './pages/UserPage.jsx'
import ClientPaymentPage from './components/ClientPaymentPage.jsx'

function App () {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/user" component={UserPage} />
        <Route path="/clientpayment" component={ClientPaymentPage} />
        <Route>404 Not Found </Route>
      </Switch>
    </Layout>
  );
}

export default App
