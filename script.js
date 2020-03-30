function calcularQuantidadeRatos() {
  const validation = inputValidation();
  const altura = parseInt(document.getElementById("altura").value);
  const largura = parseInt(document.getElementById("largura").value);
  const profundidade = parseInt(document.getElementById("profundidade").value);

  const resultado = Math.floor((altura * largura * profundidade) / 70792);

  let textoResultado = resultado <= 1 ? "Sua gaiola não é ideal para ratos, use-o apenas para transporte.": `Sua gaiola cabe ${resultado} ratos.`;

  if(validation) {
    textoResultado = "Preencha os campos acima";
  }

  document.getElementById("resultado").innerText = textoResultado;


}

function inputValidation() {
  const altura = document.getElementById("altura");
  const largura = document.getElementById("largura");
  const profundidade = document.getElementById("profundidade");
  let isEmpty = false;

  if(altura.value === ""){
    altura.style.border = "1px solid #cc516a"
    isEmpty = true;
  }else{
    altura.style.border = "0"
    isEmpty = false;
  }

  if(largura.value === ""){
    largura.style.border = "1px solid #cc516a"
    isEmpty = true;
  }else{
    largura.style.border = "0"
    isEmpty = false;
  }

  if(profundidade.value === ""){
    profundidade.style.border = "1px solid #cc516a"
    isEmpty = true;
  }else{
    profundidade.style.border = "0"
    isEmpty = false;
  }

  return isEmpty;

}

function clearInput(e) {
    e.value = "";
}
