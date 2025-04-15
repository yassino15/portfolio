import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const vAnimateSection = {
  mounted: (el, binding) => {
    const options = binding.value || {};
    const type = options.type || "default";
    const sectionId = el.id;

    // Get the elements to animate
    const title = el.querySelector(".section-title");
    const content = el.querySelectorAll(
      ".section-content > *:not(.section-title)"
    );

    // Set initial state (hidden)
    if (title) gsap.set(title, { opacity: 0 });
    gsap.set(content, { opacity: 0 });

    // Create the animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 70%", // Start animation when the top of the section reaches 70% from the top of viewport
        toggleActions: "play none none none", // Play once when entering
        onEnter: () => {
          // Dispatch an event when a section becomes visible
          window.dispatchEvent(
            new CustomEvent("sectionInView", {
              detail: { sectionId },
            })
          );
        },
      },
    });

    // Different animation types based on the section
    switch (type) {
      case "fade":
        if (title) tl.to(title, { opacity: 1, duration: 0.7 });
        tl.to(content, { opacity: 1, stagger: 0.1, duration: 0.5 }, "-=0.3");
        break;

      case "slide-right":
        if (title) {
          gsap.set(title, { x: -50, opacity: 0 });
          tl.to(title, { x: 0, opacity: 1, duration: 0.6 });
        }
        gsap.set(content, { x: -30, opacity: 0 });
        tl.to(
          content,
          { x: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
          "-=0.3"
        );
        break;

      case "slide-left":
        if (title) {
          gsap.set(title, { x: 50, opacity: 0 });
          tl.to(title, { x: 0, opacity: 1, duration: 0.6 });
        }
        gsap.set(content, { x: 30, opacity: 0 });
        tl.to(
          content,
          { x: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
          "-=0.3"
        );
        break;

      case "zoom":
        if (title) {
          gsap.set(title, { scale: 0.8, opacity: 0 });
          tl.to(title, { scale: 1, opacity: 1, duration: 0.6 });
        }
        gsap.set(content, { scale: 0.9, opacity: 0 });
        tl.to(
          content,
          { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5 },
          "-=0.3"
        );
        break;

      case "bounce":
        if (title) {
          gsap.set(title, { y: -20, opacity: 0 });
          tl.to(title, { y: 0, opacity: 1, duration: 0.6, ease: "bounce.out" });
        }
        gsap.set(content, { y: 20, opacity: 0 });
        tl.to(
          content,
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
        break;

      default:
        // Default animation
        if (title) {
          gsap.set(title, { y: 30, opacity: 0 });
          tl.to(title, { y: 0, opacity: 1, duration: 0.6 });
        }
        gsap.set(content, { y: 20, opacity: 0 });
        tl.to(
          content,
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
          "-=0.3"
        );
    }
  },
};

// Export a function to scroll to a section with animation
export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: section,
        offsetY: 20,
      },
      ease: "power2.inOut",
    });
  }
};
