var complemento = document.createElement('p')
        
var section = document.querySelector('section') 
 
section.appendChild(complemento)

function verificar (){
    var inputElement = document.querySelector('input#ano')

    var data = new Date()
    var ano = data.getFullYear()

    var res = document.querySelector('div#resultado')
   

    if(inputElement.value.length == 0 || inputElement.value > ano){
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(inputElement.value)
       
        var genero = ''

        

        

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade>=0 && idade <13) {
                //Criança
                complemento.innerHTML ='Tu é criança po'
            }else if (idade <21){
                //Jovem
                complemento.innerHTML = 'Você é um jovem'
            }else if (idade <50){
                //Adulto
                complemento.innerHTML = 'Tá adulto'
            }else {
                //Idoso
                complemento.innerHTML = 'Idosin'
            }
            
        }else if (fsex[1].checked){
            genero = 'Mulher'

            if (idade>=0 && idade <13) {
                //Criança
                complemento.innerHTML = 'Você é criança'
            }else if (idade <21){
                //Jovem
                complemento.innerHTML = 'Você é jovem '
            }else if (idade <50){
                //Adulto
                complemento.innerHTML = 'Você é adulta'
            }else {
                //Idoso
                complemento.innerHTML = 'Você é idosa'
            }
        }
        var modificador = ''
        if(genero =='Mulher'){
            modificador='a'
        }
        
        res.innerHTML = `Detectamos um${modificador} ${genero} com ${idade} anos`
        
    }
}


