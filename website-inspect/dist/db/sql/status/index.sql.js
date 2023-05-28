"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAll = exports.Add = void 0;
// 添加网站状态
exports.Add = `
INSERT INTO website_inspect.status (name)
	VALUES (?);
`;
// 查询网站状态
exports.QueryAll = `
SELECT * FROM website_inspect.status;
`;
