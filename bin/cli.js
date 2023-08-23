// #!/usr/bin/env node

// const { execSync } = require('child_process');

// const runCommand = (command) => {
//     try {
//         execSync(`${command}`, { stdio: 'inherit' });
//     } catch (e) {
//         console.log(`За баларлаа ${command}`, e);
//         return false;
//     }
//     return true;
// };

// const repoName = process.argv[2];
// const gitCheckoutCommand = `git clone --depth 1 https://github.com/amkamn/sveltekit-auth-template ${repoName}`;
// const installDepsCommand = `cd ${repoName} && npm install`;

// console.log(`☕ Кофе уучаад ир... ${repoName}`);

// const checkedOut = runCommand(gitCheckoutCommand);
// if (!checkedOut) process.exit(-1);

// console.log(`☕ Кофе гоо тайван ууна уу.. ${repoName}`);
// const installDeps = runCommand(installDepsCommand);
// if (!installDeps) process.exit(-1);

// console.log('☕ Кофегоо ууж дууссан уу? Прожект бэлэн боллоо.');
