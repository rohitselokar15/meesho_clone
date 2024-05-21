const filterProductByCategory = (
  products,
  selectedCategory,
  selectPriceRange,
  selectRating
) => {
  let filProducts = products;

  if (selectedCategory.length > 0) {
    filProducts = filProducts.filter((product) =>
      selectedCategory.includes(product.category)
    );
  }

  if (selectPriceRange) {
    const [minPrice, maxPrice] = selectPriceRange;
    filProducts = filProducts.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
  }

  //   if (selectRating.size > 0) {
  //     const minRating = Math.max(...selectRating);
  //     filProducts = filProducts.filter(
  //       (product) => product.rating.rate >= minRating
  //     );
  //   }

  if (selectRating.size > 0) {
    filProducts = filProducts.filter((product) => {
      for (let rating of selectRating) {
        if (product.rating.rate >= rating) {
          return true;
        }
      }
      return false;
    });
  }

  return filProducts;
};

export default filterProductByCategory;
