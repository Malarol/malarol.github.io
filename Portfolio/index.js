const button = document.getElementById("themeToggle");
let darkMode = true;

button.addEventListener("click", () => {
  if (darkMode === true) {
    // ☀️ LIGHT MODE
    document.body.style.backgroundColor = "white";
    document.body.style.color = "rgb(34, 34, 34)";
    document.getElementById("themeToggle").innerText = "Light mode";

    // Nav bar
    const nav = document.querySelector(".Nav");
    nav.style.backgroundColor = "white";
    nav.style.color = "rgb(34, 34, 34)";
    nav.style.borderColor = "rgb(34, 34, 34)";

    // Contact section
    const contact = document.querySelector(".Contact");
    contact.style.color = "rgb(34, 34, 34)";
    contact.style.backgroundColor = "white";

    // Contact links (hover and border)
    document.querySelectorAll(".Contact a").forEach(link => {
      link.style.backgroundColor = "transparent";
      link.style.color = "rgb(34, 34, 34)";
      link.style.borderColor = "rgb(34, 34, 34)";
      link.onmouseenter = () => {
        link.style.backgroundColor = "rgb(34, 34, 34)";
        link.style.color = "white";
      };
      link.onmouseleave = () => {
        link.style.backgroundColor = "transparent";
        link.style.color = "rgb(34, 34, 34)";
      };
    });

    // Info section
    const info = document.querySelector(".Info");
    info.style.backgroundColor = "white";
    info.style.color = "rgb(34, 34, 34)";
    info.style.borderColor = "rgb(34, 34, 34)";

    // Separator
    document.querySelector(".separator").style.borderTopColor = "rgb(100, 100, 100)";

    // GitHub button
    const github = document.getElementById("github");
    github.style.backgroundColor = "white";
    github.style.color = "rgb(34, 34, 34)";
    github.style.borderColor = "rgb(34, 34, 34)";
    github.onmouseenter = () => {
      github.style.backgroundColor = "rgb(34, 34, 34)";
      github.style.color = "white";
    };
    github.onmouseleave = () => {
      github.style.backgroundColor = "white";
      github.style.color = "rgb(34, 34, 34)";
    };


    darkMode = false;
  } else {
    // 🌙 DARK MODE
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
        document.getElementById("themeToggle").innerText = "Dark mode";

    // Nav bar
    const nav = document.querySelector(".Nav");
    nav.style.backgroundColor = "rgb(34, 34, 34)";
    nav.style.color = "white";
    nav.style.borderColor = "white";

    // Contact section
    const contact = document.querySelector(".Contact");
    contact.style.color = "white";
    contact.style.backgroundColor = "rgb(34, 34, 34)";

    // Contact links (hover and border)
    document.querySelectorAll(".Contact a").forEach(link => {
      link.style.backgroundColor = "transparent";
      link.style.color = "white";
      link.style.borderColor = "white";
      link.onmouseenter = () => {
        link.style.backgroundColor = "white";
        link.style.color = "black";
      };
      link.onmouseleave = () => {
        link.style.backgroundColor = "transparent";
        link.style.color = "white";
      };
    });

    // Info section
    const info = document.querySelector(".Info");
    info.style.backgroundColor = "rgb(20, 20, 20)";
    info.style.color = "white";
    info.style.borderColor = "white";

    // Separator
    document.querySelector(".separator").style.borderTopColor = "rgb(102, 100, 100)";

    // GitHub button
    const github = document.getElementById("github");
    github.style.backgroundColor = "rgb(20, 20, 20)";
    github.style.color = "white";
    github.style.borderColor = "white";
    github.onmouseenter = () => {
      github.style.backgroundColor = "white";
      github.style.color = "black";
    };
    github.onmouseleave = () => {
      github.style.backgroundColor = "rgb(20, 20, 20)";
      github.style.color = "white";
    };

    darkMode = true;
  }
});