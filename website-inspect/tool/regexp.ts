/*
 * @Author: lzp
 * @Date: 2023-01-23 16:21:56
 * @LastEditors: lzp
 * @LastEditTime: 2023-01-24 10:31:04
 * @Description: 正则表达式
 */
// 校验文章字段的
export const passage_field_regexp = (value: string) => {
  const regexp = /name|content|desc|view|link|cover|view|date/;
  if (!regexp.test(value)) {
    return new Error("你提交的字段不存在！");
  }
  return true;
};

// 校验 文章标签字段
export const passage_tag_field_regexp = (value: string) => {
  const regexp = /title|content|author|desc|date|tag/;
  if (!regexp.test(value)) {
    return new Error("你提交的字段不存在！");
  }
  return true;
};
