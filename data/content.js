export const CONTACT_EMAIL = "hello@flowbridge.studio";

export const NAV_LINKS = [
  ["#systems", "Systems"],
  ["#flow", "How it connects"],
  ["#dashboards", "Dashboards"],
  ["#industries", "Industries"],
  ["#stack", "Build your stack"],
  ["#faq", "FAQ"],
];

export const NAV_CTA = "Get a free audit";

export const HERO = {
  label: "Automation & AI studio",
  headline: ["Systems that", "quietly run", "the busywork", "of your business."],
  copy:
    "Flowbridge designs and builds custom automations for your social media, sales, customer conversations, operations and reporting, then connects them to the tools your team already uses.",
  primary: "Explore the 14 systems",
  secondary: "Get a free audit",
  worksWith: ["WhatsApp", "Instagram", "LinkedIn", "Meta Ads", "Gmail", "Google Sheets", "Slack"],
};

export const GLANCE = [
  ["14", "ready-to-build systems"],
  ["4", "areas of your business covered"],
  ["1", "shared data layer, nothing typed twice"],
  ["100%", "of public posts and messages can wait for your approval"],
];

export const INTEGRATIONS = [
  ["WhatsApp Business", "#16A34A"],
  ["Instagram", "#E1306C"],
  ["LinkedIn", "#0A66C2"],
  ["Meta Ads", "#0866FF"],
  ["Gmail", "#EA4335"],
  ["Google Sheets", "#0F9D58"],
  ["Slack", "#4A154B"],
  ["Zapier", "#FF4A00"],
  ["Razorpay", "#3395FF"],
  ["Google Calendar", "#4285F4"],
  ["Notion", "#0B1B3A"],
  ["Webhooks & APIs", "#7C4DFF"],
];

export const FLOW = {
  label: "How it connects",
  heading: "One lead, six systems, zero re-typing.",
  copy:
    "This is what a single enquiry looks like when the systems share the same data. Each step starts the moment the last one finishes.",
  steps: [
    { icon: "i-meta", title: "Meta Leads CRM", text: "The lead lands from your ad form, is scored and assigned to an owner." },
    { icon: "i-chatbot", title: "WhatsApp ChatBot", text: "Replies instantly, answers questions and qualifies the lead." },
    { icon: "i-voice", title: "AI Voice Calling", text: "Calls back if the lead has not responded, and books the visit." },
    { icon: "i-email", title: "Email Marketing", text: "Keeps warm leads engaged with the right follow up sequence." },
    { icon: "i-taskflow", title: "TaskFlow", text: "Creates the next task for your team, with an owner and a date." },
    { icon: "i-grid", title: "CEO Dashboard", text: "Shows the whole pipeline in your morning check, no chasing." },
  ],
};

export const INDUSTRIES = {
  label: "Industries",
  heading: "Built for how your industry actually sells.",
  items: [
    {
      id: "realestate",
      name: "Real estate",
      pain: "Enquiries arrive from ads, portals and calls at all hours, and the first team to reply usually wins the site visit.",
      systems: ["metacrm", "chatbot", "voice", "bulk"],
      wins: [
        "Every ad lead answered on WhatsApp within seconds",
        "Site visits booked automatically and reminded",
        "New launches broadcast to your buyer list in one go",
      ],
    },
    {
      id: "clinics",
      name: "Clinics & healthcare",
      pain: "Missed calls and no-shows quietly cost more than any ad budget.",
      systems: ["voice", "chatbot", "bulk", "attendance"],
      wins: [
        "Appointment reminders by call and WhatsApp",
        "Patients can rebook without phoning the front desk",
        "Staff attendance and shifts sorted without paperwork",
      ],
    },
    {
      id: "retail",
      name: "Retail & e-commerce",
      pain: "Repeat customers are your cheapest growth, but only if you remember to reach them.",
      systems: ["bulk", "email", "instagram", "finance"],
      wins: [
        "Offers and restock alerts sent to the right segments",
        "Follow ups for open enquiries without manual effort",
        "Daily revenue and dues on one screen",
      ],
    },
    {
      id: "education",
      name: "Education & coaching",
      pain: "Admission season floods you with enquiries that go cold while your team is busy teaching.",
      systems: ["leadgen", "chatbot", "voice", "email"],
      wins: [
        "Every enquiry qualified before a counsellor picks it up",
        "Automatic reminders for demo classes and deadlines",
        "Nurture emails for students who are not ready yet",
      ],
    },
    {
      id: "agencies",
      name: "Agencies & consultants",
      pain: "You sell expertise, but your own content, follow ups and reporting always come last.",
      systems: ["linkedin", "news", "taskflow", "ceo"],
      wins: [
        "A steady LinkedIn presence that runs on a schedule",
        "Weekly industry digest turned into post drafts",
        "One view of team workload and client pipeline",
      ],
    },
  ],
};

