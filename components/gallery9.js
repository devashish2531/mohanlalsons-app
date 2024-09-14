import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Gallery9 = (props) => {
  return (
    <>
      <div className="gallery9-gallery3 thq-section-padding">
        <div className="gallery9-max-width thq-section-max-width">
          <div className="gallery9-section-title">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="gallery9-text4 thq-heading-2">Gallery</h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.content1 ?? (
                <Fragment>
                  <span className="gallery9-text3 thq-body-large">
                    Explore our gallery to see our expert painting services and
                    a wide range of paint colors for your space.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery9-container1">
            <div className="gallery9-content">
              <div
                data-thq="slider"
                data-navigation="true"
                data-pagination="true"
                className="gallery9-slider swiper"
              >
                <div
                  data-thq="slider-wrapper"
                  className="gallery9-slider-wrapper swiper-wrapper"
                >
                  <div
                    data-thq="slider-slide"
                    className="gallery9-slider-slide1 swiper-slide"
                  >
                    <div className="gallery9-container2">
                      <img
                        alt={props.image1Alt}
                        src={props.image1Src}
                        className="gallery9-image1 thq-img-ratio-4-3"
                      />
                    </div>
                    <div className="gallery9-container3">
                      <img
                        alt={props.image2Alt}
                        src={props.image2Src}
                        className="gallery9-image2 thq-img-ratio-4-3"
                      />
                    </div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery9-slider-slide2 swiper-slide"
                  >
                    <div className="gallery9-container4">
                      <img
                        alt={props.image3Alt}
                        src={props.image3Src}
                        className="gallery9-image3 thq-img-ratio-4-3"
                      />
                    </div>
                    <div className="gallery9-container5">
                      <img
                        alt={props.image4Alt}
                        src={props.image4Src}
                        className="gallery9-image4 thq-img-ratio-4-3"
                      />
                    </div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery9-slider-slide3 swiper-slide"
                  >
                    <div className="gallery9-container6">
                      <img
                        alt={props.image5Alt}
                        src={props.image5Src}
                        className="gallery9-image5 thq-img-ratio-4-3"
                      />
                    </div>
                    <div className="gallery9-container7">
                      <img
                        alt={props.image6Alt}
                        src={props.image6Src}
                        className="gallery9-image6 thq-img-ratio-4-3"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-button-prev"
                  className="swiper-button-prev"
                ></div>
                <div
                  data-thq="slider-button-next"
                  className="swiper-button-next"
                ></div>
                <div
                  data-thq="slider-pagination"
                  className="gallery9-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                >
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet swiper-pagination-bullet-active"
                  ></div>
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet"
                  ></div>
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery9-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .gallery9-max-width {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .gallery9-section-title {
            gap: 24px;
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .gallery9-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .gallery9-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery9-slider {
            width: 100%;
            height: 600px;
            display: inline-block;
          }
          .gallery9-slider-wrapper {
            width: 100%;
          }
          .gallery9-slider-slide1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery9-container2 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery9-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery9-container3 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery9-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery9-slider-slide2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery9-container4 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery9-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery9-container5 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery9-image4 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery9-slider-slide3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery9-container6 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery9-image5 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery9-container7 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery9-image6 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery9-slider-pagination {
            display: block;
          }
          .gallery9-text3 {
            display: inline-block;
            text-align: center;
          }
          .gallery9-text4 {
            display: inline-block;
            text-align: center;
          }
          @media (max-width: 991px) {
            .gallery9-content {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .gallery9-section-title {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .gallery9-slider-slide1 {
              flex-direction: column;
            }
            .gallery9-container2 {
              height: calc(50% - 8px);
            }
            .gallery9-container3 {
              height: calc(50% - 8px);
            }
            .gallery9-slider-slide2 {
              flex-direction: column;
            }
            .gallery9-container4 {
              height: calc(50% - 8px);
            }
            .gallery9-container5 {
              height: calc(50% - 8px);
            }
            .gallery9-slider-slide3 {
              flex-direction: column;
            }
            .gallery9-container6 {
              height: calc(50% - 8px);
            }
            .gallery9-container7 {
              height: calc(50% - 8px);
            }
          }
          @media (max-width: 479px) {
            .gallery9-slider {
              height: 440px;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery9.defaultProps = {
  image3Alt: 'Color Consultation',
  image6Alt: 'Professional Painters in Action',
  image2Src:
    'https://images.unsplash.com/photo-1584727638096-042c45049ebe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQ0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQ0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  image5Alt: 'Special Effects Finishes',
  image4Src:
    'https://images.unsplash.com/photo-1699084259848-547e3460378e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQ0OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Exterior Painting',
  image1Alt: 'Interior Painting',
  image6Src:
    'https://images.unsplash.com/photo-1514785773802-d57bf3505077?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQ1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1506827155776-53ce0b5d56b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQ1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1579273166629-ef19c29b11fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMjQ1MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Alt: 'Wall Texture Designs',
}

Gallery9.propTypes = {
  image3Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image5Src: PropTypes.string,
  content1: PropTypes.element,
  image5Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image3Src: PropTypes.string,
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
  image4Alt: PropTypes.string,
}

export default Gallery9
