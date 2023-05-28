/*
 * @Author: lzp
 * @Date: 2023-01-06 21:31:30
 * @LastEditors: lzp
 * @LastEditTime: 2023-01-22 17:34:58
 * @Description: 路由配置文件
 */

import { RouterConfig } from "../type/router.type";
import Role from "./role/index";
import User from "./user/index";
import Assigning from "./assigning/index";
import Check from "./check/index";
import Status from "./status/index";
import Log from "./log/index";
export const router: RouterConfig = [
  {
    prefix: "/role",
    route: Role,
  },
  {
    prefix: "/user",
    route: User,
  },
  {
    prefix: "/assigning",
    route: Assigning,
  },
  {
    prefix: "/check",
    route: Check,
  },
  {
    prefix: "/status",
    route: Status,
  },
  {
    prefix: "/log",
    route: Log,
  },
];
