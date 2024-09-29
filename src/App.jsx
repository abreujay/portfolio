import { useState } from "react";
import "./App.css";
import logo from "../public/jay.jpg";
import html from "./assets/icons8-html-48.png"; // Certifique-se de que o caminho está correto
import css from "./assets/icons8-css-48.png"; // Certifique-se de que o caminho está correto
import javascript from "./assets/icons8-javascript-48.png"; // Corrigido o caminho
import node from "./assets/icons8-node-js-48.png"; // Corrigido o caminho
import express from "./assets/icons8-express-js-50.png"; // Corrigido o caminho
import sql from "./assets/icons8-mysql-48.png"; // Certifique-se de que o caminho está correto
import react from "./assets/icons8-react-a-javascript-library-for-building-user-interfaces-48.png"; // Corrigido o caminho
import mongo from "./assets/icons8-mongo-db-48.png"; // Certifique-se de que o caminho está correto
import cs from "./assets/icons8-c-sharp-logo-64.png"; // Certifique-se de que o caminho está correto
import git from "./assets/icons8-git-48.png"; // Certifique-se de que o caminho está correto
import instagram from "./assets/instagram.png"; // Corrigido o caminho
import email from "./assets/send-mail.png"; // Corrigido o caminho
import whatsapp from "./assets/whatsapp.png"; // Corrigido o caminho
import github from "./assets/github.png"

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="navlinks">
            <ul>
              <li>
                <a id="sobre" href="#aboutSec">
                  Sobre
                </a>
              </li>
              <li>
                <a id="projetos" href="#projectSec">
                  Projetos
                </a>
              </li>
              <li>
                <a id="skills" href="#skillSec">
                  Skills
                </a>
              </li>
              <li>
                <a id="contato" href="#contactSec">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <h1>Jonathan Abreu_</h1>
        <div className="logo">
          <img src={logo} alt="jay" />
        </div>
      </header>
      <main>
        <section id="aboutSec">
          <div className="AboutMe">
            <h2>Sobre Mim</h2>
            <p>
              Olá, muito bem vindo ao meu portfólio! Me chamo Jonathan, tenho 20
              anos e sou Analista e Desenvolvedor de Software em formação. tenho
              experiência em ambas as <span id="stacks">Stacks</span>,
              utilizando tecnologias como HTML, CSS e JavaScript para{" "}
              <span id="frontend">FrontEnd</span>, Node.JS e Express.JS para{" "}
              <span id="backend">BackEnd</span>. <br /> <br /> <br />
              Logo mais abaixo, na sessão "Projetos", você poderá verificar como
              apliquei estas tecnologias na prática :D. <br /> <br /> <br />
              Atualmente, no Centro Universitário Leonardo Da Vinci
              (Uniasselvi), estou cursando Análise e Desenvolvimento de
              Sistemas, e procuro uma oportunidade para atuar na área de
              Desenvolvimento e Tecnologia da Informação, Meu objetivo é
              adquirir novas experiências e conhecimentos, além de contribuir
              para projetos incríveis!
            </p>
          </div>
        </section>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave"
        >
          <path
            fill="#48356B"
            d="M0,64L30,85.3C60,107,120,149,180,160C240,171,300,149,360,144C420,139,480,149,540,160C600,171,660,181,720,176C780,171,840,149,900,144C960,139,1020,149,1080,165.3C1140,181,1200,203,1260,213.3C1320,224,1380,224,1410,224L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
          ></path>
        </svg>

        <section id="projectSec">
          <div className="Projects">
            <h2>Projetos</h2>
            <h3>Automação de Pagamentos Pix Via Whatsapp</h3>
            <p>
              Projeto que integra a API MercadoPago com a biblioteca
              @open-wa/wa-automate.
            </p>
            <a
              href="https://github.com/abreujay/payment_wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Confira!
            </a>

            <h3>Book Center Admin</h3>
            <p>
              Uma interface simples, que permite manipular livros, utilizando o
              conceito de CRUD, os dados dos livros ficam armazenados em um
              servidor.
            </p>
            <a
              href="https://book-center-client.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Confira!
            </a>

            <h3>Book Center API</h3>
            <p>
              API RESTful para gerenciar livros, desenvolvida em Node.js com
              Express. Integrada com o projeto Book Center Admin.
            </p>
            <a
              href="https://book-center-api.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Confira!
            </a>
            <a
              href="https://github.com/abreujay/book-center_api/tree/main"
              id="doc"
            >
              Documentação
            </a>

            <h3>CriptoWatcher</h3>
            <p>
              Projeto que permite o usuário a obter informações de CRIPTOMOEDAS,
              utilizando a API da CoinGecko. Desenvolvida em TypeScript.
            </p>
            <a
              href="https://crypto-watcher-nine.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Confira!
            </a>

            <h3>DS1 API</h3>
            <p>
              Como forma de estudo, desenvolvi este projeto pessoal, uma API com
              o tema sendo meu jogo de videogame favorito. Ela manipula dados de
              inimigos e npcs do game.
            </p>
            <a
              href="https://ds1-api.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Confira Aqui!
            </a>
            <a href="https://github.com/abreujay/ds1_api" id="doc">
              Documentação
            </a>

            <p id="lp">
              Outros projetos disponíveis para visualização e contribuição em
              meus repositórios, no GitHub.
            </p>
          </div>
        </section>
        <div className="curve">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#e4e4e4"
              fillOpacity="2"
              d="M0,288L1440,192L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
        <section id="skillSec">
          <h2>Skills</h2>
          <h3 id="backendSkill">BackEnd</h3>
          <ul className="back_end_ul">
            <li>
              <img src={node} alt="node" />
            </li>
            <li>
              <img src={express} alt="express" />
            </li>
          </ul>

          <h3 id="frontendSkill">FrontEnd</h3>
          <ul className="front_end_ul">
            <li>
              <img src={css} alt="css" />
            </li>
            <li>
              <img src={html} alt="html" />
            </li>
            <li>
              <img src={react} alt="react" />
            </li>
          </ul>

          <h3 id="languageSkill">Linguagens de Programação</h3>
          <ul className="languages_ul">
            <li>
              <img src={javascript} alt="javascript" />
            </li>
            <li>
              <img src={cs} alt="csharp" />
            </li>
          </ul>

          <h3 id="databaseSkill">Banco de Dados</h3>
          <ul className="database_ul">
            <li>
              <img src={sql} alt="mysql" />
            </li>
            <li>
              <img src={mongo} alt="mongodb" />
            </li>
          </ul>

          <h3 id="versionSkill">Controle de Versão</h3>
          <ul className="version_ul">
            <li>
              <img src={git} alt="git" />
            </li>
          </ul>
        </section>
        <section id="contactSec">
          <h2>Contatos</h2>
          <p>Gostou? Entre em contato comigo :D!</p>
          <div className="btn-container">
            <a href="https://wa.me/5549988450441">
              <img src={whatsapp} alt="whatsapp" />
            </a>
            <a href="https://github.com/abreujay">
              <img src={github} alt="github" />
            </a>
            <a href="https://www.instagram.com/abreu.jay/">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="mailto:codigojay@gmail.com">
              <img src={email} alt="instagram" />
            </a>
          </div>
        </section>
      </main>
      <footer>
        <p>
          <footer>
            <p>Desenvolvido por Jay©</p>
          </footer>
        </p>
      </footer>
    </>
  );
}

export default App;
