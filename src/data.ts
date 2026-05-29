import { 
  JourneyMilestone, 
  Skill, 
  ExperienceCard, 
  Certificate, 
  Service, 
  GalleryItem, 
  Testimonial 
} from './types';

export const PERSONAL_INFO = {
  name: "Hasara Mudalige",
  title: "Registered Nurse (BSN, RN)",
  headline: "Compassion in Every Care, Excellence in Every Moment",
  subheading: "Professional Nurse dedicated to patient wellbeing, healthcare excellence, and compassionate service. Guided by the healing calm of the sky and the steady strength of the ocean.",
  profileImage: "/her.png",
  email: "hasara.mudalige.rn@gmail.com",
  phone: "+1 (555) 321-4567",
  location: "San Diego, California (Coastal Medical Center)",
  bio: "Growing up by the Pacific shoreline, I learned early on that true healing requires both the depth of professional skill and the endless calmness of compassion. As a Bachelor of Science in Nursing (BSN) graduate and a registered nurse, I blend advanced clinical intelligence with a peaceful bedside presence, bringing hope and stability to patients and their families in critical situations.",
  stats: [
    { label: "Years of Experience", value: "6+" },
    { label: "Patients Cared For", value: "4,200+" },
    { label: "Clinical Certifications", value: "8" },
    { label: "Patient Satisfaction", value: "99%" }
  ]
};

export const SERVICES: Service[] = [
  {
    id: "serv_1",
    title: "Critical & Patient Care",
    description: "Proactive therapeutic interventions, meticulous patient assessment, and highly attentive health observation in acute care environments.",
    icon: "HeartPulse",
    glowColor: "from-ocean-blue to-aqua-glow",
    detailedFeatures: [
      "Continuous hemodynamic monitoring",
      "Surgical pre-op & post-op recovery management",
      "Comfort-focused holistic nursing protocols",
      "Pain management & titration"
    ]
  },
  {
    id: "serv_2",
    title: "Health & Vital Monitoring",
    description: "High-accuracy diagnostic recording, continuous vital sign evaluation, and early-warning symptom triage.",
    icon: "Activity",
    glowColor: "from-aqua-glow to-sky-blue",
    detailedFeatures: [
      "Advanced telemetry & ECG interpretation",
      "Biometric data modeling",
      "Pathology and laboratory sync",
      "Immediate response threshold triggers"
    ]
  },
  {
    id: "serv_3",
    title: "Emergency & Critical Support",
    description: "Rapid, calm decision-making for crisis stabilization, cardiac arrest protocols, and traumatic injury trauma suites.",
    icon: "ShieldAlert",
    glowColor: "from-deep-sea to-ocean-blue",
    detailedFeatures: [
      "ACLS & BLS certified code responses",
      "Trauma team collaboration",
      "Rapid airway management assist",
      "Intensive infusion coordination"
    ]
  },
  {
    id: "serv_4",
    title: "Health Education & Coaching",
    description: "Empowering patients and families with deep medical literacy, preventive wellness education, and self-care directions.",
    icon: "BookOpen",
    glowColor: "from-sky-blue to-cloud-white",
    detailedFeatures: [
      "Complex medication counseling",
      "Chronic lifestyle rehabilitation plans",
      "Dietary & mobility coaching",
      "Post-discharge home care adaptation"
    ]
  },
  {
    id: "serv_5",
    title: "Community & Coastal Care",
    description: "Bridging the gap between premier hospitals and local underserved communities, offering coastal outreach clinics and volunteer checkups.",
    icon: "Users",
    glowColor: "from-aqua-glow to-deep-sea",
    detailedFeatures: [
      "Mobile healing & checkup clinics",
      "Vaccination & immunity campaigns",
      "Hygiene & nutrition workshops",
      "Mental wellness advocacy"
    ]
  }
];

