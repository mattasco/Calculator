function clearC(){
    if (document.getElementById("output2").innerHTML != ''){
        document.getElementById("output2").innerHTML = '';
    }else if(document.getElementById("operator").innerHTML != ''){
        document.getElementById("operator").innerHTML = '';
    }else if (document.getElementById("output").innerHTML != ''){
        document.getElementById("output").innerHTML = '';
    }
}

function addDisplay(value) {
    if((document.getElementById("output").innerHTML.length + document.getElementById("output2").innerHTML.length) < 25){
        if (document.getElementById("operator").innerHTML == ''){
            document.getElementById("output").innerHTML += value;
        }else{
            document.getElementById("output2").innerHTML += value;
        }
    }
}

function operateur(value){
    document.getElementById("operator").innerHTML = value;
}

function resoudre(){
    var a = document.getElementById("output").innerHTML;
    var b = document.getElementById("output2").innerHTML;
    var result;
    switch(true){
        case document.getElementById("operator").innerHTML == "+" :
            result = (+a) + (+b) ;
            break;
        case document.getElementById("operator").innerHTML == "-" :
            result = (+a) - (+b) ;
            break;
        case document.getElementById("operator").innerHTML == "*" :
            result = (+a) * (+b) ;
            break;
        case document.getElementById("operator").innerHTML == "/" :
            result = (+a) / (+b) ;
            break;
    }
    document.getElementById("output").innerHTML = result;
    document.getElementById("output2").innerHTML = '';
    document.getElementById("operator").innerHTML = '';
}

function clearAll(){
    document.getElementById("output").innerHTML = '';
    document.getElementById("output2").innerHTML = '';
    document.getElementById("output3").innerHTML = '';
    document.getElementById("equal").innerHTML = '';
    document.getElementById("operator").innerHTML = '';
}

function deleteLast(){
    if (document.getElementById("output2").innerHTML != ''){
        document.getElementById("output2").innerHTML=document.getElementById("output2").innerHTML.slice(0,-1);
    }else if(document.getElementById("operator").innerHTML != ''){
        document.getElementById("operator").innerHTML=document.getElementById("operator").innerHTML.slice(0,-1);
    }else if (document.getElementById("output").innerHTML != ''){
        document.getElementById("output").innerHTML = document.getElementById("output").innerHTML.slice(0,-1);
    }
}


function PositiveNegative(){
    if (document.getElementById("operator").innerHTML == ''){
        document.getElementById("output").innerHTML *= (-1);
    }else{
        document.getElementById("output2").innerHTML *= (-1);
    }
}

function doted(){
    var virgule = false;
    if (document.getElementById("operator").innerHTML == ''){
        for (i=0;i<=document.getElementById("output").innerHTML.length;i++){
            if (document.getElementById("output").innerHTML[i] == ','){
                virgule=true;
            }
        }
        if (virgule==false) {
            document.getElementById("output").innerHTML += '.';
        }
    }else{
        for (i=0;i<=document.getElementById("output2").innerHTML.length;i++){
            if (document.getElementById("output2").innerHTML[i] == ','){
                virgule=true;
            }
        }
        if (virgule==false) {
            document.getElementById("output2").innerHTML += '.';
        }
    }
}

function Cosinus(){
    if (document.getElementById("output2").innerHTML==''){
        document.getElementById("output").innerHTML=Math.cos(document.getElementById("output").innerHTML)
    }else{
        document.getElementById("output2").innerHTML=Math.cos(document.getElementById("output2").innerHTML)
    }
}

function Sinus(){
    if (document.getElementById("output2").innerHTML==''){
        document.getElementById("output").innerHTML=Math.sin(document.getElementById("output").innerHTML)
    }else{
        document.getElementById("output2").innerHTML=Math.sin(document.getElementById("output2").innerHTML)
    }
}

function Tangente(){
    if (document.getElementById("output2").innerHTML==''){
        document.getElementById("output").innerHTML=Math.tan(document.getElementById("output").innerHTML)
    }else{
        document.getElementById("output2").innerHTML=Math.tan(document.getElementById("output2").innerHTML)
    }
}

function Carre(){
    if (document.getElementById("output2").innerHTML==''){
        document.getElementById("output").innerHTML=Math.pow(document.getElementById("output").innerHTML,2)
    }else{
        document.getElementById("output2").innerHTML=Math.pow(document.getElementById("output2").innerHTML,2)
    }
}

function Racine(){
    if (document.getElementById("output2").innerHTML==''){
        document.getElementById("output").innerHTML=Math.sqrt(document.getElementById("output").innerHTML)
    }else{
        document.getElementById("output2").innerHTML=Math.sqrt(document.getElementById("output2").innerHTML)
    }
}