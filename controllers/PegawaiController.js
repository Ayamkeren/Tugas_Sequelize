import Pegawai from "../models/PegawaiModels.js";

export const getPegawai = async (req, res) => {
  try {
    const pegawai = await Pegawai.findAll();
    res.status(200).json(pegawai);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPegawaiById = async (req, res) => {
  try {
    const { id } = req.params;
    const pegawai = await Pegawai.findByPk(id);
    if (!admin) return res.status(404).json({ message: "Pegawai tidak ditemukan" });
    res.status(200).json(pegawai);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPegawai = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const pegawai = await Pegawai.create({ name, password, email });
    res.status(200).json(pegawai);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Gagal Membuat createPegawai" });
  }
};

export const updatePegawai = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, password, email } = req.body;
    const [updated] = await Pegawai.update({ name, password, email }, { where: { id } });
    if (updated) {
      const updatedPegawai = await Pegawai.findByPk(id);
      res.status(200).json(updatedPegawai);
    } else {
      res.status(404).json({ message: "Gagal MengUpdate Pegawai" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePegawai = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pegawai.destroy({ where: { id } });
    res.status(200).json(deleted + `Pegawai ke ${id} berhasil dihapus`);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "gagal menghapus user" });
  }
};
