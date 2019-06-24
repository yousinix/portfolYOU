---
---

function get_meta_image(repo_name) {
  var encodedURL = encodeURI(`https://github.com/{{ site.github.owner_name }}/${repo_name}`);
  fetch(`https://getmeta.info/json?url=${encodedURL}`)
    .then(response => response.json())
    .then(data => {
      if (data.og.image.includes("avatars3")) {
        var child = document.getElementById(`${repo_name}-img`);
        var parent = child.parentNode;
        parent.removeChild(child);
      } else {
        document.getElementById(`${repo_name}-img`).src = data.og.image;
      }
    });
}

function get_tools(repo_name) {
  fetch(`https://api.github.com/repos/{{ site.github.owner_name }}/${repo_name}/topics`, {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json"
      }
    })
    .then(response => response.json())
    .then(data => data.names.forEach(tool => {

      var toolSpan = document.createElement("span");
      toolSpan.innerHTML = tool;
      toolSpan.classList.add("badge");
      toolSpan.classList.add("badge-pill");
      toolSpan.classList.add("text-primary");
      toolSpan.classList.add("border");
      toolSpan.classList.add("border-primary");

      var parent = document.getElementById((`${repo_name}-tools`));
      parent.appendChild(toolSpan);
      parent.appendChild(document.createTextNode(" "));

    }))
}