<p align="center">
  <image
  src="https://img.shields.io/github/languages/count/giandefaria/ip-address-tracker-master"
  />
  <image
  src="https://img.shields.io/github/languages/top/giandefaria/ip-address-tracker-master"
  />
  <image
  src="https://img.shields.io/github/last-commit/giandefaria/ip-address-tracker-master"
  />
  <image
  src="https://img.shields.io/github/watchers/giandefaria/ip-address-tracker-master"
  />
</p>

# 📋 Índice do projeto


- [Proposta do projeto](#id01)
- [Desafios](#id02)
- [Arquivos do projeto](#id03)
- [Visual do projeto](#id04)
- [Feito com](#id05)
- [Procedimento de instalação](#id06)
- [Autor](#id07)

# Proposta do projeto <a name="id01"></a>

A proposta desse projeto consiste em montar uma página que possui uma lista de ofertas de emprego, as quais podem ser filtradas ao selecionar as tags presentes em cada oferta de emprego. Por exemplo, se eu clicar na tag “JavaScript” a lista será atualizada e aparecerão somente as empresas que exigem JavaScript para trabalhar.


# Desafios <a name="id02"> </a>

Uma dificuldade que encontrada no seu desenvolvimento foi para filtrar a lista de empregos utilizando mais de um filtro. O primeiro passo foi utilizar o método map() para concatenar todos os filtros constantes no objeto em Json em uma única key, a qual denominei como "filters". Para isso utilizei o método concat() e Object.assign() para retornar o objeto com a adição da key "filters" em cada índice.

O próximo desafio foi adicionar mais de um filtro. Para isso, foi criada a função ResultFilterJob(), a qual retornará o objeto já concatenado com a key "filters", que será devidamente filtrado. E como regra de filtro dessa lista, tive que combinar o retorno de dois métodos, o every() e includes().

O arquivo que contém esses códigos encontra-se em filter-list.tsx.

# Arquivos do projeto <a name="id03"> </a>

Os principais arquivos do projeto são: 
* main.tsx => Responsável pela tipagem html da página, além da execução da renderização inicial da lista na página
* data.tsx => arquivo onde consta o objeto em Json com a lista das ofertas de emprego, contendo as informações de cada oferta
* input-list.tsx => responsável por adicionar a lista constante em data.tsx no html da página, criando os elementos do html necessários para a criação de cada "caixa" de oferta de emprego
* input-filter.tsx => contém a função createFilter(), responsável por adicionar a caixa acima da lista que indica os filtros selecionados, além de adicionar/remover na variável arrFilters[] o filtro selecionado.
* filter-list.tsx => arquivo onde ocorre a concatenação dos filtros de cada índice do objeto, e o filtro dessa nova lista concatenada por meio de multiplos filtros. 

# Visual do projeto <a name="id04"></a>

<p align="center">

* Design no computador
<image
src="./src/assets/design/desktop-design.jpg"
/>

</p>

<p align="center">

* Design no celular
<image
src="./src/assets/design/mobile-design.jpg"
/>
</p>

# 🛠 Feito com <a name="id05"></a>

<br />

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)


<br />

# 📝 Procedimentos de instalação <a name="id06"></a>

<br />

Clone este repositório usando o comando:

```bash
git clone https://github.com/giandefaria/ip-address-tracker-master.git
```

Na pasta do projeto instale as dependências com uso do npm ou yarn

```bash
npm install
ou
yarn install
```

<br />

# Autor <a name="id07"></a>

<br />

- Frontend Mentor - [@giandefaria](https://www.frontendmentor.io/profile/giandefaria)
- Linkedim - [Gian de Faria](www.linkedin.com/in/gianfaria)
- GitHub - [giandefaria](https://github.com/giandefaria)
