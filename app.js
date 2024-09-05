function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para concatenar os resultados
    let resultados = "";
  
    // Itera sobre cada dado no array 'dados'
    for (let dado of dados) {
      // Constrói o HTML de cada resultado, formatando com template literals
      // O atributo 'target="_blank"' abre links em uma nova aba
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao} <a href="${dado.link}" target="_blank">Mais informações</a></p>
        </div>
      `;
    }
  
    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
  }