import DB from "../db/index";
import { QueryStaff } from "../db/sql/user/index.sql";
import { QueryAll } from "../db/sql/website/index.sql";
import { Update } from "../db/sql/assigning/index.sql";
import _ from "lodash";
export async function taskAssigning() {
  let website: any = [];
  let user: any = [];
  const [rows] = await DB.promise().execute(QueryAll);
  website = rows;

  const [userList] = await DB.promise().execute(QueryStaff);
  user = userList;

  let baseNum = ~~(website.length / user.length);

  let residue = website.length % user.length;
  if (baseNum != 0) {
    website = _.shuffle(website);
    let webIndex = 0;
    for (let i = 0; i < user.length; i++) {
      let nowUserAccount = user[i].account;
      for (let j = 0; j < baseNum; j++) {
        await DB.promise().execute(Update, [
          nowUserAccount,
          website[webIndex + j].id,
        ]);
      }
      webIndex = webIndex + baseNum;
    }
    // residue
    if (residue != 0) {
      const webLen = website.length;
      for (let i = 0; i < residue; i++) {
        const unlucky_account = user[_.random(0, user.length - 1)].account;
        await DB.promise().execute(Update, [
          unlucky_account,
          website[webLen - 1 - i].id,
        ]);
      }
    }
  }
}
