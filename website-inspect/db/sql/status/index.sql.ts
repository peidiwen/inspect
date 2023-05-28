// 添加网站状态
export const Add = `
INSERT INTO website_inspect.status (name)
	VALUES (?);
`;

// 查询网站状态
export const QueryAll = `
SELECT * FROM website_inspect.status;
`;
