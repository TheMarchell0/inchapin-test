import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

export function GSAPAnimations() {

    /*gsap.defaults({
        duration: 1,
        ease: "power2.out"
    });

    const heroTrigger = createScrollTrigger(".hero"),
        aboutTrigger = createScrollTrigger(".about");

    /!*Hero*!/

    gsap.from(".hero__content", {
        scrollTrigger: heroTrigger,
        opacity: 0,
        x: -100
    });

    gsap.from(".hero__img", {
        scrollTrigger: heroTrigger,
        opacity: 0,
        y: 100,
        delay: 0.5
    });

    /!*About*!/

    gsap.from(".description__content", {
        scrollTrigger: aboutTrigger,
        opacity: 0,
    });

    gsap.from(".description__content-item:nth-child(1)", {
        scrollTrigger: aboutTrigger,
        y: 100
    });

    gsap.from(".description__content-item:nth-child(2)", {
        scrollTrigger: aboutTrigger,
        y: 160,
        duration: 1.6,
    });*/
}

function createScrollTrigger(selector) {
    return ScrollTrigger.create({
        trigger: selector,
        start: "top 60%",
        once: true
    });
}
