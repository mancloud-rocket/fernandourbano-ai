export type NavItem = {
  segment: string;
  label: string;
  number: string;
};

export type StoryChapter = {
  id: string;
  number: string;
  year: string;
  title: string;
  tagline: string;
  city: string;
  country: string;
  countryCode: string;
  company?: string;
  role?: string;
  body: string;
  imageSrc: string;
  imageColorSrc?: string;
  imageAlt: string;
};

export type SpeakingFormat =
  | "Keynote"
  | "Panel"
  | "Workshop"
  | "Charla magistral"
  | "Desayuno corporativo"
  | "Webinar"
  | "Capacitacion";

export type SpeakingEvent = {
  year: string;
  title: string;
  venue: string;
  city: string;
  country: string;
  countryCode: string;
  format: SpeakingFormat;
  featured?: boolean;
  videoUrl?: string;
  audienceSize?: string;
};

export type AgenticTourStop = {
  countryCode: string;
  city: string;
  country: string;
  format: string;
  date?: string;
  videoUrl?: string;
};

export type PressAward = {
  year: string;
  outlet: string;
  title: string;
  description: string;
};

export type PressMention = {
  year: string;
  outlet: string;
  title: string;
  kind: "social" | "tv" | "podcast" | "article";
  videoUrl?: string;
  thumbnailSrc?: string;
};

export type ServiceLane = {
  number: string;
  title: string;
  blurb: string;
  engagements: string[];
  stat: { value: string; label: string };
};

export type ExpertiseArea = {
  id: string;
  name: string;
  level: number;
  years: number;
  caption: string;
};

export type UseCase = {
  number: string;
  title: string;
  blurb: string;
};

export type IdeaTeaser = {
  number: string;
  volume: string;
  issue: string;
  kicker: string;
  title: string;
  lead: string;
  blurb: string;
  readingTime: string;
  tags: string[];
};

export type ContactIntent = {
  id: string;
  label: string;
  helper: string;
  placeholder: string;
  emailSubject: string;
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  ctas: {
    speakerSubtle: string;
    speakerLong: string;
    contact: string;
    pressKit: string;
    work: string;
    readMore: string;
    seeAll: string;
    sendTelegram: string;
    watch: string;
    filterAll: string;
  };
  ui: {
    now: string;
    in: string;
    based: string;
    next: string;
    featured: string;
    selectedTalks: string;
    selectedIdeas: string;
    selectedPress: string;
    fromUruguayTo: string;
    languageShort: string;
    plate: string;
    auto: string;
    paused: string;
    currentlyWriting: string;
    comingSoon: string;
    chooseIntent: string;
    yourName: string;
    organization: string;
    context: string;
    yourEmail: string;
    replyBy: string;
    mailFallback: string;
  };
  home: {
    eyebrow: string;
    manifesto: { lead: string; tail: string };
    trip: {
      nowLabel: string;
      nextLabel: string;
      now: { city: string; country: string; countryCode: string };
      next: { city: string; country: string; countryCode: string; when: string };
    };
    intro: string;
    bioOneLine: string;
    nowStatus: string;
    stats: Array<{ value: string; label: string }>;
    sections: Array<{ number: string; title: string; blurb: string; href: string }>;
    quote: { text: string; attribution: string };
    speakerPull: { eyebrow: string; title: string; blurb: string };
  };
  story: {
    eyebrow: string;
    title: string;
    intro: string;
    lead: string;
    stats: Array<{ value: string; label: string }>;
    chapters: StoryChapter[];
    footerCta: { label: string; href: string };
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    lanes: ServiceLane[];
    expertiseTitle: string;
    expertiseIntro: string;
    expertise: ExpertiseArea[];
    useCasesTitle: string;
    useCases: UseCase[];
    ctaTalks: string;
    ctaContact: string;
  };
  speaking: {
    eyebrow: string;
    title: string;
    intro: string;
    stats: Array<{ value: string; label: string }>;
    agenticTour: {
      eyebrow: string;
      title: string;
      blurb: string;
      stops: AgenticTourStop[];
    };
    formats: Array<{ name: string; description: string }>;
    topics: string[];
    events: SpeakingEvent[];
    filterLabels: Record<string, string>;
  };
  ideas: {
    eyebrow: string;
    title: string;
    intro: string;
    currentlyWriting: {
      title: string;
      status: string;
      eta: string;
    };
    newsletter: { label: string; href: string };
    pillars: IdeaTeaser[];
  };
  press: {
    eyebrow: string;
    title: string;
    intro: string;
    awards: PressAward[];
    mentionsTitle: string;
    mentionsIntro: string;
    mentions: PressMention[];
    pressKitBlurb: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    intents: ContactIntent[];
    form: {
      submit: string;
      nameLabel: string;
      orgLabel: string;
      contextLabel: string;
      emailLabel: string;
      deadlineLabel: string;
    };
    methods: Array<{ kind: string; label: string; value: string; href: string }>;
  };
  footer: {
    sloganLine1: string;
    sloganLine2: string;
    rights: string;
    ticker: string[];
  };
};
