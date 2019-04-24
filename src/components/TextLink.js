import React from 'react';
import { string } from 'prop-types';

const TextLink = ({ text, link }) => (
    <a href={link}>
        <em>
            <u style={{paddingLeft: 5, paddingRight: 5}}>
                {text} 
            </u>
        </em>
    </a>
);

TextLink.propTypes = {
    text: string.isRequired,
    link: string.isRequired
}

export default TextLink;