const fs = require('fs');

let code = fs.readFileSync('index.html', 'utf8');

// I need to find the LoginForm and put it back to normal
const loginFormRegex = /function LoginForm\(\{onLogin\}\)\{[\s\S]*?return\(\s*<form onSubmit=\{submit\}>\s*<div className="form-group">[\s\S]*?<div className="form-actions"><button type="submit" className="btn btn-primary" disabled=\{sv\}>\{sv\?<><i className="fas fa-spinner fa-spin"><\/i> Saving\.\.\.<\/>:<><i className="fas fa-save"><\/i> Save<\/><\/button><button type="button" className="btn btn-secondary" onClick=\{onClose\}><i className="fas fa-times"><\/i> Cancel<\/button><\/div><\/form><\/div><\/div><\/div>\);\s*\}/;

const correctLoginForm = `function LoginForm({onLogin}){
      const [u,setU]=useState('');const [p,setP]=useState('');const [err,setErr]=useState('');const [ld,setLd]=useState(false);
      const submit=(e)=>{e.preventDefault();setLd(true);setErr('');
        google.script.run.withSuccessHandler((r)=>{setLd(false);if(r.success)onLogin(r.username,r.role);else setErr(r.message);}).withFailureHandler((e)=>{setLd(false);setErr('Connection error: '+e.message);}).checkLogin(u,p);};
      return(
        <div className="login-container">
          <div className="login-box">
            <img src={LOGO} alt="Logo" className="login-logo"/>
            <h2>Hill View Eco Retreat</h2>
            {err&&<div className="error-message">{err}</div>}
            <form onSubmit={submit}>
              <div className="form-group"><label>Username</label><input type="text" value={u} onChange={e=>setU(e.target.value)} required disabled={ld}/></div>
              <div className="form-group"><label>Password</label><input type="password" value={p} onChange={e=>setP(e.target.value)} required disabled={ld}/></div>
              <button type="submit" className="btn btn-primary" style={{width:'100%',marginTop:'10px'}} disabled={ld}>{ld?<><i className="fas fa-spinner fa-spin"></i> Authenticating...</>:<><i className="fas fa-sign-in-alt"></i> Login</>}</button>
            </form>
          </div>
        </div>
      );
    }`;

// Actually the error message tells us exactly what got messed up.
// Let's just fix it by hand!
