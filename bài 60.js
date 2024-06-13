<<<<<<< HEAD

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const menuLinks = document.querySelectorAll(".menu a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        menuLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === current) {
                link.classList.add("active");
            }
        });
    });
});








document.addEventListener('DOMContentLoaded', function() {
   
    const tabs = document.querySelectorAll('.tab');
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const projectName = project.getAttribute('data-name');
        if (projectName !== 'buoi1') {
            project.style.display = 'none';
        }
    });


    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-name');

            projects.forEach(project => {
                const projectName = project.getAttribute('data-name');
                if (projectName === tabName) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});



=======

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const menuLinks = document.querySelectorAll(".menu a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        menuLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === current) {
                link.classList.add("active");
            }
        });
    });
});








document.addEventListener('DOMContentLoaded', function() {
   
    const tabs = document.querySelectorAll('.tab');
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const projectName = project.getAttribute('data-name');
        if (projectName !== 'buoi1') {
            project.style.display = 'none';
        }
    });


    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-name');

            projects.forEach(project => {
                const projectName = project.getAttribute('data-name');
                if (projectName === tabName) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});



>>>>>>> f7de1ccb53c5844a60178105bc55d2ab60f42b5b
