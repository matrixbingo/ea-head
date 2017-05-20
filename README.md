# gfs-head

 future-team 框架demo共用头尾。


## 引入 
  ```js
     import {Head,Footer} from '../../src/index.js'
  ```
## 使用  
  * 首先保证html中存在head,footer两部分以供插入。如下  
  
  ```html
     <header id="head"></header>
     <div id="root" style="padding: 10px;margin-bottom:500px">
         这里是内容
     </div>
     <footer id="footer"></footer>
  ```
  * 头部支持配置，传入一个title数组即可。如下:  
  
    ```js
       let titles = [
           {title: '博客', href: 'http://uedfamily.com/'},
           {title: '文档', href: 'http://xxx.com'},
           {title: '关于我们', href: 'http://uedfamily.com/about/'},
           {title: '更多组件', href: 'http://uedfamily.com/framework/'}
       ];
       ReactDom.render(
           <Head titles = {titles}></Head>,
           document.getElementById('head')
       );
    ```
  * 底部信息支持传参和children两种形式,两者都存在的情况下，children形式优先。  
    
    ```js
       ReactDom.render(
           <Footer content='adasdas'>
              sddsdssdsd
           </Footer>,
           document.getElementById('footer')
       );
    ```

## version

```
	* 0.0.5 修复必要的css
	* 0.0.2 删除不必要的reactDom
	* 0.0.1 初始版本
```


