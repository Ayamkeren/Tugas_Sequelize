import Ikan from "../models/IkanModels.js";

export const getIkan = async (req, res) => {
  try {
    const ikan = await Ikan.findAll();
    res.status(200).json(ikan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getIkanById = async (req, res) => {
  try {
    const { id } = req.params;
    const ikan = await Ikan.findByPk(id);
    if (!ikan) return res.status(404).json({ message: "Fish not found" });
    res.status(200).json(ikan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createIkan = async (req, res) => {
  try {
    const { name, jenis, harga, UserId } = req.body;
    const ikan = await Ikan.create({ name, jenis, harga, UserId });
    res.status(200).json(ikan);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Gagal Membuat createIkan" });
  }
};

export const updateIkan = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, jenis, harga, UserId } = req.body;

    const [updated] = await Ikan.update(
      { name, jenis, harga, UserId },
      { where: { id } }
    );
    if (updated) {
      const updatedIkan = await Ikan.findByPk(id);
      res.status(200).json(updatedIkan);
    } else {
      res.status(404).json({ message: "Gagal MengUpdate" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteIkan = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Ikan.destroy({ where: { id } });
    res.status(200).json(deleted + `Fish Number ${id} has been deleted `);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Failed to delete fish" });
  }
};