export const JOURNEY_TIMELINE: JourneyMilestone[] = [
  {
    id: "t_1",
    year: "2018",
    title: "BSN Graduation - UCSD",
    description: "Graduated with honors in Bachelor of Science in Nursing (BSN) from the University of California, San Diego, specializing in clinical triage.",
    category: "education",
    icon: "GraduationCap"
  },
  {
    id: "t_2",
    year: "2019",
    title: "Critical Care Nurse Resident",
    description: "Completed intensive residency program at Harbor-UCLA Medical Center, rotating through Trauma ER, Neurosurgical ICU, and General Surgery.",
    category: "experience",
    icon: "Briefcase"
  },
  {
    id: "t_3",
    year: "2021",
    title: "Registered Nurse - Coastal Care Hospital",
    description: "Appointed as staff nurse on a high-density medical-surgical and step-down unit. Initiated a 'Calm Environment' patient care project.",
    category: "experience",
    icon: "Stethoscope"
  },
  {
    id: "t_4",
    year: "2022",
    title: "CCRN & Trauma Certification",
    description: "Obtained CCRN (Critical Care Registered Nurse) board certification and Advanced Trauma Life Support credentials, rising to shift Charge Nurse.",
    category: "achievement",
    icon: "Award"
  },
  {
    id: "t_5",
    year: "2024",
    title: "Founder - Sound Healing & Coastal Nursing",
    description: "Launched an innovative local patient wellness circle that merges ocean soundscapes and mindful breathwork with clinical recoveries.",
    category: "value",
    icon: "Compass"
  }
];

export const SKILLS: Skill[] = [
  {
    id: "sk_1",
    name: "Patient Care & Comfort",
    description: "Delivering empathetic, pristine bedside treatment, pain adjustment, and premium standard therapeutic support.",
    proficiency: 98,
    islandSize: "lg",
    xOffset: -20,
    yOffset: -15,
    tags: ["Bedside Manner", "Wound Care", "Holistic Nursing"]
  },
  {
    id: "sk_2",
    name: "Emergency Triage & ACLS",
    description: "Executing swift life-support algorithms, defibrillation, and rapid patient stabilization in highly volatile environments.",
    proficiency: 95,
    islandSize: "lg",
    xOffset: 25,
    yOffset: -10,
    tags: ["ACLS", "BLS", "Crisis Action"]
  },
  {
    id: "sk_3",
    name: "Clinical Documentation",
    description: "Managing flawless Electronic Health Records (EHR/Epic), detailing intake telemetry metrics, and fluid balances.",
    proficiency: 92,
    islandSize: "md",
    xOffset: -30,
    yOffset: 20,
    tags: ["Epic EHR", "HIPAA Compliance", "Care Plans"]
  },
  {
    id: "sk_4",
    name: "Iv & Med Administration",
    description: "Precision dosage calculations, telemetry-locked drug interactions, and sterile intravenous line establishments.",
    proficiency: 96,
    islandSize: "md",
    xOffset: 30,
    yOffset: 15,
    tags: ["Intravenous Admin", "Pharmacology", "Syringe Pumps"]
  },
  {
    id: "sk_5",
    name: "Telemetry Integration",
    description: "Reading, analyzing, and detecting critical fluctuations in real-time electrocardiograms (ECGs) and invasive line monitoring.",
    proficiency: 90,
    islandSize: "sm",
    xOffset: -10,
    yOffset: 35,
    tags: ["ECG Interpretation", "Arterial Lines", "Vital Sync"]
  },
  {
    id: "sk_6",
    name: "Compassionate Communication",
    description: "Relieving intense patient and family anxiety through calm, jargon-free explanations, de-escalation, and serene listening.",
    proficiency: 99,
    islandSize: "lg",
    xOffset: 10,
    yOffset: 40,
    tags: ["Patient Relations", "Active Listening", "Anxiety Triage"]
  },
  {
    id: "sk_7",
    name: "Interdisciplinary Sync",
    description: "Coordinating seamless patient goals and therapeutic paths with physicians, pharmacists, therapists, and case managers.",
    proficiency: 94,
    islandSize: "sm",
    xOffset: 0,
    yOffset: -30,
    tags: ["Team Rounds", "Charge Nurse Sync", "SBAR Protocol"]
  }
];

