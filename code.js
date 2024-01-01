
//colocar nos imputs para ir atulizando o valor do xp guardado usado e total de acordo com o que digita
//separa o verificado/tabela/upgradestatus
function labelSelect(input){
    // console.log(input.getAttribute("for"))
    document.getElementById(input.getAttribute("for")).select();
}
//input simples
function validarxpInput(input) {
    var valor = parseInt(input.value); // Converte o valor para um número inteiro
    if (isNaN(valor)) {
        valor = 0;
    }
    input.value = valor;
    updateXP()
    updateTabela()
}
//input variavel
function validarInput(input) {
    var valor = parseInt(input.value); // Converte o valor para um número inteiro
    input.value = valor;
    if (valor > 20) {
        input.value = 20;  // Define o valor como 20 se for maior que 20
    } else if (valor < 0 || isNaN(valor)) {
        input.value = 0;   // Define o valor como 0 se for menor que 0
    }
    if (input.value.length > 2) {
        input.value = input.value.slice(0, 2); 
    }
    updateXP()
    updateTabela()
    if(xpLockIs == 1){
        {
            var nivelAnterior = parseInt(oldInputs[input.id]);
            var valorAnterior = calculateValor(nivelAnterior);
            var valorAtual = calculateValor(parseInt(input.value));
            console.log(parseInt(oldInputs[input.id]),oldInputs);

            var xpAtual = parseInt(document.getElementById("xp").innerText)
            console.log(calculateMaxV(valorAnterior+xpAtual), valorAnterior, nivelAnterior);

            if(valorAtual-valorAnterior >= xpAtual){
                input.value = calculateMaxV(valorAnterior+xpAtual)
            }
        }
        var xpU = calculatexpU()
        document.getElementById("xp").innerText = xpGOld+xpLock-xpU;
        oldInputs[input.id] = parseInt(input.value);
    }
}

var xpLockIs = 0;
var xpLock = 0;
var xpGOld = 0;
var oldInputs = {};
function updateXP(){
    var xpG = parseInt(document.getElementById("xp").value);
    if (isNaN(xpG)) {
        xpG = 0;
    }
    var xpU = calculatexpU()
    
    try{
        document.getElementById("xpG").innerText = "xp_guardado: " + xpG;
        document.getElementById("xpU").innerText = "xp_usado: " + xpU;
        document.getElementById("xpT").innerText = "xp_total: " + parseInt(xpG + xpU);
    }
    catch{
        if(xpLockIs == 1){
            //oldInputs.xp = document.getElementById("xp").innerText;
            //document.getElementById("xp").innerText = xpGOld+xpLock-xpU;
        }
    }
}

function calculatexpU(){
    var inputs = document.querySelectorAll('form input[type="number"]');
    var xpU = 0;
    inputs.forEach(function(input) {
        if(input.id != "xp"){
            var nivel = Number(input.value);
            if (nivel == 1){
                xpU = xpU + 20;
            }
            if (nivel == 2){
                xpU = xpU + 40;
            }
            if (nivel == 3){
                xpU = xpU + 80;
            }
            if (nivel == 4){
                xpU = xpU + 120;
            }
            if (nivel == 5){
                xpU = xpU + 180;
            }
            if (nivel == 6){
                xpU = xpU + 240;
            }
            if (nivel == 7){
                xpU = xpU + 320;
            }
            if (nivel == 8){
                xpU = xpU + 400;
            }
            if (nivel == 9){
                xpU = xpU + 500;
            }
            if (nivel == 10){
                xpU = xpU + 600;
            }
            if (nivel == 11){
                xpU = xpU + 720;
            }
            if (nivel == 12){
                xpU = xpU + 960;
            }
            if (nivel == 13){
                xpU = xpU + 1440;
            }
            if (nivel == 14){
                xpU = xpU + 2400;
            }
            if (nivel == 15){
                xpU = xpU + 4320;
            }
            if (nivel == 16){
                xpU = xpU + 8160;
            }
            if (nivel == 17){
                xpU = xpU + 16560;
            }
            if (nivel == 18){
                xpU = xpU + 31920;
            }
            if (nivel == 19){
                xpU = xpU + 62640;
            }
            if (nivel == 20){
                xpU = xpU + 124080;
            }
            else{
                xpU = xpU + 0;
            }
        }
    });
    return xpU;
}

