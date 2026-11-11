"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const product_module_1 = require("./products/product.module");
const employee_module_1 = require("./employees/employee.module");
const product_entity_1 = require("./products/product.entity");
const employee_entity_1 = require("./employees/employee.entity");
const path = require("path");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'better-sqlite3',
                database: path.resolve(process.env.DATABASE_PATH || './data/shop.sqlite'),
                entities: [product_entity_1.Product, employee_entity_1.Employee],
                synchronize: true,
            }),
            product_module_1.ProductModule,
            employee_module_1.EmployeeModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map