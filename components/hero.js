import React from "react";

import Script from "dangerous-html/react";
import PropTypes from "prop-types";

const Hero = (props) => {
  return (
    <>
      <div className={`hero-header78 ${props.rootClassName} `}>
        <div className="hero-column thq-section-padding thq-section-max-width">
          <div className="hero-content1">
            <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
            <p className="thq-body-large">{props.content1}</p>
          </div>
          <div className="hero-actions">
            <a href="#contact" className="thq-button-filled hero-button">
              <span className="thq-body-small">{props.action1}</span>
            </a>
          </div>
        </div>
        <div className="hero-content2">
          <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image6Alt}
                src={props.image6Src}
                className="hero-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="hero-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="hero-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="hero-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="hero-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image5Alt}
                src={props.image5Src}
                className="hero-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
          </div>
          <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero-placeholder-image24 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero-placeholder-image25 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image12Alt}
                src={props.image12Src}
                className="hero-placeholder-image26 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image7Alt}
                src={props.image7Src}
                className="hero-placeholder-image27 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image8Alt}
                src={props.image8Src}
                className="hero-placeholder-image28 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image9Alt}
                src={props.image9Src}
                className="hero-placeholder-image29 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image10Alt}
                src={props.image10Src}
                className="hero-placeholder-image30 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt={props.image11Alt}
                src={props.image11Src}
                className="hero-placeholder-image31 thq-img-ratio-1-1 thq-img-scale"
              />
              <img
                alt="Hero Image"
                src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                className="hero-placeholder-image32 thq-img-ratio-1-1 thq-img-scale"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="hero-container2">
            <Script
              html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-header78 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            margin-top: 5rem;
            background-image: linear-gradient(
              90deg,
              rgb(189, 195, 199) 0%,
              rgb(233, 255, 246) 100%
            );
          }
          .hero-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .hero-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero-text1 {
            text-align: center;
          }
          .hero-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
          }
          .hero-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero-row-container1 {
            width: 100%;
          }
          .hero-placeholder-image10 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image11 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image12 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image13 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image14 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image15 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image16 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image17 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image18 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image19 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image20 {
            width: 400px;
            height: 400px;
          }
          .hero-row-container2 {
            width: 100%;
          }
          .hero-placeholder-image21 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image22 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image23 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image24 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image25 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image26 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image27 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image28 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image29 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image30 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image31 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image32 {
            width: 400px;
            height: 400px;
          }
          .hero-container2 {
            display: contents;
          }
          .heroroot-class-name {
            background-image: linear-gradient(
              90deg,
              rgb(246, 211, 211) 18%,
              rgb(240, 203, 53) 100%
            );
          }
          @media (max-width: 767px) {
            .hero-content2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

Hero.defaultProps = {
  image12Alt: "Hero Image",
  image2Src:
    "https://images.unsplash.com/photo-1533158388470-9a56699990c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMDE0Mnw&ixlib=rb-4.0.3&q=80&w=1080",
  image8Src:
    "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMDE0NXw&ixlib=rb-4.0.3&q=80&w=1080",
  rootClassName: "",
  image7Alt: "Hero Image",
  image11Src:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMDE0M3w&ixlib=rb-4.0.3&q=80&w=1080",
  image10Src:
    "https://images.unsplash.com/photo-1444312645910-ffa973656eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMDE0NXw&ixlib=rb-4.0.3&q=80&w=1080",
  image1Alt: "Paint store exterior",
  image12Src:
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMDE0NHw&ixlib=rb-4.0.3&q=80&w=1080",
  image9Alt: "Hero Image",
  image9Src:
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMDE0NHw&ixlib=rb-4.0.3&q=80&w=1080",
  image7Src:
    "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMDE0M3w&ixlib=rb-4.0.3&q=80&w=1080",
  image3Alt: "Interior decor inspiration",
  content1:
    "Your one-stop destination for all your painting needs. We offer a wide range of Asian Paints products and services to help you transform your space into a masterpiece.",
  heading1: "Welcome to Mohan Lal & Sons Paint Store",
  image4Src:
    "https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMDE0NXw&ixlib=rb-4.0.3&q=80&w=1080",
  image10Alt: "Hero Image",
  action1: "Explore Asian Paints Products",
  image1Src:
    "https://images.unsplash.com/photo-1524901548305-08eeddc35080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMDE0Nnw&ixlib=rb-4.0.3&q=80&w=1080",
  image8Alt: "Hero Image",
  image5Alt: "Painting tools and accessories",
  image11Alt: "Hero Image",
  image6Alt: "Sakarni Putty products",
  image3Src:
    "https://images.unsplash.com/photo-1505455184862-554165e5f6ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMDE0MXw&ixlib=rb-4.0.3&q=80&w=1080",
  image5Src:
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMDE0NXw&ixlib=rb-4.0.3&q=80&w=1080",
  image4Alt: "Professional painting services",
  image6Src:
    "https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjMwMDE0NHw&ixlib=rb-4.0.3&q=80&w=1080",
  image2Alt: "Variety of Asian Paints products",
};

Hero.propTypes = {
  image12Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image8Src: PropTypes.string,
  rootClassName: PropTypes.string,
  image7Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image10Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image12Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image7Src: PropTypes.string,
  image3Alt: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  image4Src: PropTypes.string,
  image10Alt: PropTypes.string,
  action1: PropTypes.string,
  image1Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image11Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image5Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image2Alt: PropTypes.string,
};

export default Hero;
