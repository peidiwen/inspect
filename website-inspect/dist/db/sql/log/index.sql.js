"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryNoLog = exports.queryPAge = exports.Add = void 0;
exports.Add = `
INSERT INTO website_inspect.log (account,website_id,status_id,message)
	VALUES (?,?,?,?);
`;
exports.queryPAge = `
SELECT website_inspect.log.\`time\` ,website_inspect.\`user\`.name  ,website_inspect.website.url ,website_inspect.status.name as statusName ,website_inspect.log.message  FROM website_inspect.log
INNER JOIN website_inspect.website 
ON website_inspect.log.website_id= website_inspect.website.id
INNER JOIN website_inspect.\`user\` 
ON website_inspect.log.account  = website_inspect.\`user\`.account
INNER JOIN website_inspect.status 
ON website_inspect.log.status_id =website_inspect.status.id Limit ?,?
`;
exports.queryNoLog = `select * from website_inspect.\`noLogs\` limit ?,?;`;
