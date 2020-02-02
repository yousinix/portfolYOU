function get_tools(repo) {
  fetch(`https://api.github.com/repos/${repo}/topics`, {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json"
    }
  })
    .then(response => response.json())
    .then(data => {
      var name = repo.split("/")[1];
      var parent = document.getElementById(`${name}-tools`);
      parse_tools(data.names).forEach(t => parent.appendChild(t));
    });
}

function parse_tools(tools) {
  var classes = "badge badge-pill text-primary border border-primary ml-1";
  var classesArr = classes.split(" ");
  return tools.map(tool => {
    var span = document.createElement("span");
    span.classList.add(...classesArr);
    span.innerHTML = tool;
    return span;
  });
}
