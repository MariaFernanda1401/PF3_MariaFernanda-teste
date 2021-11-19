<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IMC</title>
    <link rel="stylesheet" href="estilo_prova.css">
  </head>
  <body>
    <main>
      <div class="section">

        <div class="title"> Calculadora de IMC </div>

        <div class="input">
             <input placeholder="Digite o seu nome?" type="text" id='nome' required="required">
        </div>

        <div class="input">
          <input placeholder="Digite o seu peso (kg)? Ex: 70" type="number" id='peso' required="required" >
      </div>

        <div class="input">
            <input  placeholder="Digite a sua altura (m)? Ex: 1,60"  type="number" id='altura'required="required">
        </div>
        
        <button id='calcular'>Calcular</button>

        <div class="result" id='resultado'></div>

        <footer> Atenção! O IMC deve ser interpretado somente por um profissional de saúde. </footer>  

      </div>
    </main>
    <script src="script2.js"></script>
  </body>
</html>
