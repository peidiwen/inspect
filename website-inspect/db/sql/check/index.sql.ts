// 添加站点检查表
export const Add = `
INSERT INTO website_inspect.\`check\` (id,status)
	VALUES (?,0);
`;

// 查询站点检查表
export const QueryAll = `
SELECT * FROM website_inspect.\`check\`;
`;

// 更新站点表
export const Update = `
UPDATE website_inspect.\`check\`
	SET status=1
	WHERE id=?;
`;
