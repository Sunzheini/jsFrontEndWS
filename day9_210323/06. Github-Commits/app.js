function loadCommits() {
    const BASE_URL = 'https://api.github.com/repos/'
    const username = document.getElementById('username')
    const repo = document.getElementById('repo')
    const commits = document.getElementById('commits')
    const usernameVal = username.value
    const repoVal = repo.value

    fetch(`${BASE_URL}${usernameVal}/${repoVal}/commits`)
        .then((res) => res.json())
        .then((data) => {
            data
                .forEach(({commit}) => {
                    const li = document.createElement('li')
                    li.textContent = `${commit.author.name}: ${commit.message}`
                    commit.appendChild(li)
                })
        })
        .catch((err) => {
            console.log(err)
        })
}
