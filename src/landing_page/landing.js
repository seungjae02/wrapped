import { useEffect } from 'react';
import Flower from '../images/flower.png'
import './landing.css';

function Landing() {  
  useEffect(() => {
    animateElement('show-landing-text', '.landing-container');
    animateElement('show-gradient-box', '.gradient-box');
    animateElement('show-flower', '.flower');
  }, [])

  return (
    <section id="landing">
      <div className="gradient-box"/>
      <img className="flower" src={Flower}/>
      <div className="landing-container">
        <div className="landing-text">
          Jay's Wrapped
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/sj-yang/">
            <i className="social fab fa-linkedin fa-fw"></i>
          </a>
          <a href="https://open.spotify.com/user/31w7gyrt6cczdl2h6q6y5s3s6s5e?si=52e1fbe8f4624dfd">
            <i className="social fab fa-spotify fa-fw"></i>
          </a>
          <a href="https://github.com/seungjae02">
            < i className="social fab fa-github fa-fw"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

function animateElement(showId, hideId) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(showId);
      } else {
        entry.target.classList.remove(showId);
      }
    });
  })
  const hiddenElements = document.querySelectorAll(hideId);
  hiddenElements.forEach(el => observer.observe(el))
}
export default Landing;
