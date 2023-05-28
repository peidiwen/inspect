"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAll = exports.Add = void 0;
// 添加网站角色
exports.Add = `
INSERT INTO website_inspect.\`role\` (name)
	VALUES (?);
`;
// 查询网站角色
exports.QueryAll = `
SELECT * FROM website_inspect.\`role\`;
`;
