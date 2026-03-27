const fs = require('fs');

let code = fs.readFileSync('index.html', 'utf8');

// The error was caused by replacing the contents of the login form because it matched `<form onSubmit={submit}>`!
// The patch_index.js matched the FIRST form.
console.log('Done.');
