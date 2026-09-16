/**
 * Long-form content for individual service pages.
 * Spinal decompression is fully written; the remaining slugs fall back to
 * their summary from `services` until their copy is signed off.
 */

export type ServicePage = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  helpsWith: string[];
  sections: {
    heading: string;
    body: string[];
    image?: { src: string; alt: string };
    list?: string[];
  }[];
  visit: { n: string; title: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const servicePages: Record<string, ServicePage> = {
  "spinal-decompression": {
    slug: "spinal-decompression",
    name: "Spinal Decompression Therapy",
    tagline: "Take the pressure off — without surgery",
    intro:
      "Non-surgical spinal decompression uses gentle, computer-controlled traction to create space between your vertebrae, easing pressure on compressed discs and the nerve roots running through them. For patients whose sciatica, herniated disc or chronic low back pain has not responded to rest or medication, it is often the treatment that finally changes things — and it is available here in Cedar Rapids.",
    heroImage: "/images/spine-2.jpg",
    heroAlt: "An anatomical model of the lumbar spine",
    helpsWith: [
      "Herniated and bulging discs",
      "Sciatica and radiating leg pain",
      "Degenerative disc disease",
      "Chronic low back and neck pain",
      "Facet joint syndrome",
      "Post-surgical continued pain",
      "Pinched nerves",
      "Numbness or tingling in the limbs",
    ],
    sections: [
      {
        heading: "How decompression actually works",
        body: [
          "Your spinal discs act as shock absorbers between the vertebrae. When one bulges or herniates, it can press directly on a nerve root — which is why a disc problem in your lower back can send pain all the way down your leg. Rest alone rarely resolves it, because the pressure never lets up.",
          "Decompression treats that pressure directly. You lie fully clothed on a motorised table while a harness applies a precisely calibrated stretch along the axis of your spine. The pull is not constant: it cycles on and off over the session, which prevents your muscles from guarding against it. That cycling creates a negative pressure inside the disc, encouraging bulging material to retract and drawing in the fluid, oxygen and nutrients discs need to heal — something they get very little of on their own, since adult discs have almost no direct blood supply.",
        ],
        image: {
          src: "/images/massage-2.jpg",
          alt: "A clinician applying hands-on treatment along a patient's spine",
        },
      },
      {
        heading: "What a session is like",
        body: [
          "Most patients are surprised by how unremarkable it feels. You stay dressed, you lie down, and the table does the work. Sessions run roughly 20 to 30 minutes, and many people find the rhythmic stretch genuinely relaxing — it is not unusual to doze off.",
          "Decompression rarely works alone. Your doctor will usually pair it with hands-on adjustment, electrical muscle stimulation to settle any spasm around the affected segment, and rehab exercises that build the support your spine needs to hold the gains. A typical course runs over several weeks, and we will give you an honest estimate up front rather than after you have committed.",
        ],
        list: [
          "You stay fully clothed throughout the session",
          "20–30 minutes on the table, cycling stretch and release",
          "Usually combined with adjustment, EMS and rehab exercise",
          "Progress reviewed as you go — we adjust the plan to your response",
        ],
      },
      {
        heading: "Is it right for you?",
        body: [
          "Decompression suits patients with disc-related pain who want to exhaust conservative options before considering injections or surgery. It is not appropriate for everyone — pregnancy, spinal fusion hardware, severe osteoporosis, certain tumours and abdominal aortic aneurysm all rule it out, which is exactly why treatment starts with an examination rather than a booking.",
          "If decompression is not the right fit, we will tell you plainly and point you toward what is, whether that is another service here or a referral elsewhere. Our job is to find the least invasive thing that works — not to fit you to the equipment we happen to own.",
        ],
        image: {
          src: "/images/consult-1.jpg",
          alt: "A clinician assessing a patient's range of motion",
        },
      },
    ],
    visit: [
      {
        n: "01",
        title: "Consultation and exam",
        body: "We take your history, examine you, and work out whether your pain is genuinely disc-related. Imaging is reviewed or arranged where it changes the plan.",
      },
      {
        n: "02",
        title: "Your care plan",
        body: "Findings in plain language, an honest estimate of sessions, and a verified insurance position — before you commit to anything.",
      },
      {
        n: "03",
        title: "Treatment and review",
        body: "Decompression alongside adjustment and rehab, with your response reviewed as you go so the plan tracks your actual progress.",
      },
    ],
    faqs: [
      {
        q: "Does spinal decompression hurt?",
        a: "It should not. Most patients describe a gentle stretch through the lower back, and many find it relaxing enough to fall asleep. If anything feels sharp or wrong, tell your doctor — the table is adjusted to you, not the other way around.",
      },
      {
        q: "How many sessions will I need?",
        a: "It depends on how long you have had the problem and how your body responds. Disc conditions generally need a course of sessions over several weeks rather than a one-off visit. We will give you a realistic estimate after your exam and revisit it as we see how you progress.",
      },
      {
        q: "Is decompression covered by insurance?",
        a: "Coverage varies considerably between plans. We verify your benefits before treatment begins so you know your position up front. Call (319) 378-1515 and we will check for you.",
      },
      {
        q: "Who should not have decompression?",
        a: "It is not suitable during pregnancy, or for patients with spinal fusion hardware, severe osteoporosis, spinal tumours, or an abdominal aortic aneurysm. Your exam exists partly to rule these out before any treatment starts.",
      },
      {
        q: "Is this the same as an inversion table?",
        a: "No. An inversion table uses your own body weight and gives you no control over the force or its direction. Clinical decompression applies a calibrated, cycling force along a specific axis, targeted at a specific spinal segment, supervised by a doctor who examined you first.",
      },
    ],
    related: ["chiropractic-care", "electrical-muscle-stimulation", "physiotherapy-rehab"],
  },
};
