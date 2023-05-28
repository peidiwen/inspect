export const Add = `
INSERT INTO website_inspect.\`user\` (account,password,name,role_id)
	VALUES (?,?,?,?);
`;

export const QueryAll = `SELECT account,password ,role_id,website_inspect.\`user\`.name,website_inspect.\`role\`.name as role_name  FROM website_inspect.\`user\`
INNER JOIN website_inspect.\`role\` ON
website_inspect.\`user\`.role_id = website_inspect.\`role\`.id ;`;

export const Delete = `DELETE FROM website_inspect.\`user\`
WHERE account=?;`;

export const Update = `
UPDATE website_inspect.\`user\`
	SET account=?,password=?,name=?,role_id=?
	WHERE account=?;
`;

export const QueryStaff = `
SELECT * FROM website_inspect.\`user\` 
WHERE role_id = 1 ;
`;

export const QueryPWDUser = `
SELECT * FROM website_inspect.\`user\` 
WHERE website_inspect.\`user\`.account = ?  and website_inspect.\`user\`.role_id=1 ;
`;
export const QueryPWDAdmin = `
SELECT * FROM website_inspect.\`user\` 
WHERE website_inspect.\`user\`.account = ? and website_inspect.\`user\`.role_id=2;
`;
