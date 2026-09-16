/**
 * Single source of truth for clinic facts.
 * Everything here is taken from the client research documents
 * (Company Profile / Competitor Research / ICP).
 */

export const clinic = {
  name: "Chiropractic Clinic of Iowa",
  shortName: "CCI",
  promise: "Helping You Move Better, Feel Better, and Live Life With Less Pain",
  addressLine1: "214 Blairs Ferry Rd NE, Suite 2",
  addressLine2: "Cedar Rapids, IA 52402",
  addressFull: "214 Blairs Ferry Rd NE, Suite 2, Cedar Rapids, IA 52402",
  phone: "(319) 378-1515",
  phoneHref: "tel:+13193781515",
  textLine: "(563) 562-2744",
  textHref: "sms:+15635622744",
  email: "info@chiropracticclinicofiowa.com",
  emailHref: "mailto:info@chiropracticclinicofiowa.com",
  mapsHref:
    "https://maps.google.com/?q=214+Blairs+Ferry+Rd+NE+Suite+2+Cedar+Rapids+IA+52402",
  facebook: "https://www.facebook.com/chiropracticclinicofiowa/",
  linkedin:
    "https://www.linkedin.com/company/chiropractic-clinic-of-iowa---319-378-1515",
  serviceArea: "Cedar Rapids · Marion · Hiawatha · Linn County",
} as const;

export const hours = [
  { day: "Monday", time: "7:30–11:30 am · 1:30–5:30 pm", open: true },
  { day: "Tuesday", time: "7:30–11:30 am · 1:30–5:30 pm", open: true },
  { day: "Wednesday", time: "Closed", open: false },
  { day: "Thursday", time: "7:30–11:30 am · 1:30–5:30 pm", open: true },
  { day: "Friday", time: "7:30–11:30 am", open: true },
  { day: "Saturday & Sunday", time: "Closed", open: false },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  blurb: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "chiropractic-care",
    name: "Chiropractic Care",
    short: "Hands-on spinal and extremity adjustment",
    blurb:
      "Hands-on spinal and extremity adjustment, tailored to you. Our doctors use a range of techniques — including gentle, low-force methods safe for children.",
    icon: "spine",
  },
  {
    slug: "stemwave-therapy",
    name: "StemWave® Therapy",
    short: "Advanced shockwave for stubborn soft-tissue pain",
    blurb:
      "Shockwave therapy for chronic soft-tissue pain, tendinopathy and plantar fasciitis. A drug-free option for pain that has not responded to anything else.",
    icon: "wave",
  },
  {
    slug: "spinal-decompression",
    name: "Spinal Decompression",
    short: "Relieve pressure on discs and nerve roots",
    blurb:
      "Gentle mechanical traction that takes pressure off compressed discs and nerve roots — built for sciatica, herniated and bulging discs.",
    icon: "decompress",
  },
  {
    slug: "electrical-muscle-stimulation",
    name: "Electrical Muscle Stimulation",
    short: "Calm muscle spasm between adjustments",
    blurb:
      "Targeted electrotherapy that quiets muscle spasm and supports pain relief, working alongside your manual adjustment.",
    icon: "pulse",
  },
  {
    slug: "physiotherapy-rehab",
    name: "Physiotherapy & Rehab",
    short: "Exercise rehab, ergonomics, prevention",
    blurb:
      "Exercise rehabilitation, ergonomic coaching and injury prevention so the relief you feel in the office holds up at work and at home.",
    icon: "rehab",
  },
  {
    slug: "auto-accident-injury",
    name: "Auto Accident & Injury",
    short: "Documented care after a collision",
    blurb:
      "Prompt, documented treatment for whiplash and collision injuries — with the records your insurance or attorney will ask for.",
    icon: "shield",
  },
  {
    slug: "sports-crossfit-care",
    name: "Sports & CrossFit Care",
    short: "Get back to training, faster",
    blurb:
      "Advanced soft-tissue work and performance-minded care for athletes, CrossFitters and weekend warriors across the Corridor.",
    icon: "athlete",
  },
  {
    slug: "dot-physicals",
    name: "DOT Physicals & Testing",
    short: "Certified medical examiner on staff",
    blurb:
      "DOT physicals and drug testing from a certified medical examiner — keeping your CDL drivers compliant and on the road.",
    icon: "truck",
  },
];

