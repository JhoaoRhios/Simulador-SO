//CÓDIGO REFERENTE A ANIMAÇÃO DA PÁGINA
let id = null
let id2 = null

//função faz andar o quadrado azul 


function entradas( ){

    var quantidade = document.getElementById("Nprocessos").value;
    console.log(quantidade)
    var conteudo="";
    for(i = 0; i< quantidade; i++){
        /* conteudo += ('<input type="number" name="P'+i+'"/>'); */
conteudo += ('<footer2><label>Processo'+(i+1)+' </label></footer2><label>   Tempo Chegada = </label><input type="number" name="P'+i+'"/><label>   |   Dedline = </label><input type="number" name="P'+i+'"/><label>   |   Tempo Execusão = </label><input type="number" name="P'+i+'"/><br>');
       

            document.getElementById("processcorr").innerHTML=conteudo;

    };


}

function entradas2( ){

    var quantidade = document.getElementById("Nprocessos").value;
    console.log(quantidade)
    var bloco = "|";
    bloco = ('<blockquote></label>Escalonamento<label></blockquote>');
    
    for(j = 0; j< quantidade; j++){
        /* conteudo += ('<input type="number" name="P'+i+'"/>'); */
 bloco += ('<section class=main><main class="stage2"> </label>Proc'+(j+1)+'<label><section class="stage2"><div class="obj1" id="obj'+(j+1)+'"></div></section>');



    }
     document.getElementById("objn").innerHTML= bloco;

}
    function entradas3( ){

        var quantidade = document.getElementById("Nprocessos").value;
        console.log(quantidade)
        var bloco2 = ('||');
        bloco2 = ('<blockquote></label>MEMÓRIA RAM<label></blockquote><ul class="flex-container">');
        for(j = 1; j<= quantidade; j++){
            for(p = 0; p< 10; p++){
                /* conteudo += ('<input type="number" name="P'+i+'"/>'); */
         bloco2 += ('<li class="flex-item">'+j+'</li> ');
            }
            /* conteudo += ('<input type="number" name="P'+i+'"/>'); */
        }
        bloco2 += (' </ul>');
             document.getElementById("objn2").innerHTML=bloco2;

                   
}

function blueSquare() {
    var quantidade = document.getElementById("Nprocessos").value;
   
   /*                 
    let ob1 = document.getElementById('obj1')
    let ob2 = document.getElementById('obj2') */

    let pos1 = 0
    let pos2 = 0
    let pos3 = 0
    clearInterval(id)
    id = setInterval(frame, 300)
    function frame(){

      if(pos3 == 1000 ){
        clearInterval(id)
      } else {
        pos1 = pos1 + 2
        pos2++
        pos3 = pos3 + 40
        pos1 = 40
/*         ob1.style.left = pos1 + 'px'
 */        /* ob1.style.width = pos3 + 'px'
            ob2.style.width = (pos3/2) + 'px' */
            document.getElementById('obj1').style.width = pos3 + 'px'

            for(z = 1; z<= quantidade; z++){
                document.getElementById('obj'+z+'').style.width = pos3 + 'px'
                document.getElementById('obj'+z+'').style.left = pos1*z + 'px'

            }
      }
    }
  }

//função faz andar o quadrado azul 
function redSquare(){
    let ob2 = document.getElementById('obj2')
    // ob1.style.left = '100px'
    // ob1.style.top = '50px'
    let pos1 = 0
    let pos2 = 0
    clearInterval(id)
    id = setInterval(frame,200)
    function frame( ){
         if(pos2 == 600 ) {
            clearInterval(id)
        }
    
        else {
              
             //pos1 = pos1 + 10
            pos2 = pos2 + 40
            ob2.style.left = pos1 + 'px' 
    
            ob2.style.width = pos2 + 'px'
       //   ob1.style.top= pos2 + 'px'
        }
    
    }
    }


//função faz andar o quadrado verde 
function greenSquare(){
    let ob3 = document.getElementById('obj3')
    // ob1.style.left = '100px'
    // ob1.style.top = '50px'
    let pos1 = 0
    let pos2 = 0
    clearInterval(id)
    id = setInterval(frame,200)
    function frame( ){
         if(pos2 == 400 ) {
            clearInterval(id)
        }
    
        else {
              
             //pos1 = pos1 + 10
            pos2 = pos2 + 40
    
            ob3.style.width = pos2 + 'px'
       //   ob1.style.top= pos2 + 'px'
        }
    
    }
    }



    //função faz andar o quadrado azul 
function allSquare(){
    let ob1 = document.getElementById('obj1')
    let ob2 = document.getElementById('obj2')
    let ob3 = document.getElementById('obj3')
    let ob4 = document.getElementById('obj4')

    // ob1.style.left = '100px'
    // ob1.style.top = '50px'
    let pos1 = 0
    let pos2 = 0
    clearInterval(id)
    id = setInterval(frame,200)
    function frame( ){
         if(pos2 == 600 ) {
            clearInterval(id)
        }
    
        else {
              
             //pos1 = pos1 + 10
            pos2 = pos2 + 40
            //ob2.style.left = pos1 + 'px' 
            ob1.style.width = pos2 + 'px'
            ob2.style.width = pos2 + 'px'
            ob3.style.width = pos2 + 'px'
            ob4.style.width = pos2 + 'px'

       //   ob1.style.top= pos2 + 'px'
        }
    
    }
    }
