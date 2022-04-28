require("isomorphic-unfetch");

const { promises: fs } = require("fs");
const path = require("path");

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

async function main(){
    const readme_template = (
        await fs.readFile(path.join(process.cwd(), "./README.template.md"))
    ).toString("utf-8");

    const anime_images = await (
        await fetch("https://api-anime-images.herokuapp.com/api/v1")
    ).json();

    // console.log(anime_images);
    random_data = getRandom(1, 9)
    console.log(random_data)
    console.log(anime_images.data[random_data].anime_img);

    const readme = readme_template
        .replace("{anime_images}", anime_images.data[random_data].anime_img)

    await fs.writeFile("README.md", readme);
}

main()
