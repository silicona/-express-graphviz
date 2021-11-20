"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", 'ejs');
app.use(express_1.default.static('public'));
app.get('/', index_1.default);
const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`App escuchando en el http://localhost:${port}, bípedo dominante!!`);
});
