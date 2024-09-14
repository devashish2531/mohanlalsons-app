import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Banner1 = (props) => {
  return (
    <>
      <div className="banner1-container1 thq-section-padding">
        <div className="banner1-max-width thq-section-max-width">
          <div className="banner1-container2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="banner1-text3 thq-heading-2">
                    Transform Your Space with Asian Paints
                  </h2>
                </Fragment>
              )}
            </h2>
            <h3>
              {props.content1 ?? (
                <Fragment>
                  <h3 className="banner1-text4 thq-heading-3">
                    Explore a wide range of paint colors and interior decor
                    solutions to give your space a fresh new look.
                  </h3>
                </Fragment>
              )}
            </h3>
          </div>
          <button type="button" className="thq-button-filled">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="banner1-text5">Contact Us Today</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .banner1-container1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
          }
          .banner1-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner1-container2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .banner1-text3 {
            display: inline-block;
            text-align: center;
          }
          .banner1-text4 {
            display: inline-block;
            text-align: center;
          }
          .banner1-text5 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Banner1.defaultProps = {
  heading1: undefined,
  content1: undefined,
  action1: undefined,
}

Banner1.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
}

export default Banner1
