var fs = require("fs");
 
const Main = (input) => {
  input = input.split("\n");
  var tmp = input[1].split(" ");
  var a = parseInt(input[0],10);
  var b = parseInt(tmp[0],10);
  var c = parseInt(tmp[1],10);
  var s = input[2];
  
  console.log("%d %s", a+b+c, s);
}
 
Main(fs.readFileSync("../txt/PracticeA-Welcome_to_AtCoder.txt","utf8"));