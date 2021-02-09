import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import WelcomeStyles from '../assets/styles/WelcomeStyles';
import H from '../components/mdxComponents/Headings';
import { PostMetaTags } from '../components/MetaTags';
import { useSnipCart, useSnipCartProducts } from '../utils/useSnipCart';
import Product from '../components/store/Product';

export default function SwagPage({ data, path }) {
  const Snipcart = typeof window === 'undefined' ? undefined : window.Snipcart;
  const { store } = useSnipCart({
    cart: {
      items: {
        count: 0,
      },
    },
  });
  const { products } = useSnipCartProducts();
  console.log(products);
  return (
    <div className="welcome">
      <button type="button" onClick={Snipcart?.api.theme.cart.open}>
        Open Cart {store.cart.items.count}
      </button>
      <span className="snipcart-items-count" />
      <span className="snipcart-total-price" />
      {/* <button
        type="button"
        className="snipcart-add-item"
        data-item-id="pink-on-pink-tshirt"
        data-item-price="17.00"
        data-item-url={`${process.env.GATSBY_DEPLOY_URL}/swag`}
        data-item-name="Pink on Pink tshirt"
        // grams
        data-item-weight="215"
        // cm
        data-item-length="23"
        data-item-height="5"
        data-item-width="17"
        data-item-shippable="true"
        data-item-max-quantity="49"
        data-item-custom1-name="Size"
        data-item-custom1-options="small|medium|large|XL"
      >
        Add Pink Shirt
      </button> */}
      <Product
        product={products.find(
          (product) => product.userDefinedId === 'pink-on-pink-tshirt'
        )}
        buttonAttrs={{
          'data-item-id': 'pink-on-pink-tshirt',
          'data-item-price': '17.00',
          'data-item-url': `${process.env.GATSBY_DEPLOY_PRIME_URL}/swag`,
          'data-item-name': 'Pink on Pink tshirt',
          // grams
          'data-item-weight': '215',
          // cm
          'data-item-length': '23',
          'data-item-height': '5',
          'data-item-width': '17',
          'data-item-shippable': 'true',
          'data-item-max-quantity': '49',
          'data-item-custom1-name': 'Size',
          'data-item-custom1-options': 'small|medium|large|XL',
        }}
      />
      <hr />
      <button
        type="button"
        className="snipcart-add-item"
        data-item-id="5-pack-stickers"
        data-item-price="6.00"
        data-item-url={`${process.env.GATSBY_DEPLOY_PRIME_URL}/swag`}
        data-item-name="5 Packs of Stickers"
        // grams
        data-item-weight="45"
        // cm
        data-item-length="9"
        data-item-height="14"
        data-item-width="2"
        data-item-shippable="true"
        data-item-max-quantity="49"
      >
        5 Packs of Stickers
      </button>
      {/*
        Questiosnf or Snipcart:
        1. How do I limit the amount of products sold? Inventory

      */}
    </div>
  );
}
