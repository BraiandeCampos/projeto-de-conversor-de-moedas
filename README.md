# 💱 Conversor de Moedas

<p align="center">
  Uma aplicação web desenvolvida para realizar conversões entre diferentes moedas,
  utilizando <strong>HTML5</strong>, <strong>CSS3</strong> e <strong>JavaScript</strong>.
</p>

<p align="center">
  Projeto desenvolvido durante os estudos de JavaScript no <strong>DevClub</strong>.
</p>

<br>

## 🛠️ Tecnologias

<p align="center">
  <img src="https://skillicons.dev/icons?i=html,css,js,vscode,git,github" alt="Tecnologias utilizadas">
</p>

<p align="center">
  <sub>HTML5 · CSS3 · JavaScript · Visual Studio Code · Git · GitHub</sub>
</p>

---

## 📸 Preview

<p align="center">
  <img
    src="https://github.com/BraiandeCampos/projeto-de-conversor-de-moedas/blob/main/assets/site%20conversor%20de%20moedas.png?raw=true"
    alt="Preview do Conversor de Moedas"
    width="850"
  >
</p>

---

## 📋 Sobre

O **Conversor de Moedas** é uma aplicação desenvolvida como parte da introdução ao JavaScript no curso **DevClub**.

A aplicação permite selecionar uma moeda de origem, escolher a moeda de destino, informar um valor e realizar a conversão através de uma interface simples e objetiva.

Além do cálculo, a interface atualiza dinamicamente o nome, a bandeira e o valor correspondente à moeda selecionada.

---

## 💰 Moedas disponíveis

| Moeda                | Código |
| :------------------- | :----: |
| 🇧🇷 Real brasileiro |   BRL  |
| 🇺🇸 Dólar americano |   USD  |
| 🇪🇺 Euro            |   EUR  |
| 🇬🇧 Libra           |   GBP  |
| ₿ Bitcoin            |   BTC  |

---

## ⚙️ Funcionalidades

* Seleção da moeda de origem;
* Seleção da moeda de destino;
* Entrada do valor a ser convertido;
* Conversão entre Real, Dólar, Euro, Libra e Bitcoin;
* Atualização do nome da moeda selecionada;
* Alteração dinâmica da imagem da moeda;
* Exibição do valor convertido;
* Formatação dos valores utilizando `Intl.NumberFormat`;
* Interações através dos eventos de alteração dos campos e clique no botão.

---

## 💻 Desenvolvimento

A lógica da aplicação foi construída em JavaScript utilizando valores de referência definidos diretamente no código para realizar os cálculos.

As conversões são realizadas utilizando o **Real como base de cálculo**. Quando uma moeda diferente do Real é selecionada como origem, seu valor é primeiro convertido para Real e, posteriormente, utilizado para calcular o valor da moeda de destino.

O projeto também utiliza eventos para atualizar a interface conforme o usuário altera as opções disponíveis.

### Principais conceitos utilizados

* Seleção de elementos com `querySelector()`;
* Criação e utilização de funções;
* Declaração de variáveis e constantes;
* Estruturas condicionais com `if`;
* Eventos com `addEventListener()`;
* Manipulação de conteúdo com `innerHTML`;
* Alteração dinâmica de atributos, como `src`;
* Operações matemáticas;
* Formatação de moedas com `Intl.NumberFormat()`.

---

## 🎨 Interface

O layout foi desenvolvido utilizando CSS3, com uma proposta simples e centralizada.

Entre os recursos utilizados estão:

* Flexbox;
* Bordas arredondadas;
* Espaçamentos e dimensionamento dos elementos;
* Estados de interação com `:hover` e `:active`;
* Cores personalizadas;
* Campos de formulário estilizados;
* Fonte **Roboto**, carregada através do Google Fonts.

A aplicação também utiliza imagens próprias para representar as diferentes moedas e elementos da interface.

---

## 📱 Adaptação

O projeto utiliza a configuração de viewport no HTML e possui uma estrutura compacta, permitindo sua visualização em telas menores.

Apesar disso, não foram utilizadas **Media Queries** para criar diferentes layouts específicos para desktop e dispositivos móveis.

---

## 🎯 Objetivo

O principal objetivo deste projeto foi aplicar os primeiros conceitos de **JavaScript** em uma aplicação funcional, conectando a lógica de programação aos elementos desenvolvidos anteriormente com HTML e CSS.

O projeto representa uma etapa prática dos estudos de JavaScript realizados no **DevClub**.

---

## 📚 Aprendizado

Este projeto marcou uma etapa importante na evolução dos estudos em Desenvolvimento Web, principalmente pela utilização do JavaScript para adicionar comportamento e interação a uma interface que anteriormente seria apenas estática.

A partir dele, foi possível começar a compreender na prática como JavaScript, HTML e CSS trabalham juntos para construir aplicações web interativas.

---

## 👨‍💻 Desenvolvedor

<p align="center">
  <strong>Braian Campos</strong>
  <br>
  Desenvolvimento Web · DevClub
</p>
