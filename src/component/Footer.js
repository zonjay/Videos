import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default React.memo(function Footer () {
    return (
        <footer>
            <a className="brand" target="_blank" href="https://github.com/zonjay">
                <FontAwesomeIcon icon={ faGithub } />
                <span className="my-name">Zon Jay</span>
            </a>
        </footer>
    )
});
