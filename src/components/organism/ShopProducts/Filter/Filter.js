import React, { useEffect, useState } from 'react';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';
import '../Products.scss';
import SimpleButton from 'components/atoms/SimpleButton/SimpleButton';
import { useAxios } from 'hooks/useAxios';
import ItemListFilter from './ItemListFilter';

const categories = [
  { name: 'All', value: 'All' },
  { name: 'Men', value: 'Men' },
  { name: 'Women', value: 'Women' },
  { name: 'Accessories', value: 'Accessories' },
];

const Filter = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState(categories[0].name);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { response, error, loading } = useAxios({
    method: 'POST',
    url: 'https://graphql.datocms.com/',
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
    },
    data: {
      query: `
          {
            allProducts {
              id,
              title,
              price,
              image{
                url
              },
              category,
              value
            }
          }`,
    },
  });

  const filterProducts = (products, category) => (category === 'All' ? products : products.filter(product => product.category === category));

  useEffect(() => {
    setAllProducts(response?.data?.allProducts ?? []);
  }, [response, loading]);

  useEffect(() => {
    setFilteredProducts(filterProducts(allProducts, activeFilter));
  }, [allProducts]);

  const handleClick = category => () => {
    setFilteredProducts(filterProducts(allProducts, category));
    setActiveFilter(category);
  };

  const areProductsVisible = !loading && !error;
  const isErrorVisible = !loading && error;

  return (
    <>
      <div className="row-button">
        {categories.map(({ name, value }) => (
          <SimpleButton value={value} onClick={handleClick(name)} key={name} isActive={activeFilter === name} />
        ))}
      </div>
      <div className="wrapper-shop">
        {loading && <LoadingIcon />}
        {areProductsVisible && filteredProducts.map((item, testID) => <ItemListFilter testID={testID} key={item.id} item={item} />)}
        {isErrorVisible && <div> Something went wrong 🤷‍ try again</div>}
      </div>
    </>
  );
};

export default Filter;
