
module.exports = {
    readTextFile: function () {
        var fs = require("fs");
        var text = fs.readFileSync('input.txt').toString();
        //var text = fs.readFileSync('input2.txt').toString();
        var commSeparated = text.split(",");
        return commSeparated;
    }, mainFun: function(){
        var bigList = this.readTextFile();        
        for (var i = 0; i < bigList.length; i++) {
            bigList[i] = Number.parseInt(bigList[i]);
        }
        for (var i = 0; i < bigList.length; i++) {
            var first = bigList[i+1];
            var second = bigList[i+2];
            var third = bigList[i+3];
            switch(bigList[i]) {
                case 1:
                    bigList[third] = bigList[first] + bigList[second];
                    i = i+3;
                    continue;
                case 2: 
                    bigList[third] = bigList[first] * bigList[second];
                    i = i+3;
                    continue;
                case 99:
                    i = bigList.length;
                    continue;
                default:
                    continue;
            }
        }
        return bigList[0];
    }, mainFunP2: function(){
        
        var returnList = [];
        var bigList = [];
        for (var n = 0; n < 100; n++) {
            for (var v = 0; v < 100; v++) {
                bigList = this.readTextFile();        
                for (var i = 0; i < bigList.length; i++) {
                    bigList[i] = Number.parseInt(bigList[i]);
                }
                bigList[1] = n; //noun
                bigList[2] = v; //verb
                for (var i = 0; i < bigList.length; i++) {
                    var first = bigList[i+1];
                    var second = bigList[i+2];
                    var third = bigList[i+3];
                    switch(bigList[i]) {
                        case 1:
                            bigList[third] = bigList[first] + bigList[second];
                            i = i+3;
                            continue;
                        case 2: 
                            bigList[third] = bigList[first] * bigList[second];
                            i = i+3;
                            continue;
                        case 99:
                            i = bigList.length;
                            ;
                        default:
                            continue;
                    }
                }
                if (bigList[0] === 19690720) {
                    //return 'this!';
                    var sum = (100 * n) + v;
                    return sum;
                }
               
            }           
        }
        return null;
    }
}


  require('make-runnable');