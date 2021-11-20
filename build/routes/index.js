"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../controllers/index"));
const router = express_1.default.Router();
router.use(function timelog(req, res, next) {
    console.log('Entrada a las: ', Date.now());
    next();
});
router.get('/', index_1.default.index);
router.get('/client', index_1.default.client);
// router.get('/', (req, res) => {
//   //res.send('Holoooooo, humano imberbe!!!!!')
//   res.render('index', { svg: 'app-funcionalidad' })
// })
exports.default = router;
