import express from "express";

import {
  createTransaksi,
  deleteTransaksi,
  getTransaksi,
  getTransaksiById,
  updateTransaksi,
} from "../controllers/TransaksiController.js";
import {
  createUser,
  deleteUser,
  getUser,
  getUserById,
  updateUser,
} from "../controllers/UserController.js";
import {
  createIkan,
  deleteIkan,
  getIkan,
  getIkanById,
  updateIkan,
} from "../controllers/IkanController.js";
import {
  createPegawai,
  deletePegawai,
  getPegawai,
  getPegawaiById,
  updatePegawai,
} from "../controllers/PegawaiController.js";
import {
  createPakanIkan,
  deletePakanIkan,
  getPakanIkan,
  getPakanIkanById,
  updatePakanIkan,
} from "../controllers/PakanIkanController.js";

const router = express.Router();

router.post("/user/create", createUser);
router.get("/user", getUser);
router.get("/user/find/:id", getUserById);
router.put("/user/update/:id", updateUser);
router.delete("/user/delete/:id", deleteUser);

router.post("/transaksi/create", createTransaksi);
router.get("/transaksi", getTransaksi);
router.get("/transaksi/find/:id", getTransaksiById);
router.put("/transaksi/update/:id", updateTransaksi);
router.delete("/transaksi/delete/:id", deleteTransaksi);

router.post("/ikan/create", createIkan);
router.get("/ikan", getIkan);
router.get("/ikan/find/:id", getIkanById);
router.put("/ikan/update/:id", updateIkan);
router.delete("/ikan/delete/:id", deleteIkan);

router.get("/pegawai", getPegawai);
router.get("/pegawai/find/:id", getPegawaiById);
router.post("/pegawai/create", createPegawai);
router.put("/pegawai/update/:id", updatePegawai);
router.delete("/pegawai/delete/:id", deletePegawai);

router.get("/pakanIkan", getPakanIkan);
router.get("/pakanIkan/find/:id", getPakanIkanById);
router.post("/pakanIkan/create", createPakanIkan);
router.put("/pakanIkan/update/:id", updatePakanIkan);
router.delete("/pakanIkan/delete/:id", deletePakanIkan);

export default router;
