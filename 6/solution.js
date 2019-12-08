
module.exports = {
    readTextFile: function () {
        var fs = require("fs");
        // var text = fs.readFileSync('input.txt').toString();
        var text = fs.readFileSync('input2.txt').toString();
        var newLineSep = text.split(/\r?\n/);
        return newLineSep;
    }, mainFun: function(){
        var orbList = this.readTextFile();
        orbList.sort();
        var bigOrbList = [];
        var planetSet = new Set();
        var tempI = 0;
        for (var i = 0; i < orbList.length; i++) {
            planetSet.add(orbList[i]);
        }
        for (var i = 0; i < orbList.length; i++) {
            planetSet.add(orbList[i]);
            var innerList = [];
            var sep = orbList[i].split(")");
            var orbiter = sep[1];
            var orbited = sep[0];
            if (bigOrbList.includes(orbited)) {
                tempI = bigOrbList.indexOf(orbited)
            } else {
                tempI = i;
            }
            //if (bigOrbList[i].length > 1) {}
            //bigOrbList.splice(tempI, 0); 
            bigOrbList.push(orbited);
            bigOrbList.push(orbiter);
        }
        return planetSet;
        return bigOrbList; 
    }, mainFunP2: function(){
        
    }
}
  require('make-runnable');

  
//   const fs = require('fs');

//   fs.writeFile("output.txt",  outputsNew2, function(err) {

//       if(err) {
//           return console.log(err);
//       }

//       console.log("The file was saved!");
//   }); 