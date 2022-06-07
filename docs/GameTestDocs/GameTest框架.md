# GameTest入门

## 0.注意事项

- [GameTest英文官方文档](https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/)

- 本文档不是官方中文文档，而是我个人([Zxgaer](zxgaer.github.io))动手写的GameTest非官方中文文档，此文档目前并不完善，如果您想看完整的文档，请移步英文官网

- 要启用GameTest 框架，您必须在世界设置中激活“启用 GameTest Framework”或“GameTest Framework”，并且必须使用 Minecraft 1.16.210.60 beta 或更高版本。

- 有时，GameTest框架也被叫做Script API（脚本引擎/接口）

- 如有任何不妥的地方，欢迎提Issues

## 1.什么是GameTest框架

GameTest框架，是由微软对于基岩版Minecraft Addon作者开发的用于测试的框架。它可以用来加载脚本(Script)，目前，GameTest已拥有比先前[2018版Script API](https://www.minecraft.net/en-us/article/scripting-api-now-public-beta)更加强大的功能，将来，它还会添加更多的模块，使开发者们无穷的想象力变为现实，让基岩版的开发社区注入更多活力。当然，如果您有精力的话，也可以帮助作者编写文档。

## 2.开始之前

如果您是第一次了解GameTest，您可能会有一个疑问

> 我只是想做一些基本的功能，如雪球菜单，抬头回城等，这些基岩版的命令系统完全可以胜任，那还要GameTest干什么

对于这个疑问，我先抛出一个问题：

> 如果您要在聊天栏里输出玩家坐标，您会怎么做

如果用命令方块来做的话，您不仅需要去学习二分法，计分板等一系列知识，还会使游戏变得极为卡顿，如果该问题放在GameTest里，一般会这样做

```javascript
const pLoc = player.location
runCommand(`say ${pLoc.x} ${pLoc.y} ${pLoc.z}`)
```

**就是这么简单**

如果问题再变复杂点呢？条件判断，攻击检测，现实时间，服务器机器人，乃至全套的反外挂措施？这些用命令是难以解决的，而GameTest会让问题变得非常简单，GameTest框架远比命令系统强大得多，如果官方继续积极地开发下去，极有可能会使基岩版开发社区空前繁荣，这些都是命令系统无法做到的。当然，肯定还有人会问

> GameTest框架能超越Java版的模组吗

这个我无法回答，因为Java版已经形成了一个模组生态，并且拥有强大的社区，基岩版短时间内想要赶超Java版是不可能的，不过都是Minecraft玩家，为何要为了这个吵来吵去呢

学习代码开发最重要的是兴趣，如果您对此真的十分感兴趣，欢迎您来学习并开发更多的Addon

## 3.如何创建一个启用GameTest框架的Addon

### I.行为包格式

首先，创建一个文件夹，目录结构如下所示

```
/HelloWorld
    > manifest.json
    > pack_icon.png
    /scripts
        > scriptTest.js
```

在manifest.json里，输入如下内容

```json
{
    "format_version": 2,
    "header": {
        "description": "Test",
        "name": "GameTestFrameworkTest",
        "uuid": "e5962e77-e171-4eb3-92e7-ed9737991033",
        "version": [0,0,1],
        "min_engine_version": [1,18,0]
    },
    "modules": [
        {
            "description": "Test",
            "type": "script",
            "language":"javascript",
            "uuid": "fb30a052-447e-4979-9004-fb4b0365fd17",
            "version": [0,0,1],
            "script": "scripts/scriptTest.js"
        }
    ],
    "dependencies": [
        {
            "uuid": "b26a4d4c-afdf-4690-88f8-931846312678",
            "version": [0, 1, 0]
        },
        {
            "uuid": "6f4b6893-1bb6-42fd-b458-7fa3d0c89616",
            "version": [0, 1, 0]
        },
        {
            "uuid": "2bd50a27-ab5f-4f40-a596-3641627c635e",
            "version": [0, 1, 0]
        },
        {
            "uuid": "777b1798-13a6-401c-9cba-0cf17e31a81b",
            "version": [ 0, 1, 0 ]
        },
        {
            "uuid": "53d7f2bf-bf9c-49c4-ad1f-7c803d947920",
            "version": [ 0, 1, 0 ]
        }
    ]
}
```

对于版本号大于1.16.210且小于1.19的版本，应将modules内的内容改为如下：

```json
    "modules": [
        {
            "description": "Test",
            "type": "javascript",
            "uuid": "fb30a052-447e-4979-9004-fb4b0365fd17",
            "version": [0,0,1],
            "entry": "scripts/scriptTest.js"
        }
    ],
```

### II.分析modules部分：

`"type": "script"`/`"type": "javascript"`

script/javascript是该Addon是启用GameTest框架的标志

`"language":"javascript"`

顾名思义，指的是编程语言，虽然现在只支持javascript一个可选项，但也说明了日后可能会支持更多编程语言

`"entry": "scripts/scriptTest.js"`

entry指的是脚本入口，里面的内容不一定是该名字，但创建一个scripts文件夹来存放脚本文件是一个惯例（由2018UWP版的脚本引擎传下来），这个脚本文件会在一进入装载该Addon的世界里时开始加载。

### III.dependencies部分：

从上到下依次为

- mojang-minecraft

- mojang-gametest

- mojang-minecraft-ui

- mojang-net

- mojang-minecraft-server-admin

模块的uuid，注意，mojang-net模块仅在服务器内有效

## 4.尝试编写第一个脚本

如果您已经做完了上述内容，并且把它放进Minecraft里时，您会发现什么事情都不会发生，为什么呢？

**因为我们还没有开始写代码**

按照程序员的传统惯例，我们先写一段HelloWorld试试，尝试在scriptTest.js里写入如下内容

```javascript
import { world } from "mojang-minecraft"
world.events.tick.subscribe(() => {
    world.getDimension("overworld").runCommand("say HelloWorld")
})
```

打开装载该Addon的世界，您会看到聊天框这在以20次/秒的速度发送HelloWorld



可以看到，say命令在GameTest中是以“脚本引擎”的身份发送的，故在社区也有Script API的说法

## 5.了解之后

### I.规范很重要

无论您叫它GameTest/GameTest框架/GT框架/Plugin系统/脚本API/脚本接口/脚本引擎，都没有错，但建议不要叫它“游戏测试框架”，GameTest本是一个专有名词，直接表达即可，可以直接说GT或脚本引擎，但不要说是“游戏测试框架”，就像您不会叫JavaScript叫“爪哇脚本”一样

### II.习惯很重要

不要把所有内容放在一个文件里去写！结果层次模糊的代码的可维护性并不高，且后续开发也不容易，还有就是变量及函数名命名时要规范，单个字母变量名仅建议在循环或测试里用，真正的变量及函数名建议遵守“驼峰命名法”或“下划线命名法”，此外，还要善于提问，现在国内的GameTest教程少之又少，所以向别人提问时很重要的，另外最重要的是，一定要写注释，程序时给机器读的，不是给人读的，注释能使你更好地理解当时写代码时的所思所想，否则你今天写的代码，明天就看不懂了

### III.坚持很重要

**代码并不是一天就能学会的，不断学习，提高自己的水平，才会让你乃至整个Minecraft基岩版开发社区变得更好**

现在，踏上你的学习之路吧
