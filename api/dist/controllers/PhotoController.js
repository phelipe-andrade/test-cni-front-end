"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfigjs = require('../config/multerConfig.js'); var _multerConfigjs2 = _interopRequireDefault(_multerConfigjs);
var _PhotoModeljs = require('../db/models/PhotoModel.js'); var _PhotoModeljs2 = _interopRequireDefault(_PhotoModeljs);
const upload = _multer2.default.call(void 0, _multerConfigjs2.default).single('photo');
const urlImg = "http://localhost:3001";


class PhotoController {
  postImg(req, res) {
    return upload(req, res, async (err) => {
      if (err) return res.status(400).json({ error: err.code });
      const { filename } = req.file;
      const url = `${urlImg}/images/${filename}`
      try {
        const result = await _PhotoModeljs2.default.create({ img: filename, url });
        return res.json(result);
      } catch (error) {
        return res.status(400).send({ error: 'Error ao salvar a imagem.' })
      }

    })
  }

  async getImg(req, res) {
    const { img } = req.params;
    try {
      const result = await _PhotoModeljs2.default.findById(img);
      if (!result) throw new Error('Imagem não encontrada.')
      return res.status(200).send({ img: result.url });
    } catch (error) {
      return res.status(200).send({ error: error.message });
    }
  }

  async deleteImg(req, res) {
    const { img } = req.params;
    try {
      const result = await _PhotoModeljs2.default.findOneAndDelete({ img });
      if (!result) throw new Error('Imagem não encontrada.')
      return res.status(200).send({ message: 'Imagem excluída' });
    } catch (error) {
      return res.status(200).send({ error: error.message });
    }
  }

  async editImg(req, res) {
    const { img } = req.params;
    return upload(req, res, async (err) => {
      if (err) return res.status(400).json({ error: err.code });
      const { filename } = req.file;
      const url = `${urlImg}/images/${filename}`
      try {
        await _PhotoModeljs2.default.findOneAndUpdate({ img }, { img: filename, url });
        return res.json({ img: filename, url });
      } catch (error) {
        return res.status(400).send({ error: 'Error ao atualizar a imagem.' })
      }

    })
  }


}

exports. default = new PhotoController();