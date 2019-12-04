
module.exports = {
    readTextFile: function () {
        var fs = require("fs");
        var text = fs.readFileSync('input.txt').toString().split("\n");
        //var text = fs.readFileSync('input2.txt').toString().split("\n");
        return text;
    }, mainFun: function(){
        var bigList = this.readTextFile();
        var listLength = bigList.length;
        var totalSum = 0;
        for (var i = 0; i < bigList.length; i++) {
            var numValue = bigList[i].replace("'", "");
            if (numValue > 0) {
                numValue = numValue/3;
                numValue = Math.floor(numValue);
                numValue = numValue-2;
                totalSum += numValue;
            }
        }
        return totalSum;
    }, fuelAdd: function(mass) {
        var numValue = Number.parseInt(mass);
        var returnSum = 0;
        while (numValue > 0) {
            numValue = numValue/3;
            numValue = Math.floor(numValue);
            numValue = numValue-2;
            if (numValue > 0) {  
                returnSum += numValue;
            } else {
               
            }
        } 
        return returnSum;
    }, mainFunP2: function(){
        var bigList = this.readTextFile();
        var totalSum = 0;
        
        for (var i = 0; i < bigList.length; i++) {
            var numValue = bigList[i].replace("'", "");
            var massVal = this.fuelAdd(numValue);
            totalSum += massVal;

        }
        return totalSum;
    }
}


  require('make-runnable');