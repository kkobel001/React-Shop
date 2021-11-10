import React, { useState, useRef } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import { useDispatch } from 'react-redux';
import { addProduct } from 'redux/reducers/productReducers';
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

const Modal = ({ item, showModal, setShowModal }) => {
  const [showSubModal, setSubModal] = useState(false);
  const modalRef = useRef(null);
  useClickOutside(modalRef, setSubModal);
  const dispatch = useDispatch;

  // const openSubModal = () => {
  //   setSubModal(prev => !prev);
  // };
  const closeSubModal = () => {
    setSubModal(prev => !prev);
  };

  const handleAddToCart = allproduct => {
    dispatch(addProduct(allproduct));
  };

  return (
    <>
      {showModal ? (
        <div className="modal" showModal={showModal} onKeyDown={closeSubModal} role="button" tabIndex={0}>
          <ClearIcon className="close-modal" onClick={() => setShowModal(prev => !prev)} />
          <div className="wrapper-modal">
            <div className=" section-image">
              <Slider slides={sliderImages} />
            </div>
            <div className="section-add">
              <div className="section-text">
                <h2>{item.item.title}</h2>
                <div>${item.item.price}</div>
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
                    <button
                      className="btn-modal"
                      type="button"
                      onClick={() => {
                        // openSubModal();
                        handleAddToCart(item);
                      }}
                    >
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
  item: PropTypes.instanceOf(Object).isRequired,
  showModal: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
  // addToCard: PropTypes.func.isRequired,
};

// const mapDispatchToprops = dispatch => ({
//   addToCard: () => dispatch(addToCartAction),
// });
export default Modal;
