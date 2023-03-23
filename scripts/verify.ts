import hre from "hardhat";
import config from '../config/config';
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
    console.log("Verify Management Contract ......")
    const Management = '0x925b75D04f4FEBa04B0CFF5AD3d9B60943494d28';

    await hre.run("verify:verify", {
        address: Management,
        constructorArguments: [],
    });

    console.log("Verify Reputation Contract ......")
    const Reputation = '0x0Fb601bB70420E7faE8DAe0f7a4215dBf66590Ca';

    await hre.run("verify:verify", {
        address: Reputation,
        constructorArguments: [
            Management, config.name, config.symbol, config.baseURI
        ],
    });

    console.log('\n===== DONE =====')
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
});