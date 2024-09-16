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
    tanggalPembelian: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    nominal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "transaksi",
  }
);

export default Transaksi;
