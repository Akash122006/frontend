function toss(urChoice){
    let option = ['HEAD','TAIL'];
    let systemchoice =option[Math.floor(Math.random()*2)];
   if(urChoice === systemchoice){
    document.querySelector('p').innerHTML = computer {urChoice} user {systemchoice}, You win...
   }else{
    document.querySelector('p').innerHTML = computer {urChoice} user{systemchoice},You Loss...
   }
}