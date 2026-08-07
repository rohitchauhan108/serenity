import {
  DoctorInfo,
  ServiceItem,
  ConditionItem,
  InsuranceItem,
  TestimonialItem,
  BlogPost,
  FaqItem
} from '../types';

export const CLINIC_INFO = {
  name: 'Serenity Behavioral & Wellness Services LLC',
  shortName: 'Serenity Behavioral',
  location: 'Maryland, USA',
  address: '8830 Stanford Blvd, Suite 210, Columbia, MD 21045',
  phone: '(410) 555-0198',
  altPhone: '(443) 555-7821',
  email: 'info@serenitybws.com',
  workingHours: [
    { days: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
    { days: 'Saturday', hours: '9:00 AM – 2:00 PM (Telehealth Only)' },
    { days: 'Sunday', hours: 'Closed' }
  ],
  crisisNotice: 'If you or someone you know is in immediate crisis or experiencing a psychiatric emergency, please call or text 988 to reach the Suicide & Crisis Lifeline, or dial 911 immediately.',
  doctorPortraitUrl: '/Dr-barbara-clement-njoku.webp',
  heroBannerUrl: 'https://images.unsplash.com/photo-1620610275387-d744a57b2f1d?auto=format&fit=crop&w=1600&q=80',
  logoUrl: '/logo.png',
  telehealthBannerUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1600&q=80'
};

export const DOCTOR_DATA: DoctorInfo = {
  name: 'Dr. Barbara Clement Njoku',
  titles: 'DNP, APRN, PMHNP-BC',
  degrees: ['Doctor of Nursing Practice (DNP)', 'Master of Science in Nursing (MSN)', 'PMHNP-BC Board Certified'],
  anccCertified: true,
  yearsExperience: '12+ Years Clinical Excellence',
  doctorPortraitUrl: '/Dr-barbara-clement-njoku.webp',
  bio: [
    'Dr. Barbara Clement Njoku, DNP, APRN, PMHNP-BC, is a board-certified Psychiatric-Mental Health Nurse Practitioner dedicated to delivering compassionate, evidence-based mental health care to individuals and families across the lifespan.',
    'She earned her Doctor of Nursing Practice degree and is certified by the American Nurses Credentialing Center (ANCC), bringing advanced clinical expertise to the assessment, diagnosis, and treatment of psychiatric and behavioral health conditions.',
    'Since beginning her healthcare career in 2012, Dr. Njoku has cultivated extensive clinical experience across diverse healthcare settings, including inpatient psychiatric units, outpatient behavioral clinics, and crisis stabilization centers.',
    'Through advanced psychiatric training and collaboration with experienced psychiatrists, she has developed a patient-centered treatment philosophy that combines clinical excellence with empathetic, non-judgmental care.',
    'Dr. Njoku is deeply passionate about reducing mental health stigma while empowering individuals and families in Maryland to achieve lasting emotional wellness and balance.'
  ],
  specialties: [
    'Comprehensive Psychiatric Evaluations',
    'Evidence-Based Medication Management',
    'Individualized Treatment Planning',
    'Anxiety & Panic Disorder Therapy',
    'Depression & Mood Disorders',
    'ADHD Diagnostic & Care Strategies',
    'Trauma-Informed PTSD Support',
    'Lifespan Psychiatry (Pediatric to Geriatric)'
  ],
  philosophy: 'Every mind possesses an innate capacity for healing when provided with compassionate guidance, scientific rigor, and a safe, respectful therapeutic alliance. Mental healthcare should empower—never label.',
  education: [
    {
      degree: 'Doctor of Nursing Practice (DNP) - Psychiatric Mental Health Specialty',
      institution: 'University of Maryland School of Nursing',
      year: '2019'
    },
    {
      degree: 'Post-Master’s PMHNP Certificate',
      institution: 'Johns Hopkins University School of Nursing',
      year: '2016'
    },
    {
      degree: 'Bachelor of Science in Nursing (BSN)',
      institution: 'Towson University',
      year: '2012'
    }
  ],
  timeline: [
    {
      year: '2012',
      title: 'Beginning of Clinical Nursing Journey',
      description: 'Began specialized patient care in acute medical-surgical and psychiatric observation units.'
    },
    {
      year: '2016',
      title: 'ANCC PMHNP-BC Board Certification',
      description: 'Completed advanced psychiatric nurse practitioner training and achieved national ANCC certification.'
    },
    {
      year: '2019',
      title: 'Doctor of Nursing Practice (DNP) Attainment',
      description: 'Completed doctoral research on integrated psychiatric evaluation protocols and outcome measurement.'
    },
    {
      year: '2021',
      title: 'Founding of Serenity Behavioral & Wellness Services',
      description: 'Established a premier Maryland mental health practice delivering holistic, patient-centered care.'
    },
    {
      year: 'Present',
      title: 'Expanding Maryland Telehealth & Community Advocacy',
      description: 'Serving hundreds of Maryland residents with accessible in-person and HIPAA-compliant telehealth services.'
    }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'psychiatric-evaluation',
    title: 'Comprehensive Psychiatric Evaluation',
    category: 'evaluation',
    shortDesc: 'In-depth clinical assessment examining medical history, psychological symptoms, and lifestyle to form an accurate diagnosis.',
    fullDesc: 'Our psychiatric evaluation is a thorough, empathetic 60-90 minute diagnostic consultation. Dr. Njoku carefully assesses emotional health, psychiatric history, medical co-factors, family history, and personal strengths to craft a accurate diagnostic foundation.',
    keyBenefits: ['60-90 minute thorough consultation', 'Evidence-based diagnostic criteria (DSM-5-TR)', 'Rule out underlying physical conditions', 'Collaborative formulation of next steps'],
    iconName: 'ClipboardCheck',
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'medication-management',
    title: 'Psychiatric Medication Management',
    category: 'medication',
    shortDesc: 'Safe, meticulous pharmacological prescribing, dosage optimization, and ongoing monitoring tailored to your unique biology.',
    fullDesc: 'Medication can be a transformative tool when prescribed thoughtfully. We conduct rigorous monitoring for effectiveness, side effect management, and drug interactions, prioritizing the lowest effective dose.',
    keyBenefits: ['Precision dosing & safety monitoring', 'GeneSight pharmacogenomic compatibility checks', 'Regular follow-up appointments', 'Minimization of side effects'],
    iconName: 'Pill',
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'anxiety-treatment',
    title: 'Anxiety & Panic Disorder Care',
    category: 'therapy',
    shortDesc: 'Targeted interventions to soothe racing thoughts, physical panic symptoms, generalized anxiety, and social phobias.',
    fullDesc: 'Chronic anxiety wears down mind and body. We combine cognitive behavioral strategies, physiological regulation techniques, and medication when appropriate to restore peace and calm focus.',
    keyBenefits: ['Panic attack relief tools', 'Cognitive restructuring', 'Social anxiety confidence building', 'Somatic relaxation techniques'],
    iconName: 'HeartPulse',
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'depression-treatment',
    title: 'Depression & Mood Disorder Care',
    category: 'therapy',
    shortDesc: 'Holistic care for major depressive disorder, persistent sadness, postpartum depression, and seasonal affective disorder.',
    fullDesc: 'Depression is not a weakness; it is a treatable medical condition. Dr. Njoku provides compassionate pathways out of emotional numbness and fatigue back to vitality and joy.',
    keyBenefits: ['Relief from chronic emotional heaviness', 'Sleep and energy optimization', 'Neurochemical balance restoration', 'Relapse prevention strategies'],
    iconName: 'Sun',
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'bipolar-disorder',
    title: 'Bipolar Disorder Care Management',
    category: 'medication',
    shortDesc: 'Specialized mood stabilization, relapse prevention, and psychoeducation for Bipolar I, Bipolar II, and Cyclothymia.',
    fullDesc: 'Stabilizing mood swings requires nuanced clinical expertise. We build structured treatment routines, mood monitoring logs, and targeted mood stabilizer management.',
    keyBenefits: ['Mood stabilization protocols', 'Early warning sign identification', 'Sleep-wake schedule regulation', 'Family support integration'],
    iconName: 'Activity',
    isPopular: false,
    imageUrl: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'adhd-treatment',
    title: 'ADHD Assessment & Care (Adult & Child)',
    category: 'evaluation',
    shortDesc: 'Comprehensive neurodevelopmental screening, focus enhancement strategies, and non-stimulant or stimulant medication management.',
    fullDesc: 'Attention-Deficit/Hyperactivity Disorder affects executive function at all ages. We offer structured diagnostic evaluations and multi-modal treatment plans for work, school, and home success.',
    keyBenefits: ['Objective diagnostic screening', 'Executive function coaching concepts', 'Tailored medication management', 'Work & academic accommodation guidance'],
    iconName: 'Zap',
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ptsd-trauma',
    title: 'PTSD & Trauma Therapy',
    category: 'therapy',
    shortDesc: 'Trauma-informed care providing a safe space to process traumatic experiences, hypervigilance, and emotional triggers.',
    fullDesc: 'Trauma alters nervous system responsiveness. Through gentle, trauma-informed psychiatric care, we help patients reclaim safety, emotional grounding, and resilience.',
    keyBenefits: ['Nervous system desensitization support', 'Nightmare and intrusion management', 'Safe, supportive therapeutic alliance', 'Somatic & cognitive coping methods'],
    iconName: 'Shield',
    isPopular: false,
    imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'mood-disorders',
    title: 'Specialized Mood Disorder Care',
    category: 'therapy',
    shortDesc: 'Expert clinical care for persistent depressive disorder, premenstrual dysphoric disorder (PMDD), and mood dysregulation.',
    fullDesc: 'Comprehensive care for complex mood fluctuations influenced by hormonal shifts, life transitions, or biological neurochemistry.',
    keyBenefits: ['Hormonal-mood link evaluation', 'Targeted pharmacological balancing', 'Symptom tracking calendar tools', 'Holistic lifestyle integration'],
    iconName: 'Sparkles',
    isPopular: false,
    imageUrl: 'https://images.pexels.com/photos/23496451/pexels-photo-23496451.jpeg'
  },
  {
    id: 'behavioral-therapy',
    title: 'Supportive & Behavioral Therapy',
    category: 'therapy',
    shortDesc: 'Goal-oriented behavioral counseling to reframe negative thought patterns, strengthen coping skills, and build healthy habits.',
    fullDesc: 'Complementing psychiatric care with cognitive-behavioral principles (CBT) and solution-focused techniques to foster emotional resilience.',
    keyBenefits: ['Actionable daily coping mechanisms', 'Stress resilience building', 'Boundary setting & communication', 'Habit reformation support'],
    iconName: 'Brain',
    isPopular: false,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'child-adolescent-psychiatry',
    title: 'Child & Adolescent Psychiatry',
    category: 'lifestage',
    shortDesc: 'Gentle, age-appropriate psychiatric assessments and treatment for children, teens, and young adults facing mental health struggles.',
    fullDesc: 'Young minds encounter unique developmental challenges. We partner closely with parents and schools to support emotional growth, school focus, and behavioral wellness.',
    keyBenefits: ['Family-centered approach', 'Pediatric diagnostic sensitivity', 'Academic & social stress care', 'Gentle pediatric medication protocols'],
    iconName: 'Smile',
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'adult-psychiatry',
    title: 'Adult Psychiatry',
    category: 'lifestage',
    shortDesc: 'Dedicated mental health care for working adults navigating career burnout, life changes, relationship strain, and psychiatric conditions.',
    fullDesc: 'Balanced mental health is essential for thriving in adult life. We offer confidential, flexible care that fits demanding professional schedules.',
    keyBenefits: ['Burnout and chronic stress management', 'Flexible appointment times', 'Strict confidentiality guarantee', 'Comprehensive health integration'],
    iconName: 'UserCheck',
    isPopular: false,
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'geriatric-psychiatry',
    title: 'Geriatric Psychiatry',
    category: 'lifestage',
    shortDesc: 'Compassionate psychiatric support tailored to seniors experiencing memory changes, late-life depression, or grief.',
    fullDesc: 'Aging brings profound transitions. We provide gentle psychiatric care that accounts for polypharmacy, physical health conditions, and cognitive wellness.',
    keyBenefits: ['Polypharmacy interaction checks', 'Caregiver coordination', 'Memory & mood stabilization', 'Comfortable telehealth or clinic visits'],
    iconName: 'HeartHandshake',
    isPopular: false,
    imageUrl: 'https://images.unsplash.com/photo-1581579438747-1dc8d1e292c7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'telehealth-care',
    title: 'HIPAA-Compliant Telehealth Services',
    category: 'telehealth',
    shortDesc: 'Secure, high-definition virtual psychiatric appointments from the comfort, privacy, and safety of your home across Maryland.',
    fullDesc: 'Quality mental healthcare should have zero barriers. Our secure video platform allows you to attend evaluations and medication follow-ups from anywhere in Maryland.',
    keyBenefits: ['No commute or waiting room stress', 'Encrypting HIPAA-compliant video', 'E-prescriptions sent directly to pharmacy', 'Easy smartphone or computer access'],
    iconName: 'Video',
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'followup-care',
    title: 'Continuous Follow-Up Care',
    category: 'medication',
    shortDesc: 'Structured 20-30 minute check-ins to evaluate treatment progress, adjust dosages, and ensure long-term stability.',
    fullDesc: 'Mental wellness is an ongoing journey. Regular follow-up sessions ensure your treatment plan evolves seamlessly as your life and health progress.',
    keyBenefits: ['Progress tracking & symptom scoring', 'Timely prescription renewals', 'Open line for patient questions', 'Sustained emotional wellness'],
    iconName: 'Clock',
    isPopular: false,
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'treatment-planning',
    title: 'Individualized Treatment Planning',
    category: 'evaluation',
    shortDesc: 'Custom roadmap integrating psychiatric care, lifestyle modification, therapy goals, and wellness routines.',
    fullDesc: 'No two individuals are identical. Every client receives a written, personalized treatment blueprint matching their values, culture, and personal goals.',
    keyBenefits: ['Client-centered goal setting', 'Multi-disciplinary coordination', 'Clear milestones and timeline', 'Empathetic empowerment'],
    iconName: 'FileText',
    isPopular: false,
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'holistic-wellness',
    title: 'Holistic Wellness Counseling',
    category: 'therapy',
    shortDesc: 'Integrating sleep hygiene, nutrition awareness, mindfulness practices, and stress mitigation into psychiatric care.',
    fullDesc: 'True mental health encompasses mind, body, and spirit. We complement clinical treatments with evidence-based lifestyle medicine principles.',
    keyBenefits: ['Sleep architecture restoration', 'Nutritional psychiatry insights', 'Mindfulness & stress reduction', 'Sustained lifestyle balance'],
    iconName: 'Feather',
    isPopular: false,
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80'
  }
];

export const CONDITIONS_DATA: ConditionItem[] = [
  {
    id: 'anxiety',
    name: 'Anxiety Disorders',
    category: 'Mood & Emotional',
    description: 'Persistent, excessive worry, panic attacks, or social fear that interferes with daily functioning.',
    symptoms: ['Racing heartbeat', 'Restlessness', 'Muscle tension', 'Overthinking', 'Sleep disturbances'],
    treatments: ['Psychiatric Evaluation', 'Cognitive Restructuring', 'Anxiolytic / SSRI Medication', 'Breathwork'],
    color: 'from-teal-500/10 to-emerald-500/20 border-teal-200',
    imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'depression',
    name: 'Depression',
    category: 'Mood & Emotional',
    description: 'Profound, lingering sadness, loss of interest in activities, fatigue, and low motivation.',
    symptoms: ['Persistent low mood', 'Fatigue / low energy', 'Feelings of worthlessness', 'Changes in appetite', 'Concentration loss'],
    treatments: ['Medication Management', 'Behavioral Activation', 'Lifestyle Guidance', 'Supportive Therapy'],
    color: 'from-blue-500/10 to-cyan-500/20 border-blue-200',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'stress',
    name: 'Chronic Stress & Burnout',
    category: 'Lifestyle & Wellness',
    description: 'Physical and emotional exhaustion caused by prolonged, unmanaged life or professional demands.',
    symptoms: ['Brain fog', 'Irritability', 'Insomnia', 'Frequent headaches', 'Emotional detachment'],
    treatments: ['Stress Mitigation Plans', 'Somatic Relaxation', 'Sleep Hygiene', 'Work-Life Rebalancing'],
    color: 'from-amber-500/10 to-orange-500/20 border-amber-200',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ptsd',
    name: 'PTSD & Trauma',
    category: 'Trauma & Stressor',
    description: 'Condition triggered by experiencing or witnessing terrifying events, causing intrusions and arousal.',
    symptoms: ['Flashbacks', 'Nightmares', 'Hypervigilance', 'Emotional numbness', 'Avoidance of triggers'],
    treatments: ['Trauma-Informed Care', 'Somatic Regulation', 'Targeted Medication', 'Safety Planning'],
    color: 'from-purple-500/10 to-indigo-500/20 border-purple-200',
    imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'adhd',
    name: 'ADHD & Focus Issues',
    category: 'Neurodevelopmental',
    description: 'Difficulty sustaining focus, organization challenges, restlessness, and impulsivity across settings.',
    symptoms: ['Inattention to detail', 'Frequent misplacement of items', 'Restlessness', 'Time blindness', 'Procrastination'],
    treatments: ['ADHD Diagnostic Assessment', 'Targeted Prescribing', 'Executive Function Skills', 'Work Accommodations'],
    color: 'from-sky-500/10 to-teal-500/20 border-sky-200',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ocd',
    name: 'Obsessive-Compulsive Disorder (OCD)',
    category: 'Anxiety & Obsessive',
    description: 'Pattern of unwanted thoughts (obsessions) that drive repetitive behaviors (compulsions).',
    symptoms: ['Intrusive thoughts', 'Repetitive checking/washing', 'Need for exact symmetry', 'Intense anxiety when rituals disrupted'],
    treatments: ['Serotonergic Medication', 'Exposure Support', 'Cognitive Reframing', 'Family Psychoeducation'],
    color: 'from-rose-500/10 to-pink-500/20 border-rose-200',
    imageUrl: 'https://images.unsplash.com/photo-1499209974431-9dac3ada00d7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mood-disorders',
    name: 'Mood Dysregulation',
    category: 'Mood & Emotional',
    description: 'Unpredictable, intense emotional shifts that strain personal relationships and daily stability.',
    symptoms: ['Rapid mood swings', 'Irritability', 'Emotional sensitivity', 'Impulsive reactions'],
    treatments: ['Mood Stabilizers', 'Emotion Regulation Techniques', 'Routine Building', 'Psychiatric Follow-ups'],
    color: 'from-violet-500/10 to-purple-500/20 border-violet-200',
    imageUrl: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bipolar',
    name: 'Bipolar Spectrum Disorders',
    category: 'Mood & Emotional',
    description: 'Alternating episodes of high energy (mania/hypomania) and severe depressive lows.',
    symptoms: ['Decreased need for sleep during highs', 'Racing thoughts', 'Impulsive decisions', 'Deep depressive crashes'],
    treatments: ['Precision Mood Stabilization', 'Circadian Rhythm Therapy', 'Relapse Prevention', 'Family Support'],
    color: 'from-emerald-500/10 to-teal-500/20 border-emerald-200',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'insomnia',
    name: 'Insomnia & Sleep Disturbances',
    category: 'Somatic & Sleep',
    description: 'Inability to fall asleep, stay asleep, or obtain restorative sleep, exacerbating mood symptoms.',
    symptoms: ['Daytime sleepiness', 'Difficulty falling asleep', 'Frequent night awakenings', 'Early morning waking'],
    treatments: ['CBT for Insomnia concepts', 'Sleep Architecture Review', 'Non-habit forming Meds', 'Circadian Reset'],
    color: 'from-indigo-500/10 to-blue-500/20 border-indigo-200',
    imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'trauma',
    name: 'Complex & Developmental Trauma',
    category: 'Trauma & Stressor',
    description: 'Long-term impacts of early childhood adversity, relational trauma, or prolonged stress.',
    symptoms: ['Chronic self-doubt', 'Difficulty trusting others', 'Emotional dysregulation', 'Physical tension'],
    treatments: ['Compassionate Relational Therapy', 'Somatic Grounding', 'Custom Medication', 'Empowerment Protocol'],
    color: 'from-teal-500/10 to-emerald-500/20 border-teal-200',
    imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'relationship-issues',
    name: 'Relational & Life Transition Stress',
    category: 'Lifestyle & Wellness',
    description: 'Emotional strain stemming from divorce, grief, job loss, relocation, or family conflicts.',
    symptoms: ['Feeling overwhelmed', 'Isolation', 'Anxiety about future', 'Communication breakdown'],
    treatments: ['Supportive Counseling', 'Boundary Frameworks', 'Transition Coaching', 'Stress Reduction'],
    color: 'from-orange-500/10 to-amber-500/20 border-orange-200',
    imageUrl: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'grief',
    name: 'Grief & Bereavement',
    category: 'Mood & Emotional',
    description: 'Profound emotional ache following the death of a loved one or significant life loss.',
    symptoms: ['Deep wave of sadness', 'Numbness', 'Disruption in daily routine', 'Longing & emptiness'],
    treatments: ['Empathic Grief Support', 'Sleep & Rest Recovery', 'Supportive Psychiatric Care'],
    color: 'from-cyan-500/10 to-blue-500/20 border-cyan-200',
    imageUrl: 'https://images.unsplash.com/photo-1513279922550-250c2129b13a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'burnout',
    name: 'Professional & Caregiver Burnout',
    category: 'Lifestyle & Wellness',
    description: 'Severe mental and physical exhaustion experienced by healthcare workers, executives, and caregivers.',
    symptoms: ['Cynicism', 'Reduced efficacy', 'Physical depletion', 'Chronic fatigue'],
    treatments: ['Burnout Recovery Framework', 'Workplace Boundaries', 'Restorative Sleep Plan'],
    color: 'from-lime-500/10 to-emerald-500/20 border-lime-200',
    imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'behavioral-issues',
    name: 'Adolescent Behavioral Challenges',
    category: 'Neurodevelopmental',
    description: 'Emotional outbursts, school refusal, and impulse control struggles in teenagers and young adults.',
    symptoms: ['Academic decline', 'Defiance / anger', 'Withdrawal from family', 'Peer conflict'],
    treatments: ['Child & Teen Psychiatric Care', 'Parent Collaboration', 'Behavioral Coping Skills'],
    color: 'from-fuchsia-500/10 to-pink-500/20 border-fuchsia-200',
    imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'panic-disorder',
    name: 'Panic Disorder & Phobias',
    category: 'Anxiety & Obsessive',
    description: 'Sudden, intense attacks of fear with racing heart, shortness of breath, and fear of losing control.',
    symptoms: ['Chest tightness', 'Shortness of breath', 'Dizziness', 'Fear of dying or going crazy'],
    treatments: ['Rapid Panic Interventions', 'Anxiolytic Protocol', 'Breath & Somatic Control'],
    color: 'from-teal-500/10 to-sky-500/20 border-teal-200',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80'
  }
];

export const INSURANCE_DATA: InsuranceItem[] = [
  {
    id: 'carefirst',
    name: 'CareFirst Blue Cross Blue Shield',
    logoText: 'CareFirst BCBS',
    category: 'Commercial',
    accepted: true,
    notes: 'In-Network coverage for evaluations, medication management, and telehealth across Maryland.',
    badge: 'In-Network'
  },
  {
    id: 'medicare',
    name: 'Medicare (Part B)',
    logoText: 'Medicare',
    category: 'Public',
    accepted: true,
    notes: 'Full coverage for eligible beneficiaries. Minimal out-of-pocket copays.',
    badge: 'In-Network'
  },
  {
    id: 'aetna',
    name: 'Aetna Health Care',
    logoText: 'Aetna',
    category: 'Commercial',
    accepted: true,
    notes: 'Covered for both in-person clinic visits and remote telehealth sessions.',
    badge: 'In-Network'
  },
  {
    id: 'cigna',
    name: 'Cigna Healthcare',
    logoText: 'Cigna',
    category: 'Commercial',
    accepted: true,
    notes: 'Behavioral health benefits accepted. Pre-authorization managed seamlessly.',
    badge: 'In-Network'
  },
  {
    id: 'united',
    name: 'United Healthcare / Optum',
    logoText: 'UnitedHealthcare',
    category: 'Commercial',
    accepted: true,
    notes: 'In-network psychiatric diagnostic and medication management coverage.',
    badge: 'In-Network'
  },
  {
    id: 'medicaid',
    name: 'Maryland Medicaid',
    logoText: 'MD Medicaid',
    category: 'Public',
    accepted: true,
    notes: 'Accepted for qualifying Maryland residents. Priority scheduling for urgent evaluations.',
    badge: 'In-Network'
  },
  {
    id: 'amerigroup',
    name: 'Amerigroup Maryland',
    logoText: 'Amerigroup',
    category: 'Public',
    accepted: true,
    notes: 'Comprehensive behavioral health benefits for enrolled Maryland health choice members.',
    badge: 'In-Network'
  },
  {
    id: 'medstar',
    name: 'MedStar Family Choice',
    logoText: 'MedStar',
    category: 'Commercial',
    accepted: true,
    notes: 'Accepted for pediatric, adult, and specialized psychiatric care.',
    badge: 'In-Network'
  },
  {
    id: 'amerihealth',
    name: 'AmeriHealth Caritas MD',
    logoText: 'AmeriHealth',
    category: 'Public',
    accepted: true,
    notes: 'Participating provider for Maryland mental health services.',
    badge: 'In-Network'
  },
  {
    id: 'self-pay',
    name: 'Self-Pay & Sliding Scale',
    logoText: 'Direct Self-Pay',
    category: 'Self Pay',
    accepted: true,
    notes: 'Transparent fee structure. Superbills provided for out-of-network insurance reimbursement.',
    badge: 'Flexible Plans'
  }
];

export const TREATMENT_PROCESS_STEPS = [
  {
    step: 1,
    title: 'Easy Intake & Booking',
    subtitle: 'Schedule Online or Call',
    desc: 'Fill out our 2-minute secure form or call our Maryland clinic. Select your preference for in-person or telehealth care.',
    icon: 'CalendarCheck'
  },
  {
    step: 2,
    title: 'Comprehensive Evaluation',
    subtitle: '60-90 Min Consultation',
    desc: 'Dr. Njoku conducts an empathetic, unhurried assessment of your symptoms, medical history, and personal wellness goals.',
    icon: 'Search'
  },
  {
    step: 3,
    title: 'Diagnostic Clarity',
    subtitle: 'Clear, Transparent Insights',
    desc: 'Receive a clear, evidence-based diagnostic explanation (DSM-5-TR) without labeling or stigma.',
    icon: 'Lightbulb'
  },
  {
    step: 4,
    title: 'Personalized Treatment Blueprint',
    subtitle: 'Tailored Care Plan',
    desc: 'Collaboratively develop a written strategy combining therapy goals, lifestyle adjustments, and optional medication.',
    icon: 'FileText'
  },
  {
    step: 5,
    title: 'Care & Precision Prescribing',
    subtitle: 'Targeted Interventions',
    desc: 'If medication is recommended, prescriptions are sent electronically to your pharmacy with full safety guidance.',
    icon: 'Pill'
  },
  {
    step: 6,
    title: 'Ongoing Follow-Up & Recovery',
    subtitle: 'Sustained Long-Term Growth',
    desc: 'Regular check-ins monitor progress, adjust dosing, celebrate milestones, and keep you thriving.',
    icon: 'TrendingUp'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    patientInitials: 'M.R.',
    ageGroup: 'Adult (38 yrs)',
    serviceReceived: 'Anxiety & Medication Management',
    rating: 5,
    quote: 'Dr. Barbara Njoku completely changed my perspective on psychiatric care. She listened to me for an entire hour without making me feel rushed or judged. The medication she prescribed brought my panic attacks down to zero, and I finally have my life back.',
    location: 'Columbia, MD',
    date: 'July 2026',
    verified: true
  },
  {
    id: '2',
    patientInitials: 'D.K.',
    ageGroup: 'Parent of 14yo',
    serviceReceived: 'Child & Adolescent Psychiatry',
    rating: 5,
    quote: 'Finding a compassionate PMHNP for my teenage son with ADHD and anxiety was exhausting until we found Serenity Behavioral. Dr. Njoku built immediate rapport with him. His grades and self-confidence have soared this semester.',
    location: 'Ellicott City, MD',
    date: 'June 2026',
    verified: true
  },
  {
    id: '3',
    patientInitials: 'S.T.',
    ageGroup: 'Adult (45 yrs)',
    serviceReceived: 'Depression Care & Telehealth',
    rating: 5,
    quote: 'The telehealth visits are seamless! As a busy professional, being able to connect with Dr. Njoku during my lunch hour has made mental healthcare possible. She is warm, brilliant, and truly cares about her patients.',
    location: 'Silver Spring, MD',
    date: 'May 2026',
    verified: true
  },
  {
    id: '4',
    patientInitials: 'J.L.',
    ageGroup: 'Adult (29 yrs)',
    serviceReceived: 'PTSD & Trauma-Informed Care',
    rating: 5,
    quote: 'I felt so heard and validated. Dr. Njoku explained how trauma affects the brain in a way that relieved my shame. Her approach is grounded, gentle, and deeply effective.',
    location: 'Baltimore, MD',
    date: 'August 2026',
    verified: true
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What credentials does Dr. Barbara Clement Njoku hold?',
    answer: 'Dr. Barbara Clement Njoku is a Doctor of Nursing Practice (DNP), Advanced Practice Registered Nurse (APRN), and board-certified Psychiatric-Mental Health Nurse Practitioner (PMHNP-BC) certified by the American Nurses Credentialing Center (ANCC). She holds advanced degrees from Johns Hopkins University and the University of Maryland.'
  },
  {
    id: 'faq-2',
    category: 'Appointments',
    question: 'How quickly can I schedule an initial psychiatric evaluation?',
    answer: 'We prioritize prompt access to care. Initial evaluations can often be scheduled within 3 to 5 business days, either in-person at our Columbia, MD clinic or via secure Maryland telehealth video.'
  },
  {
    id: 'faq-3',
    category: 'Insurance & Fees',
    question: 'Which insurance plans are accepted at Serenity Behavioral?',
    answer: 'We accept CareFirst Blue Cross Blue Shield, Medicare Part B, Aetna, Cigna, United Healthcare/Optum, Maryland Medicaid, Amerigroup, MedStar Family Choice, and AmeriHealth Caritas. Self-pay and out-of-network superbills are also available.'
  },
  {
    id: 'faq-4',
    category: 'Telehealth',
    question: 'Is telehealth available for all Maryland residents?',
    answer: 'Yes! All residents physically located within the state of Maryland can access secure, encrypted HIPAA-compliant video consultations for psychiatric evaluations, follow-ups, and medication management.'
  },
  {
    id: 'faq-5',
    category: 'Services',
    question: 'What is the difference between a therapist and a Psychiatric Nurse Practitioner?',
    answer: 'While therapists focus primarily on talk therapy, Psychiatric Mental Health Nurse Practitioners (PMHNPs) like Dr. Njoku are medical providers who can diagnose psychiatric conditions, order lab work, conduct evaluations, and prescribe psychiatric medications in combination with supportive therapeutic care.'
  },
  {
    id: 'faq-6',
    category: 'Services',
    question: 'Will I be forced to take medication during my treatment?',
    answer: 'Absolutely not. Medication is always a collaborative, consensual option. Dr. Njoku thoroughly explains all options, benefits, and alternatives so you make an empowered decision about your care.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Understanding Adult ADHD: Signs, Diagnoses, and Modern Care',
    slug: 'understanding-adult-adhd',
    category: 'ADHD & Focus',
    readTime: '5 min read',
    date: 'August 2, 2026',
    author: 'Dr. Barbara Clement Njoku, DNP',
    summary: 'Many adults live for decades with undiagnosed ADHD, attributing executive dysfunction to personal failure. Here is how modern psychiatric evaluation brings clarity and relief.',
    content: [
      'Adult ADHD often presents differently than childhood hyperactivity. Instead of physical restlessness, adults frequently experience internal mental restlessness, chronic procrastination, difficulty organizing tasks, and emotional dysregulation.',
      'A formal psychiatric evaluation looks beyond surface symptoms to examine lifetime patterns, executive function struggles, and co-occurring anxiety or depression.',
      'Treatment is highly personalized and may combine non-stimulant or stimulant medications, behavioral structure strategies, and sleep hygiene modifications.'
    ],
    keyTakeaways: [
      'Adult ADHD is a neurodevelopmental trait, not a flaw in character or willpower.',
      'Comprehensive evaluations rule out anxiety, depression, or thyroid dysfunction.',
      'Tailored treatment significantly restores work productivity and relationship harmony.'
    ],
    tags: ['ADHD', 'Adult Psychiatry', 'Mental Health', 'Focus'],
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'blog-2',
    title: 'Demystifying Psychiatric Medication: Safety, Stigma, and Science',
    slug: 'demystifying-psychiatric-medication',
    category: 'Medication Management',
    readTime: '6 min read',
    date: 'July 28, 2026',
    author: 'Dr. Barbara Clement Njoku, DNP',
    summary: 'Stigma often prevents people from seeking life-changing psychiatric prescriptions. Here is what you need to know about safety, dosing, and neurochemical balance.',
    content: [
      'Just as insulin supports pancreatic function in diabetes, psychiatric medications help regulate neurotransmitters like serotonin, dopamine, and norepinephrine in the brain.',
      'Under the guidance of a board-certified PMHNP, medication management is a cautious, measured process. Start low, go slow, and evaluate side effects continuously.',
      'Medication is rarely meant to replace personal coping tools; rather, it creates the emotional headroom required for therapy and healthy habits to work.'
    ],
    keyTakeaways: [
      'Psychiatric medications are non-addictive when managed by a clinical specialist.',
      'Regular follow-ups ensure optimal therapeutic response with minimal side effects.',
      'Prescriptions can be adjusted or tapered safely under medical supervision.'
    ],
    tags: ['Medication', 'Psychiatry', 'Stigma Reduction', 'Wellness'],
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'blog-3',
    title: '5 Daily Practices for Soothing Anxiety and Calming the Nervous System',
    slug: '5-practices-soothing-anxiety',
    category: 'Anxiety & Mindset',
    readTime: '4 min read',
    date: 'July 15, 2026',
    author: 'Serenity Wellness Team',
    summary: 'Simple, science-backed somatic micro-habits you can practice daily to regulate your autonomic nervous system and ease panic.',
    content: [
      'Anxiety manifests physically in the body long before racing thoughts reach awareness. Grounding techniques send immediate signals of safety to the brain.',
      'Practice the 4-7-8 breathing method: inhale for 4 seconds, hold gently for 7, and exhale slowly for 8 seconds. Repeat 4 cycles.',
      'Establish a digital sunset 60 minutes before bedtime to reduce blue light overstimulation and support natural melatonin synthesis.'
    ],
    keyTakeaways: [
      'Breathing exercises alter blood gas chemistry to activate parasympathetic calm.',
      'Consistent morning sunlight exposure sets your circadian mood rhythm.',
      'Small daily practices prevent cumulative nervous system overwhelm.'
    ],
    tags: ['Anxiety Relief', 'Self Care', 'Mindfulness', 'Breathing'],
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80'
  }
];

export const DAILY_WELLNESS_TIPS = [
  {
    id: 'tip-1',
    category: 'Morning Routine',
    title: 'Hydrate & Seek Morning Sunlight',
    desc: 'Expose your eyes to natural sunlight within 30 minutes of waking to anchor your circadian rhythm and boost daytime mood.',
    icon: 'Sun'
  },
  {
    id: 'tip-2',
    category: 'Stress Regulation',
    title: 'The 4-7-8 Box Reset',
    desc: 'When feeling overwhelmed, take 3 slow cycles of 4s inhalation, 7s hold, and 8s slow exhalation to trigger parasympathetic relaxation.',
    icon: 'Wind'
  },
  {
    id: 'tip-3',
    category: 'Sleep Hygiene',
    title: 'Screen-Free Twilight Hour',
    desc: 'Replace smartphones and bright screens with soft lighting, warm tea, or reading 60 minutes before sleep.',
    icon: 'Moon'
  },
  {
    id: 'tip-4',
    category: 'Emotional Boundary',
    title: 'Practice Compassionate "No"',
    desc: 'Protect your energy reserves by declining non-essential commitments with kindness to prevent emotional exhaustion.',
    icon: 'Shield'
  }
];
