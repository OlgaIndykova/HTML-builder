const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, 'project-dist'),
    { recursive: true },
    (err, directory) => {
        if (err) throw err;
        console.log(directory);
    });

fs.readFile(
    path.join(__dirname, 'template.html'),
    'utf-8',
    (err, data) => {
        if (err) throw err;
        createIndexFile();
        let content;
        fs.appendFile(
            path.join(__dirname, 'project-dist', 'index.html'),
            content = data.toString().replace("{{header}}", "<header></header>").replace("{{articles}}", "<article></article>").replace("{{footer}}", "<footer></footer>"),
            console.log(content),
            (err) => {
                if (err) throw err;
            },
        );
    },
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

// fs.readFile(filePath, (err, result) => {
//     if (err) { console.log(err); }
//     console.log(data);
// });
// if the readFile function returned a promise, the logic would be  written as below
// var fileReadandPromise = fs.readFile(filePath);
// fileReadandPromise.then(console.log, console.error)
    
    // fs.mkdir(path.join(__dirname, 'project-dist', 'assets')),
    //     { recursive: true },
    //     (err, result) => {
    //         if (err) throw err;
    //         console.log("ok");
    //     };
    //     console.log(value);
    //     const res1 = fs.mkdir(path.join(__dirname, 'project-dist', 'assets'));
    //     res1.then(console.log, console.error);
// }
// async function f() {
//     const value = await createAssetsDir();
//     // console.log(value);
    // fs.mkdir(path.join(__dirname, 'project-dist', 'assets', 'fonts')),
        // { recursive: true },
        // (err) => {
            // if (err) throw err;
            // console.log("ok");
        // };
//     fs.readdir(path.join(__dirname, 'project-dist', 'assets', 'fonts'),
//         (err, files) => {
//             if (err)
//                 console.log(err);
//             else {
//                 files.forEach(file => {
//                     fs.unlink(path.join(__dirname, 'project-dist', 'assets', 'fonts', file), (err) => {
//                         if (err) throw err;
//                     });
//                 })
//             }
//         });
//     fs.mkdir(path.join(__dirname, 'project-dist', 'assets', 'img')),
//         { recursive: true },
//         (err) => {
//             if (err) throw err;
//             console.log("ok");
//         };
//     fs.readdir(path.join(__dirname, 'project-dist', 'assets', 'img'),
//         (err, files) => {
//             if (err)
//                 console.log(err);
//             else {
//                 files.forEach(file => {
//                     fs.unlink(path.join(__dirname, 'project-dist', 'assets', 'img', file), (err) => {
//                         if (err) throw err;
//                     });
//                 })
//             }
//         })
//     fs.mkdir(path.join(__dirname, 'project-dist', 'assets', 'svg')),
//         { recursive: true },
//         (err) => {
//             if (err) throw err;
//             console.log("ok");
//         };
//     fs.readdir(path.join(__dirname, 'project-dist', 'assets', 'svg'),
//         (err, files) => {
//             if (err)
//                 console.log(err);
//             else {
//                 files.forEach(file => {
//                     fs.unlink(path.join(__dirname, 'project-dist', 'assets', 'svg', file), (err) => {
//                         if (err) throw err;
//                     });
//                 })
//             }
//         })
//         console.log(value);
// }
// f();
