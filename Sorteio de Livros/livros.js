var listaLivros = [
  ];
  
  function mandaLivro() {
    var livroNovo = document.getElementById("livroNome").value;
    listaLivros.push(livroNovo);
    document.getElementById("livroNome").value = "";
  
    var exibeLivro = document.getElementById("apareceLivro");
    (exibeLivro.innerHTML = livroNovo), +" Foi adicionado";
  }
  
  function sorteiaLivro() {
    var sorteio = parseInt(Math.random() * listaLivros.length);
    var exibeResultado = document.getElementById("mostraSorte");
    exibeResultado.innerHTML = listaLivros[sorteio]
  } 