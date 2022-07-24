function About() {
  return (
    <div id="about">
      <div className="container" data-aos="fade-up">
        <div className="row about-container">
          <div className="col-lg-6 content order-lg-1 order-2">
            <h2 className="title">Few Words About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae
              suscipit tellus mauris a diam maecenas sed. Mus mauris vitae
              ultricies leo integer malesuada nunc. Egestas integer eget aliquet
              nibh. Amet tellus cras adipiscing enim eu turpis.
            </p>
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon">
                <i className="fas fa-video"></i>
              </div>
              <h4 className="title">
                <a href="">Great User Experience</a>
              </h4>
              <p className="description">
                leo urna molestie at elementum eu facilisis sed odio morbi quis
                commodo odio aenean sed
              </p>
            </div>
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon">
                <i className="fas fa-crown"></i>
              </div>
              <h4 className="title">
                <a href="">Many benefits</a>
              </h4>
              <p className="description">
                nulla malesuada pellentesque elit eget gravida cum sociis
                natoque penatibus et magnis dis parturient montes
              </p>
            </div>
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon">
                <i className="fas fa-american-sign-language-interpreting"></i>
              </div>
              <h4 className="title">
                <a href="">Highly Secure</a>
              </h4>
              <p className="description">
                montes nascetur ridiculus mus mauris vitae ultricies leo integer
                malesuada nunc vel risus commodo viverra
              </p>
            </div>
          </div>
          <div
            className="col-lg-6 background order-lg-2 order-1"
            data-aos="fade-left"
            data-aos-delay="100"
          ></div>
        </div>
      </div>
    </div>
  )
}

export default About
