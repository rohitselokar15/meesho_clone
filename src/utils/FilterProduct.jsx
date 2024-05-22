const filterProductByCategory = (
  products,
  selectedCategory,
  selectPriceRange,
  selectRating,
  selectGender
) => {
  let filProducts = products;

  if (selectedCategory.length > 0) {
    filProducts = filProducts.filter((product) =>
      selectedCategory.includes(product.category)
    );
  }

  if (selectGender.length > 0) {
    filProducts = filProducts.filter((product) =>
      selectGender.includes(product.gender)
    );
  }

  if (selectPriceRange) {
    const [minPrice, maxPrice] = selectPriceRange;
    filProducts = filProducts.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
  }

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
