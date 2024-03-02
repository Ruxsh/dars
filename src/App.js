import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <header>
        <span>Company Name</span>
        <ul className='ul1'>
          <li className='li1'>Features</li>
          <li className='li1'>Enterprise</li>
          <li className='li1'>Support</li>
          <li className='l1'>Picing</li>
          <button className='hover'>Sign Up</button>
        </ul>
      </header>

      <aside>
        <h1 className='h1'>Pricing</h1>
        <p className='p'>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
      </aside>

      <div className='Uctalik'>
        <div className='bir'>
          <span>Free</span>
          <hr />
          <h1>$0 / mo</h1>
          <p>10 users included
            2 GB of storage
            Email support
            Help center access
          </p>
          <button className='hover'>Sing up for free</button>
        </div>
        <div className='ikki'>
          <span>Pro</span>
          <hr />
          <h1>$15 / mo</h1>
          <p>20 users included
            10 GB of storage
            Priority email support
            Help center access</p>
          <button>Get started</button>
        </div>
        <div className='uc'>
          <span>Enterprise</span>
          <hr />
          <h1>$29 / mo</h1>
          <p>30 users included
            15 GB of storage
            Phone and email support
            Help center access
          </p>
          <button>Get started</button>
        </div>
      </div>

      <footer>
        <div className='footer1'>

          <ul className='ul2'>
            <li><h3>Feratures</h3></li>
            <li>Cool stuff</li>
            <li>Random feature</li>
            <li>Random feature</li>
            <li>Stuff for developers</li>
            <li>Another one</li>
            <li>Last time</li>
          </ul>


          <ul className='ul2'>
            <li><h3>Resources</h3></li>
            <li>Resource</li>
            <li>Resource name</li>
            <li>Another resource</li>
            <li>Final resource</li>
          </ul>


          <ul className='ul2'>
            <li><h3>About</h3></li>
            
          <li>Team</li>
          <li>Location</li>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>

    </div>
      </footer >

    </div>
  );
}

export default App;
