import React, { useState, useEffect } from 'react';
import './Modal.scss';
import PropTypes from 'prop-types';
import ClearIcon from '@material-ui/icons/Clear';
import SocialMedia from 'components/atoms/SocialMedia/SocialMedia';
import QualityProducts from 'components/organism/ShopProducts/Product/QualityProducts';
import Slider from 'components/atoms/Slider/Slider';
import InputSelect from 'components/atoms/Input/InputSelect';
import SubModal from '../SubModal/SubModal';

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

const Modal = ({ showModal, setShowModal }) => {
  const [showSubModal, setSubModal] = useState(false);
  const handleKeyup = e => e.keyCode === 27 && setSubModal(prev => !prev);

  const openSubModal = () => {
    setSubModal(prev => !prev);
  };

  useEffect(() => {
    if (showSubModal) window.addEventListener('keyup', handleKeyup);
    return () => window.removeEventListener('keyup', handleKeyup);
  });

  return (
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
              <div className="modal-box">
                <div className="filter-size">
                  <InputSelect
                    title="Size"
                    type="select"
                    options={[
                      { value: 'XS', label: 'XS' },
                      { value: 'S', label: 'S' },
                      { value: 'M', label: 'M' },
                      { value: 'XL', label: 'XL' },
                    ]}
                  />
                </div>
                <div className="filter-color">
                  <InputSelect
                    title="Color"
                    type="select"
                    options={[
                      { value: 'Red', label: 'Red' },
                      { value: 'White', label: 'White' },
                      { value: 'Black', label: 'Black' },
                      { value: 'Blue', label: 'Blue' },
                      { value: 'Yelllow', label: 'Yelllow' },
                    ]}
                  />
                </div>
                <div className="add-section">
                  <QualityProducts />
                  <div className="row-submodal">
                    <button className="btn-modal" type="button" onClick={openSubModal}>
                      Add to Card
                    </button>
                    <SubModal showSubModal={showSubModal} setSubModal={setSubModal} />
                  </div>
                </div>
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  showModal: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default Modal;
