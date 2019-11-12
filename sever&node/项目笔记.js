// 所有的工具包

// react & react-dom & prop-types: react基础包
// react-router-dom: 路由
// antd: UI组件库
// redux & react-redux & redux-thunk & redux-devtools-extension: 状态管理
// axios: ajax与后台通信
// dayjs & date-fns & moment: 日期格式化处理
// @babel/plugin-proposal-decorators: 装饰器(高阶组件)
// echarts & echarts-for-react: 图表库
// react-draft-wysiwyg: 富文本编辑器
// nprogress: 请求进度提示
// react-i18next & i18next & i18next-xhr-backend & i18next-browser-languagedetector: 应用国际化
// jsonp: jsonp请求
// store: 浏览器端数据存储
// screenfull: 界面全局
// less & less-loader: less编译
// customize-cra: 扩展react项目配置
// babel-plugin-import: 按需引入打包(UI组件库)

// 重要功能技术点

// 1). react组件化编程
// 2). 项目多路由配置: 根据匹配动态生成路由
// 3). 使用antd快速搭建整体界面: 布局/表单/表格/菜单/对话框/...
// 4). 利用antd中的Form进行声明式或自定义校验
// 5). 使用redux相关库管理组件共享状态: user/categorys/roles/headerTitle/...
// 6). axios库发ajax请求与后台通信, axios二次封装
// 7). 使用jsonp插件发jsonp请求与后台交互
// 8). 使用nprogress插件进行请求进度提示
// 9). 利用axios拦截器实现请求的token校验
// 10). 自定义高阶组件进行登陆检查
// 11). 使用最新的装饰器语法简化高阶组件的使用: connect() / withRoute / Form.create() / withCheckLogin
// 12). 利用react-i18next实现项目的国际化
// 13). 利用screenfull实现项目界面的全屏显示
// 14). 利用react-draft-wysiwyg实现富文本编辑器管理商品详情
// 15). 实现列表数据的纯前台分页和基于后台的分页(带搜索)
// 16). 利用babel-plugin-import实现antd的按需引入打包

// npm install 在安装 npm 包时，有两种命令参数可以把它们的信息写入 package.json 文件，

// 一个是npm install--save   另一个是 npm install –save-dev，

// --save 会把依赖包名称添加到 package.json 文件 dependencies 键下

// --save-dev 则添加到 package.json 文件 devDependencies 键下

// 区别是，npm文档说明 dependencies是运行时依赖，devDependencies是开发时的依赖。

// 即 devDependencies 下列出的模块，是开发时用的。

// dependencies 下的模块，则是我们发布后还需要依赖的模块，像jQuery库或者Angular框架类，在开发完后后肯定还要依赖它们，否则就运行不了。

