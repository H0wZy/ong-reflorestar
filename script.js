const page = window.location.pathname;

// Alterar a cor de fundo do body com base na página
if (page.includes('index')) 
    { 
    document.body.style.background = 'linear-gradient(329deg, rgba(50, 149, 78, 1) 35%, rgba(18, 236, 80, 1) 100%)'; 
    }

else if (page.includes('missao')) {
    document.body.style.background = 'linear-gradient(329deg, #455A64 35%, #0F1B21 100%)';
} else if (page.includes('atuacao')) {
    document.body.style.background = 'linear-gradient(329deg, #FF6907 35%, #ea803c 100%)';
} else if (page.includes('contato')) {
    document.body.style.background = 'linear-gradient(329deg, #3DC2EC 35%, #3c63ea 100%)';
} 
