var gulp = require('gulp');
var request = require('request');
var fs = require('fs');

var AdmZip = require('adm-zip');

var downloadURL = 'https://ghost.org/zip/ghost-0.7.1.zip';

gulp.task('default', function() {
  process.stdout.write('Downloading Ghost... \n');
  request({
    method: 'GET',
    uri: downloadURL,
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11',
            'Accept-Encoding': 'gzip,deflate,sdch',
            'encoding': 'null',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Cookie': 'cookie'
        }
  }).pipe(fs.createWriteStream('ghost.zip'))
    .on('close', function () {
      process.stdout.write('Done downloading.\n');
      process.stdout.write('Extracting zip... ');

       var zip = new AdmZip('./ghost.zip');
       zip.extractAllTo('./ghost', true);

      process.stdout.write('Done.\n');
      process.stdout.write('Cleaning up... ');
      fs.unlink('./ghost.zip', function () {
        process.stdout.write('Done.\n');
      });
    });
});
