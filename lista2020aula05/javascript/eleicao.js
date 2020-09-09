$(document).ready(function () {
    $("#apurar-votos").fadeOut();
    $("#btn-voto").click(function () {
        addVotos($("#input-voto").val());
        $("#input-voto").text('');
    });
    $("#btn-apurar-voto").click(function () { return apurarVotos(); });
});
var nulos;
nulos = 0;
var candidatoVoto = [{
        codigo: 1,
        Voto: 0
    },
    {
        codigo: 2,
        Voto: 0
    },
    {
        codigo: 3,
        Voto: 0
    },
    {
        codigo: 4,
        Voto: 0
    },
    {
        codigo: 5,
        Voto: 0
    }];
var addVotos = function (candidatoCod) {
    if (candidatoCod == 1 || candidatoCod == 2 ||
        candidatoCod == 3 || candidatoCod == 4 || candidatoCod == 5)
        candidatoVoto.find(function (x) { return x.codigo == candidatoCod; }).Voto++;
    else {
        window.alert("Código inválido, seu voto será considerado nulo");
        nulos++;
    }
};
var votoVencedor = function () {
    candidatoVoto.sort(function (a, b) { return b.Voto - a.Voto; });
    return candidatoVoto[0].codigo;
};
var apurarVotos = function () {
    $("#apurar-votos").fadeIn();
    $("#resultado-votos").append("Votos do candidato 1: " + candidatoVoto[0].Voto);
    $("#resultado-votos2").append("Votos do candidato 2: " + candidatoVoto[1].Voto);
    $("#resultado-votos3").append("Votos do candidato 3: " + candidatoVoto[2].Voto);
    $("#resultado-votos4").append("Votos do candidato 4: " + candidatoVoto[3].Voto);
    $("#resultado-votos5").append("Votos do candidato 5: " + candidatoVoto[4].Voto);
    $("#votos-nulos").append("Votos nulos: " + nulos);
    $('#voto-maior').html("Candidato com maior n\u00FAmero de votos \u00E9 o do c\u00F3digo: " + votoVencedor());
};
