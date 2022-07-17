import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Hello from '../hello';
import Clock from '../Clock/clock';
import Login from '../loginInOut/control';
import helloRedux from '../redux';
import Combine from '../Combine';
import JSX from '../JSX'

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
          {/* Combine */}
          <li>
            <Link to='/Combine'>Combine 组合</Link>
          </li>
          <li>
            <Link to='/JSX'>JSX</Link>
          </li>
        </ul>
        <hr/>
        <Route path="/" component={Hello} />
        <Route path="/clock" component={Clock} />
        <Route path="/login" component={Login} />
        <Route path="/redux" component={helloRedux} />
        <Route path="/Combine" component={Combine} />
        <Route path="/JSX" component={JSX} />
      </div>
    </Router>
  )
}

export default Setup;