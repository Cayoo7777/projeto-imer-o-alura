//altomatico

var listaFilme = ['https://i0.wp.com/www.otakupt.com/wp-content/uploads/2022/06/berserk-Memorial-Edition-teaser-1.jpg?resize=696%2C984&ssl=1', 
    'https://i.ebayimg.com/images/g/kmUAAOSwrUpiu3ta/s-l500.jpg',
    'https://55919.cdn.simplo7.net/static/55919/sku/kits-placas-decorativas-rick-and-morty-na-nave-1591362986669.jpg',
    'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/54/04/20150812.jpg',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/3/3a/Interstellar_Filme.png/250px-Interstellar_Filme.png',]

//manoalmente

// listaFilme [0] = 'https://i0.wp.com/www.otakupt.com/wp-content/uploads/2022/06/berserk-Memorial-Edition-teaser-1.jpg?resize=696%2C984&ssl=1';
//  listaFilme [1] ='https://i.ebayimg.com/images/g/kmUAAOSwrUpiu3ta/s-l500.jpg';// listaFilme [2] = 'https://55919.cdn.simplo7.net/static/55919/sku/kits-placas-decorativas-rick-and-morty-na-nave-1591362986669.jpg';
//  listaFilme [3] = 'https://s2.glbimg.com/xf8BaeDS2dUsMgtcG5MsO-esDiI=/e.glbimg.com/og/ed/f/original/2019/12/22/zem22ba72bhpvndgnmdvkvfmve.jpg';

  for (var i = 0; i < listaFilme.length; i++) {
    document.write('<img src=' +  listaFilme [i] + '>');
  }

  //botão 1
const botao0 = document.getElementById("btn0")

    botao0.addEventListener("click", fnSoma)

        function fnSoma(){
           window.location.href = "https://pt.wikipedia.org/wiki/Berserk_(mang%C3%A1)"
        }
 //botão 2
const botao1 = document.getElementById("btn1")

    botao1.addEventListener("click", fnSoma1)

        function fnSoma1(){
            window.location.href = "https://pt.wikipedia.org/wiki/Top_Gun_-_Ases_Indom%C3%A1veis"
        }
 //botão 3
const botao2 = document.getElementById("btn2")

        botao2.addEventListener("click", fnSoma2)
            function fnSoma2(){
                window.location.href = "https://pt.wikipedia.org/wiki/Rick_and_Morty"
        }
 
 //botão 4
 const botao3 = document.getElementById("btn3")

        botao3.addEventListener("click", fnSoma3)
            function fnSoma3(){
                window.location.href = "https://pt.wikipedia.org/wiki/Shrek"
            }
 
 //botão 5
 const botao4 = document.getElementById("btn4")

            botao4.addEventListener("click", fnSoma4)
                function fnSoma4(){
                    window.location.href = "https://pt.wikipedia.org/wiki/Interstellar"
                }
      

  
    
      
  