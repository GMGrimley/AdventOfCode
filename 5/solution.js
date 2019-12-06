
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
        var outputsNew = []; 
        var outputsNew2 = []; 
        for (var i = 0; i < bigList.length; i++) {
            bigList[i] = Number.parseInt(bigList[i]);
        } 

        for (var i = 0; i < bigList.length; i++) {
            var atI = bigList[i];
            var params = '';
            var paramsList = [];
            if (i < bigList.length-2 || bigList[i] === 3) {  
                var first = bigList[i+1];
            }
            //if (i < bigList.length-4 &&  bigList[i] != 3) {
                var second = bigList[i+2];
                var third = bigList[i+3];
            //}
            
            if (atI != undefined) {
                var aiString = atI.toString();
                var aiStringLength = aiString.length - 2;
                var aiSList = aiString.split('');
            } else {
                continue;
            }
            outputsNew2.push(aiString);
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
                    case '04':
                            params = aiString;
                            paramsList = params.split("");
                            atI = 4;
                            break;
                    case '05':
                        params = aiString;
                        paramsList = params.split("");
                        atI = 5;
                        break;
                    case '06':
                        params = aiString;
                        paramsList = params.split("");
                        atI = 6;
                        break;
                    case '07':
                        params = aiString;
                        paramsList = params.split("");
                        atI = 7;
                        break;
                    case '08':
                        params = aiString;
                        paramsList = params.split("");
                        atI = 8;
                        break;
                    default: 
                        break;
                }
            }
            
            
                outputsNew.push(atI);
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
                    value1 = first;
                    value2 = second;
                    if(atI === 1 || atI === 4) {
                        value1 = bigList[first];
                        value2 = bigList[second];
                    }
                }
                outputsNew2.push('  i**: ' + i + ' ||| atI**: ' + atI);
                outputsNew2.push('v1 & v2: ' + value1 + ' | ' + value2);
                outputsNew2.push('  f & s: ' + first + ' | ' + second);
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
                            //outputsNew.push(i + ' - 6');
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
        const fs = require('fs');

        fs.writeFile("test0423.txt",  outputsNew2, function(err) {

            if(err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        }); 

        //return outputsNew2;
        return outputs;
        return bigList;
        // return outputs + ' |||| ' + outputsNew;
        return outputsNew;

    }
}


  require('make-runnable');

  