import Ikan from "../../model/IkanModels.js";
import User from "../../model/UserModel.js";
import Transaksi from "../../model/TransaksiModels.js";

export default async function clean() {
  await User.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Ikan.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Transaksi.destroy({
    where: {},
    force: true,
    cascade: true,
  });
}
