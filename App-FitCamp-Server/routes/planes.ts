import { Router, Response, Request } from 'express';
import { Planes } from '../models/planes.model';
import {verificaToken} from '../middlewares/autenticacion'; 

class PlanesRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public async getPosts(req: Request, res: Response) {
        const posts = await Planes.find();
        res.json({ posts });
    }

    public async getPost(req: Request, res: Response) {
        const post = await Planes.find({ name: { $regex: req.params.name } });
        res.json(post);
    }

    public async createPost(req: Request, res: Response) {
        const { name, desayuno, colasion1, comida, colasion2, cena } = req.body;
        const newPlan= new Planes({ name, desayuno, colasion1, comida, colasion2, cena});
        await newPlan.save();
        res.json({status: res.status, data: newPlan});
        // res.json(newPlan);

    }

    public async updatePost(req: Request, res: Response) {
        const { name } = req.params;
        const post = await Planes.findOneAndUpdate({name}, req.body);
        res.json({status: res.status, data: post});
    }

    public async deletePost(req: Request, res: Response) {
        await Planes.findOneAndRemove({ name: req.params.name });
        res.json({ response: 'Plan eliminado exitosamente' });
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

export default planesRoutes.router;




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