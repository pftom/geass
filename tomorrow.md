- 将所有的Reducer and Namespace桥接 [√]
- 将所有的Schedule与Redux Saga桥接 [√]
- 完成Store的创建，暴露出用户可以自定义的接口 [x] => 框架自己配置，暂时不允许扩展
- 完成全局Plugin System [√]

## 2018 年 2 月 26 日

- 形成 redux store 可配置

  - app.use()，单个插件 [√]

  - app.useAll()，一堆插件 [√]


- 注意开发和生产环境（体现在Redux Store）
- 开始使用Redux 生态圈增强Geass
  - plain object or immutable
  - redux-immutable
  - reselect
  - normalizr
  - redux-persist
  - redux-router
  - redux-devtools/redux-devtools-extension
  - react-router-redux
  - redux-form
- 全局通用的Fetch或者自己配置HTTP？
- SSR
- Use with Nextjs
- Use in Reactnative，Electron
- 路由
- 一些动画过渡的加入。【Css生态圈】

## 2018 年 3 月 03 日

_createStore 允许提前创建Store，做配置 [√]
 配置react-redux-router

 ## 2018 年 3 月 04 日

 放弃全局共有 props ，因为实用性不是很强，而且很修改起来难度太大，综合考虑：暂时不予采用。

 根据新建test项目测试 geassjs-cli 需要的功能

 npm脚本内部调用npm package 命令

 反复测试迭代改进geassjs.

 ## 2018 年 3 月 05 日

  关于 geass-cli 的一些想法：

- `npm instal -g geass-cli`

- 安装之后，会在全局暴露一个 `geass` 命令

- `geass` 命令有以下选项

  ```javascript
  # create a new project
  geass new my-app
  geass my-app

  # development command
  other command such as  start / test / build , will be use original create-react-app

  # create a new component
  geass g component my-new-component
  geass  my-new-component

  # test a component
  geass g test component-name
  ```



关于 test 的一些想法：写一套测试的教程

关于功能改进：在同一个 component 里面，发起 Action 不需要加前缀

 ## 2018 年 3 月 06 日

 **尽量达到零配置：一切该配置的在内部配置好**
  - eslint
  - prettier

 等，支持StyledComponent



 **CLI 初始化提供创建 四 块文件：**
  - index.js （entry 文件）

  - components （要编写的组件）

  - images （网页 favicon）

  - tests （tests 文件）

    ​


 **geass-scripts:**

  geass-scripts start

  geass-scripts test

  geass-scripts build

  // lint，style guide， code formatter 等

  geass-scripts lint

  // 未来考虑加入 docker 持续集成和持续部署

  geass-scripts deploy



**CLI 命令增加： 一键生成 test 脚本**

geass test component-name