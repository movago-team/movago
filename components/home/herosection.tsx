import Navbar from "@/components/layout/navbar-temp";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-photo" />
      <div className="hero-vignette" />

      <Navbar />

      <div className="hero-content">
        <div className="eyebrow">JOURNEY BEYOND EXPECTATION</div>

        <h1>
          Premium
          <br />
          Airport Transfer
          <br />
          and Executive
          <br />
          Chauffeur Service
        </h1>

        <p>
          Experience the ultimate in comfort, safety
          <br className="desktop-only" /> and punctuality with MOVAGO&apos;s premium
          <br className="desktop-only" /> transfer service.
        </p>

        <div className="hero-features">
          <span><Icon name="plane" /> Flight Tracking</span>
          <span><Icon name="users" /> Meet &amp; Greet</span>
          <span><Icon name="clock" /> 60 Min Waiting</span>
          <span><Icon name="bag" /> All-Inclusive</span>
        </div>
      </div>
    </section>
  );
}
