"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_js_1 = require("./routes/router.js");
const path_1 = __importDefault(require("path"));
const config_js_1 = require("./config.js");
const methodOverride = require('method-override');
const app = (0, express_1.default)();
app.set("view engine", "ejs");
const path_static_files = path_1.default.join(__dirname, "..", "public");
app.use(express_1.default.static(path_static_files));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(methodOverride((req, res) => {
    // user login pass
    // check exist
    // search
    //@ts-ignore
    req["user"] = {
        name: "noname",
        tel: 82379
    };
    if (req.body && typeof req.body === 'object' && "_method" in req.body) {
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));
app.use("/", router_js_1.router);
app.listen(config_js_1.PORT, () => {
    console.log(`Escuchando en el puerto ${config_js_1.PORT}`);
});
