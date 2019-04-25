import React from 'react';
import TextLink from '../TextLink';
import Greetings from './Greetings';
import ProjectStructure from './ProjectStructure';

const Body = () => {
    return (
        <>
            <Greetings/>
            <h3>Sobre mim!</h3>
            <p>
                Me chamo Leonardo Tavares, sou estudante de ciência da computação na instituição 
                <TextLink text="CEFET/RJ" link="http://www.cefet-rj.br/"/>. Nas horas "livres"
                da sala de aula estudo desenvolvimento mobile com 
                <TextLink text="react-native" link="https://facebook.github.io/react-native/"/> e luto para aprender
                como montar um bom plano de negócio.
            </p>
            <h3>Como iniciei em Ciência da Computação?</h3>
            <p>
                Minha chegada na área da computação começou com o meu desejo de preparar motores, por volta de 2005
                . Naqueles dias a receita mais comum de
                preparação era usar o motor Ap com kit-turbo, o pessoal chama de <em> kit padaria </em>, em outras
                palavras um golzinho com um kit turbo basico era receita para felicidade.<br/>
                Eu não lembro em qual revista eu li mas quando eu descobri os modulos de potência e as injeções
                programáveis eu percebi que o futuro da preparação estava na área da eletrônica, ai eu decidi fazer um 
                técnico em eletrônica, isso em 2008~2009. Muito tempo depois de entra no mercado da eletrônica resolvi
                entra na faculdade na área de computação isso ja era em 2015, nesse epoca eu notei que não importa o
                campo de atuação sempra tera espaço para desenvolvmento de software. E foi assim que entrei no mundo de Ti.
            </p>
            <h3>Como esse site foi construido?</h3>
            <p>
                A ideia principal é demonstrar o uso de Html, Css e Javascript. Algumas bibliotecas foram 
                utilizadas para simplificar a composição dos componentes a principal é o 
                <TextLink text="React" link="https://reactjs.org/"/>. Uma das grandes vantagens de se usar React
                é poder <em><u>injetar</u></em> HTML no javascript isso permite uma boa flexibilidade para a criação de componentes.
            </p>
            <h3>Estrura do projeto</h3>
            <ProjectStructure/>
        </>
    )
}

export default Body;