const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

// We replaced the first matching `<form onSubmit={submit}>` which is actually from RoomsView? No, the login form was fixed.
// Let's reset the whole file and just apply the patch correctly.
