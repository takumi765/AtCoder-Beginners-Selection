var fs = require("fs");
 
const Main = function(input){
  var count = 0;
  input = input.split("");
  
  for(var i=0;i<3;i++){
    if(input[i]=='1'){
      count++;
    }
  }
  console.log(count);
}
 
Main(fs.readFileSync("../txt/ABC081A - Placing Marbles.txt", "utf8"));