import "./Landing.css";

const Landing = () => {
  return (
    <div className="relative ">
      <div class="hero min-h-screen bg-img">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Welcome here</h1>
            <p class="mb-5 font-bold text-2xl text-cyan-900">
              To Get Best Tour Package & Services In Bangladesh.
            </p>
            {/* <button class="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
