/*
 * @Author: lzp
 * @Date: 2023-01-19 10:50:36
 * @LastEditors: lzp
 * @LastEditTime: 2023-01-22 22:00:57
 * @Description: 建表语句
 */

// 创建网站列表
// 里面有学校所有网站信息
export const Create_Website_Table = `
CREATE TABLE IF NOT EXISTS website_inspect.website (
	id INT auto_increment NOT NULL,
	url varchar(100) NOT NULL,
	CONSTRAINT website_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COMMENT='里面有学校所有网站 URL 信息';
`;

// 创建角色表
// 里面放系统角色的名字
export const Create_Role_Table = `
CREATE TABLE IF NOT EXISTS website_inspect.\`role\` (
	id INT auto_increment NOT NULL,
	name varchar(100) NOT NULL,
	CONSTRAINT role_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COMMENT='里面放系统角色的名字';
`;

// 创建状态表
// 里面放置网站的状态标签名称
export const Create_Status_Table = `
CREATE TABLE IF NOT EXISTS website_inspect.status (
	id INT auto_increment NOT NULL,
	name varchar(100) NOT NULL,
	CONSTRAINT status_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COMMENT='里面放置网站的状态标签名称';
`;

// 创建检查表
// 里面放置每日网站的检查状态
export const Create_Check_Table = `
CREATE TABLE IF NOT EXISTS website_inspect.\`check\` (
	id INT NOT NULL,
	status BOOL NOT NULL,
	CONSTRAINT check_PK PRIMARY KEY (id),
	CONSTRAINT check_FK FOREIGN KEY (id) REFERENCES website_inspect.website(id) ON DELETE CASCADE ON UPDATE CASCADE
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COMMENT='里面放置每日网站的检查状态(每日刷新)';
`;

// 创建用户表
// 里面放置系统的用户信息
export const Create_User_Table = `
CREATE TABLE IF NOT EXISTS website_inspect.\`user\` (
	account varchar(100) NOT NULL,
	password varchar(100) NOT NULL,
	name varchar(100) NOT NULL,
	role_id INT NOT NULL,
	CONSTRAINT user_PK PRIMARY KEY (account),
	CONSTRAINT user_FK FOREIGN KEY (role_id) REFERENCES website_inspect.\`role\`(id) ON DELETE CASCADE ON UPDATE CASCADE
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COMMENT='里面放置系统的用户信息'
;
`;

// 创建任务分配表
// 里面放置每个成员对应网站
export const Create_Assigning_Table = `
CREATE TABLE IF NOT EXISTS website_inspect.assigning (
	id INT NOT NULL,
	account varchar(100) NOT NULL,
	CONSTRAINT assigning_PK PRIMARY KEY (id),
	CONSTRAINT assigning_FK FOREIGN KEY (id) REFERENCES website_inspect.website(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT assigning_FK_1 FOREIGN KEY (account) REFERENCES website_inspect.\`user\`(account) ON DELETE CASCADE ON UPDATE CASCADE
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COMMENT='里面放置每个成员对应负责的网站';
`;

// 创建日志表
// 里面是系统所有的网站检查信息
export const Create_Log_Table = `
CREATE TABLE IF NOT EXISTS website_inspect.log (
	\`time\` DATETIME DEFAULT CURRENT_TIMESTAMP  NOT NULL,
	account varchar(100) NOT NULL,
	website_id INT NOT NULL,
	status_id INT NOT NULL,
	message TEXT NULL,
	CONSTRAINT log_PK PRIMARY KEY (\`time\`),
	CONSTRAINT log_FK_2 FOREIGN KEY (account) REFERENCES website_inspect.\`user\`(account) ON DELETE CASCADE ON UPDATE RESTRICT,
	CONSTRAINT log_FK FOREIGN KEY (website_id) REFERENCES website_inspect.website(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT log_FK_1 FOREIGN KEY (status_id) REFERENCES website_inspect.status(id) ON DELETE CASCADE ON UPDATE CASCADE
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COMMENT='里面是系统所有的网站检查信息';
`;

export const CreateTableList = [
  Create_Website_Table,
  Create_Role_Table,
  Create_Status_Table,
  Create_User_Table,
  Create_Assigning_Table,
  Create_Check_Table,
  Create_Log_Table,
];
