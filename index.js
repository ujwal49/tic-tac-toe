var num = 0;
var x=[];
var o=[];
val='';
//var check_winner = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var id_num=0,count=0,n,m,a,b,number,p,q;
var arr=[[0,0,0],[0,0,0],[0,0,0]];
//having first player as O.

function assign(number){

    if(number == 1){
        n = 0;
        m=0;
    }else if(number == 2){
        n =0;
        m = 1;
    }
    else if(number == 3){
        n =0;
        m = 2;
    }
    else if(number == 4){
        n = 1;
        m = 0;
    }
    else if(number == 5){
        n = 1;
        m=1;
    }
    else if(number == 6){
        n = 1;
        m = 2;
    }
    else if(number == 7){
        n = 2;
        m=0;
    }
    else if(number == 8){
        n = 2;
        m = 1;
    }
    else if(number == 9){
        n = 2;
        m =2;
    }

    if(num % 2 == 0){
        arr[n][m]='o';
    }
    else{
        arr[n][m]='x';
    }
}

function check(val){
    count =0;
    for(a = 0;a<3;a++){
        for(b =0;b<3;b++){
            if(arr[a][b] == val){
                count = count + 1;
            }
        }
        if(count == 3){
            count = 0;
            
            return true;
        } 
        count = 0;
    }
    count = 0;
    for(b = 0;b<3;b++){
        for(a =0;a<3;a++){
            if(arr[a][b] == val){
                count = count + 1;
            }
        }
        if(count == 3) {
             count = 0;
             
             return true;
    }
    count = 0;
    }

    count = 0;
    for(p=0;p<3;p++){
     if(arr[p][p] == val){
        count = count +1;
    }}
    if(count == 3){
        count =0;
        
        return true;
    }
    count = 0;
    for(q=0;q<3;q++){
        if(arr[q][2-q] == val){
            count = count +1;
        }
    }
    if(count == 3){
        count = 0;
        console.log('here');
        return true;
    }
    count =0;
    return false;
}

function change(id){
    id_num = id[4];
    if(num % 2 == 1 && num <= 8){
        x.push(id_num);
        var x_data = document.querySelector("#"+id);
        x_data.style.backgroundColor="#000000";
        assign(id_num);
        num = num +1;
        if(check('x')){
            alert("Player X is th winner");
            num = 9;
        } 
    }
    else if(num % 2 == 0 && num <= 8){
        o.push(id_num);
        var o_data = document.querySelector("#"+id);
        o_data.style.border="5px solid #000000";
        o_data.style.borderRadius="50%";
        o_data.style.backgroundColor="FFFFFF";
        assign(id_num);
        num = num +1;
        if(check('o')){
            alert("Player O is th winner");
            num = 9;
        } 
    }
}

function reset(){
    if(num >= 9){
        for(var i=1;i<=9;i++){
            var data = document.querySelector(`#btn-${i}`);
            data.style.backgroundColor="#FFF0DD";
            data.style.borderRadius="0%";
            data.style.border="0px";
            num = 0;
            x=[];
            o=[];
            arr=[[0,0,0],[0,0,0],[0,0,0]];
            count =0;
        }
    }
    else{
        alert("Play Again button wont work while in game :(");
    }
    
    
}