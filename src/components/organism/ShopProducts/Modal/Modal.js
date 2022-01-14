import React, { useState, useRef } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import { useDispatch } from 'react-redux';
import { increaseProduct } from 'redux/slice/sliceCart';
import './Modal.scss';
import PropTypes from 'prop-types';
import ClearIcon from '@material-ui/icons/Clear';
import SocialMedia from 'components/atoms/SocialMedia/SocialMedia';
import Slider from 'components/atoms/Slider/Slider';
import SelectInput from 'components/atoms/SelectInput/SelectInput';
import SubModal from '../../../molecules/SubModal/SubModal';

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

const optionsSize = [
  { value: 'XS', label: 'XS' },
  { value: 'S', label: 'S' },
  { value: 'M', label: 'M' },
  { value: 'XL', label: 'XL' },
];
const optionsColor = [
  { value: 'Red', label: 'Red' },
  { value: 'White', label: 'White' },
  { value: 'Black', label: 'Black' },
  { value: 'Blue', label: 'Blue' },
  { value: 'Yelllow', label: 'Yelllow' },
];

const Modal = ({ item, showModal, setShowModal }) => {
  const [showSubModal, setSubModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState(optionsSize[0].value);
  const [selectedColor, setSelectedColor] = useState(optionsColor[0].value);

  const modalRef = useRef(null);
  useClickOutside(modalRef, setSubModal);
  const dispatch = useDispatch();

  const openSubModal = () => {
    setSubModal(prev => !prev);
  };
  const closeSubModal = () => {
    setSubModal(prev => !prev);
  };

  const handleAddToCart = item => {
    item.size = selectedSize;
    item.color = selectedColor;
    dispatch(increaseProduct(item));
  };

  const handleSizeOnChange = size => {
    console.log('size', size);
    setSelectedSize(size);
  };
  const handleColorOnChange = color => {
    console.log('color', color);
    setSelectedColor(color);
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
                <h2>{item.title}</h2>
                <div>${item.price}</div>
              </div>
              <div className="modal-box">
                <div className="filter-size">
                  <SelectInput title="Size" type="select" onChange={handleSizeOnChange} options={optionsSize} />
                </div>
                <div className="filter-color">
                  <SelectInput title="Color" type="select" onChange={handleColorOnChange} options={optionsColor} />
                </div>
                <div className="add-section">
                  <div className="row-submodal">
                    <button
                      className="btn-modal"
                      type="button"
                      onClick={() => {
                        openSubModal();
                        handleAddToCart(item);
                      }}
                    >
                      Add to Card
                    </button>
                    <SubModal showSubModal={showSubModal} setSubModal={setSubModal} title={item.title} information="is added to card" />
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
};

export default Modal;
