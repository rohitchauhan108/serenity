export interface TreatmentPageData {
  slug: string;
  title: string;
  summary: string;
  image: string;
  overview: string;
  highlights: string[];
}

export const TREATMENT_PAGES: TreatmentPageData[] = [
  {
    slug: 'psychiatric-evaluation',
    title: 'Psychiatric Evaluation',
    summary: 'A thorough assessment to understand symptoms, history, and next steps.',
    image: 'https://i.pinimg.com/736x/49/d9/b4/49d9b4b04f6428e4a8c4880722eecdf5.jpg',
    overview: 'We meet with you to review your concerns, history, and goals so the treatment plan starts with clear understanding.',
    highlights: ['Comprehensive intake', 'Clear diagnosis planning', 'Next-step recommendations']
  },
  {
    slug: 'medication-management',
    title: 'Medication Management',
    summary: 'Ongoing review and adjustment of psychiatric medication when clinically appropriate.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1600&q=80',
    overview: 'Medication visits focus on safety, response, and steady follow-up so treatment stays aligned with your needs.',
    highlights: ['Medication review', 'Dose adjustments', 'Side-effect monitoring']
  },
  {
    slug: 'treatment-for-substance-abuse-and-dependence',
    title: 'Treatment for Substance Abuse',
    summary: 'Support for substance-related concerns, recovery planning, and relapse prevention.',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1600&q=80',
    overview: 'Care is centered on honest discussion, supportive planning, and practical follow-up around substance use and recovery.',
    highlights: ['Recovery planning', 'Trigger review', 'Supportive follow-up']
  },
  {
    slug: 'therapy-services',
    title: 'Therapy Services',
    summary: 'Therapy options that help with coping, communication, and emotional support.',
    image: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=1600&q=80',
    overview: 'Therapy services are available for people who want structured support, reflection, and tools for daily life.',
    highlights: ['Therapeutic support', 'Goal-based sessions', 'Flexible approach']
  },
  {
    slug: 'individual-therapy',
    title: 'Individual Therapy',
    summary: 'One-on-one sessions focused on your personal goals and concerns.',
    image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=1600&q=80',
    overview: 'Individual sessions give you private space to talk, reflect, and work through what matters most to you.',
    highlights: ['Private setting', 'Personal goals', 'Focused support']
  },
  {
    slug: 'online-therapy',
    title: 'Online Therapy',
    summary: 'Virtual sessions that make care more accessible from home.',
    image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1600&q=80',
    overview: 'Online therapy offers the same supportive conversation in a secure telehealth format.',
    highlights: ['Secure video visits', 'Convenient access', 'Same-day flexibility']
  },
  {
    slug: 'cognitive-behavioral-therapy',
    title: 'Cognitive Behavioral Therapy',
    summary: 'A practical approach to changing unhelpful thought and behavior patterns.',
    image: 'https://images.unsplash.com/photo-1522098543979-ffc7f79f9b8b?auto=format&fit=crop&w=1600&q=80',
    overview: 'CBT uses structured strategies to help you notice patterns, practice new responses, and build healthier habits.',
    highlights: ['Thought patterns', 'Behavior change', 'Skill building']
  },
  {
    slug: 'group-therapy',
    title: 'Group Therapy',
    summary: 'Guided group sessions with shared learning and support.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80',
    overview: 'Group therapy brings people together in a supportive setting to learn, practice, and connect.',
    highlights: ['Shared support', 'Guided sessions', 'Learning together']
  },
  {
    slug: 'family-and-couples-therapy',
    title: 'Family & Couples Therapy',
    summary: 'Support for communication, conflict, and relationship repair.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=80',
    overview: 'Family and couples sessions focus on healthier communication and better understanding between people.',
    highlights: ['Communication', 'Conflict support', 'Relationship repair']
  },
  {
    slug: 'dialectical-behavior-therapy',
    title: 'Dialectical Behavior Therapy',
    summary: 'Skills for emotion regulation, distress tolerance, and relationships.',
    image: 'https://images.unsplash.com/photo-1512341689857-6438e9415164?auto=format&fit=crop&w=1600&q=80',
    overview: 'DBT is structured around practical skills that help manage strong emotions and reactions.',
    highlights: ['Emotion regulation', 'Distress tolerance', 'Relationship skills']
  },
  {
    slug: 'mindfulness-based-interventions',
    title: 'Mindfulness-based Interventions',
    summary: 'Mind-body practices that support calm and attention.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80',
    overview: 'Mindfulness-based work helps you slow down, notice stress, and stay more present in daily life.',
    highlights: ['Breathing work', 'Present-moment focus', 'Grounding tools']
  },
  {
    slug: 'exposure-therapy',
    title: 'Exposure Therapy',
    summary: 'A gradual approach to reducing fear and avoidance.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80',
    overview: 'Exposure therapy is paced carefully so fear can be addressed in a safe and structured way.',
    highlights: ['Gradual steps', 'Fear reduction', 'Safe pacing']
  },
  {
    slug: 'relaxation-and-lifestyle-changes',
    title: 'Relaxation and lifestyle changes',
    summary: 'Simple changes that support recovery, sleep, and stress management.',
    image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=1600&q=80',
    overview: 'This treatment focuses on routine, rest, and practical habits that support wellness outside the office.',
    highlights: ['Sleep support', 'Stress reduction', 'Daily routines']
  },
  {
    slug: 'substance-abuse',
    title: 'Substance Abuse',
    summary: 'Care that focuses on substance use concerns and support needs.',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1600&q=80',
    overview: 'This page keeps the focus on substance use concerns, safety, and recovery support.',
    highlights: ['Use patterns', 'Support planning', 'Recovery focus']
  },
  {
    slug: 'psychiatric-rehabilitation-program-prp',
    title: 'Psychiatric Rehabilitation Program (PRP)',
    summary: 'Skill-building support for daily functioning and community stability.',
    image: 'https://images.unsplash.com/photo-1529692236671-f1a09b4f4c3c?auto=format&fit=crop&w=1600&q=80',
    overview: 'PRP support is designed to help with routine, independence, and practical life skills.',
    highlights: ['Daily living skills', 'Community support', 'Structured goals']
  },
  {
    slug: 'partial-hospitalization-program',
    title: 'Partial Hospitalization Program',
    summary: 'Higher-support care for patients who need more than standard outpatient visits.',
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1600&q=80',
    overview: 'PHP is a more intensive option for people who need frequent, structured treatment during recovery.',
    highlights: ['Higher support level', 'Frequent visits', 'Structured treatment']
  },
  {
    slug: 'intensive-outpatient-program-iop',
    title: 'Intensive Outpatient Program (IOP)',
    summary: 'A structured outpatient option with more support than routine therapy.',
    image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=1600&q=80',
    overview: 'IOP provides steady support while still letting patients live at home and keep daily responsibilities.',
    highlights: ['Structured outpatient care', 'More frequent sessions', 'Home-based recovery']
  }
];

export const TREATMENT_PAGE_MAP = Object.fromEntries(
  TREATMENT_PAGES.map((page) => [page.slug, page])
) as Record<string, TreatmentPageData>;