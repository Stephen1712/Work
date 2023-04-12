// import logo from './logo.svg';
import './App.css';
import background from "./asset/bg.png";

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`, position: 'fixed', width: '100%', height: '100%', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="w3-card-4 w3-white w3-round w3-padding" style={{ width: 350 }}>
        <div className="w3-margin-8">
          <img src={require('./asset/logo.png')} alt='' style={{ height: 60, left: -18, position: 'relative' }} />

          <h5 style={{ 
            fontWeight: 700,
            lineHeight: 1.2,
            color: 'black',
            fontSize: 20,
            marginBottom: 20
           }}>Sign In</h5>

          <div style={{ marginBottom: 20 }}>
            Only recipient email can access shared files
          </div>

          <div style={{ marginBottom: 20 }}>
            <input className="w3-input w3-border w3-round" placeholder="Email, Phone or Skype" />
          </div>

          <div style={{ marginBottom: 20 }}>
            <input className="w3-input w3-border w3-round" placeholder="Password" type="password" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 20 }}>
            <a href="#forgot" style={{ color: '#007bff', textDecoration: 'none' }}>Forgot Password?</a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button className="w3-btn w3-block w3-text-white w3-round" style={{ width: '94%', background: '#0a59a3', fontWeight: '600' }}>Next</button>
          </div>

          <br />

        </div>
      </div>
    </div>
  );
}

export default App;
