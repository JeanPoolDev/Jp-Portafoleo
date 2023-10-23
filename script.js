document.addEventListener('DOMContentLoaded', function() {

    var header = document.getElementById('myHeader');
    var page = document.getElementById('page');
    var openMenuButton = document.getElementById('openmenu');

    window.addEventListener('scroll', function(){
        page.classList.remove('menuopen');
        if(this.window.scrollY >= 100){
            header.classList.add('sticky');
        }else{
            header.classList.remove('sticky');
        }
    });

    openMenuButton.addEventListener('click', function(){
        header.classList.remove('sticky');
        page.classList.add('menuopen');
    });



    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event){

            event.preventDefault();

            var targetId = this.getAttribute('href');
            var tragetElement = document.querySelector(targetId);

            if(tragetElement){
                tragetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }

        });
    });

});