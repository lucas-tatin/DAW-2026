const categoryLinks = document.querySelectorAll('nav a');
const selectedCategory = document.getElementById('selected-category');

categoryLinks.forEach(function(link){
    link.addEventListener('click', function (event) {
        //Desativa a tentativa de navegação do link
        event.preventDefault();

        // Pega o nome da categoria clicada
        const categoryName = link.textContent;

        //Atualiza o texto da categoria selecionada
        selectedCategory.textContent = categoryName;

        //alert('Categoria clicada'+ categoryName);

        //Remover a class 'active'
        categoryLinks.forEach(function (categoryLink){
            categoryLink.classList.remove('active');
        });

        //Adicionar a class 'active'
        link.classList.add('active');   
        
    });
});