export const EXPERIENCES: ExperienceCard[] = [
  {
    id: "exp_1",
    role: "Charge Nurse / Registered Nurse BSN",
    organization: "San Diego Coastal Medical Center - ICU Step-down",
    period: "2022 - Present",
    location: "San Diego, CA",
    type: "Hospital",
    description: "Supervise shift nursing schedules and direct immediate clinical care for a 24-bed telemetry and progressive coronary step-down unit.",
    achievements: [
      "Led a cross-functional ICU workflow project that reduced hospital re-admission rates by 14%.",
      "Regularly served as Shift Charge Nurse coordinating physician updates, pharmacy protocols, and SBAR Hand-off cycles.",
      "Developed and implemented a coastal calming noise program shown to reduce post-surgical patient heartrate variability by 8%."
    ],
    skillsApplied: ["Hemodynamic Monitoring", "Crisis Management", "SBAR Protocol", "Staff Mentorship"],
    colorTheme: "from-sky-blue to-ocean-blue"
  },
  {
    id: "exp_2",
    role: "Registered Nurse - Emergency Services",
    organization: "Westside Community Health & Urgent Care",
    period: "2020 - 2022",
    location: "Los Angeles, CA",
    type: "Clinic",
    description: "Provided rapid diagnosis and crisis action for high-acuity pediatric, general, and geriatric patient panels.",
    achievements: [
      "Pioneered a bilingual digital intake framework that lowered patient check-in wait times from 35 to 14 minutes.",
      "Coordinated with paramedic transit teams to ensure flawless telemetry synchronization upon trauma room entry.",
      "Conducted daily acute care triage on critical chest pains, respiratory trauma, and multi-system failures."
    ],
    skillsApplied: ["Trauma Triage", "Rapid IV Access", "Patient Interrogation", "EKG Telemetry"],
    colorTheme: "from-aqua-glow to-sky-blue"
  },
  {
    id: "exp_3",
    role: "Clinical Director (Volunteer)",
    organization: "Coastal Healing Outreach Circle",
    period: "2021 - Present",
    location: "Pacific Beach, CA",
    type: "Volunteer",
    description: "Providing pro-bono healthcare tracking, preventative checks, and nutritional education to homeless beachside populations.",
    achievements: [
      "Organized bi-weekly beach shelter pop-up clinics offering basic blood-pressure readings, glucose screeners, and wound dressing kits.",
      "Earned the Local Clinical Excellence Hero honor in 2023 for serving over 1,200 individuals.",
      "Partnered with local mental health clinics to establish direct, secure warm-hand-off networks for dual-diagnosis clients."
    ],
    skillsApplied: ["Wound Dressing", "Public Advocacy", "Diagnostic Screening", "Compassion Counseling"],
    colorTheme: "from-ocean-blue to-deep-sea"
  },
  {
    id: "exp_4",
    role: "Wellness Advocate & Nursing Director",
    organization: "Youth Ocean Athletics Camps",
    period: "2019 - 2021",
    location: "Carlsbad, CA",
    type: "Community",
    description: "Oversaw health screening registers, medical clearance procedures, and allergy tracking rosters for over 400 youth surfers.",
    achievements: [
      "Maintained a zero-incident medical emergency profile across 3 summers of high-intensity water rescue protocols.",
      "Conducted beach-safety CPR seminars for counselors, children, and parents to encourage life-saving literacy.",
      "Optimized epinephrine emergency readiness suites, ensuring 100% medication compliance."
    ],
    skillsApplied: ["Youth Wellness", "Water Safety Triage", "Allergy Management", "BLS Instructions"],
    colorTheme: "from-deep-sea to-sky-blue"
  }
];

