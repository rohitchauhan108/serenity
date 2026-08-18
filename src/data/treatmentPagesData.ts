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
    image: 'https://i.pinimg.com/1200x/c3/4a/2d/c34a2d1172fc117f66f5e5d10e58418c.jpg',
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
    image: 'https://i.pinimg.com/1200x/21/da/5f/21da5fe0a458402197fe8c019bfbcf3a.jpg',
    overview: 'Individual sessions give you private space to talk, reflect, and work through what matters most to you.',
    highlights: ['Private setting', 'Personal goals', 'Focused support']
  },
  {
    slug: 'online-therapy',
    title: 'Online Therapy',
    summary: 'Virtual sessions that make care more accessible from home.',
    image: 'https://i.pinimg.com/736x/e2/89/d7/e289d7c7c4277b1514518c9d7b87b319.jpg',
    overview: 'Online therapy offers the same supportive conversation in a secure telehealth format.',
    highlights: ['Secure video visits', 'Convenient access', 'Same-day flexibility']
  },
  {
    slug: 'cognitive-behavioral-therapy',
    title: 'Cognitive Behavioral Therapy',
    summary: 'A practical approach to changing unhelpful thought and behavior patterns.',
    image: 'https://i.pinimg.com/1200x/5f/a8/ac/5fa8ace9079d9df4936e6a43f132053a.jpg',
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
    image: 'https://i.pinimg.com/1200x/9c/1b/59/9c1b592fc5e8e70953a2376c233e7487.jpg',
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
    image: 'https://i.pinimg.com/736x/d1/70/76/d170767aeaf788ba4f000df8294e4bc0.jpg',
    overview: 'Exposure therapy is paced carefully so fear can be addressed in a safe and structured way.',
    highlights: ['Gradual steps', 'Fear reduction', 'Safe pacing']
  },
  {
    slug: 'relaxation-and-lifestyle-changes',
    title: 'Relaxation and lifestyle changes',
    summary: 'Simple changes that support recovery, sleep, and stress management.',
    image: 'https://i.pinimg.com/1200x/b8/d6/c3/b8d6c32278cb028673812424ce6922af.jpg',
    overview: 'This treatment focuses on routine, rest, and practical habits that support wellness outside the office.',
    highlights: ['Sleep support', 'Stress reduction', 'Daily routines']
  },
 


];

export const TREATMENT_PAGE_MAP = Object.fromEntries(
  TREATMENT_PAGES.map((page) => [page.slug, page])
) as Record<string, TreatmentPageData>;