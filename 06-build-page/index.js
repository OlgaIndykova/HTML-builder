const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, 'project-dist'),
    { recursive: true },
    (err, directory) => {
        if (err) throw err;
        directory;
        fs.mkdir(path.join(__dirname, 'project-dist', 'assets'),
            { recursive: true },
            (err, directory) => {
                if (err) throw err;
                directory;
            });
    }
);

if (path.join(__dirname, 'project-dist')) {
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
                                createCssFile();
                                fs.appendFile(
                                    path.join(__dirname, 'project-dist', 'style.css'),
                                    data.toString(),
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
}
let content;
fs.readFile(path.join(__dirname, 'template.html'), 'utf-8',
    (err, data) => {
        if (err) throw err;
        content = data.toString();
        fs.readdir(path.join(__dirname, 'components'), { withFileTypes: true },
            (err, files) => {
                if (err)
                    console.log(err);
                else {
                    files.forEach(file => {
                        const readFile = fs.createReadStream(path.join(__dirname, 'components', file.name), 'utf8');
                        readFile.on("data", (data) => {
                            if (file.name === 'header.html') {
                                content = content.replace("{{header}}", data);
                            };
                            if (file.name === 'articles.html') {
                                content = content.replace("{{articles}}", data);
                            };
                            if (file.name === 'footer.html') {
                                content = content.replace("{{footer}}", data);
                            };
                            createIndexFile();
                            fs.writeFile(path.join(__dirname, 'project-dist', 'index.html'),
                                content,
                                (err) => {
                                    if (err) throw err;
                                })
                        })
                    })
                }
            })
    }
);

function createIndexFile() {
    fs.writeFile(
        path.join(__dirname, 'project-dist', 'index.html'),
        '',
        (err) => {
            if (err) throw err;
        },
    );
}
function createCssFile() {
    fs.writeFile(
        path.join(__dirname, 'project-dist', 'style.css'),
        '',
        (err) => {
            if (err) throw err;
        },
    );
}

fs.mkdir(path.join(__dirname, 'project-dist', 'assets', 'fonts'),
    { recursive: true },
    (err) => {
        if (err) throw err;
        fs.readdir(path.join(__dirname, 'project-dist', 'assets', 'fonts'),
            (err, files) => {
                if (err)
                    console.log(err);
                else {
                    files.forEach(file => {
                        fs.unlink(path.join(__dirname, 'project-dist', 'assets', 'fonts', file), (err) => {
                            if (err) throw err;
                        });

                    })
                }
                fs.readdir(path.join(__dirname, 'assets', 'fonts'),
                    (err, files) => {
                        if (err)
                            console.log(err);
                        else {
                            files.forEach(file => {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                fs.copyFile(path.join(__dirname, 'assets', 'fonts', file), path.join(__dirname, 'project-dist', 'assets', 'fonts', file),
                                    (err) => {
                                        if (err) {
                                            console.log("Error Found:", err);
                                        }
                                    });
                            })
                        }
                    })
            });
    });
fs.mkdir(path.join(__dirname, 'project-dist', 'assets', 'img'),
    { recursive: true },
    (err) => {
        if (err) throw err;
        fs.readdir(path.join(__dirname, 'project-dist', 'assets', 'img'),
            (err, files) => {
                if (err)
                    console.log(err);
                else {
                    files.forEach(file => {
                        fs.unlink(path.join(__dirname, 'project-dist', 'assets', 'img', file), (err) => {
                            if (err) throw err;
                        });
                    })
                }
                fs.readdir(path.join(__dirname, 'assets', 'img'),
                    (err, files) => {
                        if (err)
                            console.log(err);
                        else {
                            files.forEach(file => {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                fs.copyFile(path.join(__dirname, 'assets', 'img', file), path.join(__dirname, 'project-dist', 'assets', 'img', file),
                                    (err) => {
                                        if (err) {
                                            console.log("Error Found:", err);
                                        }
                                    });
                            })
                        }
                    })
            });

    });
fs.mkdir(path.join(__dirname, 'project-dist', 'assets', 'svg'),
    { recursive: true },
    (err) => {
        if (err) throw err;
        fs.readdir(path.join(__dirname, 'project-dist', 'assets', 'svg'),
            (err, files) => {
                if (err)
                    console.log(err);
                else {
                    files.forEach(file => {
                        fs.unlink(path.join(__dirname, 'project-dist', 'assets', 'svg', file), (err) => {
                            if (err) throw err;
                        });
                        fs.copyFile(path.join(__dirname, 'assets', 'svg', file), path.join(__dirname, 'project-dist', 'assets', 'svg', file),
                            (err) => {
                                if (err) {
                                    console.log("Error Found:", err);
                                }
                            })
                    })
                }
                fs.readdir(path.join(__dirname, 'assets', 'svg'),
                    (err, files) => {
                        if (err)
                            console.log(err);
                        else {
                            files.forEach(file => {
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                fs.copyFile(path.join(__dirname, 'assets', 'svg', file), path.join(__dirname, 'project-dist', 'assets', 'svg', file),
                                    (err) => {
                                        if (err) {
                                            console.log("Error Found:", err);
                                        }
                                    });
                            })
                        }
                    })
            })

    });

