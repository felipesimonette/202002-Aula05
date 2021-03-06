$(document).ready(()=>{
    $(`#apurar-votos`).fadeOut();
    $(`#btn-voto`).click(()=>{
        addVotos($(`#input-voto`).val());
        $(`#input-voto`).text('');
    });
    $(`#btn-apurar-voto`).click(() => apurarVotos());
});

let nulos: number;
nulos = 0;

let candidatoVoto: any = [{

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


const addVotos: any = (candidatoCod: number) =>{
   if (candidatoCod == 1 || candidatoCod == 2 ||
       candidatoCod == 3 || candidatoCod == 4 || candidatoCod == 5) 
            candidatoVoto.find(x => x.codigo == candidatoCod).Voto++;
    else {
        window.alert("Código inválido, seu voto será considerado nulo")
            nulos++;
    }
}

const votoVencedor: any = () => {
    candidatoVoto.sort((a, b) => b.Voto - a.Voto);
    return candidatoVoto[0].codigo;
};

const apurarVotos: any = () => {
    $(`#apurar-votos`).fadeIn();
    $(`#resultado-votos`).append(`Votos do candidato 1: ${candidatoVoto[0].Voto}`);
    $(`#resultado-votos2`).append(`Votos do candidato 2: ${candidatoVoto[1].Voto}`);
    $(`#resultado-votos3`).append(`Votos do candidato 3: ${candidatoVoto[2].Voto}`);
    $(`#resultado-votos4`).append(`Votos do candidato 4: ${candidatoVoto[3].Voto}`);
    $(`#resultado-votos5`).append(`Votos do candidato 5: ${candidatoVoto[4].Voto}`);
    $(`#votos-nulos`).append(`Votos nulos: ${nulos}`);
    $('#voto-maior').html(`Candidato com maior número de votos é o do código: ${votoVencedor()}`);
 
}


