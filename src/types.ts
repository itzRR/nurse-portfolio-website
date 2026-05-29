export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
  category: 'education' | 'experience' | 'value' | 'achievement';
  icon: string; // lucide icon name
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  proficiency: number; // percentage
  islandSize: 'sm' | 'md' | 'lg'; // for styling floating islands
  xOffset: number; // visual layout positions
  yOffset: number;
  tags: string[];
}

export interface ExperienceCard {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Hospital' | 'Clinic' | 'Community' | 'Volunteer';
  description: string;
  achievements: string[];
  skillsApplied: string[];
  colorTheme: string; // for subtle gradient borders
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image: string; // Unsplash placeholder URL or graphic representation
  highlightColor: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  detailedFeatures: string[];
  glowColor: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  subtitle: string;
  aspectRatio: 'square' | 'wide' | 'tall';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  designation: string;
  relation: string; // e.g. "Patient's Family", "Head Nurse", etc.
  avatarSeed: string; // for picsum or dicebear
  date: string;
}
