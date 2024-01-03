/*for(let liczba=20; liczba>0; liczba--){
    console.log("Odliczanie: "+liczba)

    if(liczba==1)
    {
        console.log("Happy New Year!")
    }
}
*/
function nwd(){
    var l1 = parseInt(document.getElementById("nwd1").value);
    var l2 = parseInt(document.getElementById("nwd2").value);
    console.log(l1);
    console.log(l2);
    var divisor;
    for(let i = 1; i <=l1 && i <=l2; i++){
        if(l1 % i == 0 && l2 % i == 0){
            divisor = i;
        }
    }
    document.getElementById('wynikNWD').innerHTML = "NWD = (" +String(l1) + "," +String(l2)+  " = "+divisor+ ")";
}


function insert(num){
    document.form.tekst.value = document.form.tekst.value +num;
}

function equal(){
    var wartosc = document.form.tekst.value;

    if(wartosc){
        document.form.tekst.value = eval(wartosc);
    }
}

function backspace(){
    var wartosc = document.form.tekst.value;

    document.form.tekst.value = wartosc.substring(0, wartosc.length-1);
}

function startTime(){
    const dzisiaj = new Date();

    var g = dzisiaj.getHours();
    var m = dzisiaj.getMinutes();
    var s = dzisiaj.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('zegar').innerHTML = g + ":" + m + ":" + s;
    setTimeout(startTime,1000);

}

function checkTime(i){
    
    if (i < 10){
        i = "0" +i
    };
    return i;

}
