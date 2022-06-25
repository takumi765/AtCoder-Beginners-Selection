const Main = (input) =>{
    input = input.split("\n");
    var tmp = input[1].split(" ");
    input[0]=parseInt(input[0],10);

    for(var i=0;i<input[0];i++){
        tmp[i]=parseInt(tmp[i],10);
    }

    for(i=0;i<input[0];i++){
        for(j=input[0];j>i;j--){
            if(tmp[j]>tmp[j-1]){
                var set = tmp[j];
                tmp[j]=tmp[j-1];
                tmp[j-1]=set;
            }
        }
    }

    var Alice=0,Bob=0;
    for(var i=0;i<input[0];i++){
        if((i%2)===0){
            Alice += tmp[i];
            
        }else{
            Bob += tmp[i];
        }
    }
    console.log(Alice-Bob);
}

Main(require("fs").readFileSync("../txt/ABC088B-Card_Game_for_Two.txt","utf8"));