import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavouritesPage from './pages/Favourites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/layout'


function App() {
  return <Layout>
    
    <Switch>
    <Route path='/' exact>
      <AllMeetupsPage />
    </Route>
    <Route path='/favourites'>
      <FavouritesPage />
    </Route>
    <Route path='/new-meetup'>
      <NewMeetupPage />
    </Route>
    </Switch>
  </Layout>;
}

export default App;
