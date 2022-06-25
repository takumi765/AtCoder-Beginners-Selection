function Main(input){
    input = input.split(" ");
    input[0] = parseInt(input[0]);
    input[1] = parseInt(input[1]);
    input[2] = parseInt(input[2]);

    var sum=0;
    for(var i=1; i<=input[0];i++){
        var key=i, tmp=0;
        do{
             tmp += key % 10;
             key=Math.floor(key/10);
        }while((key/10)!=0);
        if(tmp>=input[1] && tmp <= input[2]){
            sum+=i;
        }
    }
    console.log(sum);
}


Main(require("fs").readFileSync("../txt/ABC083B-Some_Sums.txt","utf8"));
