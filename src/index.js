setInterval(function () {
    var date = new Date();
    
    var time = 'Точнa дата: ' + date.toLocaleDateString();
    
    document.getElementById('time').innerText = time;
    
},1000);

var arr= [9, 2 ,4 , "get", false];
console.log(arr.sort());




















// // Timer and intervals
//
// var id = setInterval(my_func, 1000);
//
// var TimerId= setTimeout(function (){
//     alert('Message');
// }, 8000);
//
//
// var counter = 0;
// function my_func(){
//     document.getElementById("timer").innerHTML = "Counter: " + counter;
//     counter++;
// }
//
// function stopInterval(){
//     // clearInterval(id);
//     clearTimeout(TimerId);
// }
//
// setInterval(function (){
//     console.log('Sec...');
// }, 2000)
//
//
//
// // function btnclick(){
// //     alert('clicked');
// // }
// //
// // function userInput(el){
// //     if(el.value == "font") el.style.fontSize = "10px";
// // }