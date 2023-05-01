const fade = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px 170px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove("appear");
        } else {
            entry.target.classList.add("appear");
        }
    });
}, appearOptions);

fade.forEach(fade => {
    appearOnScroll.observe(fade);
})