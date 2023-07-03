/**
 * 智能导入输入示例
 */
export const AUTO_INPUT_EXAMPLE = "id，用户名，创建时间，更新时间，is_deleted";

/**
 * JSON 输入示例
 */
export const JSON_INPUT_EXAMPLE = {
    "dbName": "shut_db",
    "tableName": "user",
    "tableComment": "用户表",
    "mockNum": 10,
    "fieldList": [
        {
            "fieldName": "id",
            "fieldType": "bigint",
            "defaultValue": null,
            "notNull": true,
            "comment": "id",
            "primaryKey": true,
            "autoIncrement": true,
            "mockType": "递增",
            "mockParams": 0,
            "onUpdate": null
        },
        {
            "fieldName": "username",
            "fieldType": "varchar(256)",
            "defaultValue": null,
            "notNull": true,
            "comment": "用户名",
            "primaryKey": false,
            "autoIncrement": false,
            "mockType": "随机",
            "mockParams": "人名",
            "onUpdate": null
        },
        {
            "fieldName": "create_time",
            "fieldType": "datetime",
            "defaultValue": "CURRENT_TIMESTAMP",
            "notNull": true,
            "comment": "创建时间",
            "primaryKey": false,
            "autoIncrement": false,
            "mockType": "随机",
            "mockParams": "日期",
            "onUpdate": null
        },
        {
            "fieldName": "update_time",
            "fieldType": "datetime",
            "defaultValue": "CURRENT_TIMESTAMP",
            "notNull": true,
            "comment": "更新时间",
            "primaryKey": false,
            "autoIncrement": false,
            "mockType": "随机",
            "mockParams": "日期",
            "onUpdate": "CURRENT_TIMESTAMP"
        },
        {
            "fieldName": "is_deleted",
            "fieldType": "tinyint",
            "defaultValue": "0",
            "notNull": true,
            "comment": "是否删除(0-未删, 1-已删)",
            "primaryKey": false,
            "autoIncrement": false,
            "mockType": "固定",
            "mockParams": "0",
            "onUpdate": null
        }
    ],
};

/**
 * SQL 输入示例
 */
export const SQL_INPUT_EXAMPLE =
    '-- 用户表\n' +
    'create table if not exists user\n' +
    '(\n' +
    "id bigint not null auto_increment comment '主键' primary key,\n" +
    "username varchar(256) not null comment '用户名',\n" +
    "create_time datetime default CURRENT_TIMESTAMP not null comment '创建时间',\n" +
    "update_time datetime default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment '更新时间',\n" +
    "is_deleted tinyint default 0 not null comment '是否删除(0-未删, 1-已删)'\n" +
    ") comment '用户表';";
