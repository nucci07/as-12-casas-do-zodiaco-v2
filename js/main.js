function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const data = document.querySelector('#data').value;
    const bio = document.querySelector("bio");
    
    if(data >= '2023/05/21' && data <= '2023/06/21'){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.jpg");
        imagem.setAttribute("width","300px");
        texto.innerHTML = "Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena.";
    }

    else if(data >='2023/10/23' && data <= '2023/11/21') {
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.jpg");
        imagem.setAttribute("width","300px");
        texto.innerHTML = "O Cavaleiro de Ouro de Escorpião que protege a casa de escorpião no santuário. Prezava muito a amizade, por isso passou a zelar por Hyoga depois da morte de seu amigo Camus de aquário.";
    }
    
    else if(data >='2023/02/19' && data <= '2023/03/20'){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.jpg");
        imagem.setAttribute("width","300px");
        texto.innerHTML = "O Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XVIII. É discípulo de Rugonis de Peixes, usa variações de golpes com rosas e seu sangue é extremamente venenoso, por isso é conhecido como Veneno Encarnado.";
    }

    else if(data >='2023/03/21' && data <= '2023/04/20'){
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","img/aries.jpg");
        imagem.setAttribute("width","300px");
        texto.innerHTML = "Cavaleiro de Ouro do século XX guardião da primeira casa do Santuário. A algum tempo, desconfiava das atitudes do Grande Mestre, mas devido à sua lealdade a Atena, permaneceu no local cumprindo suas obrigações.";
    }
    
    else if(data >='2023/04/21' && data <= '2023/05/20'){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.jpg");
        imagem.setAttribute("width","300px");
        texto.innerHTML = "Cavaleiro de Ouro da Constelação de Touro durante os eventos do Século XX, servindo como o guardião da Casa de Touro no Santuário. Dotado de uma resistência fora do comum, também tem uma grande força física e uma agilidade impressionante para alguém de seu porte.";
    }

    else if(data >='2023/06/21' && data <= '2023/07/22'){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","img/cancer.jpg");
        imagem.setAttribute("width","300px");
        texto.innerHTML = "Câncer é um dos Cavaleiros de Ouro veteranos durante o século XVIII. Ele foi o único discípulo do Grande Mestre Sage . Ele é considerado o mais forte fos cavaleiros de ouro, e morreu durante a luta contra o deus da morte Thanatos junto de seu mestre.";
    }
    
    else if(data >='2023/07/23' && data <= '2023/08/22'){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leao.jpg");
        imagem.setAttribute("width","300px");
        texto.innerHTML = "Aiolia nasceu na Grécia, tendo por única família seu irmão Aiolos. Em algum ponto, os dois foram para o Santuário, onde passaram a treinar. Aiolos tornou-se o Cavaleiro de Ouro de Sagitário, passando então a treinar Aiolia para que este também se tornasse um Cavaleiro.";
    }

    else if(data >='2023/08/23' && data <= '2023/09/22'){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.jpg");
        imagem.setAttribute("width","300px");
        texto.innerHTML = "Shaka de Virgem está entre os Cavaleiros de Ouro mais populares de Os Cavaleiros do Zodíaco. Conhecido como o Homem Mais Próximo de Deus, ele possui o maior cosmo dentre os 88 Cavaleiros de Atena e se mostrou fundamental para o triunfo dos heróis na Saga de Hades.";
    }
    
    else if(data >='2023/09/23' && data <= '2023/10/22'){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.jpg");
        imagem.setAttribute("width","300px");
        texto.innerHTML = "Dohko é o Cavaleiro Dourado de Libra que lutou na última Guerra Santa contra Hades no ano de 1743, onde somente ele e Shion de Áries sobreviveram. Após a Guerra Santa, Shion se tornou Grande Mestre do Santuário, e Dohko, ficou com o encargo de vigiar o selo que aprisionava Hades e seus 108 espectros.";
    }

    else if(data >='2023/11/22' && data <= '2023/12/21'){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","img/sagitario.jpg");
        imagem.setAttribute("width","300px");
        texto.innerHTML = "Invocando o poder da Constelação de Pégaso e concentrando seu cosmo em seu punho, Seiya pode dar mais de cem socos por segundo, até mesmo a longas distâncias, criando uma onda de cosmo que toma a forma de diversos meteoros.";
    }

    else if(data >='2023/12/22' && data <= '2024+/01/20'){
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src","img/capricornio.jpg");
        imagem.setAttribute("width","300px");
        texto.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a décima casa do Santuário, a Casa de Capricórnio; é o cavaleiro que carrega o poder da espada Excalibur em seu braço direito.";
    }
    
    else if(data >='2023/01/21' && data <= '2023/02/18'){
        texto.innerHTML = "Aquário";
        imagem.setAttribute("src","img/aquario.jpg");
        imagem.setAttribute("width","300px");
        texto.innerHTML = "Camus de Aquário ( 水瓶座 アクエリアス のカミュ, Akueriasu no Kamyu?) é o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. O mestre do mestre de Hyoga é tranquilamente um dos mais poderosos Cavaleiros de Ouro";
    }

    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}