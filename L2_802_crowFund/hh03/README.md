# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

## 可升级的去中心化众筹平台

* 由于采用了openzeppelin UUPS的部署方式,有两个部署脚本.

* 先后部署命令如下:

  * ①新开一个窗口,创建hardhat network区块链节点	

    ```shell
    npx hardhat node --network localhost
    ```

  * ②部署第一个脚本,会生成两个合约

    ```shell
    npx hardhat run scripts/deploy802V1.js --network localhost
    ```

  * ③部署第二个脚本

    ```shell
    npx hardhat run scripts/deploy802V2.js --network localhost
    ```

    

​			
