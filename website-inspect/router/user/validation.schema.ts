/*
 * @Author: lzp
 * @Date: 2023-01-22 21:15:19
 * @LastEditors: lzp
 * @LastEditTime: 2023-01-22 21:27:15
 * @Description: 标签的校验
 */
import type { Schema } from "express-validator";

// 原子化
const Name_Validator: Schema = {
  name: {
    errorMessage: "用户名称不可为空哦！",
    notEmpty: true,
  },
};
const Account_Validator: Schema = {
  account: {
    errorMessage: "账户不可为空哦！",
    notEmpty: true,
  },
};
const Old_Account_Validator: Schema = {
  target: {
    errorMessage: "账户不可为空哦！",
    notEmpty: true,
  },
};
const Password_Validator: Schema = {
  password: {
    errorMessage: "密码不可为空哦！",
    notEmpty: true,
  },
};
const Role_Id_Validator: Schema = {
  role_id: {
    errorMessage: "角色 id 不可为空哦！",
    notEmpty: true,
    isInt: true,
  },
};

export const AddUserValidation: Schema = {
  ...Name_Validator,
  ...Account_Validator,
  ...Password_Validator,
  ...Role_Id_Validator,
};
export const DeleteUserValidation: Schema = {
  ...Account_Validator,
};

export const FixUserValidation: Schema = {
  ...Name_Validator,
  ...Account_Validator,
  ...Password_Validator,
  ...Role_Id_Validator,
  ...Old_Account_Validator,
};

export const LoginValidation: Schema = {
  ...Account_Validator,
  ...Password_Validator,
};
