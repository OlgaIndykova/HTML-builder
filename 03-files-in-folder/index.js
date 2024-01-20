const fs = require("fs");
const path = require("path");

const folderName = 'secret-folder';

fs.readdir(folderName,
    { withFileTypes: true },
    (err, files) => {
        if (err)
            console.log(err);
        else {
            files.forEach(file => {
                if (err) {
                    console.error(err);
                    return;
                }
                fs.stat(path.join(folderName, file.name),
                    "utf-8",
                    (err, stats) => {
                        if (err) {
                            console.error(err)
                            return
                        }
                        if (stats.isFile()) {
                            console.log(file.name.replace(".", " - ") + " - " + stats.size / 1000 + "kb");
                        }
                    })
            })
        }
    }
)