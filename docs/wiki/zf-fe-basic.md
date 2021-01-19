# 珠峰前端基础

## JS基础知识

### 栈

三种应用场景

- 数据结构中的栈

- 代码的运行方式

  表示函数的一层层调用

  ```js
  function one() {
      function two() {
          function three() {
              debugger;
          }
          three();
      }
      two();
  }
  one();
  ```

  ![callbackstack](https://wsk-mweb.oss-cn-hangzhou.aliyuncs.com/ipic/2021-01-18-170123.png)

- 内存区域



### 执行上下文生命周期

执行上下文是一个对象，里面有一个属性 Variable Object（变量对象）、this、 scopeChain

![image-20210119011500365](/Users/wuxiao/Library/Application Support/typora-user-images/image-20210119011500365.png)

生命周期有两个阶段

- 一个新的执行上下文的生命周期有两个阶段
  - 创建阶段
    - 创建变量对象
    - 确定作用域链
    - 确定`this`指向
  - 执行阶段
    - 变量赋值
    - 函数赋值
    - 代码执行

变量对象