"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PlanesSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    desayuno: { type: String },
    colasion1: { type: String },
    comida: { type: String },
    colasion2: { type: String },
    cena: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date
});
exports.Planes = mongoose_1.model('Planes', PlanesSchema);
// const planesSchema = new Schema({
//     created: {
//         type: Date
//     },
//     nombre: {
//         type: String
//     },
//     desayuno: {
//         type: String
//     },
//     colasion1: {
//         type: String
//     },
//     comida: {
//         type: String
//     },
//     colasion2: {
//         type: String
//     },
//     cena: {
//         type: String
//     },
//     usuario: {
//         type: Schema.Types.ObjectId,
//         ref: 'Usuario',
//         required: [ true, 'Debe de existir una referencia a un usuario' ]
//     }
// });
// planesSchema.pre<IPlanes>('save', function( next ) {
//     this.created = new Date();
//     next();
// });
// interface IPlanes extends Document {
//     created: Date;
//     nombre: string;
//     desayuno: string;
//     colasion1: string;
//     comida: string;
//     colasion2: string;
//     cena: string;
//     usuario: string;
// }
// export const Planes = model<IPlanes>('planes', planesSchema);
