let userName = prompt("please enter your name");

let gender = prompt("please enter your gender");

if(gender === 'male' || gender=== 'female' )
console.log("");
else
alert("invalid gender please enter one of the following : male , female");


let age = prompt("please enter your age");
 
if(age<= 0){
    alert("please enter a valid age");
}

let MSG_gender= null; 

if(gender==='male'){
 MSG_gender = "Mr"; 
} else if(gender==='female')
 MSG_gender = "Ms"
 else
 MSG_gender="";



let skipWelcome = confirm("Do you want to skip the welcoming message?");

if(skipWelcome){

}else 
alert(" Welcome " +MSG_gender +" "+ userName );

let arrQuestions = ["are you a student ?","do you like video games ?","do you watch movies ?"];
let arrAnswers = [];
for(let i =0 ; i<=2;i++){
    arrAnswers[i] = prompt(arrQuestions[i])
    if(arrAnswers[i]!=='yes'&& arrAnswers[i]!=='no' || arrAnswers[i]==null)

    arrAnswers[i]="invalid";
}

for(let y=0;y<=2;y++){
    console.log(arrAnswers[y]);
}