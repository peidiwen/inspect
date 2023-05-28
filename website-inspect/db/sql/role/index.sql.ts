// 添加网站角色
export const Add = `
INSERT INTO website_inspect.\`role\` (name)
	VALUES (?);
`;

// 查询网站角色
export const QueryAll = `
SELECT * FROM website_inspect.\`role\`;
`;
