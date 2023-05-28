// 添加站点
export const Add = `
INSERT INTO website_inspect.website (url)
	VALUES (?);
`;

// 查询站点
export const QueryAll = `
SELECT * FROM website_inspect.website;
`;
