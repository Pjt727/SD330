async function githubFilelist(folderPath){
    const links = document.getElementById('links');
    const CONTENTS_URL = `https://api.github.com/repos/pjt727/SD330/contents${folderPath}`;
    const BASE_URL_LINKS = "https://pjt727.github.io/SD330/"


    const response = await fetch(CONTENTS_URL);
    const data = await response.json();
    // loop through the list of files, set "file" to each file name
    for (let file of data) {
        console.log(file)
        if(file.type === "dir") {
            console.log(file.path);
            githubFilelist(`/${file.path}/`);
            continue;
        }
        fname = file.name;
        fpathRel = file.path;
        fpath = `${BASE_URL_LINKS}${fpathRel}`;
        newItem = document.createElement("li");
        newLink = document.createElement("a");
        newLink.href = fpath
        newLink.innerText = fname;
        newItem.appendChild(newLink);
        links.appendChild(newItem);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    githubFilelist("");
})
