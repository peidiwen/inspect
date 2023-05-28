"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAll = exports.Add = void 0;
// 添加站点
exports.Add = `
INSERT INTO website_inspect.website (url)
	VALUES (?);
`;
// 查询站点
exports.QueryAll = `
SELECT * FROM website_inspect.website;
`;