/*

1. 开发环境与生产环境

    1. 开发环境运行
        命令: npm start
        做了什么:
            1). 在内存中打包, 生成内存中的打包文件(html/js/css/img)
            2). 启动服务器, 运行内存中的打包文件 ===> 在浏览器中通过虚拟地址来访问得到相应的资源 
    2. 生产环境打包并运行
        命令:
            npm run build
            serve build
        使用了什么
            1). 在内存中打包, 生成内存中的打包文件(html/js/css/img)
            2). 将内存中的打包文件保存到本地
            3). 加载打包文件到内存
            4). 启动服务器运行 ===> 在浏览器中通过虚拟地址来访问得到相应的资源 

2. 几个重要概念

    1). 实例对象与函数对象
    2). 属性与方法
    3). 方法与函数

3. 项目开发准备

    1). 描述项目
    2). 技术选型 
    3). API接口/接口文档/测试接口

4. 启动项目开发

    1). 使用react脚手架创建项目
    2). 开发环境运行: npm start
    3). 生产环境打包运行: npm run build   serve build

5. git管理项目

    1). 创建远程仓库
    2). 创建本地仓库
        配置.gitignore
        git init
        git add .
        git commit -m "init"
    3). 将本地仓库推送到远程仓库
        git remote add origin url
        git push origin master
    4). 在本地创建dev分支, 并推送到远程
        git checkout -b dev
        git push origin dev
    5). 如果本地有修改
        git add .
        git commit -m "xxx"
        git push origin dev
    6). 新的同事: 克隆仓库
        git clone url
        git checkout -b dev origin/dev
        git push origin dev
    7). 如果远程修改了
        git pull origin dev
    8). 如何得到后面新增的远程分支
        git pull
        git checkout -b dev origin/xxx

6. 创建项目的基本结构

    api: ajax请求的模块
    components: 非路由组件
    pages: 路由组件
    App.js: 应用的根组件
    index.js: 入口js

7 引入antd

    下载antd的包
    按需打包: 只打包import引入组件的js/css
        下载工具包
        config-overrides.js
        package.json
    自定义主题
        下载工具包
        config-overrides.js
    使用antd的组件
        根据antd的文档编写

8. 引入路由

    下载包: react-router-dom
    拆分应用路由:
        Login: 登陆
        Admin: 后台管理界面
    注册路由:
        <BrowserRouter> / <HashRouter>
        <Switch>
        <Route path='' component={}/>
    路由匹配
        逐级路由匹配: 先匹配上一个1级路由==> 进入这个路由的组件==> 匹配其内部1个子路由
        只要匹配上一个, 后面的不看了
        默认是模糊(只匹配前面部分), 通过exact属性指定完全匹配

9. Login的静态组件

    1). 自定义了一部分样式布局
    2). 使用antd的组件实现登陆表单界面
      Form  / Form.Item
      Input
      Icon
      Button

10. 高阶函数与高阶组件

    1). 高阶函数
        定义: 接收的参数是函数或者返回值是函数
        常见的: 数组遍历相关的方法 / 定时器 / bind() / Promise / Form.create()(组件)
        作用: 实现一个更加强大, 动态的功能
    2). 高阶组件: 
        本质是一个高阶函数
        函数接收一个组件, 返回一个新的组件
        常见的高阶组件:
            Form.create()返回的就是一个高阶组件 :  Form.create()(组件) 返回一个新的组件
            connect()返回的就是一个高阶组件: connect()(UI组件)返回容器组件
    
    3). 高阶组件与高阶函数的关系
        高阶组件是特别的高阶函数
        接收一个组件函数, 返回是一个新的组件函数

11. 收集表单数据和表单的前台验证

    1). form对象
        如何让包含<Form>的组件得到form对象?  WrapLoginForm = Form.create()(LoginForm)
        WrapLoginForm是LoginForm的父组件, 它给LoginForm传入form属性
        用到了高阶函数和高阶组件的技术
    
    2). 操作表单数据
        form.getFieldDecorator('标识名称', {initialValue: 初始值, rules: []})(<Input/>)包装表单项标签
        form.getFieldsValue(): 得到包含所有输入数据的对象
        form.getFieldValue(id): 根据标识得到对应字段输入的数据
        form.resetFields(['password']): 重置输入值
     
    3). 前台表单验证
        a. 声明式实时表单验证:
            form.getFieldDecorator('标识名称', {rules: [{min: 4, message: '错误提示信息'}]})(<Input/>)
        b. 自定义表单验证
            form.getFieldDecorator('标识名称', {rules: [{validator: this.validatePwd}]})(<Input/>)
            validatePwd = (rule, value, callback) => {
              if(有问题) callback('错误提示信息') else callack()
            } 
        c. 点击登陆时统一验证
            form.validateFields((error, values) => {
              if(!error) {通过了验证, 发送ajax请求}
            })

*/



// connect(redux中的状态数据,redux中action对象)(组件)
// redux中的状态数据,通过(state)=>({reducers的函数名字:state.属性名字})
// redux中action对象,{action-creators中的方法}
// action-creators中的方法:的返回值就是action对象
// redux中的状态数据及action的方法直接给了后面传入的组件的props属性了
// 组件中的props中必然可以直接使用状态数据及action的方法(可以进行提交,修改数据)
// @connect(redux中的状态数据,redux中action对象)---装饰器的用法
