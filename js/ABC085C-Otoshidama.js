const Main=(input)=>{
    input=input.split(" ");
    input[0]=parseInt(input[0]);
    input[1]=parseInt(input[1]);

    for(var i =input[0];i>=0;i--){
        var price=input[1];
        price-=i*10000;
        if(price===0&&i===input[0]){
            console.log("%d 0 0",i);
            return;
        }
        if(price<=5000*(input[0]-i)){
            for(var j=input[0]-i;j>=0;j--){
                if(price<0){
                    break;
                }
                price1=price;
                price1-=5000*j;
                if(price1<=1000*(input[0]-i-j)){
                    for(var k=input[0]-i-j;k>=0;k--){
                        if((price1-k*1000)===0&&(i+j+k)===input[0]){
                            console.log("%d %d %d", i, j, k);
                            return;
                        }
                    }

                }
            }
        }
    }
    console.log("-1 -1 -1");
}

Main(require("fs").readFileSync("../txt/ABC085C - Otoshidama.txt","utf8"));