import React from 'react';
import video from '../../video/turbo.mp4';
import cicloOtto from '../../img/cicloOtto.png';
import TextLink from '../TextLink';
import { Image } from 'semantic-ui-react';

const Body = () => {
    return (
        <>
            <h2>O básico de preparação de motores!</h2>

            <q>
                Preparar um motor é simplesmente melhorar a relação da mistura ar/combustivél
                e fazer com que essa nova mistura seja transferida para os rodas com boa eficiência
            </q>

            <p>
                Na atual geração de preparações automotivas o meio mais simples de aumentar a
                performance do motor é pelo reprogramação do modulo de injeção. Alguns modelos
                são 100% plug and play por exemplo <TextLink text="hondata" link="https://hondata.com/" />
                este é específico para motores Honda.<br />
            </p>

            <p>
                Um método bem popular consista na instalação de um turbo compressor, o famoso <em>caracol</em>!
                O funcionamento é extremamente simples, mas antes vamos revisar alguns conceitos!
                Os motores a cumbustão tipicamento são do <TextLink text="ciclo otto" link="https://www.embarcados.com.br/motores-de-combustao-interna-ciclo-otto/" />
                , esse motor possui 4 fases
                <Image
                    src={cicloOtto}
                    size="medium"
                    centered
                />
                <ul>
                    <li>1ª admissão => obtem a mistura ar/combustivél</li>
                    <li>2ª compressão => comprime a mistura</li>
                    <li>3ª combustão => a vela centelha na camara de combustão</li>
                    <li>4ª exaustão => a pressão gerada pela explosão empurra
                    o pistão para baixo, girando o virabrequim e abrindo as valvulas de escape</li>
                </ul>
            </p>
            <blockquote>
                <video
                    src={video}
                    loop
                    autoPlay
                    muted
                    style={{ height: 200 }}
                />
                <p>
                    Acima temos o funcionamento do turbo compressor, ele é conectado
                    na saida do motor (coletor de escapamento), esta parte é chamada de carcaça quente
                    com a pressão gerado pelo escape os rotores internos da turbina fazem com que a o outro lado
                    da turbino, chamada de carcaça fria, gire aumentando a quantidade de ar admitido da adimissão (1ª fase do ciclo otto)
                    Traduzindo... quanto mais o motor é acelerado maior será o volume do ar admitido permitindo atingir uma maior potência
                </p>
            </blockquote>
            <blockquote>
                <h3>Abaixo temos uma prova do ganho de performance em um carro classico</h3>
                <iframe
                    title="ref1"
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/SmQnjDYC2JI"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </blockquote>
        </>
    )
}

export default Body;