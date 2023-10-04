
// Create an Intersection Observer for the 'customaboutcontainer' class
const observerCustomAboutContainer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showe');
        }
    });
});

// Select elements with the 'customaboutcontainer' class and observe them using the 'observerCustomAboutContainer'
const customAboutContainerElements = document.querySelectorAll('.customaboutcontainer');
customAboutContainerElements.forEach((el) => {
    observerCustomAboutContainer.observe(el);
});


// Create an Intersection Observer for the 'top1' class
const observerTop1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showe');
        }
    });
});

// Select elements with the 'top1' class and observe them using the 'observerTop1'
const top1Elements = document.querySelectorAll('.top1');
top1Elements.forEach((el) => {
    observerTop1.observe(el);
});

// Repeat the same process for the other classes if needed
const observerServiceWrap = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showe');
        }
    });
});

const servicewrapElements = document.querySelectorAll('.servicewrap');
servicewrapElements.forEach((el) => {
    observerServiceWrap.observe(el);
});


// Create an Intersection Observer for the 'bigs1' class
const observerBigs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showe');
        }  // Optionally, remove the class when not in view
        
    });
});

// Select elements with the 'bigs1' class and observe them using the 'observerBigs'
const bigsElements = document.querySelectorAll('.bigs1');
bigsElements.forEach((el) => {
    observerBigs.observe(el);
});

// Create an Intersection Observer for the 'customwhychooseusitem' class
const observerCustom = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showe');
        } // Optionally, remove the class when not in view
    });
});

// Select elements with the 'customwhychooseusitem' class and observe them using the 'observerCustom'
const customElements = document.querySelectorAll('.customwhychooseusitem');
customElements.forEach((el) => {
    observerCustom.observe(el);
});
const observerNavigation = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showe');
        } // Optionally, remove the class when not in view
    });
});

// Select elements with the 'navigation' class and observe them using the 'observerNavigation'
const navigationElements = document.querySelectorAll('.navigation');
navigationElements.forEach((el) => {
    observerNavigation.observe(el);
});
const observerCustomImage = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showe');
        } // Optionally, remove the class when not in view
    });
});

// Select elements with the 'image-container' class and observe them using 'observerCustomImage'
const imageElements = document.querySelectorAll('.image-container');
imageElements.forEach((el) => {
    observerCustomImage.observe(el);
});
