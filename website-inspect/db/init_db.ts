/*
 * @Author: lzp
 * @Date: 2023-01-19 10:51:11
 * @LastEditors: lzp
 * @LastEditTime: 2023-01-22 21:13:40
 * @Description: 数据库初始化文件
 */
import DB from "./index";
import { CreateTableList } from "./sql/create_table.sql"; // 建表语句
import { Website_List } from "./initData/websiteList";
import { Status_List } from "./initData/statusList";
import { Role_List } from "./initData/roleList";
import {
  Add as WebsiteAdd,
  QueryAll as WebsiteQueryAll,
} from "./sql/website/index.sql";
import { Add as RoleAdd, QueryAll as RoleQueryAll } from "./sql/role/index.sql";
import {
  Add as StatusAdd,
  QueryAll as StatusQueryAll,
} from "./sql/status/index.sql";
import {
  Add as CheckAdd,
  QueryAll as CheckQueryAll,
} from "./sql/check/index.sql";
import {
  QueryAll as CheckUserQueryAll,
  Add as AddUser,
} from "./sql/user/index.sql";
import {
  Query as QueryAssigning,
  Add as AddAssigning,
} from "./sql/assigning/index.sql";
import afterQueryIsNull from "../share/afterQueryIsNull";
import { forEach } from "lodash";
// import { Create_Event_UpdateCheckTable } from "./sql/create_event.sql";
export async function initDBTable() {
  const TableList = [...CreateTableList];
  await DB.promise().execute(TableList[0]);
  initWebsiteUrl();
  await DB.promise().execute(TableList[1]);
  initRole();
  await DB.promise().execute(TableList[2]);
  initStatus();
  await DB.promise().execute(TableList[3]);
  initUser();
  await DB.promise().execute(TableList[4]);
  initAssigning();
  await DB.promise().execute(TableList[5]);
  await DB.promise().execute(TableList[6]);
  initCheck();
}

function initWebsiteUrl() {
  afterQueryIsNull(WebsiteQueryAll, () => {
    Website_List.forEach((url) => {
      DB.execute(WebsiteAdd, [url], (err, results, fields) => {
        if (err) throw err;
      });
    });
  });
}

function initStatus() {
  afterQueryIsNull(StatusQueryAll, () => {
    Status_List.forEach((status) => {
      DB.execute(StatusAdd, [status], (err, results, fields) => {
        if (err) throw err;
      });
    });
  });
}

function initRole() {
  afterQueryIsNull(RoleQueryAll, () => {
    Role_List.forEach((role) => {
      DB.execute(RoleAdd, [role], (err, results, fields) => {
        if (err) throw err;
      });
    });
  });
}

function initCheck() {
  afterQueryIsNull(CheckQueryAll, () => {
    Website_List.forEach((_, index) => {
      DB.execute(CheckAdd, [index + 1], (err, results, fields) => {
        if (err) throw err;
      });
    });
  });
}

function initUser() {
  afterQueryIsNull(CheckUserQueryAll, () => {
    DB.execute(
      AddUser,
      ["admin", "xswzywb2023", "初始账号", 2],
      (err, results, fields) => {
        if (err) throw err;
      }
    );
  });
}

function initAssigning() {
  afterQueryIsNull(QueryAssigning, () => {
    DB.execute(WebsiteQueryAll, (err, results: any[], fields) => {
      if (err) throw err;
      for (let i = 0; i < results.length; i++) {
        DB.execute(
          AddAssigning,
          [results[i].id],
          (err, result: any[], fields) => {
            if (err) throw err;
          }
        );
      }
    });
  });
}
