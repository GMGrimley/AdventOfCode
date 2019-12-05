
module.exports = {
    readTextFile: function () {
        var fs = require("fs");
        var text = fs.readFileSync('input.txt').toString();
        //var text = fs.readFileSync('input2.txt').toString(); //test input
        //var newLineSep = text.split(/\r?\n/);
        var comSep = text.split("-");
        return comSep;
    }, mainFun: function(){
        /* --
        It is a six-digit number.
        The value is within the range given in your puzzle input.
        Two adjacent digits are the same (like 22 in 122345).
        Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
        --*/
        var inputs = this.readTextFile();
        var possiblePasswords = [];
        var notAPassword = [];
        for (var i = inputs[0]; i < inputs[1]; i++) {
            i = i.toString();
            if (i.length === 6) {
                var strSplit = i.split("");
                var adj = false;
                for (var s = 1; s < 6; s++) {
                    if (strSplit[s] === strSplit[s-1]) {
                        adj = true;
                    }
                }
                if (adj === true) {
                    var incr = true;
                    for (var t = 1; t < 6; t++) {
                        if (Number.parseInt(strSplit[t]) >= Number.parseInt(strSplit[t-1])) {
                            continue;
                        } else {
                            incr = false;
                        }
                    }
                    if (incr === true) {
                        possiblePasswords.push(i);
                    }
                } else {
                    continue;
                }
            } else {
                notAPassword.push(i);
                continue;
            }
        }
        //return notAPassword;
        return possiblePasswords.length;
    }, mainFunP2: function(){
        var inputs = this.readTextFile();
        var possiblePasswords = [];
        for (var i = inputs[0]; i < inputs[1]; i++) {
            i = i.toString();
            if (i.length === 6) {
                var strSplit = i.split("");
                var adj = false;
                for (var s = 0; s < 6; s++) {
                    var sCount = 0;
                    for (var c = 0; c < 6; c++) {
                        if (strSplit[s] === strSplit[c]) {
                            sCount++;
                        }
                    } 
                    if (sCount === 2) {
                        adj = true;
                        break;
                    }
                }
                if (adj === true) {
                    var incr = true;
                    for (var t = 1; t < 6; t++) {
                        if (Number.parseInt(strSplit[t]) >= Number.parseInt(strSplit[t-1])) {
                            continue;
                        } else {
                            incr = false;
                        }
                    }
                    if (incr === true) {
                        
                        possiblePasswords.push(i);
                    }
                } else {
                    continue;
                }
            } else {
                continue;
            }
        }
        return possiblePasswords.length;
    }
}



require('make-runnable');

// const fs = require('fs');

// fs.writeFile("test.txt",  intersections.length, function(err) {

//     if(err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// }); 