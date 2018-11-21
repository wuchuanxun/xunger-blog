'use strict'
var fs=require("fs");

exports.getFolderNames =  function(path) {
  fs.readdir(path,function(err, files){
    if (err) {
        console.error(err);
        return;
    }
    var folders=[];
    files.forEach( function (file){
      var stats = fs.statSync(path+file);
      if(stats.isDirectory()){
        folders.push(file);
      }    
    });
    return folders;
 });
}