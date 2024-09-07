function pesquisar() {
    let resultsSection = document.getElementById("resultados-pesquisa");
    console.log(resultsSection);
  
    let searchTerm = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    if (searchTerm === "") {
      resultsSection.innerHTML = "<p>Nenhuma palavra-chave informada.</p>";
      return;
    }
  
    let results = "";
  
    try {
      for (let item of dados) {
        let title = item.titulo.toLowerCase();
        let description = item.descricao.toLowerCase();
  
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          results += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${item.titulo}</a>
              </h2>
              <p class="descricao-meta">${description}</p>
              <a href=${item.link}>Mais informações</a>
            </div>
          `;
        }
      }
    } catch (error) {
      console.error("Error occurred during search:", error);
      resultsSection.innerHTML = "<p>Ocorreu um erro durante a pesquisa.</p>";
    }
  
    resultsSection.innerHTML = results;
  }