export type Doctor = {
  name: string;
  initials: string;
  credential: string;
  focus: string;
  detail: string;
  school: string;
  tone: "blue" | "ink" | "accent" | "soft";
};

export const doctors: Doctor[] = [
  {
    name: "Dr. Dennis J. Bradley",
    initials: "DB",
    credential: "D.C. · Palmer College, Summa Cum Laude",
    focus: "Exercise Rehab & Ergonomics",
    detail:
      "Cedar Rapids native with 30+ years in the area. President's Award, Pi Tau Delta honor society.",
    school: "Palmer College of Chiropractic, 1997",
    tone: "blue",
  },
  {
    name: "Dr. Chris A. Smith",
    initials: "CS",
    credential: "D.C. · Palmer College, Cum Laude",
    focus: "Sports Performance & Soft Tissue",
    detail:
      "B.A. in Biology / Pre-Medicine. Practised in New Mexico and Texas before coming home to the Corridor.",
    school: "Palmer College of Chiropractic",
    tone: "ink",
  },
  {
    name: "Dr. Nathan Broghammer",
    initials: "NB",
    credential: "D.C. · DOT Certified Medical Examiner",
    focus: "Occupational Health & DOT",
    detail:
      "Raised in Coggon. Academic All-American in wrestling. Runs the clinic's DOT physicals and drug testing.",
    school: "Palmer College of Chiropractic, 2008",
    tone: "accent",
  },
  {
    name: "Dr. Amanda O'Sullivan",
    initials: "AO",
    credential: "D.C. · Low-force & pediatric technique",
    focus: "Family & Pediatric Care",
    detail:
      "Solon, Iowa native. Served on a chiropractic clinic-abroad trip to Fiji. Multiple adjusting techniques, including gentle low-force methods.",
    school: "Palmer College of Chiropractic, 2013",
    tone: "soft",
  },
  {
    name: "Dr. Ronni Miller",
    initials: "RM",
    credential: "D.C. · B.S. Exercise Science",
    focus: "Moms, Kids & Prenatal",
    detail:
      "Northwest Illinois native. A stated passion for helping moms and kids stay healthy through chiropractic care.",
    school: "Palmer College of Chiropractic, 2021",
    tone: "blue",
  },
];

export const differentiators = [
  {
    title: "Five Palmer-Trained Doctors",
    body: "Every doctor here trained at Palmer College of Chiropractic — from 30-year veterans to newly licensed. You are never handed off to whoever is free.",
    icon: "team",
  },
  {
    title: "Conservative Care First",
    body: "We start with the least invasive thing that works. No surgery, no long-term medication — an individual care plan built around your goals.",
    icon: "heart",
  },
  {
    title: "Technology Most Clinics Skip",
    body: "StemWave® shockwave, mechanical spinal decompression and electrical muscle stimulation under one roof, alongside hands-on adjustment.",
    icon: "spark",
  },
];