export const STACK = {
  label: "Build your stack",
  heading: "Pick what you need. We will do the rest.",
  copy:
    "Tap the systems that sound like your week, or start from a ready-made bundle. Your selection goes straight into an email to us, so the first call is already specific.",
  bundles: [
    { name: "Lead to sale", ids: ["metacrm", "chatbot", "voice", "email"] },
    { name: "Social growth", ids: ["linkedin", "instagram", "news", "leadgen"] },
    { name: "Team operations", ids: ["taskflow", "attendance", "finance"] },
    { name: "Leadership view", ids: ["ceo", "finance", "metacrm"] },
  ],
};

export const CATEGORIES = [
  { id: "growth", label: "Growth & content" },
  { id: "conversations", label: "Conversations" },
  { id: "operations", label: "Operations" },
  { id: "dashboards", label: "Dashboards" },
];

export const SYSTEMS_INTRO = {
  label: "The systems",
  heading: "Fourteen systems, built to work together.",
  copy:
    "Start with the one that hurts most. Add the rest as you grow. Every system shares the same data, so nothing has to be typed in twice.",
};

export const SYSTEMS = [
  {
    id: "linkedin",
    category: "growth",
    icon: "i-linkedin",
    title: "LinkedIn Post Automation",
    tagline: "Stay visible on LinkedIn without living on it.",
    text:
      "Plan a month of posts in one sitting. The system drafts, queues and publishes to your profile or company page on the days and times you choose, and keeps every reaction and comment in one place.",
    features: [
      "Content calendar with scheduled posts",
      "Drafts written in your voice, approved before they go live",
      "Auto-publish to your profile or company page",
      "Reaction and comment tracking for every post",
    ],
    bestFor: "Founders, consultants and B2B teams",
  },
  {
    id: "instagram",
    category: "growth",
    icon: "i-instagram",
    title: "Instagram Post Automation",
    tagline: "A consistent feed without the daily scramble.",
    text:
      "Line up posts, carousels and reels once, and let them publish on schedule. Captions and hashtags are suggested for you, and nothing goes out until you approve it.",
    features: [
      "Visual calendar for posts, carousels and reels",
      "Caption and hashtag suggestions with approval",
      "Auto-publish through Meta's business tools",
      "Performance snapshot for every post",
    ],
    bestFor: "Brands, creators and agencies",
  },
  {
    id: "leadgen",
    category: "growth",
    icon: "i-funnel",
    title: "Lead Generation",
    tagline: "A steady flow of relevant prospects, already qualified.",
    text:
      "We set up the pipes that find and capture people who fit your ideal customer: landing pages, forms, ad lead forms and outreach lists. Every lead is cleaned, de-duplicated and scored before it reaches your team.",
    features: [
      "Landing pages and forms wired to your CRM",
      "Prospect lists built around your ideal customer",
      "De-duplication and lead scoring",
      "Instant hand-off to the right owner",
    ],
    bestFor: "Sales teams and service businesses",
  },
  {
    id: "email",
    category: "growth",
    icon: "i-email",
    title: "Email Marketing",
    tagline: "Emails that send themselves, at the right moment.",
    text:
      "Newsletters, welcome series and follow ups that trigger from what people actually do. You write the message once; the system decides who gets it and when.",
    features: [
      "Segmented campaigns and newsletters",
      "Welcome, nurture and re-engagement sequences",
      "Triggers based on opens, clicks and replies",
      "Delivery, open and click reporting",
    ],
    bestFor: "E-commerce, coaches and SaaS teams",
  },
  {
    id: "news",
    category: "growth",
    icon: "i-news",
    title: "Tech News Fetching System",
    tagline: "The tech news that matters, in one digest.",
    text:
      "The system watches the sources and topics you choose, removes duplicates, summarises each story and delivers a short digest. It can also turn the best stories into draft posts for your social calendar.",
    features: [
      "Pulls from the sources and topics you pick",
      "De-duplicates and summarises every story",
      "Daily or weekly digest by email, WhatsApp or Slack",
      "One-click drafts for your LinkedIn and Instagram queues",
    ],
    bestFor: "Founders, analysts and content teams",
  },
  {
    id: "chatbot",
    category: "conversations",
    icon: "i-chatbot",
    title: "WhatsApp ChatBot",
    tagline: "Answer every enquiry in seconds, day and night.",
    text:
      "A chatbot on your WhatsApp Business number that answers common questions, shares catalogues and prices, asks a few qualifying questions and hands over to a person, with the full conversation, when it matters.",
    features: [
      "Answers FAQs and shares catalogues and prices",
      "Qualifies leads with a few short questions",
      "Hands over to a human with full context",
      "Replies in English, Hindi and other languages",
    ],
    bestFor: "Retail, real estate, clinics and education",
  },
  {
    id: "bulk",
    category: "conversations",
    icon: "i-bulk",
    title: "WhatsApp Bulk Messaging",
    tagline: "Offers, reminders and updates, sent to thousands, personally.",
    text:
      "Send approved templates to segmented lists through the official WhatsApp Business Platform. Every message carries the person's name and details, and you see who received, read and replied.",
    features: [
      "Import and segment your contact lists",
      "Approved message templates with personalisation",
      "Scheduled sends with delivery and read status",
      "Opt-in and opt-out handling built in",
    ],
    bestFor: "Retail, education, events and clinics",
  },
  {
    id: "voice",
    category: "conversations",
    icon: "i-voice",
    title: "AI Voice Calling",
    tagline: "A voice agent that makes and takes calls for you.",
    text:
      "A natural-sounding voice agent handles routine calls: follow ups, reminders, surveys and first-line enquiries. It books appointments, updates your CRM and gives you a transcript and summary of every call.",
    features: [
      "Outbound calls for follow ups, reminders and surveys",
      "Inbound answering with natural conversation",
      "Books appointments and updates your CRM",
      "Recordings, transcripts and call summaries",
    ],
    bestFor: "Clinics, real estate and admissions teams",
  },
  {
    id: "avatar",
    category: "conversations",
    icon: "i-avatar",
    title: "AI Avatars",
    tagline: "Video presence without the camera crew.",
    text:
      "Turn a script into a talking-head video in minutes. Use a branded avatar or your own likeness (always with consent) and produce the same video in several languages for onboarding, explainers and outreach.",
    features: [
      "Talking-head videos generated from a script",
      "Branded avatar or your own likeness, with consent",
      "Multi-language voiceovers",
      "Batch-create videos for onboarding and outreach",
    ],
    bestFor: "Training, product explainers and personalised outreach",
  },
  {
    id: "taskflow",
    category: "operations",
    icon: "i-taskflow",
    title: "TaskFlow",
    tagline: "Every task has an owner, a date and a status.",
    text:
      "A simple task and project manager built around how your team works. Assign work, set due dates, follow progress on a board and see what is overdue before it becomes a problem.",
    features: [
      "Board and list views",
      "Recurring tasks and reminders",
      "Assignments, comments and file attachments",
      "Workload and overdue reports",
    ],
    bestFor: "Teams of 5 to 200 people",
  },
  {
    id: "attendance",
    category: "operations",
    icon: "i-attendance",
    title: "Remote Attendance Marking System",
    tagline: "Know who is working, wherever they are.",
    text:
      "Employees check in and out from their phones, whether they are at home, in the field or in the office. Managers see a live view, and payroll gets a clean monthly sheet without chasing anyone.",
    features: [
      "Check in and out from mobile with a time stamp",
      "Optional location and selfie verification",
      "Shift, late-mark and leave rules",
      "Monthly attendance export for payroll",
    ],
    bestFor: "Remote, hybrid and field teams",
  },
  {
    id: "metacrm",
    category: "dashboards",
    icon: "i-meta",
    title: "Meta Leads CRM Dashboard",
    tagline: "Every Facebook and Instagram lead, followed up before it goes cold.",
    text:
      "Leads from your Meta campaigns land in a structured CRM the moment the form is submitted. Each one is assigned, prioritised and tracked through to the follow up, and you see what every campaign really costs per lead.",
    features: [
      "Instant capture from Meta lead forms",
      "Auto-assignment, priority and stage tracking",
      "Follow up reminders with WhatsApp and email triggers",
      "Cost per lead and campaign-level reporting",
    ],
    bestFor: "Businesses running Facebook and Instagram ads",
  },
  {
    id: "finance",
    category: "dashboards",
    icon: "i-report",
    title: "Finance Dashboard",
    tagline: "Cash, invoices and margins on one screen.",
    text:
      "Revenue, expenses, receivables and cash position pulled together from the tools you already use, so the numbers are ready when you are, not at the end of the month.",
    features: [
      "Revenue, expenses and profit overview",
      "Invoices, dues and payment ageing",
      "Cash-flow view with a simple forecast",
      "Connects to spreadsheets, accounting tools and payment gateways",
    ],
    bestFor: "Owners and finance teams",
  },
  {
    id: "ceo",
    category: "dashboards",
    icon: "i-grid",
    title: "CEO Dashboard",
    tagline: "The whole business in a five-minute morning check.",
    text:
      "Sales, operations, finance and people metrics in a single view, measured against your targets. When a number drifts, you see it, and you can click through to the records behind it.",
    features: [
      "Sales, operations, finance and team KPIs together",
      "Targets versus actuals with alerts",
      "Drill down from any number to its source",
      "Daily summary sent to your phone",
    ],
    bestFor: "Founders and leadership teams",
  },
];

