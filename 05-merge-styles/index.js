const fs = require('fs');
const path = require('path');
fs.readdir(
  path.join(__dirname, 'styles'),
  { withFileTypes: true },
  (err, files) => {
    if (err) console.log(err);
    else {
      files.forEach((file) => {
        if (err) {
          console.error(err);
          return;
        }
        if (path.extname(path.join(__dirname, 'styles', file.name)) == '.css') {
          fs.readFile(
            path.join(__dirname, 'styles', file.name),
            'utf-8',
            (err, data) => {
              if (err) throw err;
              createFile();
              fs.appendFile(
                path.join(__dirname, 'project-dist', 'bundle.css'),
                data.toString(),
                console.log(file.name),
                (err) => {
                  if (err) throw err;
                },
              );
            },
          );
        }
      });
    }
  },
);
function createFile() {
  fs.writeFile(
    path.join(__dirname, 'project-dist', 'bundle.css'),
    '',
    (err) => {
      if (err) throw err;
    },
  );
}
