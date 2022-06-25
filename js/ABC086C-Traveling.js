const fs =require("fs");

const Main=(input)=>{
    input=input.split('\n');
    input[0]=parseInt(input[0]);

    var tmp1=[0,0,0];
    for(var i=1;i<=input[0];i++){
        var tmp = input[i].split(' ');
        tmp[0]=parseInt(tmp[0]);
        tmp[1]=parseInt(tmp[1]);
        tmp[2]=parseInt(tmp[2]);

        var diff=[tmp[0]-tmp1[0], Math.abs(tmp[1]-tmp1[1]), Math.abs(tmp[2]-tmp1[2])];
        if(diff[0]<(diff[1]+diff[2])){
            console.log("No");
            return;
        }else if((diff[0]%2==0)&&((diff[1]+diff[2])%2!=0)){
            console.log("No");
            return;
        }else if((diff[0]%2!=0)&&((diff[1]+diff[2])%2==0)){
            console.log("No");
            return;
        }
        tmp1[0]=tmp[0];
        tmp1[1]=tmp[1];
        tmp1[2]=tmp[2];
    }
    console.log("Yes");

}

Main(fs.readFileSync("/dev/stdin","utf8"));