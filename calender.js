// const dat = new Date();
// const year = date.getMonth();



const date1 = new Date(); 
const month = date1.toLocaleString('default', { month: 'long' }); // 'May'
document.getElementById("month").innerHTML=month;


const date = date1.getDate();
document.getElementById("date").innerHTML=date;

const year = date1.getFullYear();
document.getElementById("year").innerHTML=year;
// const day = date1.getDay();
// alert(day)


 // 2023-05-10
const day = date1.toLocaleString('default', { weekday: 'long' }); // 'May'
document.getElementById("day").innerHTML=day;

