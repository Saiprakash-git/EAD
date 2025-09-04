import './About.css';
import aboutImg from '../assets/cbit-campus2.jpeg'; // add this image to assets

function About() {
  return (
    <main className="about container">
      <h1>About CBIT</h1>
      <div className="about-content">
        <img src={aboutImg} alt="CBIT Campus" />
        <div className="about-text">
          <p>
            Established in 1979, Chaitanya Bharathi Institute of Technology (CBIT) is one of the premier engineering colleges in Hyderabad. Affiliated with Osmania University, CBIT offers a diverse range of undergraduate and postgraduate programs focused on innovation, research, and excellence.
          </p>
          <p>
            With a commitment to holistic education and strong industry collaborations, CBIT equips students to thrive in the global tech landscape.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
