"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const allProducts = (products) => ({
  quantidade: products.length,
  products: products.map((product) => ({
    name: product.title,
  })),
}); exports.allProducts = allProducts;

 const productsByPage = (products, page, limit) => {
  const arrayPage = [];
  if (!page) page = 1;
  let maxItems = limit || 20;
  let total = page * maxItems;

  if (total > products.length) {
    maxItems -= (total - products.length);
    total = products.length;
  }

  if (maxItems < 0) return { error: 'Página inválida' };

  if (products.length < maxItems) return this.allProducts(products);

  for (let i = total - maxItems; i < total; i += 1) {
    arrayPage.push(products[i]);
  }

  return {
    currentPage: Number(page),
    currentPageTotal: arrayPage.length,
    totalPages: Math.ceil(products.length / (limit || 20)),
    totalProducts: products.length,
    products: arrayPage.map((prod) => ({
      category: prod.category,
      title: prod.title,
      price: prod.price,
      link: prod.link,
      img: prod.img,
      store: prod.store,
      year: prod.year,
    })),
  };
}; exports.productsByPage = productsByPage;
