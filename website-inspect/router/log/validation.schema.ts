import type { Schema } from "express-validator";

// 原子化
const Web_Id_Validator: Schema = {
  web_id: {
    errorMessage: "web_id 不可空",
    notEmpty: true,
  },
};
const Status_Id_Validator: Schema = {
  status_id: {
    errorMessage: "status_id 不可为空哦！",
    notEmpty: true,
  },
};
const Message_Validator: Schema = {
  message: {
    errorMessage: "Message 不可为空哦！",
  },
};
const Account_Validator: Schema = {
  account: {
    errorMessage: "Account 不可为空哦！",
  },
};

export const AddValidation: Schema = {
  ...Message_Validator,
  ...Status_Id_Validator,
  ...Web_Id_Validator,
  ...Account_Validator,
};
