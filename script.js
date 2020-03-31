function calcularQuantidadeRatos() {
  let inputValidation = inputNumberValidation();

  const altura = parseInt(document.getElementById("altura").value);
  const largura = parseInt(document.getElementById("largura").value);
  const profundidade = parseInt(document.getElementById("profundidade").value);

  const resultado = Math.floor((altura * largura * profundidade) / 70792);

  let textoResultado = "";
  console.log(inputValidation)

  if(inputValidation) {
    if(altura < 40 || largura < 40 || profundidade < 40) {
        textoResultado = "Sua gaiola não é ideal para ratos, use-o apenas para transporte."
      } else {
        if(resultado >= 1) {
          textoResultado = `Sua gaiola cabe ${resultado} ratos.`
        } 
      }
  } else {
    textoResultado = "Preencha os campos acima."
  }
  
  document.getElementById("resultado").innerText = textoResultado;

  if(inputValidation) clearInput();
}

function inputNumberValidation() {
  const altura = inputIsEmpty(document.getElementById("altura"));
  const largura = inputIsEmpty(document.getElementById("largura"));
  const profundidade = inputIsEmpty(document.getElementById("profundidade"));

  return altura && largura && profundidade;
}

function inputIsEmpty(input) {
  if(input.value === ""){
      input.style.border = "1px solid #cc516a"
      return false;
    }else{
      input.style.border = "0"
      return true;
    }
}


function clearInput(e) {
  e.value = ""
}