export const DASHBOARDS = {
  label: "Dashboards",
  heading: "Dashboards for the people who decide.",
  copy:
    "Pipeline, money and the state of the whole business, drawn from the same connected data your systems already produce.",
  ids: ["metacrm", "finance", "ceo"],
  blurbs: {
    metacrm: "For the sales team: every ad lead, its owner and its next step.",
    finance: "For the owner: what came in, what is due and what is left.",
    ceo: "For leadership: targets, drift and alerts across the company.",
  },
};

export const PROCESS = {
  label: "How it works",
  heading: "From messy workflow to working system, in four stages.",
  steps: [
    {
      n: "01",
      title: "Map",
      text: "We learn how your business runs today: where work repeats, where things get dropped and what it costs you in hours.",
    },
    {
      n: "02",
      title: "Design",
      text: "We pick the right systems, define the rules and flows, and agree what success looks like before anything is built.",
    },
    {
      n: "03",
      title: "Build",
      text: "We build and connect everything to the tools your team already uses, and test it on your real data.",
    },
    {
      n: "04",
      title: "Refine",
      text: "Your team goes live with training and support, and we keep tuning the system as you use it.",
    },
  ],
};

export const WHY = {
  label: "Why Flowbridge",
  heading: "Built around your business, not the other way round.",
  points: [
    {
      title: "Custom, not templated",
      text: "Every system is shaped around your process, your fields and your language.",
    },
    {
      title: "Connected to your tools",
      text: "We work with what you already use, so your team does not have to start over.",
    },
    {
      title: "You stay in control",
      text: "Posts, messages and emails can wait for your approval before anything goes out.",
    },
    {
      title: "Support after launch",
      text: "We stay on to fix, tune and extend the system as your business changes.",
    },
  ],
};

