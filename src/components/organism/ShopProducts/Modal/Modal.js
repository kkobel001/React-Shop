import React from 'react';
import './Modal.scss';
import PropTypes from 'prop-types';
import ClearIcon from '@material-ui/icons/Clear';
import SocialMedia from 'components/atoms/SocialMedia/SocialMedia';
import AddQuality from 'components/organism/ShopProducts/AddProducts/AddQuality';
import Slider from 'components/atoms/Slider/Slider';
// import SubModal from './SubModal';

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
        <ClearIcon className="close-modal" onClick={() => setShowModal(prev => !prev)} />
        <div className="wrapper-modal">
          <div className=" section-image">
            <Slider slides={sliderImages} />
          </div>
          <div className="section-add">
            <div className="section-text">
              <h2>Lighweight Jacket</h2>
              <div>$57.55</div>
            </div>
            <div className="section-option">
              <div className="filter-size">
                <h4>Size</h4>
                <select className="selected-products">
                  <option className="option-products">Size XS</option>
                  <option className="option-products">Size S</option>
                  <option className="option-products">Size M</option>
                  <option className="option-products">Size L</option>
                  <option className="option-products">Size XL</option>
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
              <div className="add-section">
                <AddQuality />

                {/* <button type="button" className="btn btn-primary" onClick={openSubModal}>
                  Open Sub Modal
                </button> */}

                {/* {showSubModal ? (
                  <div className="wrap" showSubModal={showSubModal}>
                    <button type="button" className="close-modal" onClick={() => setSubModal(prev => !prev)}>
                      close
                    </button>
                  </div>
                ) : null} */}
              </div>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    ) : null}
  </>
);

Modal.propTypes = {
  showModal: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
  // openSubModal: PropTypes.bool.isRequired,
};

export default Modal;
