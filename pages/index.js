import React, { Fragment } from "react";
import Head from "next/head";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Features1 from "../components/features1";
import CTA from "../components/cta";
import Features2 from "../components/features2";
import Gallery9 from "../components/gallery9";
import Logos1 from "../components/logos1";
import Contact11 from "../components/contact11";
import Footer13 from "../components/footer13";

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Mohan Lal and Sons</title>
        </Head>
        <Navbar rootClassName="navbarroot-class-name"></Navbar>
        <Hero
          action1="Explore our Range"
          image2Src="https://images.unsplash.com/photo-1605811792180-61ee063690de?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxwYWludHxlbnwwfHx8fDE3MjYzMDA0MDd8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image3Src="https://images.unsplash.com/photo-1595814432314-90095f342694?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxwYWludHxlbnwwfHx8fDE3MjYzMDA0MDd8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image4Src="https://images.unsplash.com/photo-1644375392039-bcd68b2fa79b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ4fHxwYWludHxlbnwwfHx8fDE3MjYzMDA0Njl8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image7Src="https://images.unsplash.com/photo-1594050739480-242377ad0f67?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHwlMjBwYWludCUyMHN0b3JlfGVufDB8fHx8MTcyNjMwMDY0Mnww&amp;ixlib=rb-4.0.3&amp;w=1500"
          image8Src="https://images.unsplash.com/photo-1598103586054-c4b456cbddc4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQxfHxwYWludHxlbnwwfHx8fDE3MjYzMDA0Njl8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image9Src="https://images.unsplash.com/photo-1477901492169-d59e6428fc90?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ4fHwlMjBwYWludCUyMHN0b3JlfGVufDB8fHx8MTcyNjMwMDY1MHww&amp;ixlib=rb-4.0.3&amp;w=1500"
          rootClassName="heroroot-class-name"
          content1="Your one-stop destination for all your painting needs. We offer a wide range of Asian Paints products and services to help you transform your space into a masterpiece."
        ></Hero>
        <Features1 feature1ImgSrc="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHBhaW50fGVufDB8fHx8MTcyNjMwMDQwN3ww&amp;ixlib=rb-4.0.3&amp;w=1500"></Features1>
        <CTA
          rootClassName="ct-aroot-class-name"
          feature1Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
        ></CTA>
        <Features2
          feature1ImgSrc="https://images.unsplash.com/photo-1640622308013-b9337424e401?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDczfHxwYWludHxlbnwwfHx8fDE3MjYzMDA2MTF8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          feature1Title="Asian Paints Ezy Colour Store"
          feature2Description="Explore our wide range of Asian Paints and painting services to give your home or office a fresh new look."
          feature2Title="Wide Range of Paint Colors"
          feature3Title="We are authorised dealers of Sakarni Putti"
          content1="Explore our wide range of Asian Paints and painting services to give your home or office a fresh new look."
          feature1Description="Explore our wide range of Asian Paints and painting services to give your home or office a fresh new look."
          feature3Description="Sakarni Putti available at wholesale prices here\n"
        ></Features2>
        <Gallery9
          content1={
            <Fragment>
              <span className="home-text10 thq-body-large">
                Explore our gallery to see our expert painting services and a
                wide range of paint colors for your space.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text11 thq-heading-2">Gallery</span>
            </Fragment>
          }
        ></Gallery9>
        <Logos1
          heading1={
            <Fragment>
              <span className="home-text12 thq-heading-2">
                Trusted by the world&apos;s best companies
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </Fragment>
          }
          logo1Src="https://images.unsplash.com/photo-1555274175-75f4056dfd05?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxtaW5pbWFsJTIwbG9nb3xlbnwwfHx8fDE3MjYzMDM3Njl8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        ></Logos1>
        <Contact11
          content1={
            <Fragment>
              <span className="home-text13 thq-body-large">
                One stop solution for all your painting needs!
              </span>
            </Fragment>
          }
          email={
            <Fragment>
              <span className="home-text14 thq-body-small">
                mohanlalsonspataudi@gmail.com
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text15 thq-body-large">
                <span>We reply within an hour</span>
                <br></br>
                <br></br>
              </span>
            </Fragment>
          }
          phone1={
            <Fragment>
              <span className="home-text19 thq-body-small">+91-9991115565</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text20 thq-heading-2">Contact Us</span>
            </Fragment>
          }
          address1={
            <Fragment>
              <span className="home-text21 thq-body-small">
                Mohan Lal &amp; Sons Paint Store, Pataudi, Haryana
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="home-text22 thq-body-large">
                Call / Whatsapp
              </span>
            </Fragment>
          }
          content5={
            <Fragment>
              <span className="home-text23 thq-body-large">
                Pataudi Road, Haryana
              </span>
            </Fragment>
          }
        ></Contact11>
        <Footer13
          copyright={
            <Fragment>
              <span className="home-text24 thq-body-small">
                <span>© 2023 Mohan Lal &amp; Sons Pataudi</span>
                <br></br>
              </span>
            </Fragment>
          }
          rootClassName="footer13root-class-name"
        ></Footer13>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
            text-align: center;
          }
          .home-text11 {
            display: inline-block;
            text-align: center;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
            align-self: center;
          }
        `}
      </style>
    </>
  );
};

export default Home;
