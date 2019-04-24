import React from 'react';
import TextLink from '../TextLink';
import Video from './Video';

const Body = () => {
    return (
        <>
            <h2>A tua linguem/framework não é o mais importante!</h2>

            <p>
                Não é de hoje que escuto de muitos amigos que a linguagem X é melhor
                que a linguagem Y, que <TextLink text="Vue.js" link="https://vuejs.org/" />
                é melhor que o <TextLink text="Angular.js" link="https://angular.io/" /> ou qualquer
                outro tipo de discussão da fanboys. A grande verdade é que o mais importante é deixado de lado!
                <br />
                O mercado, as pessoas (<em>TEUS CLIENTES</em>) geralmente não ligam para qual tecnologias
                você está utilizando, não interessa se você está utilizando python ou um c++ raiz. O que eles
                querem é a entrega de algo que atenda as expectativas e se possível entregar algo alpem do esperado.
                <br />
                Eu entendo que temos que conversas sobre tudo principalmente sobre nossas ferramentas de trabalho, mas
                de nada vai adiantar user o a melhor linguagem/framework se o plano de negócio não for bom o suficiente para
                alavancar teu produto. <q>Na duvida entre a linguem A ou a linguagem B escolha sempre o plano de negócio.</q>
            </p>
            <p>
                Nesses ultimos periodos tive o priviégio de conheçer muitos empreendedores de tech startup e alguns deles
                me chamaram muita atenção pois mesmo com um baixo conhecimento técnico conseguiram construir projetos de sucesso
                , por razões óbivias não poderei fazer citações.
            </p>
            <p>
                Eu lembro que teve um caso em que o protótipo inicial foi feito com um cabo de vassoura, almofadas velhas e uma
                placa arduino, esses caras com pouco recurso conseguiram validar alguns protótipos com recursos bem simples. Uma outra
                startup começou a avaliar a viabilidade de seu produto com arduino e
                <TextLink text="MitAppInventor" link="http://appinventor.mit.edu/explore/" />. Esses são exemplos apenas da área de tecnologias,
                conheçer essas pessoas modificou meu mindset hoje estou priorizando o valor que o projeto gera para as pessoas, essa tem sido o ponto
                chave para entregar produtos de sucesso.
            </p>
            <h3>Conclusão!</h3>
            <p>
                A ferramenta correta associada a um bom profissional pode conduzir o projeto do estado de 
                desenvolvimento para produção, mas apenas com um exelente plano de negócio e habilidades
                de empreendedoras podem fazer com que o projeto tenha uma vida longa.
            </p>
            
            <Video />
        </>
    )
}

export default Body;