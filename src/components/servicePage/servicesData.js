// Single source of truth for the Services grid and the generic service detail
// page. `slug` must match the `/service/:slug` route param.
const services = [
  {
    slug: "ai-ml-development",
    icon: "/assets/images/services/ai-ml-development.png",
    label: "AI/ML Development",
    tagline: ["Intelligent Solutions.", "Smarter Outcomes."],
    description:
      "We build custom AI and machine learning solutions that turn complex data into actionable intelligence. From predictive models to intelligent automation, we help businesses innovate, improve efficiency, and scale with confidence.",
  },
  {
    slug: "blockchain",
    icon: "/assets/images/services/blockchain.png",
    label: "Blockchain",
    tagline: ["Transparent Systems.", "Trusted By Design."],
    description:
      "We design and build secure, scalable blockchain solutions, from smart contracts to decentralized applications, so businesses can transact with trust, transparency, and lower overhead.",
  },
  {
    slug: "web-design",
    icon: "/assets/images/services/web-design.png",
    label: "Web & App Design",
    tagline: ["Interfaces People Understand.", "Experiences They Remember."],
    description:
      "We shape intuitive interfaces and user journeys around real needs, turning complex products into simple, enjoyable experiences across web and mobile.",
  },
  {
    slug: "web-development",
    icon: "/assets/images/services/web-development.png",
    label: "Web Development",
    tagline: ["Fast, Reliable Websites.", "Built To Scale."],
    description:
      "We build performant, maintainable web applications with modern frameworks, turning designs into fast, accessible products that scale with your business.",
  },
  {
    slug: "embedded-solution",
    icon: "/assets/images/services/embedded-solution.png",
    label: "Embedded Solutions",
    tagline: ["Hardware Meets Software.", "Built To Perform."],
    description:
      "From firmware to IoT connectivity, we engineer embedded systems that are reliable, efficient, and ready for the real world.",
  },
  {
    slug: "mob-development",
    icon: "/assets/images/services/mob-development.png",
    label: "App Development",
    tagline: ["Native Feel.", "Cross-Platform Reach."],
    description:
      "We build iOS, Android, and cross-platform apps that feel native, perform smoothly, and get your product into users' hands faster.",
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);

export default services;
