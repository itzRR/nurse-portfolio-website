import React from 'react';
import { 
  HeartPulse, 
  Activity, 
  ShieldAlert, 
  BookOpen, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Stethoscope, 
  Award, 
  Compass,
  Sun,
  Moon,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  FileText,
  ExternalLink,
  Calendar,
  Heart,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Navigation,
  Send,
  Loader2,
  User,
  Coffee,
  Waves
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', size = 20 }) => {
  const map: Record<string, React.ComponentType<any>> = {
    HeartPulse,
    Activity,
    ShieldAlert,
    BookOpen,
    Users,
    GraduationCap,
    Briefcase,
    Stethoscope,
    Award,
    Compass,
    Sun,
    Moon,
    Menu,
    X,
    Mail,
    Phone,
    MapPin,
    FileText,
    ExternalLink,
    Calendar,
    Heart,
    Sparkles,
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    Navigation,
    Send,
    Loader2,
    User,
    Coffee,
    Waves
  };

  const Component = map[name] || Heart; // Defensively fallback to Head / Heart
  return <Component className={className} size={size} />;
};
