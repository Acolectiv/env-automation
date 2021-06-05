const { exec } = require("child_process");

const autoPull = time => {
    setInterval(() => {
        const config = require("./config.js");
        if(config.autoPull == 0) return;
        if(config.repoURLs.length == 0) return new Error(`Oops! You forgot to give me the GitHub repo url's. Or, you can turn this feature off. Just go in \'config.js\' and set autoPull to false!`);
        // we're getting into it :)

        config.repoURLs.map(url => {
            const str = (url.replace('.git', "").split('/'));
            console.log(str)
            console.log(`I'm pulling ${str[1]} for you. Keep tight!`);
            exec(`cd ../${str[1]} && git pull ${url}`, (err, stdout, stderr) => {
                if(err) return new Error(err);
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
            })
        })
    }, time * 60000)
}

module.exports.autoPull = autoPull;