import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const PakanIkan = db.define(
  "Pakan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jenisPakan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "pakan",
  }
);

export default PakanIkan;
