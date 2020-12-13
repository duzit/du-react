import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Hello from '../hello';
import Clock from '../Clock/clock';
import Login from '../loginInOut/control';
import helloRedux from '../redux';

const Setup = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Hello</Link>
          </li>
          <li>
            <Link to='/clock'>Clock</Link>
          </li>
          <li>
            <Link to='/login'>Loginout</Link>
          </li>
          <li>
            <Link to='/redux'>Redux</Link>
          </li>
        </ul>
        <hr/>
        <Route path="/" component={Hello} />
        <Route path="/clock" component={Clock} />
        <Route path="/login" component={Login} />
        <Route path="/redux" component={helloRedux} />
      </div>
    </Router>
  )
}

export default Setup;