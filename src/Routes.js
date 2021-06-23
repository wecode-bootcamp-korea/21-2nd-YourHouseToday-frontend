import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import Main from './Pages/Main/Main';
import Writing from './Pages/Writing/Writing';
import FeedDetail from './Pages/FeedDetail/FeedDetail';
import Login from './Pages/Login/Login';
import EditUserName from './Pages/Login/EditUserName';
import Signup from './Pages/SignUp/SignUp';
import Mypage from './Pages/Mypage/Mypage';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/postings" component={Main} />
          <Route exact path="/writing" component={Writing} />
          <Route exact path="/FeedDetail" component={FeedDetail} />
          <Route exact path="/FeedDetail/:id" component={FeedDetail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/editusername" component={EditUserName} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/mypage" component={Mypage} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}
export default Routes;