export const faqs = [
  {
    q: "Do you take my insurance?",
    a: "We are an insurance-based practice and work with most major plans. Because coverage for chiropractic varies so much between plans, the fastest answer is a quick call to (319) 378-1515 — we will verify your benefits before your first visit so there are no surprises.",
  },
  {
    q: "What happens at my first appointment?",
    a: "You will complete a short intake, then sit down with one of our doctors for a consultation and exam. We assess what is actually driving your pain, discuss findings with you in plain language, and build a care plan together. Most first visits include treatment the same day.",
  },
  {
    q: "Is chiropractic safe for children and during pregnancy?",
    a: "Yes. Dr. Amanda O'Sullivan and Dr. Ronni Miller use gentle, low-force techniques specifically suited to children and to pregnancy-related back pain. The adjustment a six-year-old receives looks nothing like the one an adult athlete receives — the technique is matched to the patient.",
  },
  {
    q: "I was in a car accident. How soon can I be seen?",
    a: "Call us as soon as you can. With five doctors on staff we can usually get accident patients in quickly, and we document treatment thoroughly for your insurance or personal-injury claim.",
  },
  {
    q: "Do you offer DOT physicals for commercial drivers?",
    a: "We do. Dr. Nathan Broghammer is a DOT Certified Medical Examiner and performs CDL physicals and drug testing here in Cedar Rapids — for individual drivers and for employers standardising their examiner relationship.",
  },
  {
    q: "What are your office hours?",
    a: "Monday, Tuesday and Thursday 7:30–11:30 am and 1:30–5:30 pm, Friday mornings 7:30–11:30 am. We are closed Wednesdays and weekends. Early-morning slots go fast, so booking ahead is worth it.",
  },
];

/** Placeholder patient voice — replace with verified reviews before launch. */
export const testimonials = [
  {
    quote:
      "I came in barely able to turn my head after years of desk work. They explained exactly what was happening, built a plan around my schedule, and I was sleeping properly again within a month.",
    name: "Marcus T.",
    role: "Cedar Rapids · Neck & upper back",
    image: "/images/adjust-2.jpg",
    rating: 5,
  },
  {
    quote:
      "Decompression gave me my mornings back. I had been told surgery was the next step for my disc — two months later I am walking the dog and lifting my grandson again.",
    name: "Diane R.",
    role: "Marion · Spinal decompression",
    image: "/images/senior-1.jpg",
    rating: 5,
  },
  {
    quote:
      "My daughter is seven and was nervous about the whole idea. The low-force technique they used was so gentle she asked to come back. That says everything.",
    name: "Kayla B.",
    role: "Hiawatha · Family care",
    image: "/images/family-1.jpg",
    rating: 5,
  },
  {
    quote:
      "As a CrossFitter I have seen a lot of practitioners. The soft-tissue work here is the real deal, and they actually understand training load instead of just telling me to rest.",
    name: "Tyler J.",
    role: "Cedar Rapids · Sports injury",
    image: "/images/stretch-1.jpg",
    rating: 5,
  },
];

export const articles = [
  {
    slug: "what-to-expect-first-chiropractic-visit",
    title: "What Actually Happens at Your First Chiropractic Visit",
    excerpt:
      "The consultation, the exam, and how a care plan gets built — so nothing about your first appointment is a surprise.",
    author: "Dr. Dennis J. Bradley",
    role: "D.C., Palmer College",
    image: "/images/adjust-1.jpg",
    readTime: "5 min read",
  },
  {
    slug: "desk-work-back-pain-cedar-rapids",
    title: "Desk Work, Shift Work, and the Back Pain In Between",
    excerpt:
      "Why so many Corridor workers end up with the same three complaints — and the ergonomic changes that actually hold.",
    author: "Dr. Chris A. Smith",
    role: "D.C., Palmer College",
    image: "/images/therapy-2.jpg",
    readTime: "6 min read",
  },
  {
    slug: "dot-physicals-cedar-rapids-employers",
    title: "DOT Physicals: What Iowa Employers Need to Know",
    excerpt:
      "Keeping CDL drivers certified without the scheduling headache, from a certified medical examiner in Cedar Rapids.",
    author: "Dr. Nathan Broghammer",
    role: "D.C., DOT Certified Examiner",
    image: "/images/truck-1.jpg",
    readTime: "4 min read",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Doctors", href: "/#doctors" },
  { label: "Services", href: "/#services" },
  { label: "New Patients", href: "/#new-patients" },
  { label: "Contact", href: "/#contact" },
];
