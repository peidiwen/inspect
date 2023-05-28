"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create_Event_UpdateCheckTable = void 0;
// Mysql 事件
// 每天凌晨自动更新检查表状态
exports.Create_Event_UpdateCheckTable = `
CREATE EVENT IF NOT EXISTS update_check
ON SCHEDULE EVERY 1 DAY STARTS DATE_ADD(DATE_ADD(CURDATE(), INTERVAL 1 DAY), INTERVAL 1 HOUR)
ON COMPLETION PRESERVE
COMMENT '更新检查网站表网站状态定时任务'
DO UPDATE \`check\`  SET status=0;
`;
