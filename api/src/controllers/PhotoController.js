import multer from 'multer';
import multerConfig from '../config/multerConfig.js';
import PhotoModel from '../db/models/PhotoModel.js';
const upload = multer(multerConfig).single('photo');
const urlImg = "http://localhost:3001";


class PhotoController {
  postImg(req, res) {
    return upload(req, res, async (err) => {
      if (err) return res.status(400).json({ error: err.code });
      const { filename } = req.file;
      const url = `${urlImg}/images/${filename}`
      try {
        const result = await PhotoModel.create({ img: filename, url });
        return res.json(result);
      } catch (error) {
        return res.status(400).send({ error: 'Error ao salvar a imagem.' })
      }

    })
  }

  async getImg(req, res) {
    const { img } = req.params;
    try {
      const result = await PhotoModel.findById(img);
      if (!result) throw new Error('Imagem não encontrada.')
      return res.status(200).send({ img: result.url });
    } catch (error) {
      return res.status(200).send({ error: error.message });
    }
  }

  async deleteImg(req, res) {
    const { img } = req.params;
    try {
      const result = await PhotoModel.findOneAndDelete({ img });
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
        await PhotoModel.findOneAndUpdate({ img }, { img: filename, url });
        return res.json({ img: filename, url });
      } catch (error) {
        return res.status(400).send({ error: 'Error ao atualizar a imagem.' })
      }

    })
  }


}

export default new PhotoController();