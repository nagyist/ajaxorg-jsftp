var jsftp = require("../");

var host, user, pass, port, dir, file;




var ftp = new jsftp({ host: host, user: user, pass: pass, port: port });

// listing a directory
ftp.useList = false;
ftp.debugmode = true;

ftp.ls(dir, function(err, files) {
    if (err) return console.error(err);
    console.log(files); // Contains an array of file objects
    
    ftp.raw.quit(function(err, data) {
        if (err) return console.error(err);
    
        console.log("Bye!");
    });
});

