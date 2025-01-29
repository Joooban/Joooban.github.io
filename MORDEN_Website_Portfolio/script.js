document.addEventListener("DOMContentLoaded", function () {
    
    const sections = {
        "about-link": document.getElementById("about-me"),
        "projects-link": document.getElementById("projects"),
        "recognition-link": document.getElementById("recognition"),
        "contact-link": document.getElementById("contacts")
    };

    sections["about-link"].style.display = "flex";
    sections["about-link"].style.opacity = "1";
    sections["about-link"].style.transform = "scale(1)";


    document.querySelectorAll(".sidebar a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

             Object.values(sections).forEach(section => {
                section.style.opacity = "0";
                section.style.transform = "scale(0.95)";

                setTimeout(() => {
                    section.style.display = "none";
                }, 300); 
            });

             setTimeout(() => {
                sections[this.id].style.display = "flex";
                setTimeout(() => {
                    sections[this.id].style.opacity = "1";
                    sections[this.id].style.transform = "scale(1)";
                }, 10);
            }, 300);

             document.querySelectorAll(".sidebar a").forEach(a => a.classList.remove("active"));
            this.classList.add("active");
        });
    });
    
});

function openModal(title, description, imageSrc = '', linkHref = '') {
     document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;

    const modalImage = document.getElementById("modalImage");
    if (imageSrc) {
        modalImage.style.display = 'block';
        modalImage.src = imageSrc;
    } else {
        modalImage.style.display = 'none';
    }

    const modalLink = document.getElementById("modalLink");
    if (linkHref) {
        modalLink.style.display = 'inline-block';
        modalLink.href = linkHref;
    } else {
        modalLink.style.display = 'none';
    }

    const modal = document.getElementById("projectModal");
    modal.style.display = "flex";

     modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}
