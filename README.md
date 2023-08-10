## 功能大全

### 用户前台

- 可视化建表
- 快捷导入建表
  - 智能导入
  - 导入表
  - 导入配置
  - 导入建表 SQL
  - 导入 Excel
- 一键生成
  - SQL 建表、插入数据语句
  - 模拟数据
  - JSON 数据
  - Java 代码
  - 前端代码
- 多种模拟数据生成规则
  - 固定值
  - 随机值
  - 正则表达式
  - 递增
  - 定制词库
- 词库共享
  - 创建词库
  - 词库继承
  - 一键创建字典表
  - 根据词库生成模拟数据（可以用来决定午饭吃什么哈哈）
- 表信息共享
  - 创建表信息
  - 一键复制建表语句
  - 一键导入表
- 字段共享
  - 创建字段
  - 一键复制创建字段语句
  - 一键导入字段
- 举报



### 管理后台

- 用户管理
- 词库管理
- 表信息管理
- 字段信息管理
- 举报管理



## 技术栈

### 前端

主要技术：

- React 18
- Umi 4.x
- Ant Design 4.x 组件库
- Ant Design Pro Components 高级组件
- TypeScript 类型控制
- Eslint 代码规范控制
- Prettier 美化代码

依赖库：

- monaco-editor 代码编辑器
- copy-to-clipboard 剪切板复制



### 后端

主要技术：

- Spring Boot 2.7.x
- MyBatis Plus 3.5.x
- MySQL 8.x
- Spring AOP

依赖库：

- FreeMarker：模板引擎
- Druid：SQL 解析
- datafaker：模拟数据
- Apache Commons Lang3：工具库
- Hutool：工具库
- Gson：Json 解析
- Easy Excel：Excel 导入导出
- Knife4j：接口文档生成



## 快速启动

### 后端

1. 运行 sql 目录下的 create_table.sql 建表
2. 修改 application.yml 中的数据库地址为自己的
3. 安装完 Maven 依赖后，直接运行即可
4. 已经编写好了 Dockerfile，支持 Docker 镜像部署。



### 前端

安装依赖：

```bash
npm run install
```

运行：

```bash
npm run dev
```

打包：

```bash
npm run build
```

## 致谢

部分词库来源：[https://github.com/fighting41love/funNLP](https://github.com/fighting41love/funNLP)

示例表信息来源：[https://open.yesapi.cn/list1.html](https://open.yesapi.cn/list1.html)

