"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _DBjs = require('../db/DB.js'); var _DBjs2 = _interopRequireDefault(_DBjs);
var _itemsBypagejs = require('../showProducts/itemsBypage.js');
var _Verificationjs = require('../verification/Verification.js'); var _Verificationjs2 = _interopRequireDefault(_Verificationjs);

class ProductsControllers {
  async searchByCategory(req, res) {
    const { category } = req.params;
    const { limit, page } = req.query;
    try {
      const validCategories = await _DBjs2.default.selectNameAllCategories();
      if (!validCategories.includes(category) || typeof category !== 'string') return res.status(404).send({ error: 'Categoria inválida' });
      const productsByCategory = await _DBjs2.default.selectAllProductsByCategory(category);
      const byPage = _itemsBypagejs.productsByPage.call(void 0, productsByCategory, page, limit);
      return res.status(200).send(byPage);
    } catch (error) {
      return res.status(404).send({ error: 'Categoria inválida' });
    }
  }
  /* eslint-disable */
  async getProductsBySearch(req, res) {
    const { search, limit, page } = req.query;
    try {
      if (typeof search !== 'string') return res.status(400).send({error: 'Pesquisa inválida'});
      const allCategories = await _DBjs2.default.selectNameAllCategories();

      let categories = [];
      let oneCategory = false
      for(const category of allCategories){
        if (search === category) {
          oneCategory = true;
          categories.push(category);
          break;
        }
        else if (search.includes(category)) categories.push(category);
      }
      if(categories.length <= 0) categories = allCategories;

      const result = [];
      for (const category of categories) {
        result.push(_DBjs2.default.selectAllProductsByCategory(category));
      }

      const productsByCategory = await Promise.all(result);
      const resultProducts = [];
      for(const arrayProd of productsByCategory){
        let localizedProducts
        if (!oneCategory) localizedProducts = _Verificationjs2.default.compare(arrayProd, search);
        else localizedProducts = arrayProd;
        if (localizedProducts.length <= 0) continue;
        for (const product of localizedProducts) {
          resultProducts.push(product);
        }
      }

      const byPage = _itemsBypagejs.productsByPage.call(void 0, resultProducts, page, limit);
      return res.status(200).send(byPage);
    } catch (error) {
      console.log(error);
      return res.status(404).send({ error: 'Pesquisa inválida', er:error});
    }
  }
}

exports. default = new ProductsControllers();
