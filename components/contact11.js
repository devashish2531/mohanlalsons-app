import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Contact11 = (props) => {
  return (
    <>
      <div className="contact11-container thq-section-padding">
        <div className="contact11-max-width thq-section-max-width">
          <div className="contact11-section-title">
            <div className="contact11-content1">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="contact11-text26 thq-heading-2">
                      Contact Us
                    </h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="contact11-text19 thq-body-large">
                      One stop solution for all your painting needs!
                    </p>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="contact11-content2 thq-flex-row">
            <div className="contact11-content3">
              <div className="contact11-content4">
                <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                  <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                </svg>
                <div className="contact11-contact-info1">
                  <h3 className="contact11-text12 thq-heading-3">Phone</h3>
                  <p>
                    {props.content3 ?? (
                      <Fragment>
                        <p className="contact11-text28 thq-body-large">
                          Call / Whatsapp
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <span>
                    {props.phone1 ?? (
                      <Fragment>
                        <span className="contact11-text25 thq-body-small">
                          +91-9991115565
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="contact11-content5">
                <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <div className="contact11-contact-info2">
                  <h3 className="contact11-text15 thq-heading-3">Office</h3>
                  <p>
                    {props.content5 ?? (
                      <Fragment>
                        <p className="contact11-text29 thq-body-large">
                          Pataudi Road, Haryana
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <span>
                    {props.address1 ?? (
                      <Fragment>
                        <span className="contact11-text27 thq-body-small">
                          Mohan Lal &amp; Sons Paint Store, Pataudi, Haryana
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="contact11-content6">
                <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <div className="contact11-contact-info3">
                  <h3 className="contact11-text17 thq-heading-3">Email</h3>
                  <p>
                    {props.content2 ?? (
                      <Fragment>
                        <p className="contact11-text21 thq-body-large">
                          <span>We reply within an hour</span>
                          <br></br>
                          <br></br>
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <span>
                    {props.email ?? (
                      <Fragment>
                        <span className="contact11-text20 thq-body-small">
                          mohanlalsonspataudi@gmail.com
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <iframe
              src={props.location1GoogleMap}
              title="Map"
              className="contact11-iframe thq-img-ratio-16-9"
            ></iframe>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact11-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact11-max-width {
            align-self: center;
          }
          .contact11-section-title {
            width: 100%;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .contact11-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact11-content2 {
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact11-content3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact11-content4 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact11-contact-info1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact11-text12 {
            align-self: flex-start;
            text-align: center;
          }
          .contact11-content5 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact11-contact-info2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact11-text15 {
            align-self: flex-start;
            text-align: center;
          }
          .contact11-content6 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact11-contact-info3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact11-text17 {
            align-self: flex-start;
            text-align: center;
          }
          .contact11-iframe {
            height: 664px;
          }
          .contact11-text19 {
            display: inline-block;
          }
          .contact11-text20 {
            display: inline-block;
          }
          .contact11-text21 {
            display: inline-block;
          }
          .contact11-text25 {
            display: inline-block;
          }
          .contact11-text26 {
            display: inline-block;
          }
          .contact11-text27 {
            display: inline-block;
          }
          .contact11-text28 {
            display: inline-block;
          }
          .contact11-text29 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact11-content2 {
              position: relative;
              align-items: flex-start;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Contact11.defaultProps = {
  content1: undefined,
  email: undefined,
  location1GoogleMap:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.0374884602493!2d76.77640397591394!3d28.327467175832826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d4120123d8713%3A0x645ded0be9770652!2sMohan%20Lal%20%26%20Sons%20(ASIAN%20PAINTS%20Ezy%20Colour%20Store)!5e0!3m2!1sen!2sin!4v1726302878394!5m2!1sen!2sin',
  content2: undefined,
  phone1: undefined,
  heading1: undefined,
  address1: undefined,
  content3: undefined,
  content5: undefined,
}

Contact11.propTypes = {
  content1: PropTypes.element,
  email: PropTypes.element,
  location1GoogleMap: PropTypes.string,
  content2: PropTypes.element,
  phone1: PropTypes.element,
  heading1: PropTypes.element,
  address1: PropTypes.element,
  content3: PropTypes.element,
  content5: PropTypes.element,
}

export default Contact11
