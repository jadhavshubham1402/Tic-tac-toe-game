var state=true;
var arr1=[1,0,1,0,1,0,0,1,0];
var user1,user2;


function getVal(id){
   if(state){
       document.getElementById(id).innerHTML=setVal(id,'X');
      
   }
   else{
       document.getElementById(id).innerHTML=setVal(id,'O');
       
   }
   console.log(arr1);
   getWin();
}
function setVal(index,val){
    if(arr1[index]==[0] || arr1[index]==[1]){
          arr1[index]=val;
          state=!state;
          
    }
    else{
        alert("Not Allowed....");
    }
     return arr1[index];
}
function getWin(){
    if(arr1[0]==arr1[1] && arr1[1]==arr1[2] || arr1[3]==arr1[4] && arr1[4]==arr1[5] || arr1[6]==arr1[7] && arr1[7]==arr1[8] )
    {
        if(state==false){
            alert(user1+ " is winner");
        }
        else{
            alert(user2+ " is winner");
        }
        resetArray();
        score();
    } 
    else if(arr1[0]==arr1[3] && arr1[3]==arr1[6] || arr1[1]==arr1[4] && arr1[4]==arr1[7] || arr1[2]==arr1[5] && arr1[5]==arr1[8])
    {
        if(state==false){
            alert(user1+ " is winner");
          
        }
        else{
            alert(user2+ " is winner");
       
        }
        resetArray();
        score();
    } 
    else if(arr1[0]==arr1[4] && arr1[4]==arr1[8] || arr1[2]==arr1[4] && arr1[4]==arr1[6])
    {
        if(state==false){
            alert(user1+ " is winner");
          
        }
        else{
            alert(user2+ " is winner");
       
        }
        resetArray();
        score();
    } 
}
function start(){
    user1=document.querySelector("#user1").value;
    user2=document.querySelector("#user2").value;
    if(user1=="" || user2==""){
        alert("Please Enter the User Name");
    }
    else{
     document.querySelector(".xz").style.display="block";
     document.querySelector(".start").style.display="none";
    }
    document.querySelector("#name1").innerHTML=user1;
    document.querySelector("#name2").innerHTML=user2;
}
function restart(){
    location.reload();

}
function resetArray(){
    arr1=[null,null,null,null,null,null,null,null,null];
}
function reset(){
    state=true;
    arr1=[1,0,1,0,1,0,0,1,0];
    for(let i=0;i<=8;i++){
        document.getElementById(i).innerHTML="";
    }
}
function score(){
    var value1=document.querySelector("#count1");
    var value2=document.querySelector("#count2");
    if(state==false){
        value1.innerHTML=parseInt(value1.innerHTML)+1;
    }
    else{
        value2.innerHTML=parseInt(value2.innerHTML)+1;
    }
    
}