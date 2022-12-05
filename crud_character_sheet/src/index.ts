import express from 'express';
import { router } from './routes/router.js';
import path from 'path';
import { PORT } from './config.js';
const methodOverride = require('method-override');

const app = express();

app.set("view engine", "ejs");

const path_static_files = path.join(__dirname, "..", "public");
app.use(express.static(path_static_files));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride((req: express.Request, res: express.Response) => {
    // user login pass
    // check exist
    // search

    //@ts-ignore
    req["user"] = {
        name: "noname"
        , tel: 82379
    }
    if (req.body && typeof req.body === 'object' && "_method" in req.body) {
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
})
