import React from 'react';
import './Modal.scss';
import PropTypes from 'prop-types';

import Slider from '../../../atoms/Slider/Slider';

const sliderImages = [
  {
    id: 0,
    image: 'https://preview.colorlib.com/theme/cozastore/images/product-detail-01.jpg',
    nameclass: 'presentation-img',
    imgclass: 'imgModal',
  },
  {
    image: 'https://preview.colorlib.com/theme/cozastore/images/product-detail-02.jpg',
    id: 1,
    nameclass: 'presentation-img',
    imgclass: 'imgModal',
  },
  {
    image: 'https://preview.colorlib.com/theme/cozastore/images/product-detail-03.jpg',
    id: 2,
    nameclass: 'presentation-img',
    imgclass: 'imgModal',
  },
];

const Modal = ({ showModal, setShowModal }) => (
  <>
    {showModal ? (
      <div className="modal" showModal={showModal}>
        <button type="button" className="close-modal" onClick={() => setShowModal(prev => !prev)}>
          Close
        </button>
        <div className="wrapper-modal">
          <div className=" section-image">
            <Slider slides={sliderImages} />
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
