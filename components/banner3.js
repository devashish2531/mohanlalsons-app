import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Banner3 = (props) => {
  return (
    <>
      <div className="banner3-container1 thq-section-padding">
        <div className="banner3-max-width thq-section-max-width">
          <div className="banner3-container2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="banner3-text5 thq-heading-2">
                    Transform Your Space with Asian Paints
                  </h2>
                </Fragment>
              )}
            </h2>
            <h3>
              {props.content1 ?? (
                <Fragment>
                  <h3 className="banner3-text3 thq-heading-3">
                    Explore a wide range of paint colors and interior decor
                    solutions at Mohan Lal &amp; Sons Paint Store.
                  </h3>
                </Fragment>
              )}
            </h3>
          </div>
          <button type="button" className="thq-button-filled">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="banner3-text4">Contact Us Today</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .banner3-container1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .banner3-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner3-container2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .banner3-text3 {
            display: inline-block;
            text-align: center;
          }
          .banner3-text4 {
            display: inline-block;
          }
          .banner3-text5 {
            display: inline-block;
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

Banner3.defaultProps = {
  content1: undefined,
  action1: undefined,
  heading1: undefined,
}

Banner3.propTypes = {
  content1: PropTypes.element,
  action1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Banner3
