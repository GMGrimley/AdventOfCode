
module.exports = {
    readTextFile: function () {
        var fs = require("fs");
        // var text = fs.readFileSync('input.txt').toString();
        var text = fs.readFileSync('input2.txt').toString();
        var newLineSep = text.split(/\r?\n/);
        return newLineSep;
    }, findParent: function(planet,map) {
        var returnParent = '';
        for (const entry of map) {
            if (entry[1].includes(planet)) {
                returnParent = entry[0];
                break;
            }
        }
        return returnParent;
    }, isMapEmpty: function(map) {
        var returnBool = true;
        for (const entry of map) {
            if (entry[1].length > 0) {
                returnBool = false;
                break;
            }
        }
        return returnBool;
    }, traverse: function(list, map, parentP) {
        if (typeof list !== "undefined") { 
            var planetOs = list; // set of orbiting planets
            // return list.length;
            for (var y = 0; y < list.length; y++) {
                if (map.has(planetOs[y])) {
                    if (map.get(planetOs[y].length === 0)) {
                        return [this.findParent(parentP, map), parentP]; // return parentP's parent, parentP;
                    } else {
                        return this.traverse(map.get(planetOs[y]), map, planetOs[y]);
                    }
                } else {
                    if(parentP != null) {
                        if (planetOs[y] != null) {  
                            return [parentP, planetOs[y]];
                        } else {
                            return [null, parentP]; //parent of ParentP, parentP -> lastplanet
                        }
                    } else {
                        return [null, planetOs[y]];
                    }
                }
            }
        } else {
            return null;
        }
    }, countTraverse: function(count, map, lastP, pSet) {
        for (var y = 0; y < pSet.length; y++) {
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
        
        // count++;
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
        var planetSetA = Array.from(planetSet);


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

        var testBreak = 0;
        
        var whileBool = true;
        var testList = [];
        while (whileBool) {
            for (var x = 0; x < planetSetA.length; x++) {

                // find bottom values, count them, remove them.
                var planetL = this.traverse(planetSet, bigOrbMap,planetSetA[x]); //a last-stop orbiter
                return planetL;
                // count up the tree
                if (typeof planetL !== "undefined" && planetL !== null) {
                    if (planetL[0] !== null) { 
                        totalOrbits += this.countTraverse(totalOrbits+1, bigOrbMap, planetL[0], planetSetA);
                    } else {
                        continue;
                    }

                    // Remove last PlanetL from BigOrbMap
                    // This prevents counting the same planet twice
                    // and shouldn't affect the total count, since 
                    // we're finding a final node on a branch.
                    if (typeof planetL !== "undefined") {
                        if (planetL[0] !== null) {
                            var removeLList = bigOrbMap.get(planetL[0]);
                            var spliceIndex = removeLList.indexOf(planetL[1]);
                            removeLList.splice(spliceIndex, 1);
                            bigOrbMap.set(planetL[0],removeLList);
                        }
                    }
                } else {
                    continue;
                }
            }
            // is map depleted?
            var endBool = this.isMapEmpty(bigOrbMap);

            if (endBool) {
                whileBool = false;
                break;
            }
            //break for testing
            if (testBreak > 1000) {
                break;
            } else {
                testBreak++;
            }


            //to-do: count parent planets that are remaining
        }
        return bigOrbMap;
        return totalOrbits;

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