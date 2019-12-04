
module.exports = {
    readTextFile: function () {
    var fs = require("fs");
    var text = fs.readFileSync('input.txt').toString();
    //var text = fs.readFileSync('input2.txt').toString(); //test input
    var newLineSep = text.split(/\r?\n/);
    return newLineSep;
}, mainFun: function(){
    var inputs = this.readTextFile();
    
    var listOfLines = [];
    for (var input = 0; input < 2; input++) {
        var sep = inputs[input].split(',');
        var lastX = 0;
        var lastY = 0;
        for (var i = 0; i < sep.length; i++) {
            var value = Number.parseInt(sep[i].substring(1));
            switch(sep[i].substr(0, 1)) {
                case 'R':
                    for (var v = lastX; v < lastX + value; v++) {
                        listOfLines.push(input + ': ' + v + ',' + lastY);
                    }
                    lastX = value+lastX;
                    break;
                case 'L': 
                    for (var v = lastX; v > lastX - value; v--) {
                        listOfLines.push(input + ': ' + v + ',' + lastY);
                    }
                    lastX = lastX - value;
                    break;
                case 'D':
                    for (var v = lastY; v > lastY - value; v--) {
                        listOfLines.push(input + ': ' + lastX + ',' + v);
                    }
                    lastY = lastY - value;
                    break;
                case 'U':
                    for (var v = lastY; v < lastY + value; v++) {
                        listOfLines.push(input + ': ' + lastX + ',' + v);
                    }
                    lastY = value+lastY;
                    break;
                default:
                    break;
            }
        }
    }

    //return listOfLines.length;

    var sum = 0;
    var sum2;
    var a = [], b = [];

    for (var x = 0; x < listOfLines.length; x++) {
        if (listOfLines[x].substr(0,1) == 0) {
            a.push(listOfLines[x].substring(3));
        } else {
            b.push(listOfLines[x].substring(3));
        }
    }

    for (var i = 0; i < b.length; i++) {
        if (a.includes(b[i])) {
            if (b[i] != '0,0') {
                if (sum === 0) {
                    sum = Math.abs(Number.parseInt(b[i].split(',')[0])) + Math.abs(Number.parseInt(b[i].split(',')[1]));
                } else {
                    sum2 = Math.abs(Number.parseInt(b[i].split(',')[0])) + Math.abs(Number.parseInt(b[i].split(',')[1]));
                    if (sum2 < sum) {
                        sum = sum2;
                    } 
                }
            }
        }
    }
    return sum;
}, findIntersection: function(intersection, input) {
    var inputs = this.readTextFile();
    var stepCnt = 0;
    var done = false;
    var sep = inputs[input].split(',');
    var lastX = 0;
    var lastY = 0;
    for (var i = 0; i < sep.length; i++) {
        done = false;
        var value = Number.parseInt(sep[i].substring(1));
        switch(sep[i].substr(0, 1)) {
            case 'R':
                for (var v = lastX; v < lastX + value; v++) {
                    if((v + ',' + lastY) == intersection) {
                        done = true;
                        break;
                    } 
                }
                if (done) {
                    return stepCnt;
                 } else {
                     stepCnt += value;
                 }
                lastX = value+lastX;
                
                break;
            case 'L': 
                for (var v = lastX; v > lastX - value; v--) {
                    if((v + ',' + lastY) == intersection) {
                        done = true;
                        break;
                    } 
                }
                if (done) {
                    return stepCnt;
                } else {
                    stepCnt += value;
                }
                lastX = lastX - value;
                
                break;
            case 'D':
                for (var v = lastY; v > lastY - value; v--) {
                    if((lastX + ',' + v) == intersection) {
                        done = true;
                        break;
                    } 
                }
                if (done) {
                    return stepCnt;
                 } else {
                     stepCnt += value;
                 }
                
                lastY = lastY - value;
                break;
            case 'U':
                for (var v = lastY; v < lastY + value; v++) {
                    if((lastX + ',' + v) == intersection) {
                        done = true;
                        break;
                    }
                }
                if (done) {
                    return stepCnt;
                 } else {
                     stepCnt += value;
                 }
                
                lastY = value+lastY;
                break;
            default:
                break;
        }
        
    }
    
    return stepCnt;
    
}, mainFunP2: function(){
    var inputs = this.readTextFile();
    
    var listOfLines = [];
    for (var input = 0; input < 2; input++) {
        var sep = inputs[input].split(',');
        var lastX = 0;
        var lastY = 0;
        for (var i = 0; i < sep.length; i++) {
            var value = Number.parseInt(sep[i].substring(1));
            switch(sep[i].substr(0, 1)) {
                case 'R':
                    for (var v = lastX; v < lastX + value; v++) {
                        listOfLines.push(input + ': ' + v + ',' + lastY);
                    }
                    lastX = value+lastX;
                    break;
                case 'L': 
                    for (var v = lastX; v > lastX - value; v--) {
                        listOfLines.push(input + ': ' + v + ',' + lastY);
                    }
                    lastX = lastX - value;
                    break;
                case 'D':
                    for (var v = lastY; v > lastY - value; v--) {
                        listOfLines.push(input + ': ' + lastX + ',' + v);
                    }
                    lastY = lastY - value;
                    break;
                case 'U':
                    for (var v = lastY; v < lastY + value; v++) {
                        listOfLines.push(input + ': ' + lastX + ',' + v);
                    }
                    lastY = value+lastY;
                    break;
                default:
                    break;
            }
        }
    }

    var intersections = [];
    var sum = 0;
    var sum2;
    var a = [], b = [];

    for (var x = 0; x < listOfLines.length; x++) {
        if (listOfLines[x].substr(0,1) == 0) {
            a.push(listOfLines[x].substring(3));
        } else {
            b.push(listOfLines[x].substring(3));
        }
    }

    for (var i = 0; i < b.length; i++) {
        if (a.includes(b[i])) {
            if (b[i] != '0,0') {
                if (sum === 0) {
                    sum = Math.abs(Number.parseInt(b[i].split(',')[0])) + Math.abs(Number.parseInt(b[i].split(',')[1]));
                } else {
                    sum2 = Math.abs(Number.parseInt(b[i].split(',')[0])) + Math.abs(Number.parseInt(b[i].split(',')[1]));
                    if (sum2 < sum) {
                        sum = sum2;
                        intersections.push(b[i]);
                    } 
                }
            }
        }
    }

    //traverse each a and b to find retVal, get index. Count values up until then

    var shortestStep = 100000000;
    var steps = [];
    for (var i = 0; i < intersections.length; i++) {
        var stepCount = 0;
        stepCount = this.findIntersection(intersections[i], 0) + this.findIntersection(intersections[i], 1);
        steps.push('[' + this.findIntersection(intersections[i], 0) + ',' + this.findIntersection(intersections[i], 1) + ']');
        steps.push(stepCount);
        if (stepCount < shortestStep) {
            shortestStep = stepCount;
        }
    }

    return steps;;
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