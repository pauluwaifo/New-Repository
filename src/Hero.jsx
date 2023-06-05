const Hero = ({ pageTitle, pageSub, backdrop }) => {
  return (
    <div className="bg-dark py-5 text-white hero-container">
      <h3 className="my-4 text-center">{pageSub}</h3>
      <h1 className="text-center hero-text">{pageTitle}</h1>
      {backdrop &&
        <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
      }
    </div>
  );
};
export default Hero;
