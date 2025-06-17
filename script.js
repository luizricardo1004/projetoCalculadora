    function calcular(){
        alert("Entrou aqui");
        var a = parseFloat(document.getElementById('a').value);
        var b = parseFloat(document.getElementById('b').value);
        var c = parseFloat(document.getElementById('c').value);

        var delta = b * b - 4 * a * c;

        if(delta < 0){
            alert("Entrou no if");
            document.getElementById('x1').innerHTML = "";
            document.getElementById('x2').innerHTML = "";
            document.getElementById('status').innerHTML = "Não existem raízes reais (delta < 0).";
        }else{
            alert("Entrou no else");
            var x1 = (-b + Math.sqrt(delta)) / (2* a);
            var x2 = (-b + Math.sqrt(delta)) / (2* a);

            document.getElementById('x1').innerHTML = x1.toFixed(2);
            document.getElementById('x2').innerHTML = x2.toFixed(2);
            document.getElementById('status').innerHTML = "Raízes reais encontradas com sucesso";
        }
    }
