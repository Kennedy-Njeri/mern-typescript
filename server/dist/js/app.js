"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = __importDefault(require("./config/db"));
const todosRoutes_1 = __importDefault(require("./routes/todosRoutes"));
const app = express_1.default();
const PORT = process.env.PORT || 5000;
dotenv_1.default.config();
db_1.default();
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(todosRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
