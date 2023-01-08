import DB from '../db/DB.js';

class VehicleControllers {
  async insertVehicle(req, res) {
    console.log(req.body);
    try {
      const result = await DB.insertVehicle(req.body);
      console.log(result);
      return res.status(200).send({ message: 'Veículo cadastrado.' });
    } catch (error) {
      return res.status(404).send({ error: error.message });
    }
  }

  async getAllVehicle(req, res) {
    try {
      const vehicles = await DB.getAllVehicles();
      if (!vehicles.length) throw new Error('Não possui veículos cadastrados')
      return res.status(200).send(vehicles);
    } catch (error) {
      return res.status(404).send([]);
    }
  }

  async getVehicle(req, res) {
    try {
      const vehicle = await DB.getVehicle(req.params.id);
      if (!vehicle) throw new Error('Não possui não encontrado')
      return res.status(200).send(vehicle);
    } catch (error) {
      return res.status(404).send({ error: error.message });
    }
  }

  async updateVehicle(req, res) {
    try {
      await DB.updadeVehicle(req.params.id, req.body);
      return res.status(200).send({ message: 'Veículo atualizado com sucesso.' });
    } catch (error) {
      return res.status(404).send({ error: error.message });
    }
  }

  async removeVehicle(req, res) {
    try {
      await DB.removeVehicle(req.params.id);
      return res.status(200).send({ message: 'Veículo removido com sucesso.' });
    } catch (error) {
      return res.status(404).send({ error: error.message });
    }
  }
}

export default new VehicleControllers();
