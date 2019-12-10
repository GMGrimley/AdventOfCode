
module.exports = {
    readTextFile: function () {
        var fs = require("fs");
        var text = fs.readFileSync('input.txt').toString();
        // var text = fs.readFileSync('input2.txt').toString();
        var newLineSep = text.split(/\r?\n/);
        return newLineSep;
    }, traverse: function(list, map, parentP) {
        if (typeof list !== "undefined") { 
            var planetOs = list; // set of orbiting planets
            // return list.length;
            for (var y = 0; y < list.length; y++) {
                if (map.has(planetOs[y])) {
                    return this.traverse(map.get(planetOs[y]), map, planetOs[y]);
                } else {
                    if(parentP != null) {
                        return [parentP, planetOs[y]];
                    } else {
                        return [null, planetOs[y]];
                    }
                }
            }
        } else {
            return null;
        }
    }, countTraverse: function(count, map, lastP, pSet) {
        for (var y = 0; y < map.size; y++) {
            var listP = map.get(pSet[y]);
            if ( typeof listP !== "undefined") {
                if (listP.includes(lastP)) {
                    lastP = pSet[y];
                    count++;
                    return this.countTraverse(count, map, lastP, pSet);
                } else {
                    continue;
                }
            } else {
                continue;
            }
        }
        return count;
    }, mainFun: function(){
        // Traverse Input
        // Create a List of Lists (of Lists?)
        // if parent is in list, add as sublist. If sublist exists, add to sublist.
        // traverse tree top-down and count? length of sublist for each 
        // if (bigList.contains())
        var orbList = this.readTextFile();
        orbList.sort();
        var bigOrbMap = new Map();
        var planetSet = new Set();
        var totalOrbits = 0;
        
        for (var i = 0; i < orbList.length; i++) {
            var sep = orbList[i].split(")");
            var orbiter = sep[1];
            var orbited = sep[0];
            planetSet.add(orbiter);
            planetSet.add(orbited);
        }
        planetSet = Array.from(planetSet);

        // Create map
        for (var i = 0; i < orbList.length; i++) {
            var innerList = [];
            var sep = orbList[i].split(")");
            var orbiter = sep[1];
            var orbited = sep[0];
            if (bigOrbMap.has(orbited)) {
                innerList = bigOrbMap.get(orbited);
            } 
            if (!innerList.includes(orbiter)) {
                innerList.push(orbiter);
            }
            bigOrbMap.set(orbited, innerList);
            
        }
        
        // 
        var end = false;
        for (var x = 0; x < planetSet.length; x++) {
            // return planetSet;
            // find bottom values, count them, remove them.
            var planetL = this.traverse(bigOrbMap.get(planetSet[x]), bigOrbMap); //a last-stop orbiter
            // loop to find parent planet
            if (typeof planetL !== "undefined" && planetL !== null) {
                
                if (planetL[0] !== null) {
                    totalOrbits = this.countTraverse(totalOrbits, bigOrbMap, planetL[0], planetSet);
                }
                if (typeof planetL !== "undefined") {
                    if (planetL[0] !== null) {
                        var removeLList = bigOrbMap.get(planetL[0]);
                        var spliceIndex = removeLList.indexOf(planetL[1]);
                        //return spliceIndex;
                        removeLList.splice(spliceIndex);
                        //return removeLList;
                    }
    
                    // traverse map to make sure data still exists
                    for (var i = 0; i < planetSet.length; i++) {
                        var listX = bigOrbMap.get(planetSet[i]);
                        if (typeof listX !== "undefined") {
                            if (listX.length > 0) {
                                //keep going;
                                end = false;
                                break;
                            } else {
                                if (i === planetSet.length - 1) {
                                    //end
                                    end = true;
                                    break;
                                }
                            }
                        } else {
                            if (i === planetSet.length - 1) {
                                //end
                                end = true;
                                break;
                            } else {
                                confinue;
                            }
                        }
                    }
                }
            }
        }
            return bigOrbMap;
            return totalOrbits;

            //count remaining connections via map's keys
          
        
       // return bigOrbMap; 
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