const calcular = document.getElementById('calcular');

function calculadora () {
    
    const nome = document.getElementById('nome').value;
    const p = document.getElementById('ValorMensalmente').value;
    const i = document.getElementById('Juros').value;
    const n = document.getElementById('ParcelasMensais').value;

    const resultado = document.getElementById('result');


    if (p !== ''  && juros !== '' && n !=='' && nome !=='') {
            const i = (juros/100)
            const VF = p*(((1+i)**n-1)/i)

            const Vresult = VF.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
            const PR = p.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})

            resultado.textContent = `${nome}, se você aplicar ${PR}, a taxa de juros de ${i}% ao mês duante ${n} meses, acumulará uma poupança de ${Vresult}` 


                   
             
               

    }else {
        resultado.textContent = 'Preencha todos os campos.';
    }
}
calcular.addEventListener('click', calculadora);