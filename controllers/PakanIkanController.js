import PakanIkan from "../models/PakanIkanModels.js";

export const getPakanIkan = async (req, res) => {
  try {
    const pakanIkan = await PakanIkan.findAll();
    res.status(200).json(pakanIkan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPakanIkanById = async (req, res) => {
  try {
    const { id } = req.params;
    const pakanIkan = await PakanIkan.findByPk(id);
    if (!pakanIkan)
      return res.status(404).json({ message: "Pakan Tidak DiTemukan" });
    res.status(200).json(pakanIkan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPakanIkan = async (req, res) => {
  try {
    const { name, jenisPakan, harga, UserId } = req.body;
    const pakanIkan = await PakanIkan.create({
      name,
      jenisPakan,
      harga,
      UserId,
    });
    res.status(200).json(pakanIkan);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Gagal Membuat createPakanIkan" });
  }
};

export const updatePakanIkan = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, jenisPakan, harga, UserId } = req.body;
    const [updated] = await PakanIkan.update(
      { name, jenisPakan, harga, UserId },
      { where: { id } }
    );
    if (updated) {
      const updatedPakanIkan = await PakanIkan.findByPk(id);
      res.status(200).json(updatedPakanIkan);
    } else {
      res.status(404).json({ message: "Gagal MengUpdate Pakan Ikan" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePakanIkan = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await PakanIkan.destroy({ where: { id } });
    res.status(200).json(deleted + ` Pakan Dengan id ${id} Berhasil Di Hapus`);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Gagal Menghapus Pakan" });
  }
};
