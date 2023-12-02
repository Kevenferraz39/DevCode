// Quando o usuário rolar 20px para baixo a partir do topo do documento, mude a cor de fundo da navbar
// e mostre/oculte o botão de rolar para o topo

window.onscroll = function() {
    scrollFunctionNavbar();
    scrollFunctionButton();
  };
  
  function scrollFunctionNavbar() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      // Se a posição de rolagem for maior que 20 pixels, mude a cor para azul
      document.getElementById("navbar").style.backgroundColor = '#e4e4e4'
      document.getElementById("navbar").style.boxShadow = '#39378e  0 10px 10px 0px'
      
    } else {
      // Se a posição de rolagem for 20 pixels ou menos, mude a cor para vermelho
      document.getElementById("navbar").style.boxShadow = 'none'
    }
  }
  
  function scrollFunctionButton() {
    // Get the button
    let mybutton = document.getElementById("myBtn");
  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // Quando o usuário clica no botão, rolar para o topo do documento
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }