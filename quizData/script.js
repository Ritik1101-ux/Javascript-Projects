const quizData=[
    { 
        question:"JSON stands for ________________",
        a:"Java Standard Output Network",
        b:"JavaScript Object Notation",
        c:"JavaScript Output Name",
        d:"Java Source Open Network",
        correct:"b"
    },
    {
        question:"What is Full form of HTMl",
        a:"Hyper Text Transfer Protocol",
        b:"Hyping Try Try Priority",
        c:"Cascading Style Sheet",
        d:"Hyper Text Markup Language",
        correct:"d"
    },
    {
        question:"In modern websites what is the common usage for JSON?",
        a:"It is an open standard",
        b:"It is privately developed",
        c:"It requires a license to use",
        d:"none of the above",
        correct:"a"
    },
    {
        question:"Which of the following code will throw an error?",
        a:"JSON.parse(‘{}’)",
        b:"JSON.parse(null)",
        c:"JSON.parse(undefined)",
        d:"JSON.parse(‘[]’)",
        correct:"c"
    },
    {
        question:"Which of the following Protocol services uses JSON?",
        a:"SMTP",
        b:"HTTP",
        c:"TCP/IP",
        d:"Web Protocol",
        correct:"b"
    },
    {
        question:"Which of the following is the limitation of JSON??",
        a:"Too many data types",
        b:"Complicated debugging",
        c:"Support for only C",
        d:"No limit on arrays and objects",
        correct:"b"
    }
];
const check=(id)=>{
   var ele=document.getElementById(id);
   ans=ele.getAttribute('data-value');
   var quesId=GetId();
   var correcAns=quizData[quesId].correct; 
   localStorage.setItem(quesId,id);
   if(correcAns==ans){
      var score=parseInt(localStorage.getItem("score")?localStorage.getItem("score"):'0');
      localStorage.setItem("score",score+1);
      ele.style.backgroundColor='#32CD32';
   }
   else{
    ele.style.backgroundColor='red';
    document.getElementById(correcAns).style.backgroundColor='#32CD32';
   }


}
const GetId=()=>{
     var id=parseInt(localStorage.getItem('id')? localStorage.getItem('id'):'0');
     if(id<=0){id=0; return id;}
     return id-1;
}
const nextQues=()=>{
    var id=parseInt(localStorage.getItem('id')? localStorage.getItem('id'):'1');
    localStorage.setItem('id',id+1);
    localStorage.setItem('prev',id-1);
    var a=document.getElementById('a');
    var b=document.getElementById('b');
    var c=document.getElementById('c');
    var d= document.getElementById('d')
    if(id==quizData.length){
        document.getElementById('btnBack').style.display='none';
        document.getElementById('btnNext').style.display='none';
        var  score=localStorage.getItem("score")?localStorage.getItem("score"):0;
        document.getElementById('ques').display='none'
         var box=document.getElementById('box')
         box.innerHTML=" Your Score is "+score+"/6";
         box.style.fontSize='40px';
  
        a.style.cssText=` 
        background-color:white;
        border:none;
        display:none;
        `;
        b.style.cssText=` 
        background-color:white;
        border:none;
        display:none;
        `;
        c.style.cssText=` 
        background-color:white;
        border:none;
        display:none;
        `;
        d.style.cssText=` 
        background-color:white;
        border:none;
        display:none;
        `;
    }
   else{
    document.getElementById('ques').innerHTML="Question : "+quizData[id].question;
   
    a.innerHTML=" (a) "+quizData[id].a;
   
    b.innerHTML=" (b) "+quizData[id].b;
    c.innerHTML=" (c) "+quizData[id].c;
    d.innerHTML=" (d) "+quizData[id].d;
    a.style.backgroundColor='white';
    b.style.backgroundColor='white';
    c.style.backgroundColor='white';
    d.style.backgroundColor='white';
    
    var idBack=localStorage.getItem(id);
    if(idBack!=null){
    var changeColor=document.getElementById(quizData[id].correct);
    changeColor.style.backgroundColor='#32CD32';
    if(quizData[id].correct!=idBack){
        var changeColor1=document.getElementById(idBack);
        changeColor1.style.backgroundColor='red';
    }}
    if(id==quizData.length-1){
        document.getElementById('btnNext').innerHTML="Submit"
    }
}

  
}
const goBack=()=>{
    var id=parseInt(localStorage.getItem('prev')? localStorage.getItem('prev'):'0');
    if(id<0){id=0;}
    document.getElementById('ques').innerHTML="Question : "+quizData[id].question;
    var a=document.getElementById('a')
    a.style.backgroundColor='white';
    a.innerHTML=" (a) "+quizData[id].a;
    var b=document.getElementById('b')
    b.style.backgroundColor='white';
    b.innerHTML=" (b) "+quizData[id].b;
    var c=document.getElementById('c');
    c.style.backgroundColor='white';
    c.innerHTML=" (c) "+quizData[id].c;
    var d= document.getElementById('d')
    d.style.backgroundColor='white';
    d.innerHTML=" (d) "+quizData[id].d;
    var idBack=localStorage.getItem(id);
    if(idBack!=null){
    var changeColor=document.getElementById(quizData[id].correct);
    changeColor.style.backgroundColor='#32CD32';
    if(quizData[id].correct!=idBack){
        var changeColor1=document.getElementById(idBack);
        changeColor1.style.backgroundColor='red';
    
    }}
    localStorage.setItem('id',id+1);
    localStorage.setItem('prev',id-1);

}
localStorage.clear();
