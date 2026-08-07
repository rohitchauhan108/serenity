export interface DoctorInfo {
  name: string;
  titles: string;
  degrees: string[];
  anccCertified: boolean;
  yearsExperience: string;
  doctorPortraitUrl?: string;
  bio: string[];
  specialties: string[];
  philosophy: string;
  education: {
    degree: string;
    institution: string;
    year?: string;
  }[];
  timeline: {
    year: string;
    title: string;
    description: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'evaluation' | 'medication' | 'therapy' | 'lifestage' | 'telehealth';
  shortDesc: string;
  fullDesc: string;
  keyBenefits: string[];
  iconName: string;
  isPopular?: boolean;
  imageUrl?: string;
}

export interface ConditionItem {
  id: string;
  name: string;
  category: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  color: string;
  imageUrl?: string;
}

export interface InsuranceItem {
  id: string;
  name: string;
  logoText: string;
  category: 'Public' | 'Commercial' | 'Private' | 'Self Pay';
  accepted: boolean;
  notes: string;
  badge: string;
}

export interface TestimonialItem {
  id: string;
  patientInitials: string;
  ageGroup: string;
  serviceReceived: string;
  rating: number;
  quote: string;
  location: string;
  date: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
  imageUrl: string;
}

export interface FaqItem {
  id: string;
  category: 'General' | 'Services' | 'Appointments' | 'Insurance & Fees' | 'Telehealth';
  question: string;
  answer: string;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  preferredDate: string;
  preferredTime: string;
  visitType: 'In-Person' | 'Telehealth';
  serviceType: string;
  insuranceProvider: string;
  subject: string;
  message: string;
  isEmergencyAcknowledged: boolean;
}
