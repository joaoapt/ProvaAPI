import 'dotenv/config'


import filmeController from './controller/filmeController.js'
import usuarioController from './controller/usuarioController.js'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

server.use(filmeController);
server.use(usuarioController);

server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`));