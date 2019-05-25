const readline = require('readline');

const byKeyword = keyword => ({output, args}) => {
    if (!output.split('\n').pop().includes('Enter')) {
        return false;
    }

    return args[1].includes(keyword);
};

const constant = value => () => value;

exports.passwords = [
    {
        matches: byKeyword('鬼畜王汉化组'),
        answer: constant('鬼畜王汉化组')
    },
    {
        matches: byKeyword('靴下'),
        answer: constant('xuexia15')
    },
    {
        matches: byKeyword('寂月汉化组'),
        answer: constant('acgmoon')
    },
    {
        matches: byKeyword('夢之行蹤漢化組'),
        answer: constant('moetrace')
    },
    {
        matches: byKeyword('脸肿汉化组'),
        answer: constant('脸肿')
    },
    {
        matches: byKeyword('战栗的玻璃棒'),
        answer: constant('战栗的玻璃棒')
    },
    {
        matches: byKeyword('瑞树'),
        answer: constant('mizuki')
    },
    {
        matches: byKeyword('上野联邦'),
        answer: constant('akari')
    },
    {
        matches: byKeyword('Dororo君'),
        answer: constant('Dororo')
    },
    {
        matches: byKeyword('oo君個人漢化'),
        answer: constant('oo789789789')
    },
    {
        matches: byKeyword('CastlevaniaYB'),
        answer: constant('CastlevaniaYB')
    },
    {
        matches: byKeyword('EZR個人漢化'),
        answer: constant('EZR')
    },
    {
        matches: byKeyword('胸垫汉化组'),
        answer: constant('久安的胸垫')
    },
    {
        matches: byKeyword('Lolipoi汉化组'),
        answer: constant('lolipoi')
    },
    {
        matches: byKeyword('RA汉化组'),
        answer: constant('Ra')
    },
    {
        matches: byKeyword('兔司姬'),
        answer: constant('rabbit')
    },
    {
        matches: byKeyword('sayake'),
        answer: constant('sayakeSP')
    },
    {
        matches: byKeyword('AL4个人汉化'),
        answer: constant('AL4ALICEOPER')
    },
    {
        matches: byKeyword('Dororo君个人漢化'),
        answer: constant('Dororo')
    },
    {
        matches: byKeyword('萌纹个人汉化'),
        answer: constant('gmgard.com')
    },
    {
        matches: byKeyword('sputnik×nemu7e'),
        answer: constant('sputnik×nemu7e')
    },
    {
        matches: byKeyword('嗶咔嗶咔漢化組'),
        answer: constant('picapica')
    },
    {
        matches: byKeyword('新桥月白日语社'),
        answer: constant('xqyb')
    },
    {
        matches: byKeyword('兔司姬漢化組'),
        answer: constant('rabbit')
    },
    {
        matches: byKeyword('新桥月白'),
        answer: constant('xqyb')
    },
    {
        matches: byKeyword('伊忍汉化组'),
        answer: constant('oshino')
    },
    {
        matches: byKeyword('后悔的神官'),
        answer: constant('hhdsg')
    },
    {
        matches: byKeyword('4K掃圖組'),
        answer: constant('4k')
    },
    {
        matches: byKeyword('黑Q渣渣机翻'),
        answer: constant('heiQjifan')
    },
    {
        matches: byKeyword('不想记名'),
        answer: constant('bxjm')
    },
    {
        matches: byKeyword('咩咩咩漢化组'),
        answer: constant('咩咩咩')
    },
    {
        matches: byKeyword('不可视汉化'),
        answer: constant('不可视')
    },
    {
        matches: byKeyword('后悔的神官个人汉化'),
        answer: constant('hhdsg')
    },
    {
        matches({output}) {
            return output.split('\n').pop().includes('use current password');
        },
        answer: constant('A')
    },
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
];
