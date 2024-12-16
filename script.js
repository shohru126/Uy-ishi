
        function applyCommonStyles() {
            document.body.style.margin = "0";
            document.body.style.fontFamily = "Arial, sans-serif";
            document.body.style.transition = "background-color 0.5s ease, color 0.5s ease";
            const header = document.querySelector("header");
            header.style.display = "flex";
            header.style.justifyContent = "space-between";
            header.style.alignItems = "center";
            header.style.padding = "20px";
            const logo = document.getElementById("logo");
            logo.style.fontWeight = "bold";
            logo.style.fontSize = "1.5rem";
            //navigatsiyaaa
            const navLinks = document.querySelectorAll("nav a, nav button");
            navLinks.forEach(link => {
                link.style.marginLeft = "20px";
                link.style.textDecoration = "none";
                link.style.color = "inherit";
                link.style.fontSize = "1rem";
                link.style.cursor = "pointer";
            });
        }

        function styleMainContent() {
            const main = document.querySelector("main");
            main.style.display = "flex";
            main.style.justifyContent = "space-between";
            main.style.alignItems = "center";
            main.style.padding = "40px";

            const content = document.getElementById("content");
            content.style.maxWidth = "50%";

            const h1 = document.querySelector("h1");
            h1.style.marginBottom = "20px";
            h1.style.fontSize = "2rem";

            const paragraph = document.querySelector("p");
            paragraph.style.marginBottom = "20px";

            const detailsBtn = document.getElementById("details-btn");
            detailsBtn.style.backgroundColor = "red";
            detailsBtn.style.color = "#fff";
            detailsBtn.style.border = "none";
            detailsBtn.style.padding = "10px 20px";
            detailsBtn.style.borderRadius = "5px";
            detailsBtn.style.cursor = "pointer";

            const image = document.getElementById("main-image");
            image.style.borderRadius = "10px";
            image.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";
        }
        function toggleTheme() {
            const body = document.body;
            const toggleButton = document.getElementById("toggle-button");

            if (body.classList.contains("dark-mode")) {
                body.classList.remove("dark-mode");
                body.style.backgroundColor = "wheat";
                body.style.color = "#333";
                toggleButton.textContent = "Dark Mode";
            } else {
                body.classList.add("dark-mode");
                body.style.backgroundColor = "black";
                body.style.color = "#fff";
                toggleButton.textContent = "Light Mode";
            }
        }
        function init() {
            applyCommonStyles();
            styleMainContent();

            const toggleButton = document.getElementById("toggle-button");
            toggleButton.addEventListener("click", toggleTheme);
        }
        window.onload = init;