function calculateValor(valor){
    //xpteste
    var xpT = 0;
    var nivel = Number(valor);
    if (nivel == 1){
        xpT = xpT + 20;
    }
    else if (nivel == 2){
        xpT = xpT + 40;
    }
    else if (nivel == 3){
        xpT = xpT + 80;
    }
    else if (nivel == 4){
        xpT = xpT + 120;
    }
    else if (nivel == 5){
        xpT = xpT + 180;
    }
    else if (nivel == 6){
        xpT = xpT + 240;
    }
    else if (nivel == 7){
        xpT = xpT + 320;
    }
    else if (nivel == 8){
        xpT = xpT + 400;
    }
    else if (nivel == 9){
        xpT = xpT + 500;
    }
    else if (nivel == 10){
        xpT = xpT + 600;
    }
    else if (nivel == 11){
        xpT = xpT + 720;
    }
    else if (nivel == 12){
        xpT = xpT + 960;
    }
    else if (nivel == 13){
        xpT = xpT + 1440;
    }
    else if (nivel == 14){
        xpT = xpT + 2400;
    }
    else if (nivel == 15){
        xpT = xpT + 4320;
    }
    else if (nivel == 16){
        xpT = xpT + 8160;
    }
    else if (nivel == 17){
        xpT = xpT + 16560;
    }
    else if (nivel == 18){
        xpT = xpT + 31920;
    }
    else if (nivel == 19){
        xpT = xpT + 62640;
    }
    else if (nivel == 20){
        xpT = xpT + 124080;
    }
    else{
        xpT = xpT + 0;
    }
    // console.log(xpT);
    return xpT;
}

//reverso do outro
function calculateMaxV(valor){
    //xpteste
    var nivelResultante = 0;
    var xpC = Number(valor);
    if (xpC < 20){
        nivelResultante = 0;
    }
    if (xpC >= 20){
        nivelResultante = 1;
    }
    if (xpC >= 40){
        nivelResultante = 2;
    }
    if (xpC >= 80){
        nivelResultante = 3;
    }
    if (xpC >= 120){
        nivelResultante = 4;
    }
    if (xpC >= 180){
        nivelResultante = 5;
    }
    if (xpC >= 240){
        nivelResultante = 6;
    }
    if (xpC >= 320){
        nivelResultante = 7;
    }
    if (xpC >= 400){
        nivelResultante = 8;
    }
    if (xpC >= 500){
        nivelResultante = 9;
    }
    if (xpC >= 600){
        nivelResultante = 10;
    }
    if (xpC >= 720){
        nivelResultante = 11;
    }
    if (xpC >= 960){
        nivelResultante = 12;
    }
    if (xpC >= 1440){
        nivelResultante = 13;
    }
    if (xpC >= 2400){
        nivelResultante = 14;
    }
    if (xpC >= 4320){
        nivelResultante = 15;
    }
    if (xpC >= 8160){
        nivelResultante = 16;
    }
    if (xpC >= 16560){
        nivelResultante = 17;
    }
    if (xpC >= 31920){
        nivelResultante = 18;
    }
    if (xpC >= 62640){
        nivelResultante = 19;
    }
    if (xpC >= 124080){
        nivelResultante = 20;
    }
    console.log(nivelResultante);
    console.log(xpC);
    return nivelResultante;
}

