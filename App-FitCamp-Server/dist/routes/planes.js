"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const planes_model_1 = require("../models/planes.model");
class PlanesRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    getPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield planes_model_1.Planes.find();
            res.json({ posts });
        });
    }
    getPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield planes_model_1.Planes.find({ name: { $regex: req.params.name } });
            res.json(post);
        });
    }
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, desayuno, colasion1, comida, colasion2, cena } = req.body;
            const newPlan = new planes_model_1.Planes({ name, desayuno, colasion1, comida, colasion2, cena });
            yield newPlan.save();
            res.json({ status: res.status, data: newPlan });
            // res.json(newPlan);
        });
    }
    updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.params;
            const post = yield planes_model_1.Planes.findOneAndUpdate({ name }, req.body);
            res.json({ status: res.status, data: post });
        });
    }
    deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield planes_model_1.Planes.findOneAndRemove({ name: req.params.name });
            res.json({ response: 'Plan eliminado exitosamente' });
        });
    }
    routes() {
        this.router.get('/', this.getPosts);
        this.router.get('/:name', this.getPost);
        this.router.post('/', this.createPost);
        this.router.put('/:name', this.updatePost);
        this.router.delete('/:name', this.deletePost);
    }
}
const planesRoutes = new PlanesRouter();
exports.default = planesRoutes.router;
// const planesRoutes = Router();
// // Crear POST
// planesRoutes.post('/', [ verificaToken ], (req: any, res: Response) => {
//     const body = req.body;
//     body.usuario = req.usuario._id;
//     Planes.create( body ).then( async planesDB => {
//         await planesDB.populate('usuario', '-password').execPopulate();
//         res.json({
//             ok: true,
//             planes: planesDB
//         });
//     }).catch( err => {
//          res.json(err)
//     });
// });
