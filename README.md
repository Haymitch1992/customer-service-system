# 基于研究院展示平台屏幕显示
## 描述

- 处理后的视频流能后上传
- 非视频流数据，状态数据能够兼容Mqtt协议
- 能够自动连接至Mqtt服务器
- 能够实现与平台的接入验证协议

利用研究院一块大屏，轮播模拟的站台情况，触发异常时进行显示。检测内容包括、站台热力图、逃票检测、特殊人群检测、人群异常检测。，5s后自动弹回。

模拟站台环境包括设备安装高度及区域，布置假定闸机及座椅模拟异常流动情况，完车异常状态模拟，并将模拟的状态信息发送至屏幕及终端PAD上进行仿真。。

检测准确率：依据个检测算法而定
视频传输：延时不低于2s



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
"# customer-service-system" 
