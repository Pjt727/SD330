async function githubFilelist(){
            
    const links = document.getElementById('links');
    const BASE_URL = "https://api.github.com/repos/pjt727/SD330/";

    const response = await fetch(`${BASE_URL}contents`);
    const data = await response.json();
    // loop through the list of files, set "file" to each file name
    for (let file of data) {
        fname = file.name;
        fpathRel = file.path;
        fpath = `${BASE_URL}${fpathRel}`;
        newItem = document.createElement("li");
        newLink = document.createElement("a");
        newLink.href = fpath
        newLink.innerHTML = fname;
        newItem.appendChild(newLink);
        links.appendChild(newItem);
    }
}

document.addEventListener('load', () => {
    githubFilelist()
})
