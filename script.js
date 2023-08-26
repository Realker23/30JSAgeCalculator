let inputVal = document.getElementById("date");
inputVal.max = new Date().toISOString().split("T")[0];
const age = document.querySelector(".age");

function calculateAge(){
    let birthDate = new Date(inputVal.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() +1;
    let y1 = birthDate.getFullYear();

    const today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() +1;
    let y2 = today.getFullYear();

    let d3,m3,y3;

    y3 = y2-y1;

    if(m2>=m1){
        m3 = m2-m1;
    }else{
        y3--;
        m3 = 12 + m2 -m1;
    }

    if(d2>=d1){
        d3 = d2-d1;
    }else{
        m3--;
        d3 = daysInMonth(y1,m1) + d2 - d1;
    }


    function daysInMonth(year,month){
        return new Date(year,month,0).getDate();
    }
    let year = y3>1? "years":"year";
    age.innerHTML = `you are <span>${y3} </span> ${year}  <span>${m3}</span> months and <span>${d3}</span> days old`;

}
