import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Ikan from "./IkanModels.js";
import PakanIkan from "./PakanIkanModels.js";
import Pegawai from "./PegawaiModels.js";
import Transaksi from "./TransaksiModels.js";

const User = db.define(
  "User",
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "user",
  }
);

User.hasMany(Ikan, { foreignKey: "UserId" });
Ikan.belongsTo(User, { foreignKey: "UserId" });

User.hasMany(PakanIkan, { foreignKey: "UserId" });
PakanIkan.belongsTo(User, { foreignKey: "UserId" });

User.hasMany(Transaksi, { foreignKey: "UserId" });
Transaksi.belongsTo(User, { foreignKey: "UserId" });

Pegawai.hasMany(Transaksi, { foreignKey: "PegawaiId" });
Transaksi.belongsTo(Pegawai, { foreignKey: "PegawaiId" });

Ikan.hasMany(Transaksi, { foreignKey: "IkanId" });
Transaksi.belongsTo(Ikan, { foreignKey: "IkanId" });

PakanIkan.hasMany(Transaksi, { foreignKey: "PakanIkanId" });
Transaksi.belongsTo(PakanIkan, { foreignKey: "PakanIkanId" });

export default User;