export const CERTIFICATIONS: Certificate[] = [
  {
    id: "cert_1",
    title: "Critical Care Registered Nurse (CCRN)",
    issuer: "American Association of Critical-Care Nurses (AACN)",
    date: "Jul 2022",
    credentialId: "CCRN-RN-88091",
    image: "/images/cert_ccrn_1780073800977.png",
    highlightColor: "border-sky-blue shadow-sky-blue/20"
  },
  {
    id: "cert_2",
    title: "Advanced Cardiac Life Support (ACLS)",
    issuer: "American Heart Association (AHA)",
    date: "Jan 2019 (Renewed 2025)",
    credentialId: "AHA-ACLS-5541",
    image: "/images/cert_acls_1780073823683.png",
    highlightColor: "border-aqua-glow shadow-aqua-glow/20"
  },
  {
    id: "cert_3",
    title: "Pediatric Advanced Life Support (PALS)",
    issuer: "American Heart Association (AHA)",
    date: "Mar 2021 (Renewed 2025)",
    credentialId: "AHA-PALS-9022",
    image: "/images/cert_pals_1780073851341.png",
    highlightColor: "border-ocean-blue shadow-ocean-blue/20"
  },
  {
    id: "cert_4",
    title: "Trauma Nursing Core Course (TNCC)",
    issuer: "Emergency Nurses Association (ENA)",
    date: "Nov 2021",
    credentialId: "ENA-TNCC-11029",
    image: "/images/cert_tncc_1780073871011.png",
    highlightColor: "border-deep-sea shadow-deep-sea/20"
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "g_1",
    url: "/images/gallery_1_1780073905228.png",
    title: "Precision in Action",
    subtitle: "Setting up continuous arterial line monitors with surgical sterility.",
    aspectRatio: "wide"
  },
  {
    id: "g_2",
    url: "/images/gallery_2_1780073930426.png",
    title: "Compassionate Presence",
    subtitle: "Explaining rehabilitation pathways to a surgical patient post-recovery.",
    aspectRatio: "tall"
  },
  {
    id: "g_3",
    url: "/images/gallery_3_1780073952865.png",
    title: "Telemetry Sync Center",
    subtitle: "Continuous real-time analysis of vital heart wave parameters.",
    aspectRatio: "square"
  },
  {
    id: "g_4",
    url: "/images/gallery_4_1780073972243.png",
    title: "Mobile Healing Tides",
    subtitle: "Setting up our ocean-side community clinical checkups for locals.",
    aspectRatio: "wide"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test_1",
    quote: "Hasara is a beacon of tranquility. During my father's triple-bypass recovery inside the step-down wing, her calmness kept our family anchored. She isn't just an exceptionally smart nurse; she is a healing force.",
    author: "Christopher Vance",
    designation: "Son of Coronary Patient",
    relation: "Patient's Family Member",
    avatarSeed: "christopher",
    date: "April 2026"
  },
  {
    id: "test_2",
    quote: "Hasara couples high clinical knowledge with extreme personal care. When she handles SBAR reporting or charge rounds, her telemetry briefings are flawlessly precise. She is an absolute credit to her nursing uniform.",
    author: "Dr. Alistair Vance, MD",
    designation: "Chief Medical Officer of Cardiology",
    relation: "Direct Clinical Supervisor",
    avatarSeed: "alistair",
    date: "May 2026"
  },
  {
    id: "test_3",
    quote: "During my emergency trauma admission, my chest pain levels were sky-high, and I was terrified. Hasara grabbed my hand, looked at me with this oceanic stillness, stabilized my breathing, and safely took charge of my triage. I will never forget her.",
    author: "Sarah Lindquist",
    designation: "Cardiac Urgent Care Patient",
    relation: "Acute Care Patient",
    avatarSeed: "sarah",
    date: "February 2026"
  }
];
