/*
 * @Author: lzp
 * @Date: 2023-01-06 21:31:09
 * @LastEditors: lzp
 * @LastEditTime: 2023-01-06 21:58:30
 * @Description: 路由注册机
 */
import { Express } from "express";
import { router } from "./router.config";
export function routerRegister(app: Express) {
  router.forEach((routerItem) => {
    const { prefix, route } = routerItem;
    app.use(prefix, route);
  });
}
