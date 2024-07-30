document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.caixas_titulo');
    const content = document.querySelector('.caixas_conteudo');

    title.addEventListener('click', function() {
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block'; 
    } else {
        content.style.display = 'none'; 
    }
    });
});
