1. Make this folder a react app. This will create node_module, and package*.json files. This is just a install command.
4-Hardhat-ether.js-DApp-example$ npm i create-react-app

2. Create app folder as a react app. This will create a new react app.
4-Hardhat-ether.js-DApp-example$ npx create-react-app app

3. Go inside app folder and install hardhat.
4-Hardhat-ether.js-DApp-example/app$ npm i hardhat

4. Create a hardhat app. Below command will create the folder 'contracts', hardhat.config.js file, sample-script.js file (renamed to deploy.js)

4-Hardhat-ether.js-DApp-example/app$ npx hardhat

choose:
1. Create a basic sample project
2. rest of the things are default

5. You got a message from above command - You need to install the below dependencies.

4-Hardhat-ether.js-DApp-example/app$ npm install --save-dev "hardhat@^2.9.5" "@nomiclabs/hardhat-waffle@^2.0.0" "ethereum-waffle@^3.0.0" "chai@^4.2.0" "@nomiclabs/hardhat-ethers@^2.0.0" "ethers@^5.0.0"
