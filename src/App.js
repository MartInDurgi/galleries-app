import './App.css';
import Navigaton from './components/Navigation';
import UserProvider from './providers/UserProvider';
import Router from './router';

function App() {
  return (
    <UserProvider>
      <Navigaton />
      <Router />
    </UserProvider>

  )
}

export default App;
