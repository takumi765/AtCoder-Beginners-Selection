var fs = require("fs");
 
function Main(input){
  input = input.split("\n");
  var tmp = input[1].split(" ");
  
  var flag=0, count=0;
  while(flag==0){
    for(var i=0;i<input[0];i++){
      if((tmp[i]%2)=='1'){
        flag=1;
      }
    }
    for(i=0;i<input[0];i++){
      tmp[i]/=2;
    }
    count++;
  }
  console.log(count-1);
}
 
Main(fs.readFileSync("../txt/ABC081B-Shift_only.txt","utf8"));