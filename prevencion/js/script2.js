function verificarRespuestas(){
    var total = 25;
    var puntos = 0;

    const opc2 = "b";
    const opc3 = "c";


    var myForm = document.forms["quizForm"];
    
    for(var i = 1;i<=total; i++){
        if(myForm["p"+i].value === ""){
            alert("Por Favor responde la pregunta "+ i);
            return false;
        }else{
            if(myForm["p"+i].value === opc2){
                puntos = puntos + 1;
            }
            if(myForm["p"+i].value === opc3){
                puntos = puntos + 2;
            }
        } 
    }

    if(puntos<=18){
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = '<h3> Se detecto un Riesgo Leve </span></h3>'
    }else if(puntos<=38){
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = '<h3> Se detecto un Riesgo Moderado </span></h3>'
    }else if(puntos<=50){
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = '<h3>Por favor comunicate con un profecional</h3>'
    }    

    return false;
} 