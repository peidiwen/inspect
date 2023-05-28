/*
 * @Author: lzp
 * @Date: 2023-01-06 21:39:05
 * @LastEditors: lzp
 * @LastEditTime: 2023-01-06 21:43:39
 * @Description: 路由的类型文件
 */
import { Router } from "express";
export interface IRouterConfigItem {
  prefix: string;
  route: Router;
}
export type RouterConfig = IRouterConfigItem[];
