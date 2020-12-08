import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Hello from '../hello';
import Clock from '../Clock/clock';
import Login from '../loginInOut/control';

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
        </ul>
        <hr/>
        <Route path="/" component={Hello} />
        <Route path="/clock" component={Clock} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  )
}

export default Setup;