
module.exports = {
    readTextFile: function () {
        var fs = require("fs");
        var text = fs.readFileSync('input.txt').toString();
        // var text = fs.readFileSync('input2.txt').toString();
        var commSeparated = text.split(",");
        return commSeparated;
    }, mainFun: function(input){
        var bigList = this.readTextFile();   
        var outputs = [];   
        var outputsNew = []; 
        for (var i = 0; i < bigList.length; i++) {
            bigList[i] = Number.parseInt(bigList[i]);
        } 

        for (var i = 0; i < bigList.length; i++) {
            var atI = bigList[i];
            var params = '';
            var paramsList;
            if (i < bigList.length-2 || bigList[i] === 3) {  
                var first = bigList[i+1];
            }
            if (i < bigList.length-4 &&  bigList[i] != 3) {
                var second = bigList[i+2];
                var third = bigList[i+3];
            }
            var aiString = atI.toString();
            var aiStringLength = aiString.length - 2;
            var aiSList = aiString.split('');
            if (aiSList.length > 2) {
                switch(aiString.substr(aiStringLength)) {
                    case '01':
                        params = aiString;
                        paramsList = params.split("");
                        atI = 1;
                        break;
                    case '02':
                        params = aiString;
                        paramsList = params.split("");
                        atI = 2;
                        break;
                    default: 
                        break;
                }
            }
            
            var value1 = 0;
            var value2 = 0;
            if (params.length >  2 && params.includes('0')) {
                if (params.length === 3) {
                    params = '0' + params;
                    paramsList = params.split("");
                }
                
                if (paramsList[1] == '0') {
                    value1 = bigList[first];
                } else {
                    value1 = first;
                }

                if(paramsList[0] === '0') {
                    value2 = bigList[second];
                } else {
                    value2 = second;
                }
            } else {
                value1 = bigList[first];
                value2 = bigList[second];
            }
            outputsNew.push('Value1: ' + value1 + ' | Value2: ' + value2);
            switch(atI) {
                case 1:
                    bigList[third] = value1 + value2;
                    i = i+3;
                    continue;
                case 2: 
                    bigList[third] = value1 * value2;
                    i = i+3;
                    continue;
                case 3:
                    bigList[first] = input;
                    i = i+1;
                    continue;
                case 4: 
                    i = i+1;
                    //outputs.push(value1 + ' || ' + first + ' || ' + i);
                    continue;
                case 99:
                    i = bigList.length;
                    continue;
                default:
                    continue;
            }
        }
        return outputs;
    }, mainFunP2: function(input){
        var bigList = this.readTextFile();   
        var value1 = 0;
        var value2 = 0;
        var outputs = [];   
        for (var i = 0; i < bigList.length; i++) {
            bigList[i] = Number.parseInt(bigList[i]);
        } 

        for (var i = 0; i < bigList.length; i++) {
            var atI = bigList[i];
            var params = '';
            var paramsList = [];
            var first = bigList[i+1];
            var second = bigList[i+2];
            var third = bigList[i+3];
            
            if (atI != undefined) {
                var aiString = atI.toString();
                var aiStringLength = aiString.length - 2;
                var aiSList = aiString.split('');
            } else {
                continue;
            }

            if (aiSList.length > 2) {
                params = aiString;
                paramsList = params.split("");
                if ((paramsList[0] != '1' && paramsList[0] != '0') || (paramsList[1] != '1' && paramsList[1] != '0') ) {
                    continue;
                }
                switch(aiString.substr(aiStringLength)) {
                    case '01':
                        atI = 1;
                        break;
                    case '02':
                        atI = 2;
                        break;
                    case '04': 
                            atI = 4;
                            break;
                    case '05': 
                        atI = 5;
                        break;
                    case '06': 
                        atI = 6;
                        break;
                    case '07': 
                        atI = 7;
                        break;
                    case '08': 
                        atI = 8;
                        break;
                    default: 
                        break;
                }
            }

            if (params.length >  2 && params.includes('0')) {
                if (params.length === 3) {
                    params = '0' + params;
                    paramsList = params.split("");
                }
                
                if (paramsList[1] == '0') {
                    value1 = bigList[first];
                } else {
                    value1 = first;
                }

                if(paramsList[0] === '0') {
                    value2 = bigList[second];
                } else {
                    value2 = second;
                }
            } else {
                value1 = bigList[first];
                value2 = bigList[second];
            
            }

            switch(atI) {
                case 1:
                    bigList[third] = value1 + value2; 
                    i = i+3;
                    continue;
                case 2: 
                    bigList[third] = value1 * value2;
                    i = i+3;
                    continue;
                case 3:
                    if (i === 0) {  
                        bigList[first] = input;
                        i = i+1;
                        continue;   
                    } else {
                        continue;
                    }
                case 4: 
                    outputs.push(value1);
                    i = i+1;
                    continue;
                case 5: 
                   if (value1 > 0 || value1 < 0) {
                        i = value2;
                        i = i - 1;
                    }
                    continue;
                case 6: 
                    if (value1 === 0) {
                        i = value2;
                        i = i - 1;
                    } else {
                        i = i+2;
                    }
                    continue;
                case 7: 
                    if (value1 < value2) {
                        bigList[third] = 1;
                    } else {
                        bigList[third] = 0;
                    } 
                    i = i+3;
                    continue;
                case 8: 
                    if (value1 === value2) {
                        bigList[third] = 1;
                        } else {
                        bigList[third] = 0;
                    }
                    i = i+3;
                    continue;
                case 99:
                    i = bigList.length;
                    continue;
                default:
                    continue;
            }
        
        }
        return outputs;
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