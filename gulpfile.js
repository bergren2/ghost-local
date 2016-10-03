var fs = require("fs");
var gulp = require("gulp");
var install = require("gulp-install");
var request = require("request");

var AdmZip = require("adm-zip");

var version = "0.11.1";
var downloadURL = "https://ghost.org/zip/ghost-" + version + ".zip";

// http://stackoverflow.com/questions/12627586/is-node-js-rmdir-recursive-will-it-work-on-non-empty-directories/12761924#12761924
function deleteFolderRecursive (path) {
  var files = [];
  if(fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function(file,index){
      var curPath = path + "/" + file;
      if(fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}

function deleteFile (path) {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
}

// tasks
gulp.task("default", ["update-ghost"]);

gulp.task("update-ghost", ["delete-core", "download-ghost"], function () {
   var zip = new AdmZip("./ghost.zip");
   zip.extractAllTo("./ghost", true);
   fs.unlink("./ghost.zip");
   return gulp.src("./ghost/package.json").pipe(install());
});

gulp.task("delete-core", function () {
  deleteFolderRecursive("./ghost/core");
  deleteFile("./ghost/index.js");
  deleteFile("./ghost/package.json");
  deleteFile("./ghost/npm-shrinkwrap.json");
});

gulp.task("download-ghost", function () {
  return request({
    method: "GET",
    uri: downloadURL,
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11",
            "Accept-Encoding": "gzip,deflate,sdch",
            "encoding": "null",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Cookie": "cookie"
        }
  }).pipe(fs.createWriteStream("ghost.zip"));
});
