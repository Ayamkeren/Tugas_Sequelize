import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
// import Ikan from "./IkanModels.js"

const Transaksi = db.define(
  "Transaksi",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    jenis_ikan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jumlah_ikan: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    harga_per_ikan: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "transaksi",
  }
);

export default Transaksi;
