function Main(input){
    input = input.split("\n");
    input[0] = parseInt(input[0],10);
    input[1] = parseInt(input[1],10);
    input[2] = parseInt(input[2],10);
    input[3] = parseInt(input[3],10);
    
    var count=0;
    for(var i=input[0];i>=0;i--){
      var price = input[3];
      price -= 500*i;
      
      var tmp1=Math.floor(price/100);
      if(tmp1>input[1]){
          tmp1=input[1];
      }
      for(var j=tmp1;j>=0;j--){
        var price1 = price;  
        price1 -= j*100;
        if(price1<0){
          break;
        }
 
        var tmp2 = price1/50;
        if(tmp2>input[2]){
            tmp2=input[2];
        }
        for(var k=tmp2;k>=0;k--){
            
          if((price1-k*50)===0){
            count++;
            break;
          }
        }
      }
    }
    console.log(count);
  }
   
  Main(require("fs").readFileSync("../txt/ABC087B-Coins.txt","utf8"));
