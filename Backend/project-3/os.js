const os = require("os");

// // custom modules
console.log(os);
console.log(os.homedir()); //c:Users\s
console.log(os.hostname()); // LAPTOP-LSVLU3I5
console.log(os.platform()); //win32
console.log(os.release()); //10.0.22631
console.log(os.userInfo()); //[Object: null prototype] 

console.log(os.userInfo().username); //s
console.log(os.totalmem()); //4171898880
console.log(os.freemem()); //4171898880
