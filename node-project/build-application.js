// i want to create a file using javascipt
// that is executable in the browser
const fs = require('fs');

content = `
    <html>
    <head></head>
    <body>
    <h1>Hello Worlds, suckass!</h1>
    </body>
    </html>
`

content = content.replace("Hello", "Goodbye");

fs.writeFile('./build/index.html', content, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });

