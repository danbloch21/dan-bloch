import React from 'react';

function BottomContainer() {
    return(
        <div className="bottom-container">
        <p><a className="social-links" href="https://github.com/danbloch21"><i className="fab fa-github-square" />  GitHub</a></p>
        <p><a className="social-links" href="https://www.linkedin.com/in/dan-bloch-76228613"><i className="fab fa-linkedin" />  LinkedIn</a></p>
        <p><a className="social-links" href="https://twitter.com/bookim_danno"><i className="fab fa-twitter-square" />  Twitter</a></p>
        <p><a className="social-links" href="https://writers-bloch.com"><span className="iconify" data-icon="simple-icons:hashnode" data-inline="false;" /> Hashnode</a></p>
        <div className="credit-text">
          <p>© 2021 Dan Bloch</p>
          <p>Icons made by <a className="footer-credit" href="https://www.flaticon.com/authors/prosymbols" title="Prosymbols">Prosymbols</a> and <a className="footer-credit" href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a className="footer-credit" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
        </div>
      </div>

    );
}

export default BottomContainer;