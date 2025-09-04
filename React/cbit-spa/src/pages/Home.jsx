import banner from '../assets/cbit-campus2.jpeg';
import './Home.css';

function Home() {
  return (
    <main>
      <section className="hero">
        <img src={banner} alt="CBIT Campus" />
        <div className="hero-text">
          <h1>Welcome to CBIT</h1>
          <p>Empowering students with quality education and innovative research since 1979.</p>
          <a href="/admissions" className="btn-primary">Apply Now</a>
        </div>
      </section>

      <section className="highlights container">
        <div>
          <h2>World-Class Faculty</h2>
          <p>Experienced professors dedicated to academic excellence.</p>
        </div>
        <div>
          <h2>Modern Infrastructure</h2>
          <p>State-of-the-art labs, libraries, and facilities to support learning.</p>
        </div>
        <div>
          <h2>Strong Placements</h2>
          <p>Trusted by leading companies for campus recruitments.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
