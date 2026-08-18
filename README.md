# 💱 Conversor de Moedas

Aplicação web desenvolvida durante uma aula do **DevClub**, com foco na introdução ao **JavaScript** e na criação de uma aplicação interativa utilizando **HTML5**, **CSS3** e **JavaScript**.

O projeto permite realizar conversões entre diferentes moedas através de uma interface simples, utilizando JavaScript para controlar as interações, realizar os cálculos e atualizar os elementos da página.

---

## 🛠️ Tecnologias

<p align="center">
  <img src="https://skillicons.dev/icons?i=html,css,js,vscode,git,github" alt="Tecnologias utilizadas">
</p>

* **HTML5** — estrutura da aplicação
* **CSS3** — estilização e construção da interface
* **JavaScript** — lógica das conversões e interações
* **Google Fonts** — utilização da fonte Roboto
* **Git** — controle de versão
* **GitHub** — armazenamento do projeto

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

## 📋 Sobre o projeto

O **Conversor de Moedas** foi desenvolvido como um dos primeiros projetos durante o estudo de JavaScript no curso **DevClub**.

A aplicação permite selecionar uma moeda de origem, escolher uma moeda de destino, informar um valor e realizar a conversão.

Além do resultado numérico, a interface também atualiza o nome e a imagem da moeda selecionada, proporcionando uma experiência mais dinâmica para o usuário.

---

## 💰 Moedas disponíveis

Atualmente, o conversor trabalha com:

| Moeda                | Código |
| :------------------- | :----: |
| 🇧🇷 Real Brasileiro |   BRL  |
| 🇺🇸 Dólar Americano |   USD  |
| 🇪🇺 Euro            |   EUR  |
| 🇬🇧 Libra Esterlina |   GBP  |
| ₿ Bitcoin            |   BTC  |

---

## ✨ Funcionalidades

* Seleção da moeda de origem;
* Seleção da moeda de destino;
* Campo para inserir o valor da conversão;
* Conversão entre as moedas disponíveis;
* Atualização do nome da moeda selecionada;
* Alteração da imagem correspondente à moeda;
* Exibição do valor original;
* Exibição do valor convertido;
* Formatação dos valores utilizando `Intl.NumberFormat()`;
* Atualização da conversão através do botão **Converter**;
* Atualização da interface ao alterar as moedas selecionadas.

---

## ⚙️ Como funciona

A lógica da aplicação foi desenvolvida em JavaScript utilizando valores de referência definidos diretamente no código.

```javascript
const dolarValue = 5.2;
const euroValue = 5.9;
const libraValue = 6.8;
const bitcoinValue = 120000;
```

O **Real é utilizado como base para os cálculos**.

Quando uma moeda diferente do Real é selecionada como origem, o valor informado é convertido primeiro para Real. Em seguida, esse valor é utilizado para calcular o resultado na moeda escolhida como destino.

Os resultados são formatados utilizando `Intl.NumberFormat()`, permitindo apresentar os valores de acordo com o padrão de cada moeda.

> **Importante:** os valores utilizados no projeto são definidos diretamente no JavaScript e não são obtidos através de uma API ou de cotações em tempo real.

---

## 🧠 Conceitos de JavaScript praticados

Durante o desenvolvimento do projeto foram aplicados conceitos fundamentais de JavaScript, como:

* Seleção de elementos com `querySelector()`;
* Criação e utilização de funções;
* Variáveis e constantes;
* Estruturas condicionais com `if`;
* Eventos utilizando `addEventListener()`;
* Manipulação do DOM;
* Alteração de conteúdo com `innerHTML`;
* Alteração de atributos através de `.src`;
* Operações matemáticas;
* Formatação de valores com `Intl.NumberFormat()`.

Esses conceitos foram utilizados para conectar as ações realizadas pelo usuário com as alterações apresentadas na interface.

---

## 🎨 Interface

A interface foi construída utilizando CSS3, buscando manter o conversor compacto, organizado e de fácil utilização.

Entre os recursos utilizados estão:

* Flexbox;
* Campos de formulário personalizados;
* Bordas arredondadas;
* Espaçamentos e dimensionamento dos elementos;
* Cores personalizadas;
* Estados de interação `:hover` e `:active`;
* Fonte **Roboto** através do Google Fonts;
* Imagens para representar as diferentes moedas;
* Organização dos elementos através de classes CSS.

O conversor é apresentado em um cartão centralizado sobre um fundo roxo, mantendo o foco principal na área de interação.

---

## 📱 Adaptação para telas menores

O projeto possui uma estrutura compacta e utiliza a configuração `viewport` no HTML, permitindo que a aplicação seja visualizada em telas menores.

Entretanto, **não foram utilizadas Media Queries** para criar layouts específicos para diferentes tamanhos de tela.

---

## 📁 Estrutura do projeto

```text
projeto-de-conversor-de-moedas/
│
├── assets/
│   ├── bitcoin.png
│   ├── brasil.png
│   ├── estadosunidos.png
│   ├── euro.png
│   ├── libra.png
│   ├── logo.gif
│   └── arrow.png
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### Principais arquivos

**`index.html`**
Responsável pela estrutura da página, campos de seleção, entrada de valores, botão de conversão e área de exibição dos resultados.

**`style.css`**
Responsável pela aparência da aplicação, incluindo cores, espaçamentos, tamanhos, bordas, tipografia e estados de interação.

**`script.js`**
Contém a lógica das conversões, os eventos da aplicação e as alterações dinâmicas dos nomes, imagens e valores das moedas.

**`assets/`**
Armazena as imagens utilizadas na interface.

---

## 🎯 Objetivo

O principal objetivo do projeto foi colocar em prática os primeiros conhecimentos de **JavaScript**, utilizando a linguagem para adicionar lógica e interatividade a uma interface previamente construída com HTML e CSS.

A aplicação serviu como exercício para compreender, na prática, como diferentes tecnologias do desenvolvimento web trabalham em conjunto.

---

## 📚 Créditos

Projeto desenvolvido durante uma aula do **DevClub**, como parte dos estudos em Desenvolvimento Web e introdução ao JavaScript.

---

## 👨‍💻 Autor

**Braian Campos**

Projeto desenvolvido para fins de estudo durante a formação em Desenvolvimento Web.
