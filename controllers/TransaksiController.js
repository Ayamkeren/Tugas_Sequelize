import Transaksi from "../models/TransaksiModels.js";

export const getTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.findAll();
    res.status(200).json(transaksi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTransaksiById = async (req, res) => {
  try {
    const { id } = req.params;
    const transaksi = await Transaksi.findByPk(id);
    if (!transaksi)
      return res.status(404).json({ message: "Transaction not found" });
    res.status(200).json(transaksi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTransaksi = async (req, res) => {
  const { tanggalPembelian, nominal, UserId, IkanId, PakanId, ObatIkanId } = req.body;
  const ticketDate = tanggalPembelian || new Date();
  const transaksi = await Transaksi.create({
    tanggalPembelian: ticketDate,
    nominal,
    UserId: UserId,
    IkanId,
    PakanId,
    ObatIkanId,
  });

  res.status(201).json(transaksi);
};

export const updateTransaksi = async (req, res) => {
  try {
    const { id } = req.params;
    const { tanggalPembelian, nominal, UserId, IkanId, PakanId, ObatIkan } =
      req.body;

    const [updated] = await Transaksi.update(
      { tanggalPembelian, nominal, UserId, IkanId, PakanId, ObatIkan },
      { where: { id } }
    );
    if (updated) {
      const updatedTransaksi = await Transaksi.findByPk(id);
      res.status(200).json(updatedTransaksi);
    } else {
      res
        .status(404)
        .json({ message: "Failed to Update Transaction" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTransaksi = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Transaksi.destroy({ where: { id } });
    res.status(200).json(deleted + ` Transaction ${id} has been deleted`);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Failed to delete transaction" });
  }
};
