/*
 * @Author: lzp
 * @Date: 2023-01-19 10:43:08
 * @LastEditors: lzp
 * @LastEditTime: 2023-03-05 16:38:38
 * @Description: 数据库连接
 */
import { dbconfig } from "../config";
import mysql from "mysql2";
import type { Pool } from "mysql2";
const DB: Pool = mysql.createPool(dbconfig);
export default DB;
