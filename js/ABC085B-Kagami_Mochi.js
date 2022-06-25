const Main = function (input){
    input = input.split("\n");
    for(i=0;i<=input[0];i++){
        input[i]=parseInt(input[i]);
    }
    
    for(i=1;i<=input[0];i++){
        for(j=input[0];j>i;j--){
            if(input[j]<input[j-1]){
                var tmp = input[j];
                input[j]=input[j-1];
                input[j-1]=tmp;
            }
        }
    }
    var count=input[0];
    for(i=1;i<=input[0]-1;i++){
        if(input[i]===input[i+1]){
            //input.splice(i,1);
            count--;
        }
    }
    console.log(count);
}
 
 
Main(require("fs").readFileSync("../txt/ABC085B-Kagami Mochi.txt","utf8"));