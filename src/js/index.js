import "../style/index.scss";

function render(variables = {}) {
  console.log("These are the current variables: ", variables);
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name ? variables.name : ""} ${
    variables.lastname ? variables.lastname : ""
  }</h1>
          <h2>${variables.role ? variables.role : ""}</h2>
          <h3>${variables.city ? variables.city : ""} ${
    variables.country ? variables.country : ""
  }</h3>
          <ul class="position-right">
            <li><a href="https://twitter.com/"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${
              variables.github && variables.github !== "sdunn45"
                ? variables.github
                : ""
            }"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${
              variables.linkedin ? variables.linkedin : ""
            }"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/stephendunn_"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

window.onload = function() {
  window.variables = {
    includeCover: true,

    background: "https://wallpapercave.com/wp/wp2771485.png",

    avatarURL:
      "https://s.abcnews.com/images/US/Gty_Hacker_Group_Anonymous_er_160318_33x16_992.jpg",

    socialMediaPosition: "position-left",

    twitter: null,
    github: "sdunn45",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