function xpLockStart(input){
    xpLockIs = 1;
    xpLock = calculatexpU();
    xpGOld = parseInt(document.getElementById("xp").value);
    var inputs = document.querySelectorAll('form input[type="number"]');
    inputs.forEach(function(input) {
        oldInputs[input.id] = String(Number(input.value));
    })
    console.log(oldInputs);
    var novoElemento = document.createElement("span");
    var elementoOriginal = document.getElementById("xp");

    novoElemento.innerHTML = elementoOriginal.value;
    novoElemento.id = "xp";

    document.getElementById("larquivo").remove();
    document.getElementById("arquivo").remove();
    input.remove();
    elementoOriginal.replaceWith(novoElemento);
}
//apertou botao de enviar nos status, provisorio
function submitStatus(event){
    event.preventDefault();
    // Conteúdo do arquivo de texto personalizado
    var conteudo = gerarTexto();

    // Cria um elemento <a> para o link de download
    var linkDownload = document.createElement("a");

    // Define o conteúdo do link e o atributo de download
    linkDownload.href = "data:text/plain;charset=utf-8," + encodeURIComponent(conteudo);
    linkDownload.download = "status.txt";

    // Adiciona o link ao documento
    document.body.appendChild(linkDownload);

    // Aciona o clique no link para iniciar o download
    linkDownload.click();

    // Remove o link do documento
    document.body.removeChild(linkDownload);
}

//separacao por causa do tamanho, texto do txt
function gerarTexto(){
    // Objeto para armazenar os valores dos inputs
    var valores = {};

    // Seleciona todos os elementos de entrada dentro do formulário
    var inputs = document.querySelectorAll('form input[type="number"]');

    // Itera sobre os elementos de entrada e coleta seus valores
    inputs.forEach(function(input) {
        if(Number(input.value) != 0){
            valores[input.id] = String(Number(input.value));
        }
        else{
            valores[input.id] = "";
        }
    });
    if(valores.xp === undefined){
        try{
            try{
                valores.xp = document.getElementById("xp").innerHTML;
            }
            catch{
                valores.xp = document.getElementById("xp").value;
            }
        }
        catch{
            valores.xp = 0;
        }
    }
    var textoInterpolado = `${valores.xp}xp
vida:${valores.vida}
carisma:${valores.carisma}

armas_corpo_a_corpo:${valores.armas_corpo_a_corpo}
maestria_de_arma:${valores.maestria_de_arma}

ocultismo:${valores.magia_o}
magia_arcana:${valores.magia_a}
feitiçaria:${valores.magia_f}

acrobacias:${valores.acrobacias}
destreza(/iniciativa):${valores.destreza}
constituição:${valores.const}
força:${valores.forca}
furtividade:${valores.furtividade}
arremesso:${valores.arremesso}
encontrar:${valores.encontrar}
poder:${valores.poder}
ouvir:${valores.ouvir}
sorte:${valores.sorte}

usar_computadores:${valores.usar_computadores}
lidar_com_animais:${valores.lidar_com_animais}
usar_bibliotecas:${valores.usar_bibliotecas}
usar_veiculos:${valores.usar_veiculos}
sobrevivencia:${valores.sobrevivencia}
culinaria:${valores.culinaria}
medicina:${valores.medicina}
mecanica:${valores.mecanica}
historia:${valores.historia}
biologia:${valores.biologia}
quimica:${valores.quimica}
linguas:${valores.linguas}
arte:${valores.arte}
    `;
    if (valores.xp == 0) {
        // Remove a primeira linha
        let linhas = textoInterpolado.split('\n');

        // Remover a primeira linha
        linhas.shift();

        // Juntar as linhas de volta em uma string
        textoInterpolado = linhas.join('\n');
    }

    return textoInterpolado;
}

// carrega o arquivo e manda atulizar os status na pagina
function loadStatus(input) {

    var file = input.files[0];

    // Se houver um arquivo selecionado, leia o conteúdo
    if (file) {
        var leitor = new FileReader();

        leitor.readAsText(file);

        leitor.onload = function(e) {
            var conteudoArquivo = e.target.result;
            
            // Preencha as informações no site
            preencherInformacoes(conteudoArquivo);
        };
    }
}

