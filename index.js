/*
document.addEventListener('DOMContentLoaded', function() {
    const caixas = document.querySelectorAll('.caixas');

    caixas.forEach(caixa => {
        const title = caixa.querySelector('.caixas_titulo');
        const content = caixa.querySelector('.caixas_conteudo');

        title.addEventListener('click', function() {
            caixas.forEach(c => {
                const otherContent = c.querySelector('.caixas_conteudo');
                if (otherContent !== content) {
                    otherContent.style.display = 'none';
                }
            });

            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block'; 
            } else {
                content.style.display = 'none'; 
            }
        });
    });
});
*/

document.addEventListener('DOMContentLoaded', function() {
    const caixas = document.querySelectorAll('.caixas');

    caixas.forEach(caixa => {
        const content = caixa.querySelector('.caixas_conteudo');

        caixa.addEventListener('click', function() {
            caixas.forEach(c => {
                const otherContent = c.querySelector('.caixas_conteudo');
                if (otherContent !== content) {
                    otherContent.style.display = 'none';
                }
            });

            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block'; 
            } else {
                content.style.display = 'none'; 
            }
        });
    });
});
