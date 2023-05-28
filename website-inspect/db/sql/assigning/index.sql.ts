// 初始化
export const Add = `INSERT INTO website_inspect.assigning (id,account)
VALUES (?,'admin');`;
// 更新
export const Update = `UPDATE website_inspect.assigning
SET account= ?
WHERE id=?;`;
// 查询
export const Query = `SELECT website_inspect.assigning.id as web_id ,website_inspect.website.url,website_inspect.\`user\`.account as user_id,website_inspect.\`user\`.name  FROM  website_inspect.assigning
INNER JOIN website_inspect.website ON
website_inspect.assigning.id = website_inspect.website.id 
INNER JOIN website_inspect.\`user\`  ON
website_inspect.assigning.account  = website_inspect.\`user\`.account  
;`;

// 按账号查询
export const QueryByAccount = `
SELECT website_inspect.assigning.id ,website_inspect.assigning.account,website_inspect.website.url,website_inspect.\`user\`.name , website_inspect.\`check\`.status  FROM website_inspect.assigning
INNER JOIN website_inspect.website 
ON website_inspect.assigning .id = website_inspect.website.id
INNER JOIN website_inspect.\`user\` 
ON website_inspect.assigning.account = website_inspect.\`user\`.account
INNER JOIN website_inspect.\`check\` 
ON website_inspect.\`check\`.id  = website_inspect.assigning.id    
WHERE website_inspect.assigning.account = ? ;
`;
