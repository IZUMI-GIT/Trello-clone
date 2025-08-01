"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const prisma = new client_1.PrismaClient();
app.get('/api/boards', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield prisma.user.create({
        data: {
            email: "hello10worl@gmail.com",
            userName: "hello_Man"
        }
    });
    console.log(newUser);
    const newBoard = yield prisma.board.create({
        data: {
            userId: newUser.id,
            title: "first Board"
        }
    });
    console.log(newBoard);
    res.status(200).json({
        "message": "successful"
    });
}));
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
