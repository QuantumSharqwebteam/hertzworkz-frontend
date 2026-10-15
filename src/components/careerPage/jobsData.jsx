// Single source of truth for CurrentOpenings.jsx. Icons are downloaded straight from Figma
// node 5233:17387 ("Career Page - Final 2") - same files as the design, not redrawn.
const ICON_BASE = "/assets/images/career/icons";

function iconComponent(src) {
  // eslint-disable-next-line react/display-name, react/prop-types -- anonymous icon component named by its call site below; repo has no prop-types dependency
  return ({ className }) => <img src={src} alt="" aria-hidden="true" className={className} />;
}

const UIDesignerIcon = iconComponent(`${ICON_BASE}/ui-design.svg`);
const UXDesignerIcon = iconComponent(`${ICON_BASE}/ux-designer.svg`);
const DesignHeadIcon = iconComponent(`${ICON_BASE}/design-head.svg`);
const FrontEndIcon = iconComponent(`${ICON_BASE}/frontend-developer.svg`);
const BackEndIcon = iconComponent(`${ICON_BASE}/backend-developer.svg`);
const FullStackIcon = iconComponent(`${ICON_BASE}/fullstack-developer.svg`);
const BaManagerIcon = iconComponent(`${ICON_BASE}/ba-manager.svg`);
const ProjectManagerIcon = iconComponent(`${ICON_BASE}/project-manager.svg`);
const HrManagerIcon = iconComponent(`${ICON_BASE}/hr-manager.svg`);
const QaTesterIcon = iconComponent(`${ICON_BASE}/qa-tester.svg`);
// Figma reuses the same "square-dashed-mouse-pointer" icon for SQL Tester and Manual
// Tester as it does for UI Design - not a mistake, the same asset three times.
const SqlTesterIcon = UIDesignerIcon;
const ManualTesterIcon = UIDesignerIcon;

const APPLY_HREF =
  "https://docs.google.com/forms/d/e/1FAIpQLScTgnb92nIaTh_c32DD-uLvnkiKI0p_V_4GBl4qxcPeb3UNSg/viewform?usp=header";

const JOB_CATEGORIES = [
  {
    category: "Design",
    jobs: [
      {
        title: "UI DESIGN",
        description: "Design intuitive and engaging user experiences for web and mobile application",
        Icon: UIDesignerIcon,
        applyHref: APPLY_HREF,
      },
      {
        title: "UX Designer",
        description: "Research, understand user needs, and create seamless experiences that solve real user problems.",
        Icon: UXDesignerIcon,
        applyHref: APPLY_HREF,
      },
      {
        title: "Design Head",
        description: "Lead the design vision, mentor designers, and build impactful digital experiences.",
        Icon: DesignHeadIcon,
        applyHref: APPLY_HREF,
      },
    ],
  },
  {
    category: "Development",
    jobs: [
      {
        title: "Front-End Developer",
        description: "Build responsive, interactive, and high-performing web experiences.",
        Icon: FrontEndIcon,
        applyHref: APPLY_HREF,
      },
      {
        title: "Back-End Developer",
        description: "Build secure, scalable, and reliable backend systems for modern applications.",
        Icon: BackEndIcon,
        applyHref: APPLY_HREF,
      },
      {
        title: "Full Stack Developer",
        description: "Build complete digital products across both front-end and back-end technologies.",
        Icon: FullStackIcon,
        applyHref: APPLY_HREF,
      },
    ],
  },
  {
    category: "Management",
    jobs: [
      {
        title: "BA Manager",
        description: "Drive business strategy, manage requirements, and align teams with business goals.",
        Icon: BaManagerIcon,
        applyHref: APPLY_HREF,
      },
      {
        title: "Project Manager",
        description: "Lead projects from planning to delivery while managing teams, timelines, and resources.",
        Icon: ProjectManagerIcon,
        applyHref: APPLY_HREF,
      },
      {
        title: "HR Manager",
        description: "Build strong teams, support employee growth, and create a positive workplace culture.",
        Icon: HrManagerIcon,
        applyHref: APPLY_HREF,
      },
    ],
  },
  {
    category: "QA",
    metaLabel: "Quality Assurance",
    jobs: [
      {
        title: "QA Tester",
        description: "Test digital products, identify issues, and ensure reliable, high-quality user experiences.",
        Icon: QaTesterIcon,
        applyHref: APPLY_HREF,
      },
      {
        title: "SQL Tester",
        description: "Validate databases, test data accuracy, and ensure reliable backend data operations.",
        Icon: SqlTesterIcon,
        applyHref: APPLY_HREF,
      },
      {
        title: "Manual Tester",
        description: "Perform detailed manual testing to identify bugs and ensure smooth product functionality.",
        Icon: ManualTesterIcon,
        applyHref: APPLY_HREF,
      },
    ],
  },
];

export default JOB_CATEGORIES;
