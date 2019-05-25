const pty = require('node-pty');

exports.withAnswer = answers => (command, args) => new Promise(resolve => {
    console.log(command, args.join(' '));
    const child = pty.spawn(command, args, {cwd: process.cwd()});
    let output = '';

    child.on(
        'data',
        async data => {
            output += '\n' + data.toString();
            const match = answers.find(({matches}) => matches({output, command, args}));
            if (match) {
                const answer = await match.answer(child);
                child.write(answer + '\n');
            }
        }
    );

    child.on('close', resolve);
});
