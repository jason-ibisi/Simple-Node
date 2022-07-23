require('dotenv').config();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log(
      `Containers and Microservices rule! ${process.env.FOVORITE_FOOD} rocks!`
    );
    await sleep(5000);
  }
}

main();