export const FAQ = {
  heading: "Questions before you book a call",
  items: [
    {
      q: "Do I have to buy all fourteen systems?",
      a: "No. Most clients start with a single system, usually the one that costs them the most time, and add others later. Because the systems share the same data, adding more is easy.",
    },
    {
      q: "Can you connect the systems to the tools I already use?",
      a: "Yes. We plan around your existing tools such as WhatsApp, Instagram, LinkedIn, Meta Ads, email, spreadsheets and accounting software. In the audit we decide what stays, what connects and what changes.",
    },
    {
      q: "Will the AI post or message people without my approval?",
      a: "Only if you want it to. You can require approval for every post, message and email, or let routine items go out automatically while you review the important ones.",
    },
    {
      q: "How long does it take to go live?",
      a: "Simple automations can be live within days. Larger builds, such as dashboards and voice agents, take a few weeks depending on scope. After the free audit we give you a clear timeline.",
    },
    {
      q: "Who owns my data?",
      a: "You do. Systems run on accounts you own, use the official platform integrations, and only access what they need to do the job.",
    },
    {
      q: "How is pricing decided?",
      a: "It depends on which systems you choose and how much customisation they need. The free audit ends with a scoped quote, so you know the cost before you commit.",
    },
  ],
};

export const FINAL_CTA = {
  heading: "Tell us what eats your week.",
  copy:
    "Book a free audit. We will look at how you work today and show you which systems would give you the time back first.",
  primary: "Get a free audit",
  secondary: "See the systems",
  auditTitle: "What the free audit covers",
  audit: [
    "A walkthrough of how you handle leads, content and follow ups today",
    "Where your team is losing hours every week",
    "Which systems to start with, and a scoped quote",
  ],
};

export const FOOTER = {
  positioning:
    "Flowbridge is an automation and AI studio building the systems that quietly run the repetitive parts of your business.",
  rights: "© 2026 Flowbridge Studio",
};
