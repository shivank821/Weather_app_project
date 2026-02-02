
function getWeather(){
  let newdates=document.querySelector('#newdates');
  let inp=document.querySelector('input');
  let area=document.querySelector('#area');
  let para=document.querySelector('#para');
  let notfound=document.querySelector('notfound');
  let newdate=new Date().toLocaleDateString();
  newdates.innerHTML=newdate;
  let city=inp.value.toUpperCase();
  
 // box.addEventListener("click",()=> {
    if(inp.value===''){
      inp.classList.add('inpt');
      para.innerHTML='Please Enter Any City Name';
      para.style.color="red";
      return;
      //inp.value="Delhi";
    } 
    
    area.innerHTML=city;
   // console.log(area)
 // console.log(para)
     city=inp.value;
     inp.classList.remove('inpt');
      para.innerHTML=''
      console.log(city)
  
  let apiKey = prompt("Enter your OpenWeatherMap API key");
  
  let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 console.log(city)

   fetch(url)
    .then(response => response.json())
    .then(response => {
  let wind = document.querySelector('#wind').innerHTML=response.wind.speed;
  let humidity = document.querySelector('#humidity').innerHTML=response.main.humidity;
  let pressure = document.querySelector('#pressure').innerHTML=response.main.pressure;
  let sea_level = document.querySelector('#sea_level').innerHTML=response.main.sea_level;
  let temp = document.querySelector('#temp').innerHTML=response.main.temp;
  let temp_max = document.querySelector('#temp_max').innerHTML=response.main.temp_max;
  let temp_min = document.querySelector('#temp_min').innerHTML=response.main.temp_min;
      console.log(response)
    })
   .catch((error) => {
    error=true;
    if(error){
      city=' City Not Found ! ';
      h2.innerHTML=`<span id="area">${city}</span> , <span id="newdates">${newdate}</span>`;
      inp.classList.add('inpt');
     
      //console.log('hi')
      //document.querySelector('.notfoundimg').innerHTML=`<img src="notfound.png" class="notfound">`;
      }
   })
  let apikey = "1ffb2b1704e4a77f3903ceb84a05a800";
  let url1 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`;

    fetch(url1)
    .then(response => response.json())
    .then(data => {
  let downbox = document.querySelector(".downbox");
      downbox.innerHTML = "";

        // har 24 hours (8 * 3h = 24h) ka data
  for (let i = 0; i < data.list.length; i += 10) {
 let dayData = data.list[i];
 let date = new Date(dayData.dt_txt).toDateString();
  let temp = dayData.main.temp;
  let weather = dayData.weather[0].description;
     downbox.innerHTML +=`
      <div class="card">
      <p>${date}</p>
      <p>Temprature ${temp} °C</p>
      <p>Clouds  ${weather}</p>
       </div>`;
      }
    })
    .catch(() => {
        document.querySelector(".downbox")
        //.innerHTML='Can not found City';
        .innerHTML=`<img class="badal" src="badal.png">`;
    })
  
}
getWeather();

let btnSrch=document.querySelector('.button');
btnSrch.addEventListener('click',() =>{ getWeather();
  
})
let body=document.querySelector('body');
let img=document.querySelector('.imgs');
let btn=document.querySelector('.btn');
img.addEventListener("click",() => {
  if(body.style.background!="black"){
  body.style.background="black";
  btn.classList.remove('newbtn');
  btn.classList.add('darkmode');
  img.classList.add('imgopt');
  h23.style.color="white";
  h22.style.color="white";
  head.style.color="white"
  }
  else{
  body.style.background="white"
  btn.classList.remove('darkmode');
  btn.classList.add('newbtn');
  img.classList.remove('imgopt');
  img.classList.add('btntransition');
  h23.style.color="black";
  h22.style.color="black";
  head.style.color="black"
  }
})

function openMenu() {
  document.getElementById("mobileMenu").style.transform = "translateX(0)";
}

function closeMenu() {
  document.getElementById("mobileMenu").style.transform = "translateX(-100%)";
}
