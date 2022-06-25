function Main(input){
    input=input.split("\n")[0];
    console.log(/^(dream|dreamer|erase|eraser)*$/.test(input)?'YES':'NO');
  }
 Main(require("fs").readFileSync("../txt/ABC049C-白昼夢.txt","utf-8"));