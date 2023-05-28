"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryPWDAdmin = exports.QueryPWDUser = exports.QueryStaff = exports.Update = exports.Delete = exports.QueryAll = exports.Add = void 0;
exports.Add = `
INSERT INTO website_inspect.\`user\` (account,password,name,role_id)
	VALUES (?,?,?,?);
`;
exports.QueryAll = `SELECT account,password ,role_id,website_inspect.\`user\`.name,website_inspect.\`role\`.name as role_name  FROM website_inspect.\`user\`
INNER JOIN website_inspect.\`role\` ON
website_inspect.\`user\`.role_id = website_inspect.\`role\`.id ;`;
exports.Delete = `DELETE FROM website_inspect.\`user\`
WHERE account=?;`;
exports.Update = `
UPDATE website_inspect.\`user\`
	SET account=?,password=?,name=?,role_id=?
	WHERE account=?;
`;
exports.QueryStaff = `
SELECT * FROM website_inspect.\`user\` 
WHERE role_id = 1 ;
`;
exports.QueryPWDUser = `
SELECT * FROM website_inspect.\`user\` 
WHERE website_inspect.\`user\`.account = ?  and website_inspect.\`user\`.role_id=1 ;
`;
exports.QueryPWDAdmin = `
SELECT * FROM website_inspect.\`user\` 
WHERE website_inspect.\`user\`.account = ? and website_inspect.\`user\`.role_id=2;
`;
