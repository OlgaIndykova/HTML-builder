const fs = require("fs");
const path = require("path");
const { stdin, stdout } = process;
const EventEmitter = require("events");
const emitter = new EventEmitter();

stdout.write("Welcome to customer support! Please, describe your problem\n");

fs.writeFile(
  path.join(__dirname, "text.txt"),
  "",
  (err) => {
    if (err) throw err;
  },
);

stdin.on("data", (data) => {
    fs.appendFile(
      path.join(__dirname, "text.txt"),
      data.toString(),
      (err) => {
        if (err) throw err;
      },
    );
})
// stdin.on("data", (data) => {
//   if (data.toString() == "exit") {
//       emitter.emit(data.toString());
//       console.log("error");

//     };
// })
function handle() {
  console.log("Thank you for your request, our experts will contact you shortly.");
  process.exit();
}
process.on('SIGINT', handle);

emitter.on('exit', handle);


