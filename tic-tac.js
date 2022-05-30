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
    const winnerIndex=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0;i<=winnerIndex.length;i++){
        const[a,b,c]=winnerIndex[i];
        if(arr1[a]==arr1[b] && arr1[b]==arr1[c]){
           if(state==false){
               alert(user1+" is Winner");
               color="rgba(223, 52, 52,0.5)";
           }
           else{
               alert(user2+" is Winner");
               color="lightgreen";
           }
           highLight(a,b,c,color);
           score();
           resetArray();
           break;
           
        }

    }

}
function highLight(x,y,z,c){
    document.getElementById(x).style.color=c;
    document.getElementById(y).style.color=c;
    document.getElementById(z).style.color=c;

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
         document.getElementById(i).style.color="";
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
