const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "files-copy"),
    { recursive: true },
    (err) => {
        if (err) throw err;
        console.log("Files from the new folder:");
    });
fs.readdir(path.join(__dirname, "files-copy"),
    (err, files) => {
        if (err)
            console.log(err);
        else {
            files.forEach(file => {
                fs.unlink(path.join(__dirname, "files-copy", file), (err) => {
                    if (err) throw err;
                });
            })
        }
    })

function getCurrentFilenames() {
    fs.readdir(path.join(__dirname, "files"),
        (err, files) => {
            if (err)
                console.log(err);
            else {
                files.forEach(file => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    fs.copyFile(path.join(__dirname, "files", file), path.join(__dirname, "files-copy", file),
                        (err) => {
                            if (err) {
                                console.log("Error Found:", err);
                            } else {
                                console.log(file);
                            }
                        });
                })
            }
        })
}

getCurrentFilenames();

