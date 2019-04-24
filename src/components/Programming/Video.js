import React, { useState } from 'react';
import { Segment, Grid, Dimmer, Loader } from 'semantic-ui-react';
/**
 * O conteudo das tag iframe foram retirado do próprio Youtube
 */
const Video = () => {
    const [loading1, setLoading1] = useState(true)
    const [loading2, setLoading2] = useState(true)
    const isLoading = loading1 || loading2;
    return (
        <blockquote>
            <h4 style={{color: '#3f3f3f'}}>
                Os videos abaixo me ajudaram a abrir meu olhos, <u>talvez</u> eles te ajudem!
            </h4>
            <Segment>
                {isLoading &&
                    <Dimmer active>
                        <Loader size="massive">Loading</Loader>
                    </Dimmer>
                }
                <Grid columns={2} relaxed="very">
                    <Grid.Column>
                        <iframe
                            title="parte1"
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/p9-WuJbVHHc"
                            onLoad={() => setLoading1(false)}
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <iframe
                            title="parte2"
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/XcTTajFENHI"
                            onLoad={() => setLoading2(false)}
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                    </Grid.Column>
                </Grid>
            </Segment>
        </blockquote>
    )
}

export default Video;