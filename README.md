## 使用密码

打开`config/index.js`可以看到一些配置，大致如下：

```js
{
    matches: byKeyword('xxx'),
    answer: constant('zzz')
}
```

上面这个配置的意思是，当文名包含`xxx`时，使用`zzz`作为密码。

或者这样：

```js
{
    matches({output}) {
        return output.split('\n').pop().includes('use current password');
    },
    answer: constant('A')
}
```

这就是自定义的逻辑，其中`matches`中的参数里的`output`是当前命令行的输出，取最后一行来判断，`answer`表示返回的密码。

最后的一段：

```js
{
    matches({output}) {
        return output.split('\n').pop().startsWith('Enter password (will not be echoed)');
    },
    answer(child) {
        const query = readline.createInterface({input: process.stdin, output: process.stdout});

        const executor = resolve => query.question(
            'Password: ',
            answer => {
                resolve(answer);
                query.close();
            }
        );

        return new Promise(executor);
    }
}
```

则表示实在没有任何密码时，提示手动输入再提交。

当前的`config/index.js`中包含了不少不可名状的解压密码，可以无视。
