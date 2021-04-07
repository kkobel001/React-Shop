import React from 'react';
import './Modal.scss';
import PropTypes from 'prop-types';
import ClearIcon from '@material-ui/icons/Clear';
import Slider from '../../../atoms/Slider/Slider';
// import { productsIt } from '../ProductsItems';

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
        <div className="wrapper-modal">
          <div className=" section-image">
            <Slider slides={sliderImages} />
          </div>
          <div className="section-add">
            <ClearIcon className="close-modal" onClick={() => setShowModal(prev => !prev)} />
            <div className="section-text">
              <h2>Lighweight Jacket</h2>
              <div>$57.55</div>
            </div>
            <div className="section-option">
              <div className="filter-size">
                <h4>Size</h4>
                <select className="selected-products">
                  <option>Size XS</option>
                  <option>Size S</option>
                  <option>Size M</option>
                  <option>Size L</option>
                  <option>Size XL</option>
                </select>
              </div>
              <div className="filter-color">
                <h4>Color </h4>
                <select className="selected-products">
                  <option>Red</option>
                  <option>White</option>
                  <option>Black</option>
                  <option>Blue</option>
                  <option>Yellow</option>
                </select>
              </div>
              <button className="btn-main" type="button">
                ADD to card
              </button>
            </div>
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
