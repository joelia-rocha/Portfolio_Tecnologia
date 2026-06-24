function toggle() {
    var sec = document.getElementById('home');
    var nav = document.getElementById('navigation');
    
    // Ativa ou desativa a classe para animar o menu lateral
    sec.classList.toggle('active');
    nav.classList.toggle('active');
}
