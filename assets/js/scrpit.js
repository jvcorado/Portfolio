/*div class="alert alert-success alert-dismissible fade show m-2 sticky-top" role="alert">
        <strong class="pe-2">Seja Bem Vindo!</strong>Fique a vontade para acessar meus projetos.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>*/

    function dark(){
        document.querySelector("body").classList.remove('bg-light')
        document.querySelector("body").classList.add('bg-dark')

        document.querySelector(".navbar").classList.remove('navbar-light')
        document.querySelector(".navbar").classList.add('navbar-dark')

        document.querySelector(".navbar").classList.remove('bg-light')
        document.querySelector(".navbar").classList.add('bg-dark')

        document.querySelector(".cabecalho").classList.remove('border-dark')
        document.querySelector(".cabecalho").classList.add('border-white')

        document.querySelector(".sobre").classList.remove('bg-dark')
        document.querySelector(".sobre").classList.add('bg-light')

        document.querySelector(".sobre").classList.remove('text-white')
        document.querySelector(".sobre").classList.add('text-dark')

        document.querySelector(".sobre a").classList.remove('btn-light')
        document.querySelector(".sobre a").classList.add('btn-dark')

        document.querySelector(".dados").classList.remove('bg-light')
        document.querySelector(".dados").classList.add('bg-dark')

        document.querySelector(".dados").classList.remove('text-dark')
        document.querySelector(".dados").classList.add('text-white')

        document.querySelector(".skills").classList.remove('bg-dark')
        document.querySelector(".skills").classList.add('bg-light')

        document.querySelector(".skills h1").classList.remove('text-white')
        document.querySelector(".skills h1").classList.add('text-dark')

        document.querySelector(".skills .btn").classList.remove('btn-light')
        document.querySelector(".skills .btn").classList.add('btn-dark')

        document.querySelector(".skills .modal-header").classList.remove('bg-light')
        document.querySelector(".skills .modal-header").classList.add('bg-dark')

        document.querySelector(".skills .modal-header").classList.remove('text-dark')
        document.querySelector(".skills .modal-header").classList.add('text-white')

        document.querySelector(".skills .modal-body").classList.remove('bg-light')
        document.querySelector(".skills .modal-body").classList.add('bg-dark')

        document.querySelector(".skills .modal-body").classList.remove('text-dark')
        document.querySelector(".skills .modal-body").classList.add('text-white')


        document.querySelector(".skills .modal-footer").classList.remove('bg-light')
        document.querySelector(".skills .modal-footer").classList.add('bg-dark')

        document.querySelector(".skills .modal-footer").classList.remove('text-dark')
        document.querySelector(".skills .modal-footer").classList.add('text-white')

     
        
        document.querySelector(".skills .row").classList.remove('text-dark')
        document.querySelector(".skills .row").classList.add('text-white')


        const cardAll = document.querySelectorAll(".skills .card");

        cardAll.forEach(Element =>{
            
            Element.classList.remove('bg-light')
            Element.classList.add('bg-dark')

            Element.classList.remove('text-dark')
            Element.classList.add('text-white')
    
        })

        document.querySelector(".projetos").classList.remove('bg-light')
        document.querySelector(".projetos").classList.add('bg-dark')  

        document.querySelector(".projetos h1").classList.remove('text-dark')
        document.querySelector(".projetos h1").classList.add('text-white')

        const cardAllProjeto = document.querySelectorAll(".projetos .card");
        const cardAllProjetoBtn = document.querySelectorAll(".projetos .card a");

        cardAllProjeto.forEach(Element =>{
            
            Element.classList.remove('bg-dark')
            Element.classList.add('bg-light')

            Element.classList.remove('text-white')
            Element.classList.add('text-dark')

       
    
        })

        cardAllProjetoBtn.forEach(Element =>{
            
            Element.classList.remove('btn-light')
            Element.classList.add('btn-dark')
    
        })

        document.querySelector(".certificados").classList.remove('bg-dark')
        document.querySelector(".certificados").classList.add('bg-light')

        document.querySelector(".certificados h1").classList.remove('text-white')
        document.querySelector(".certificados h1").classList.add('text-dark')

        document.querySelector(".curriculo").classList.remove('bg-light')
        document.querySelector(".curriculo").classList.add('bg-dark')  
        
        document.querySelector(".curriculo h3").classList.remove('text-dark')
        document.querySelector(".curriculo h3").classList.add('text-white')

        
        document.querySelector(".curriculo .btn").classList.remove('btn-dark')
        document.querySelector(".curriculo .btn").classList.add('btn-light') 
         
      
    } 
    function white(){
        document.querySelector("body").classList.remove('bg-dark')
        document.querySelector("body").classList.add('bg-light')

        document.querySelector(".navbar").classList.remove('navbar-dark')
        document.querySelector(".navbar").classList.add('navbar-light')

        document.querySelector(".navbar").classList.remove('bg-dark')
        document.querySelector(".navbar").classList.add('bg-light')

        document.querySelector(".cabecalho").classList.remove('border-white')
        document.querySelector(".cabecalho").classList.add('border-dark')

        document.querySelector(".sobre").classList.remove('bg-light')
        document.querySelector(".sobre").classList.add('bg-dark')

        document.querySelector(".sobre").classList.remove('text-dark')
        document.querySelector(".sobre").classList.add('text-white')

        document.querySelector(".sobre a").classList.remove('btn-dark')
        document.querySelector(".sobre a").classList.add('btn-light')

        document.querySelector(".dados").classList.remove('bg-dark')
        document.querySelector(".dados").classList.add('bg-light')

        document.querySelector(".dados").classList.remove('text-white')
        document.querySelector(".dados").classList.add('text-dark')

        document.querySelector(".skills").classList.remove('bg-light')
        document.querySelector(".skills").classList.add('bg-dark')

        document.querySelector(".skills h1").classList.remove('text-dark')
        document.querySelector(".skills h1").classList.add('text-white')

        document.querySelector(".skills .btn").classList.add('btn-light')
        document.querySelector(".skills .btn").classList.remove('btn-dark')

        document.querySelector(".skills .modal-header").classList.remove('bg-dark')
        document.querySelector(".skills .modal-header").classList.add('bg-light')

        document.querySelector(".skills .modal-header").classList.remove('text-white')
        document.querySelector(".skills .modal-header").classList.add('text-dark')

        document.querySelector(".skills .modal-body").classList.remove('bg-dark')
        document.querySelector(".skills .modal-body").classList.add('bg-light')

        document.querySelector(".skills .modal-body").classList.remove('text-white')
        document.querySelector(".skills .modal-body").classList.add('text-dark')


        document.querySelector(".skills .modal-footer").classList.remove('bg-dark')
        document.querySelector(".skills .modal-footer").classList.add('bg-light')

        document.querySelector(".skills .modal-footer").classList.remove('text-white')
        document.querySelector(".skills .modal-footer").classList.add('text-dark')

        document.querySelector(".skills .row").classList.remove('text-dark')
        document.querySelector(".skills .row").classList.add('text-white')


        const cardAll = document.querySelectorAll(".skills .card");

        cardAll.forEach(Element =>{
            
            Element.classList.remove('bg-dark')
            Element.classList.add('bg-light')

            Element.classList.remove('text-white')
            Element.classList.add('text-dark')
    
        })

        document.querySelector(".projetos").classList.remove('bg-dark')
        document.querySelector(".projetos").classList.add('bg-light')  

        document.querySelector(".projetos h1").classList.remove('text-white')
        document.querySelector(".projetos h1").classList.add('text-dark')

        const cardAllProjeto = document.querySelectorAll(".projetos .card");
        const cardAllProjetoBtn = document.querySelectorAll(".projetos .card a");

        cardAllProjeto.forEach(Element =>{
            
            Element.classList.remove('bg-dark')
            Element.classList.add('bg-light')

            Element.classList.remove('text-white')
            Element.classList.add('text-dark')

       
    
        })

        cardAllProjetoBtn.forEach(Element =>{
            
            Element.classList.remove('btn-light')
            Element.classList.add('btn-dark')
    
        })


        document.querySelector(".certificados").classList.remove('bg-light')
        document.querySelector(".certificados").classList.add('bg-dark')  

        document.querySelector(".certificados h1").classList.remove('text-dark')
        document.querySelector(".certificados h1").classList.add('text-white')

        document.querySelector(".curriculo").classList.remove('bg-dark')
        document.querySelector(".curriculo").classList.add('bg-light')  

        document.querySelector(".curriculo h3").classList.remove('text-white')
        document.querySelector(".curriculo h3").classList.add('text-dark')

        
        document.querySelector(".curriculo .btn").classList.remove('btn-light')
        document.querySelector(".curriculo .btn").classList.add('btn-dark')  


        document.querySelector(".contato").classList.remove('bg-light')
        document.querySelector(".contato").classList.add('bg-dark') 
    } 
     