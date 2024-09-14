import React, { Fragment } from "react";

import PropTypes from "prop-types";

const Contact = (props) => {
  return (
    <>
      <div className="contact-contact20 thq-section-padding">
        <div className="contact-max-width thq-section-max-width">
          <div className="contact-section-title">
            <span className="thq-body-small">{props.content2}</span>
            <div className="contact-content1">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <p className="thq-body-large">{props.content1}</p>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-content2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact-contact-info1">
                <div className="contact-content3">
                  <h3 className="contact-text13 thq-heading-3">Email</h3>
                  <p>
                    {props.text ?? (
                      <Fragment>
                        <p className="contact-text18 thq-body-large">
                          <span>mohanlalsonspataudi@gmail.com</span>
                          <br></br>
                          <br></br>
                        </p>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-content4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact-contact-info2">
                <div className="contact-content5">
                  <h3 className="contact-text15 thq-heading-3">Phone</h3>
                  <a
                    href="https://tel:+91 9991115565"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="contact-link"
                  >
                    <p className="contact-text16 thq-body-large">
                      {props.content4}
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-content6">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact-contact-info3">
                <div className="contact-content7">
                  <h3 className="contact-text17 thq-heading-3">Locate Us</h3>
                </div>
                <span className="thq-body-small">{props.address1}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-contact20 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact-max-width {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-section-title {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-row {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .contact-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-contact-info1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-content3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
          }
          .contact-text13 {
            align-self: stretch;
            text-align: center;
          }
          .contact-content4 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-contact-info2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-content5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
          }
          .contact-text15 {
            align-self: stretch;
            text-align: center;
          }
          .contact-link {
            display: contents;
          }
          .contact-text16 {
            text-align: center;
            text-decoration: none;
          }
          .contact-content6 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-contact-info3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-content7 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
          }
          .contact-text17 {
            text-align: center;
          }
          .contact-text18 {
            display: inline-block;
            text-align: center;
          }
          @media (max-width: 767px) {
            .contact-row {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .contact-row {
              align-items: stretch;
            }
          }
        `}
      </style>
    </>
  );
};

Contact.defaultProps = {
  content2: "Get in touch with us today!",
  heading1: "Contact Us",
  content4: "+91 9991115565",
  content1: "One stop solution for all you painting needs!",
  address1: "Pataudi, Haryana",
  text: undefined,
};

Contact.propTypes = {
  content2: PropTypes.string,
  heading1: PropTypes.string,
  content4: PropTypes.string,
  content1: PropTypes.string,
  address1: PropTypes.string,
  text: PropTypes.element,
};

export default Contact;
