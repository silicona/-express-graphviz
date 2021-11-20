"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../models/client");
class IndexController {
    constructor() {
        this.index = (req, res) => {
            return res.render('index', { svg: 'app-funcionalidad' });
        };
        this.client = (req, res) => {
            const modelo = new client_1.Client();
            const cliente = modelo.get();
            return res.render({ cliente });
        };
    }
}
const controller = new IndexController();
exports.default = controller;
