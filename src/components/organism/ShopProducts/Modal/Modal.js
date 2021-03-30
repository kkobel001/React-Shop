import React from 'react';
import './Modal.scss';
import PropTypes from 'prop-types';
import imgModal1 from '../../../../assets/images/products/product-detail-01.png';
import imgModal2 from '../../../../assets/images/products/product-detail-02.png';
import imgModal3 from '../../../../assets/images/products/product-detail-03.png';

const Modal = ({ showModal, setShowModal }) => (
  <>
    {showModal ? (
      <div className="modal" showModal={showModal}>
        <button type="button" className="close-modal" onClick={() => setShowModal(prev => !prev)}>
          Close
        </button>
        <div className="wrapper-modal">
          <div className=" section-image">
            <ul className="small-sectionImg">
              <li className="presentation-img">
                <img src={imgModal1} alt="imgModal" className="modal-img" />
              </li>
              <li className="presentation-img">
                <img src={imgModal2} alt="imgModal" className="modal-img" />
              </li>
              <li className="presentation-img">
                <img src={imgModal3} alt="imgModal" className="modal-img" />
              </li>
            </ul>
          </div>
          <div className="section-add">
            <h1>ahahshhshsh</h1>
          </div>
        </div>
      </div>
    ) : null}
  </>
);

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.bool.isRequired,
};

export default Modal;
