document.addEventListener("DOMContentLoaded", function () {
    // Mapeamento dos conteúdos e imagens com layout em linha
    const contentMapping = {
        personal: {
            title: 'Informações pessoais',
            content: `
            <div class="container d-flex flex-row align-items-center justify-content-center">
              <p class="me-3">
                Meu nome é <strong>Pedro Vieira</strong>, tenho 21 anos. Apreciador da tecnologia e do desenvolvimento de software, busco constantemente aprimorar minhas habilidades e expandir meus conhecimentos.
              </p>
              <img class="imgsobre img-fluid" src="./compounds/images/eu.png" alt="Foto de perfil"/>
            </div>
            `
        },
        academic: {
            title: 'Informações acadêmicas',
            content: `
            <div class="container d-flex flex-row align-items-center justify-content-center">
              <p class="me-3">
                Atualmente, sou estudante de <strong>Engenharia de Computação</strong> no <strong>CEFET-MG</strong>.
              </p>
              <img class="imgsobre img-fluid" src="./compounds/images/lcef.png" alt="Logo do CEFET-MG"/>
            </div>
            `
        },
        professional: {
            title: 'Informações profissionais',
            content: `
            <div class="container d-flex flex-row align-items-center justify-content-center">
              <p class="me-3">
                Apesar de ainda não possuir experiência profissional formal, desenvolvo projetos pessoais e acadêmicos. Me interesso principalmente por desenvolvimento back-end, bancos de dados e tecnologias inovadoras. Também possuo conhecimentos em front-end para criação de aplicações web.
              </p>
              <img class="imgsobre img-fluid" src="https://via.placeholder.com/150?text=Liderart" alt="Logo Liderart" style="max-width: 150px; height: auto;"/>
            </div>
            `
        }
    };

    // Elementos da interface
    const titleElement = document.getElementById("card-title");
    const contentElement = document.getElementById("card-content");

    // Função para atualizar conteúdo
    function updateContent(type) {
        titleElement.innerText = contentMapping[type].title;
        contentElement.innerHTML = contentMapping[type].content;
    }

    // Eventos de clique para os botões
    document.getElementById("btnPersonal").addEventListener("click", () => updateContent("personal"));
    document.getElementById("btnAcademic").addEventListener("click", () => updateContent("academic"));
    document.getElementById("btnProfessional").addEventListener("click", () => updateContent("professional"));

    // Define o conteúdo inicial
    updateContent("personal");
});
