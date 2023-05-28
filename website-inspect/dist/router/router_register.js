"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerRegister = void 0;
const router_config_1 = require("./router.config");
function routerRegister(app) {
    router_config_1.router.forEach((routerItem) => {
        const { prefix, route } = routerItem;
        app.use(prefix, route);
    });
}
exports.routerRegister = routerRegister;
