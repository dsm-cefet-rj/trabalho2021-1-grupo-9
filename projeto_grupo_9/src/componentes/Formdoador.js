import React from 'react';
import '../styles/Formdoador.css';
function App() {
  return (
    <h1>Cadastro do doador</h1>
    <div id="cadastro">
      <div>
       <p>Preencha com as informações pessoais do doador</p>
      </div>
      <div id="preencher">
        <form>
          <label>Nome Completo:</label><br>
          <input type="text"><br>
          <label>Telefone:</label><br>
          <input type="tel"><br>
          <label>CEP:</label><br>
          <input type="text"><br>
          <label>Logradouro:</label><br>
          <input type="text"><br>
          <label>Bairro:</label><br>
          <input type="text"><br>
          <label>Número:</label><br>
          <input type="text"><br>
          <label>Cidade:</label><br>
          <input type="text"><br>
          <label>Estado</label><br>
          <input type="text"><br>
          </form>
        <div>
          <p>Itens</p>
          <select style= "margin-bottom: 30px" >
            <option>Escolher itens</option>
            <option>Roupas </option>
            <option>Enxoval </option>
            <option>Remédios </option>
            <option>Higiene pessoal </option>
            <option>Óleo usado </option>
            <option>Produtos de limpeza </option>
            <option>Brinquedos </option>
            <option>Alimentos não perecíveis </option>
            <option>Ração para animais </option>
            <option>Livros </option>
            <option>Mobília </option>
          </select>
        </div>
      </div>
    </div> 
  );
}