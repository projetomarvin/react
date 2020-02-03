import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Essa é sua página base em react. Leia as instruções abaixo:</h1>
      <hr />
      <h1 id="primeiro-uso">Primeiro uso</h1>
      <p>
        Para instalar os pacotes necessários para usar pela primeira vez,
        execute <code>npm install</code>.
      </p>
      <h1 id="iniciar-o-react">Iniciar o React</h1>
      <p>
        Com os pacotes instalados, é só executar <code>npm start</code> e
        esperar o navegador abrir.
      </p>
      <p>
        Você pode editar seu código e salvar normalmente, e navegador atualiza
        automaticamente.
      </p>
      <h1 id="regras-de-submiss-o">Regras de submissão</h1>
      <p>
        Você deve submeter apenas um (ou poucos) arquivo(s) por fase. Use como
        base o arquivo <code>Tutorial.jsx</code>. Exclua tudo entre as linhas 4
        e 58, e começe a programar.
      </p>
      <p>
        Quando finalizar, <strong>lembre-se de trocar o nome do arquivo</strong>
        , e alterar também na linha 4 do arquivo <code>index.js</code> para
        conferir. Salve apenas o que for pedido no PDF
      </p>
      <h1 id="dicas">Dicas</h1>
      <ul>
        <li>
          Praticamente o tempo todo, você trabalhará apenas com o arquivo{" "}
          <code>Tutorial.jsx</code>, então não se preocupe com os demais
          arquivos.
        </li>
        <li>
          A exibição (ou css) do componente só será avaliada caso o exercício
          especifique isso.
        </li>
        <li>
          Mantenha seu código bem formatado, atendendo às boas práticas. Seu
          editor de código pode te ajudar nisso.
        </li>
        <li>
          Para exercícios mais complexos, tente dividir seu código em diferentes
          componentes e arquivos.
        </li>
      </ul>
      <p>
        Essas informações também estão disponíveis no arquivo README.md. Exclua
        o conteúdo entre as linhas 6 e 58 para usar esse arquivo como base dos
        exercícios.
      </p>
    </div>
  );
}

export default App;
