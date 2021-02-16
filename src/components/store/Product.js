import React from 'react';
import styled from 'styled-components';

const ProductStyles = styled.div`
  border: 1px solid var(--dark);
  padding: 20px;
`;

export default function Product({ product, buttonAttrs }) {
  const button = (
    <button type="button" className="snipcart-add-item" {...buttonAttrs}>
      Buy it Button!
    </button>
  );
  if (!product) return button;
  return (
    <ProductStyles>
      {/* If there are no variants, just show a regular ass button */}
      {!product.variants.length && button}
      <p>ID: {product.userDefinedId}</p>
      <div className="variations">
        {product.variants.map((variant, index) => (
          <div key={`variant${index}`}>
            <button
              type="button"
              className="snipcart-add-item"
              {...buttonAttrs}
              data-item-custom1-value={variant.variation[0].option}
              disabled={variant.stock === 0}
            >
              <span className="variantName">
                {variant.variation
                  .map((singleVariant) => `${singleVariant.option}`)
                  .join(' x ')}
              </span>
            </button>
            <span className="stock">{variant.stock} left</span>
          </div>
        ))}
      </div>
    </ProductStyles>
  );
}
