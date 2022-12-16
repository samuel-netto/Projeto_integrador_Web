const multer = require("multer");

//destino de armazenamento da imagem
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = "img";

    cb(null, `public/${folder}`);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const imageUpload = multer({
  storage: imageStorage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|webp|jpeg)$/)) {
      return cb(new Error("Por favor, envie apenas jpg, jpeg, webp ou png!"));
    }
    cb(undefined, true);
  },
});

module.exports = { imageUpload };