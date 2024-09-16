import db from "../utils/connection.js"
import Pegawai from "./PegawaiModels.js";
import User from "./UserModels.js";
import Ikan from "./IkanModels.js";
import Pakan from "./PakanIkanModels.js";
import Transaksi from "./TransaksiModels.js";
// import Ikan from "./IkanModels.js";
// import Pakan from "./PakanIkanModels.js";
// import Transaksi from "./TransaksiModels.js";


await User.sync()
await Pegawai.sync()
await Ikan.sync()
await Pakan.sync()
await Transaksi.sync()

await db.sync()