var num = 1;
var x=[];
var o=[];
var id_num=0
//having first member as x
function change(id){
    id_num = id[4];
    if(num % 2 == 1 && num <= 9){
        x.push(id_num);
        var x_data = document.querySelector("#"+id);
        x_data.style.backgroundColor="#000000";
        
        num = num +1;
    }
    else if(num % 2 == 0 && num <= 9){
        o.push(id_num);
        var o_data = document.querySelector("#"+id);
        o_data.style.border="5px solid #000000";
        o_data.style.borderRadius="50%";
        o_data.style.backgroundColor="FFFFFF";
        num = num +1;
    }
}

