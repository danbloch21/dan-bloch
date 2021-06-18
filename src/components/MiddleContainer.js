import React from 'react';

function MiddleContainer() {
    return (
        <div className="middle-container">
        <div className="profile">
          <img className="Dan-mugshot" src="images/20210208_142846.jpg" alt="Dan-Bloch-img" />
          <h2>Hello</h2>
          <p className="intro">I'm a front end developer and business journalist</p>
        </div>
        <hr />
        <div className="skills">
          <h2>My Skills</h2>
          <div className="skill-row">
            <img className="skills-icon-1" src="images/monitor.png" alt="monitor-icon-img" />
            <h3>Website development</h3>
            <p>I can build sites that not only look great but also deliver according to your needs</p>
          </div>
          <div className="skill-row">
            <img className="skills-icon-2" src="images/text-editor.png" alt="text-editor-img" />
            <h3>Eagle eyes</h3>
            <p>With top-notch editing skills honed from a 20-year-plus career in business magazine publishing, I can spot a typo from a mile off and polish your content so it makes its mark</p>
            <h3>Examples of work</h3>
            <p><a className="footer-link" href="https://fem-challenge-1-lilac.vercel.app/">Profile card</a></p>
            <p><a className="footer-link" href="https://responsive-design-tindog-coral.vercel.app/">Tindog</a></p>
            <p><a className="footer-link" href="https://fem-challenge-2-one.vercel.app/">Four card feature design</a></p>
            <p><a className="footer-link" href="https://react-app-to-do.vercel.app/">React to do list</a></p>
            <p><a className="footer-link" href="https://metronomeo-react.vercel.app/">React metronome</a>
            </p><p><a className="footer-link" href="https://books-library-iota.vercel.app">React books library</a></p>
            </div>
        </div>
      </div>

    );
}

export default MiddleContainer;