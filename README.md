# 链小信——区块链可信农业融资与经营交易平台

## 项目简介
本项目产品演示：
[产品演示视频](https://clipchamp.com/watch/qfUBvSJJ4Vv)
<br/>
本项目产品介绍：
[产品介绍视频](https://clipchamp.com/watch/ht3rtAdtpcn)
<br/>
链小信是一个基于可信区块链的农业融资与经营交易平台，平台由信用评估系统与电子商务平台组成。
<br/>
[![qfLRzQ.png](https://s1.ax1x.com/2022/04/01/qfLRzQ.png)](https://imgtu.com/i/qfLRzQ)
<br/>
信用评估系统为平台的核心，主要用于收集信用数据，形成初步的贷前评估并将所有材料交由投资方进行复审，与此同时在农业生产过程中不断收集信用数据，用于向投资方反馈投资对象的生产经营情况以及为日后可能的新融资积累信用数据；电子商务平台在整个平台中起到了协助农民售卖农副产品，为农民提供农用物资供应的辅助作用，同时依靠生产过程中的信用数据收集，向消费者出具农副产品质量溯源报告。
<br/>
本平台主要解决的痛点是农村贷款放贷难的问题，因而平台设计了两种贷款形式，分别为助农贷和振兴贷。
<br/>
助农贷主要用于扶农助农，提供小额贷款帮助小型农户缓解家庭困难；振兴贷主要用于支持农村土地使用权流转，扶持农业经理人或乡镇企业，促进乡村振兴。
<br/>
本平台在进行产品设计时参考了当前增强农村信贷支持的各种举措，如土地承包经营权质押贷款、房屋所有权质押贷款、预期收益权质押贷款等各种举措，参考《民法典》及相关法律解释与法律规定，在确保合规合法的条件下形成两种主要产品，两种产品的具体贷款形式可根据银行等投资方自身的产品设计进行调整。
<br/>
本平台的实际作用在于收集信用数据，在为农业贷款提供各种信贷支持的同时，降低投资方贷款的信用风险，从而打破“资方不愿贷，农户不能贷”的局面。
<br/>

## 仓库说明
本仓库库所有代码均为项目的PC端前端代码。
<br/>
<br/>
项目还有以下仓库地址：
<br/>
[后端代码仓库](https://github.com/Ruikang-001/back-end-1)
<br/>

## 技术栈
前端：Vue+Element-ui
<br/> 
Java后端：SpringBoot + Thymeleaf + WebSocket + Spring Security + SpringData-Jpa + MySql
<br/> 

## API参考
### 商品信息接口
#### 接口调用请求说明
```
http请求方式： GET
authorizer/1/goods/1
POST数据格式：JSON
```
#### 参数说明
参数|说明
-|:-:
id|商品ID
name|商品名称
image|商品缩略图
code|商品编码
created_at|创建时间
summary|商品介绍

### 导航banners接口
#### 接口调用请求说明
```
http请求方式： GET
authorizer/1/goods/banners
```
#### 参数说明
参数|说明
-|:-:
banner|商品banner链接

### 商品列表接口
#### 接口调用请求说明
```
http请求方式： GET
authorizer/1/scenic-spot/1/nearby
POST数据格式：JSON
```
#### 参数说明
参数|说明
-|:-:
id|商品ID
name|商品名称
image|商品缩略图
code|商品编码
created_at|创建时间
summary|商品介绍
total|子景点数量
size|每页显示数量
<br/>

## 作者列表
蔡子瑞@Feudalman
<br/>
刘睿康@Ruikang-001
<br/>
洪铭锋@HongMingfeng
<br/>
与作者交流请加项目负责人QQ：
<br/>

## 开源协议
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">知识共享署名-相同方式共享 4.0 国际许可协议</a>进行许可。
