"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs = require("fs");
const path = require("path");
require("dotenv/config");
async function bootstrap() {
    const databasePath = process.env.DATABASE_PATH || './data/shop.sqlite';
    const absoluteDatabasePath = path.resolve(databasePath);
    fs.mkdirSync(path.dirname(absoluteDatabasePath), { recursive: true });
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const port = Number(process.env.PORT || 3000);
    await app.listen(port);
    console.log(`Shop API is running at http://localhost:${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map