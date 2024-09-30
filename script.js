// // let promise1 = new Promise((resolve,reject)=>{
// //     let success = true;
// //     if(success){
// //         resolve("10");

// //     }
// //     else{
// //     reject("promise rejected");
// //     }
// // });
// //  promise1.then((message)=>{
// //      console.log("first msg: " +message);
// //      return " promise fulfilled second message";
// //  }).then((message)=> {
// //     console.log("second msg:" +message);
// //     return "promise fulfilled thid message";

// //  }).then((message)=>{
// //     console.log("third msg:"+message);
// //     return "promise fulfilled third message";
// //  })
//  let promise1 = new Promise((resolve, reject)=> {
//     setTimeout(resolve,1000,"first");
//  })
//  let promise2 = new Promise((resolve, reject)=> {
//     setTimeout(reject,2000,"second");
//  })
//  let promise3 = new Promise((resolve, reject)=> {
//     setTimeout(resolve,2000,"third");
//  })
//  Promise.all([promise3,promise2,promise1])
//  .then((values)=>{
//     console.log(values);
//  })
//  .catch((error)=>{
//    console.error("error in:" +error)
//  })


const button = document.getElementById("search-button")

const input = document.getElementById("city-input")
const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');




async function getData(cityName){
 const promise = await  fetch(
   `http://api.weatherapi.com/v1/current.json?key=4ecd87ec6d6e41da909104630243009&q=${cityName}&aqi=yes
`);
return await promise.json();
}
button.addEventListener("click", async     ()=>{
console.log(input.value);
const value = input.value;
const result = await getData(value);
cityName.innerText = `${result.location.name},${result.location.region} - ${result.location.country}`
cityTime.innerText = result.location.localtime;
cityTemp.innerText = result.current.temp_c;


})