//atualiza os status na pagina
function preencherInformacoes(conteudo) {
    if (conteudo.startsWith("vida")) {
        console.log("xp000");
        var linhas = conteudo.split('\n');
        inputTagIs("xp",0);
    }
    else{
        var conteudo = conteudo.replace(/xp/gi, '');
        var linhas = conteudo.split('\n');
        inputTagIs("xp",parseInt(linhas[0].replace(/[.,]/g, '')));
    }
    linhas.forEach(function(linha) {
        if (linha.includes(':')) {
            var partes = linha.split(':');
            var nomeCampo = partes[0].trim();
            nomeCampo = nomeCampo.toLowerCase()
            var valorCampo = partes[1].trim();
            if(isNaN(valorCampo) || valorCampo == ""){
                valorCampo = 0;
            }
            //feio sim eficiente tbm
            if(nomeCampo == "vida"){
                inputTagIs("vida",valorCampo);
            }
            if(nomeCampo == "carisma"){
                inputTagIs("carisma",valorCampo);
            }
            if(nomeCampo == "armas_corpo_a_corpo"){
                inputTagIs("armas_corpo_a_corpo",valorCampo);
            }
            if(nomeCampo == "maestria_de_arma"){
                inputTagIs("maestria_de_arma",valorCampo);
            }
            if(nomeCampo == "ocultismo"){
                inputTagIs("magia_o",valorCampo);
            }
            if(nomeCampo == "magia_arcana"){
                inputTagIs("magia_a",valorCampo);
            }
            if(nomeCampo == "fetiçaria"){
                inputTagIs("magia_f",valorCampo);
            }
            if(nomeCampo == "acrobacias"){
                inputTagIs("acrobacias",valorCampo);
            }
            if(nomeCampo == "destreza(/iniciativa)" || nomeCampo == "destresa(/iniciativa)"){
                inputTagIs("destreza",valorCampo);
            }
            if(nomeCampo == "constituição"){
                inputTagIs("const",valorCampo);
            }
            if(nomeCampo == "força"){
                inputTagIs("forca",valorCampo);
            }
            if(nomeCampo == "furtividade"){
                inputTagIs("furtividade",valorCampo);
            }
            if(nomeCampo == "arremesso"){
                inputTagIs("arremesso",valorCampo);
            }
            if(nomeCampo == "encontrar"){
                inputTagIs("encontrar",valorCampo);
            }
            if(nomeCampo == "poder"){
                inputTagIs("poder",valorCampo);
            }
            if(nomeCampo == "ouvir"){
                inputTagIs("ouvir",valorCampo);
            }
            if(nomeCampo == "sorte"){
                inputTagIs("sorte",valorCampo);
            }
            if(nomeCampo == "usar_computadores"){
                inputTagIs("usar_computadores",valorCampo);
            }
            if(nomeCampo == "lidar_com_animais"){
                inputTagIs("lidar_com_animais",valorCampo);
            }
            if(nomeCampo == "usar_bibliotecas"){
                inputTagIs("usar_bibliotecas",valorCampo);
            }
            if(nomeCampo == "usar_veiculos"){
                inputTagIs("usar_veiculos",valorCampo);
            }
            if(nomeCampo == "sobrevivencia"){
                inputTagIs("sobrevivencia",valorCampo);
            }
            if(nomeCampo == "culinaria"){
                inputTagIs("culinaria",valorCampo);
            }
            if(nomeCampo == "medicina"){
                inputTagIs("medicina",valorCampo);
            }
            if(nomeCampo == "mecanica"){
                inputTagIs("mecanica",valorCampo);
            }
            if(nomeCampo == "historia"){
                inputTagIs("historia",valorCampo);
            }
            if(nomeCampo == "biologia"){
                inputTagIs("biologia",valorCampo);
            }
            if(nomeCampo == "quimica"){
                inputTagIs("quimica",valorCampo);
            }
            if(nomeCampo == "linguas" || nomeCampo == "liguas"){
                inputTagIs("linguas",valorCampo);
            }
            if(nomeCampo == "arte"){
                inputTagIs("arte",valorCampo);
            }
        }
    })
    updateXP()
    updateTabela()
    console.log(conteudo);
}


//usado para mudar os valores dos inputs
function inputTagIs(id, valorMudado){
    return document.getElementById(id).value = valorMudado
}

function whiteMode() {
    var element1 = document.body;
    var element2 = document.querySelectorAll("input");
    var element3 = document.querySelectorAll("textarea");
    var element4 = document.querySelectorAll("a");

    element1.classList.toggle("white-mode");
    
    element2.forEach(function(input) {
        input.classList.toggle("white-mode");
    });

    element3.forEach(function(textarea) {
        textarea.classList.toggle("white-mode");
    });

    element4.forEach(function(link) {
        link.classList.toggle("white-mode");
    });
}

