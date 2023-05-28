// 插入之前查询
// 场景：表空才插入
import DB from "../db/index";
export default function afterQueryIsNull(querySQL: string, callBack: Function) {
  DB.execute(querySQL, (err, results: any[], fields) => {
    if (err) throw err;
    if (results.length === 0) {
      callBack();
    }
  });
}
