import {ethers} from "ethers"
import * as fs from "fs-extra"
import "dotenv/config"

async function main() {
  console.log(process.env.PRIVATE_KEY);
  const wallet1 = new ethers.Wallet(process.env.PRIVATE_KEY!);
  const encryptedJsonKey = await wallet1.encrypt(
    process.env.PRIVATE_KEY_PASSWOR!.toString(),
    process.env.PRIVATE_KEY
  );
  console.log(encryptedJsonKey);

  fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
