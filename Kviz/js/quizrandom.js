
var quizA={1:{Saturn:false,Jupiter:true,Neptun:false},2:{Šangaj:false,Tokio:true,Seul:false},
 3:{SAD:false,Indija:false,Kina:true}, 4:{5000:false, 68:false, 17800:true},
 5:{kokosa:true, pomorandze:false, riže:false}, 6:{Amazon:true, Nil:false, Kongo:false}, 
 7:{Apenini:false, Atlas:false, Ural:true}, 8:{Kina:false, Rusija:true, Kanada:false},
 9:{45:false, 76:true, 123:false},10:{Andromeda:true, Vir:false, Sombrero:false}}

var quizQ={1:"Koja je najveća planeta Sunčevog sistema?",2:"Koji je glavni grad Japana?",
 3:"Koja je najmnogoljudnija drzava?", 4:"Indonezija se sastoji od koliko ostrva?", 
 5:"Maršalska ostrva su poznata kao izvoznici:" , 6:"Koja je najveća rijeka na svijetu?", 
 7:"Planina koja dijeli Evropu od Azije?", 8:"Koja je najveća država na svijetu?",
 9:"Svaki koliko godina Halejeva kometa prolazi pored zemlje?", 10:"Koja je najbliža galaksija našoj?"}

var question=document.getElementById('q');
var answer1=document.getElementById('a1');
var answer2=document.getElementById('a2');
var answer3=document.getElementById('a3');
var end=document.getElementById("congradulation");
var block=document.getElementById("block");
var group=document.getElementById("group");
var retry1=document.getElementById("retry1");
var retry=document.getElementById("retry");
var b1=document.getElementById("b1");
var b2=document.getElementById("b2");
var b3=document.getElementById("b3");
var sorry=document.getElementById("sorry");
var i=Math.floor((Math.random()*10)+1);
var counter=0;
var list=[];
list.push(i);
question.innerHTML=quizQ[i];
answer1.innerHTML=(Object.keys(quizA[i])[0]);
answer2.innerHTML=(Object.keys(quizA[i])[1]);
answer3.innerHTML=(Object.keys(quizA[i])[2]);
answer1.value=(Object.keys(quizA[i])[0]);
answer2.value=(Object.keys(quizA[i])[1]);
answer3.value=(Object.keys(quizA[i])[2]);


const exist=(L,x)=>{
	var condition=true;
	for(var i=0; i<L.length; i++){
		if(L[i]==x){
			condition=false;
		}
	} return condition;
}
const next=(answer)=>{
	var text=answer.value;
	var condition=quizA[i][text]; 

	console.log(condition);

	if(condition && counter<5) {
		i=Math.floor((Math.random()*10)+1);
		while(!exist(list,i)){
		i=Math.floor((Math.random()*10)+1);}
		list.push(i);
		counter++;
		if(counter==5){
		end.id="show";
		block.id="congradulation";
		group.id="congradulation";

	}
		question.innerHTML=quizQ[i];
		answer1.innerHTML=(Object.keys(quizA[i])[0]);
        answer2.innerHTML=(Object.keys(quizA[i])[1]);
        answer3.innerHTML=(Object.keys(quizA[i])[2]);
        answer1.value=(Object.keys(quizA[i])[0]);
        answer2.value=(Object.keys(quizA[i])[1]);
        answer3.value=(Object.keys(quizA[i])[2]);
        answer1.id="answer1";
        answer2.id="answer2";
	}
else{
sorry.id="show";
block.id="sorry";
group.id="sorry";
}}

answer1.onclick=()=>{
	next(answer1);
}
answer2.onclick=()=>{
	next(answer2);
}
answer3.onclick=()=>{
	next(answer3);
}
retry1.onclick=()=>{
	location="quizrandom.html";
}
retry.onclick=()=>{
	location="quizrandom.html";
}
b1.onclick=()=>{
	location="quizrandom.html";
}
b2.onclick=()=>{
	var text=answer1.value;
	var condition=quizA[i][text];
	if(!condition){
		answer1.id="sorry";

	}
	else {
		answer2.id="sorry";}
	
	b2.id="sorry";

}
b3.onclick=()=>{
	i=Math.floor((Math.random()*10)+1);
		while(!exist(list,i)){
		i=Math.floor((Math.random()*10)+1);}
		list.push(i);
		counter++;
		if(counter==5){
		end.id="show";
		block.id="congradulation";
		group.id="congradulation";

	}
		question.innerHTML=quizQ[i];
		answer1.innerHTML=(Object.keys(quizA[i])[0]);
        answer2.innerHTML=(Object.keys(quizA[i])[1]);
        answer3.innerHTML=(Object.keys(quizA[i])[2]);
        answer1.value=(Object.keys(quizA[i])[0]);
        answer2.value=(Object.keys(quizA[i])[1]);
        answer3.value=(Object.keys(quizA[i])[2]);
        answer1.id="answer1";
        answer2.id="answer2";
	b3.id="sorry";
}