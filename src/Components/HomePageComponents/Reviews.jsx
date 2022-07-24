function Reviews() {
  return (
    <div id="reviews">
      <div className="review container mt-5">
        <div
          id="testimonial_095"
          className="carousel slide testimonial_095_indicators testimonial_095_control_button thumb_scroll_x swipe_x ps_easeOutSine"
          data-ride="carousel"
          data-pause="hover"
          data-interval="5000"
          data-duration="2000"
        >
          <div className="testimonial_095_header">
            <h5>
              what people<span>say</span>
            </h5>
          </div>
          <ol className="carousel-indicators">
            <li
              data-target="#testimonial_095"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#testimonial_095" data-slide-to="1"></li>
            <li data-target="#testimonial_095" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="testimonial_095_slide">
                {' '}
                <a href="#">
                  <i className="fas fa-user"></i>
                </a>
                <p>
                  fames ac turpis egestas maecenas pharetra convallis posuere
                  morbi leo urna molestie at elementum eu facilisis sed odio
                  morbi quis commodo odio aenean sed adipiscing
                </p>
                <h5>
                  <a href="#">XOCO</a>
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial_095_slide">
                {' '}
                <a href="#">
                  <i className="far fa-user-circle"></i>
                </a>
                <p>
                  dui faucibus in ornare quam viverra orci sagittis eu volutpat
                  odio facilisis mauris sit amet massa vitae tortor condimentum
                  lacinia quis vel eros donec ac
                </p>
                <h5>
                  <a href="#">Abby Olcese</a>
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial_095_slide">
                {' '}
                <a href="#">
                  <i className="fas fa-user"></i>
                </a>
                <p>
                  eget nunc scelerisque viverra mauris in aliquam sem fringilla
                  ut morbi tincidunt augue interdum velit euismod in
                  pellentesque massa placerat duis ultricies lacus sed turpis
                </p>
                <h5>
                  <a href="#">Brian Tallerico</a>
                </h5>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#testimonial_095"
            data-slide="prev"
          >
            {' '}
            <span className="fa fa-chevron-left"></span>{' '}
          </a>
          <a
            className="carousel-control-next"
            href="#testimonial_095"
            data-slide="next"
          >
            {' '}
            <span className="fa fa-chevron-right"></span>{' '}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Reviews
