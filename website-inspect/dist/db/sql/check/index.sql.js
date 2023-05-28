"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Update = exports.QueryAll = exports.Add = void 0;
// 添加站点检查表
exports.Add = `
INSERT INTO website_inspect.\`check\` (id,status)
	VALUES (?,0);
`;
// 查询站点检查表
exports.QueryAll = `
SELECT * FROM website_inspect.\`check\`;
`;
// 更新站点表
exports.Update = `
UPDATE website_inspect.\`check\`
	SET status=1
	WHERE id=?;
`;
