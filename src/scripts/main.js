const container = document.querySelector(".orators_all"); 

const oratorsData = [
    {
        firstName: "Chris",
        lastName: "Coyier",
        location: "Milwaukee, WI",
        eventTitle: "The All-Powerful Front-End Developer",
        description: "Without servers, we'd have no way to share our creations with the world",
        time: "9h30",
        img: "dist/assets/images/orators/chris@3x.jpg",
        additionalInfo : "R1"
    },
    {
        firstName: "Sara",
        lastName: "Soueidan",
        location: "Lebanon",
        eventTitle: "Going Offline",
        description: "You can re-visit my Web site even when you’re not connected to the Internet",
        time: "10h15",
        img: "dist/assets/images/orators/sara@3x.jpg",
        additionalInfo : "R1"
    },
    {
        firstName: "Eric",
        lastName: "Meyer",
        location: "Cleveland, OH",
        eventTitle: "Faux Grid Tracks",
        description: "Is it possible to style the rows and columns of a [CSS] grid—the grid itself?",
        time: "16h00",
        img: "dist/assets/images/orators/eric@3x.jpg",
        additionalInfo : "R1"
    },
    {
        firstName: "Lea",
        lastName: "Verou",
        location: "Cambridge, MA",
        eventTitle: "Mavo",
        description: "New approachable way to create Web applications",
        time: "16h00",
        img: "dist/assets/images/orators/lea@3x.jpg",
        additionalInfo : "R2"
    },
    {
        firstName: "Shirley",
        lastName: "Wu",
        location: "San Francisco, CA",
        eventTitle: "655 Frustrations Doing Data Visualization",
        description: "Visualization teams spend more time visualizing than those on embedded teams",
        time: "9h30",
        img: "dist/assets/images/orators/shirley@3x.jpg",
        additionalInfo : "R2"

    },
    {
        firstName: "Luke",
        lastName: "Wroblewski",
        location: "San Francisco, CA",
        eventTitle: "The Way of the Web",
        description: "Science fiction is not about predicting the future, but about what we need to have a future",
        time: "11h30",
        img: "dist/assets/images/orators/luke@3x.jpg",
        additionalInfo : "R2"
    },
    {
        firstName: "Nicolas",
        lastName: "Gallagher",
        location: "San Francisco, CA",
        eventTitle: "Making SVG icon libraries for React apps",
        description: "Using SVG is currently the best way to create icon libraries for apps",
        time: "14h00",
        img: "dist/assets/images/orators/nico@3x.jpg",
        additionalInfo : "R1"
    },
    {
        firstName: "Rachel",
        lastName: "Andrew",
        location: "Bristol, UK",
        eventTitle: "Making Things Better",
        description: "Redefining the Technical Possibilities of CSS",
        time: "15h00",
        img: "dist/assets/images/orators/rachel@3x.jpg",
        additionalInfo : "R1"
    },
    {
        firstName: "Stephen",
        lastName: "Hay",
        location: "Leeuwarden, NL",
        eventTitle: "Zero Interface Thinking",
        description: "Everything we introduce has the potential to ruin everything. Ask: Is this absolutely necessary?",
        time: "17h00",
        img: "dist/assets/images/orators/stephen@3x.jpg",
        additionalInfo : "R1"
    },
    {
        firstName: "Paul",
        lastName: "Irish",
        location: "Palo Alto, CA",
        eventTitle: "Developer Tooling, Lighthouse",
        description: "Auditing, performance metrics, and best practices for Progressive Web Apps",
        time: "10h30",
        img: "dist/assets/images/orators/paul@3x.jpg",
        additionalInfo : "R2"
    },
    {
        firstName: "Nicole",
        lastName: "Sullivan",
        location: "San Francisco, CA",
        eventTitle: "OOCSS Code Standards",
        description: "Code conventions are important for the long-term maintainability of code",
        time: "11h30",
        img: "dist/assets/images/orators/nicole@3x.jpg",
        additionalInfo : "R2"
    },
    {
        firstName: "Brad",
        lastName: "Frost",
        location: "Pittsburgh, PA",
        eventTitle: "Atomic Design",
        description: "We can construct design systems in a more methodical way",
        time: "14h00",
        img: "dist/assets/images/orators/brad@3x.jpg",
        additionalInfo : "R2"
    }
];


oratorsData.forEach(orator => {
    const card = document.createElement("div");
    card.classList.add("orator");

    card.innerHTML = `
        <!-- Vista por defecto -->
        <div class="orator__default">
            <div class="orator__left">
                <h3 class="orator__name">
                    ${orator.firstName}
                    <span class="breakline">${orator.lastName}</span>
                </h3>
                <p class="orator__location">${orator.location}</p>
            </div>
            <div class="orator__right">
                <div class="orator__pict">
                    <img src="${orator.img}" alt="${orator.firstName} ${orator.lastName}">
                </div>
            </div>
        </div>

        <!-- Vista con detalles -->
        <div class="orator__details">
            <header>
                <h3 class="orator__name">${orator.firstName} ${orator.lastName}</h3>
            </header>
            <main>
                <h4 class="orator__title">${orator.eventTitle}</h4>
                <p class="orator__description">${orator.description}</p>                
            </main>
            <footer>
                <div class="footer-left">
                    <i class="nav__menu-mobile-icon icon-heart_full"></i>
                    <p class="orator__time">${orator.time}</p>
                    <p>|</p>
                    <p class="orator__info">${orator.additionalInfo}</p>
                </div>
                <a class="orator__about-CTA button__secondary-outline" href="#" target="_blank">about</a>
            </footer>
        </div>
    `;

    container.appendChild(card);

    // 🔹 Evento para manejar la apertura y cierre de cards
    card.addEventListener("click", () => {
        // Cerrar cualquier otra card activa antes de abrir esta
        document.querySelectorAll(".orator.active").forEach(activeCard => {
            if (activeCard !== card) {
                activeCard.classList.remove("active");
            }
        });

        // Alternar la clase 'active' en la card clickeada
        card.classList.toggle("active");
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuList = document.querySelector(".menu__list");
  
    menuToggle.addEventListener("click", () => {
      menuList.classList.toggle("open"); // Abre/Cierra el menú
      menuToggle.classList.toggle("active"); // Cambia el color del ícono
    });
  });



