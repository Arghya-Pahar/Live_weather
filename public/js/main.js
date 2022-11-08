const submitbtn=document.getElementById("submitbtn");
const cityname=document.getElementById('cityname');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('celsius');
const temp_status=document.getElementById('status');
const datahide=document.querySelector('.middle_layer');
const day=document.getElementById('day');
const date=document.getElementById('date');
const getinfo=async (event)=>{
    event.preventDefault();
    let cityval=cityname.value;
    console.log(cityval);
    if(cityval==="")
    {
        city_name.innerText=`Search area is empty`;
        datahide.classList.add('data_hide');
    }
    else{
        try {
            let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=8723154d905c7636dcfae3010e00cee6`
            const response = await fetch(url);
            const data =await response.json();
            const arr=[data];
            console.log(arr);
            temp.innerText=arr[0].main.temp;
            city_name.innerText=`${arr[0].name} , ${arr[0].sys.country}`;
            const temp_behv=arr[0].weather[0].main;
            if(temp_behv=="Clear")
            {
                temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            else if(temp_behv=="Clouds")
            {
                temp_status.innerHTML="<i class='fas fa-cloud' style='color: #c2c7d8;'></i>";
            }
            else if(temp_behv=="Rain")
            {
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }
            else
            {
                temp_status.innerHTML="<i class='fas fa-cloud' style='color: #fif2f6;'></i>";
            }
            datahide.classList.remove('data_hide');
            
        } catch {
            city_name.innerText=`Not recognized`;
            datahide.classList.add('data_hide');
        }
    }
}
submitbtn.addEventListener('click',getinfo);
const get_curr_day=()=>{
    let arr=new Array(7);
    arr[0]="Sunday";
    arr[1]="Monday";
    arr[2]="Tuesday";
    arr[3]="Wednesday";
    arr[4]="Thursday";
    arr[5]="Friday";
    arr[6]="Saturday";

    let cur_day=new Date();
    day.innerText=arr[cur_day.getDay()];

    let arr_month=new Array(13)
    arr_month[1]="January";
    arr_month[2]="February";
    arr_month[3]="March";
    arr_month[4]="April";
    arr_month[5]="May";
    arr_month[6]="June";
    arr_month[7]="July";
    arr_month[8]="August";
    arr_month[9]="September";
    arr_month[10]="October";
    arr_month[11]="November";
    arr_month[12]="December";
    date.innerText=`${cur_day.getDate()} ${arr_month[cur_day.getMonth()]}`;
    

    
}
get_curr_day();