function criarTabela(){
    // Número de linhas e colunas da tabela
    //const numRows = 30; // Altere conforme necessário
    const numCols = 4;

    // Obtém a referência da tabela
    const table = document.getElementById('myTable');

    var inputs = document.querySelectorAll('form input[type="number"]');

    // Loop para preencher a tabela
    //for (let i = 0; i < numRows; i++) {
    inputs.forEach(function(input) {
        if (input.id != "xp"){

            // Cria uma nova linha
            const row = table.insertRow();

            // Adiciona a classe 'tStatus' à linha
            row.classList.add('tStatus');

            //define x
            var x = input.value;

            // Loop para preencher as células da linha
            for (let j = 0; j < numCols; j++) {
                // Cria uma nova célula
                const cell = row.insertCell();
                var valorT= 0;
                cell.classList.add(input.id+"T")
                if (j == 0){
                    //tag
                    cell.classList.add("red")
                    //calcula o fracasso
                    if (x<20 && x>1){
                        var valorT = 20 - x;
                    }
                    else{
                        var valorT = 1;
                    }
                }
                else if (j == 1){
                    //tag
                    cell.classList.add("green")
                    //calcula o normal
                    if (x>=1){
                        var valorT = 21 - x;
                    }
                    else{
                        var valorT = 20;
                    }
                    if (valorT<=1){
                        valorT = 2;
                    }
                }
                else if (j == 2){
                    //tag
                    cell.classList.add("blue")
                    //calcula o bom
                    if (x>=2){
                        var valorT = 21 - aredondaMeuGeito((x/2));
                    }
                    else{
                        var valorT = 20
                    }
                    if (valorT<=1){
                        valorT = 2;
                    }
                }
                else{
                    //tag
                    cell.classList.add("purple")
                    //calcula o bom
                    if (x>=10){
                        var valorT = 21 - aredondaMeuGeito((x/10));
                    }
                    else{
                        var valorT = 20;
                    }
                    if (valorT<=1){
                        valorT = 2;
                    }
                }
                // Define o conteúdo da célula
                cell.textContent = valorT;
            }
        }
    })
}
function updateTabela(){
    try{
        var inputs = document.querySelectorAll('form input[type="number"]');

        inputs.forEach(function(input) {
            if (input.id != "xp"){
                //define x
                var x = input.value;

                var linhaT = document.getElementsByClassName(input.id+"T");

                var numCols = linhaT.length;

                // Loop para repreencher as células da linha
                for (let j = 0; j < numCols; j++) {
                    var valorT= 0;
                    if (j == 0){
                        //calcula o fracasso
                        if (x<20 && x>1){
                            var valorT = 20 - x;
                        }
                        else{
                            var valorT = 1;
                        }
                    }
                    else if (j == 1){
                        //calcula o normal
                        if (x>=1){
                            var valorT = 21 - x;
                        }
                        else{
                            var valorT = 20;
                        }
                        if (valorT<=1){
                            valorT = 2;
                        }
                    }
                    else if (j == 2){
                        //calcula o bom
                        if (x>=2){
                            var valorT = 21 - aredondaMeuGeito((x/2));
                        }
                        else{
                            var valorT = 20
                        }
                        if (valorT<=1){
                            valorT = 2;
                        }
                    }
                    else{
                        if (x>=10){
                            var valorT = 21 - aredondaMeuGeito((x/10));
                        }
                        else{
                            var valorT = 20;
                        }
                        if (valorT<=1){
                            valorT = 2;
                        }
                    }
                    // Define o conteúdo da célula
                    linhaT[j].innerText = valorT;
                }
            }
        })
    }
    catch{
        return
    }
}
function aredondaMeuGeito(valor){
    console.log(valor)
    var parteDecimal = valor % 1; // Obtém a parte decimal para comparar

    if (parteDecimal <= 0.5) {
        return Math.floor(valor); // Arredonda para baixo
    }
    else {
        return Math.ceil(valor); // Arredonda para cima
    }
}
