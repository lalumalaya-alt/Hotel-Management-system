const fs = require('fs');

let code = fs.readFileSync('index.html', 'utf8');

// The diff showed that the LoginForm was incorrectly replaced by the RestaurantView's form because of the patch.
// Let's restore the original LoginForm!

const wrongFormStart = '<form onSubmit={submit}>\n            <div className="form-group">\n              <label>Select Room *</label>';
const index = code.indexOf(wrongFormStart);

if (index !== -1) {
    const endString = '</div></form></div></div></div>);';
    const endIndex = code.indexOf(endString, index) + endString.length;

    if (endIndex > index) {
        const replacement = `<form onSubmit={submit}>
              <div className="form-group"><label>Username</label><input type="text" value={u} onChange={e=>setU(e.target.value)} required disabled={ld}/></div>
              <div className="form-group"><label>Password</label><input type="password" value={p} onChange={e=>setP(e.target.value)} required disabled={ld}/></div>
              <button type="submit" className="btn btn-primary" style={{width:'100%',marginTop:'10px'}} disabled={ld}>{ld?<><i className="fas fa-spinner fa-spin"></i> Authenticating...</>:<><i className="fas fa-sign-in-alt"></i> Login</>}</button>
            </form>
          </div>
        </div>
      );`;

        const partToReplace = code.substring(index, endIndex);
        code = code.replace(partToReplace, replacement);

        fs.writeFileSync('index.html', code, 'utf8');
        console.log("Restored LoginForm successfully!");
    } else {
        console.log("Could not find end of wrong form");
    }
} else {
    console.log("Could not find wrong form start");
}
