// Navbar new mobile
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});


//other
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function showSection(id) {
        sections.forEach(section => {
            if (section.id === id) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    }

    function setActiveNavLink(id) {
        const links = document.querySelectorAll(".navbar a");
        links.forEach(link => {
            if (link.getAttribute("href") === "#" + id) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    function navigateToSection(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        showSection(targetId);
        setActiveNavLink(targetId);
        window.location.hash = targetId; // Update the URL hash
    }

    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", navigateToSection);
    });

    window.addEventListener("hashchange", function () {
        const targetId = window.location.hash.substring(1);
        showSection(targetId);
        setActiveNavLink(targetId);
    });

    // Show the section based on the URL hash on page load
    const defaultSectionId = window.location.hash.substring(1) || "Home";
    showSection(defaultSectionId);
    setActiveNavLink(defaultSectionId);
});




document.addEventListener("DOMContentLoaded", function () {
    const textArray = [ "Web Developer", "Freelancer", "Ui/Ux Designer", "Graphic Designer", "Programmer"]; 
    const textElement = document.getElementById('dynamic-text'); 
    let index = 0; 
    let text = textArray[index]; 
    let timer; 

    function typeWriter() {
        if (text.length > 0) {
            textElement.textContent += text.charAt(0); 
            text = text.substring(1); 
            timer = setTimeout(typeWriter, 100); 
        } else {
            setTimeout(eraseText, 300); 
        }
    }

    function eraseText() {
        if (textElement.textContent.length > 0) {
            textElement.textContent = textElement.textContent.slice(0, -1); 
            timer = setTimeout(eraseText, 100); 
        } else {
            index = (index + 1) % textArray.length; 
            text = textArray[index];
            setTimeout(typeWriter, 100); 
        }
    }

    typeWriter(); 
});















