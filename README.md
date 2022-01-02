# 前端项目模板

## 启动

```
npm run server
or
npm run build
```

## 目录

```
    |-- .gitignore
    |-- .npmignore
    |-- .prettierrc
    |-- jsconfig.json
    |-- package-lock.json
    |-- package.json
    |-- packez.config.js
    |-- README.md
    |-- tsconfig.json
    |-- dist//子目录省略
    |-- public//子目录省略
    |-- src
        |-- App.js
        |-- index.html
        |-- index.js
        |-- version.js
        |-- assets
        |   |-- common.scss//全局样式
        |   |-- dsky-antd.scss//修改antd样式
        |   |-- normalize.css
        |   |-- styles.scss
        |   |-- _var.scss//定义变量
        |-- components
        |   |-- request
        |       |-- index.js//请求封装
        |-- config
        |   |-- index.js
        |-- pages
        |   |-- comp-pages//antd组件封装
        //路由组件
        |   |-- Exist
        |   |   |-- exist.scss
        |   |   |-- index.jsx
        |   |-- Login
        |   |   |-- index.jsx
        |   |-- Resume
        |       |-- index.jsx
        |       |-- resume.scss
        //路由配置
        |-- router
            |-- antdComp.js
            |-- index.js
```
## 路由
|路由|页面名称|参数|
|----|----|----|
|/exist|简历是否存在|isExist|
|/resume|投递简历|无|
|/login|授权跳转的中间页面|无|
## 注意事项
* exist页面是用来应对特殊情况的,比如使用手机或者已经拥有简历
* 用户填写的内容如果没有提交会被我存放到sessionStorage中,避免用户在点击提交后发生token过期跳转回来之后需要重新填写的情况，但是没有把pdf文件放到缓存中(考虑到文件的大小)
* 在刚进入resume页面时，如果用户没有授权会跳转到授权页面(授权页应先跳转至后端提供的重定向地址，该重定向地址再跳转至授权页)，授权成功后会跳转到login页面，并带上code(在地址上)，我们拿这个code向后端换取token，并跳回resume页面，部署后需要将跳转的页面进行修改(src/pages/Resume)
* 部署后需要修改baseUrl,在src/components/request/index.js:4处修改
