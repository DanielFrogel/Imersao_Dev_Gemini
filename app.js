document.getElementById("campo-pesquisa").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      // Função a ser executada quando a tecla Enter for pressionada
      pesquisar();
  }
});

function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    let mensagem = document.getElementById("mensagem");

    // Inicializa uma string vazia para concatenar os resultados
    let resultados = "";
  
    if (campoPesquisa.trim() == ""){
      mensagem.style.display = "block";
      mensagem.className = "pesquisa-invalida";
      mensagem.textContent = "*Campo pesquisa em Branco!";
      return;
    }   
    
    if (campoPesquisa.length < 3) {
      mensagem.style.display = "block";
      mensagem.className = "pesquisa-invalida";
      mensagem.textContent = "*Pesquisa deve conter 3 ou mais caracteres!";      
      return;      
    }

      // Itera sobre cada dado no array 'dados'
    for (let dado of dados) {
      // Constrói o HTML de cada resultado, formatando com template literals
      // O atributo 'target="_blank"' abre links em uma nova aba
      if ((dado.titulo.toLowerCase().includes(campoPesquisa.toLowerCase())) || (dado.descricao.toLowerCase().includes(campoPesquisa.toLowerCase())) || (dado.tags.toLowerCase().includes(campoPesquisa.toLowerCase()))){
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao} <a href="${dado.link}" target="_blank">Mais informações</a></p>
          </div>
        `;
      }
    }  

    if (!resultados) {         
      section.innerHTML = "<h2>A Pesquisa não retornou nenhum resultado!</h2>";  
    }
    else {
      section.innerHTML = resultados;
    }
}