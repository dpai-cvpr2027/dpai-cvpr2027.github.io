// =====================================================================
// Central content for the VPAI @ CVPR 2027 workshop website.
// Edit the values here to update the site; pages read from this file.
// =====================================================================

// Rich text: a paragraph is a list of plain strings and inline links.
export type RichSegment = string | { text: string; href: string };
export type RichParagraph = RichSegment[];

export const links = {
  challenge: 'https://dsri.org/challenges/iac/',
};

export const workshop = {
  acronym: 'VPAI',
  shortName: 'VPAI @ CVPR 2027',
  title: 'Detection, Provenance, and Authorized Use of Generative AI',
  status: 'Active Proposal',
  location: 'CVPR 2027 · Seattle, WA',
  date: 'June 20 or 21, 2027 · Half-day',
  dateNote: 'In person. The exact date and time slot will be assigned by CVPR.',
  tagline:
    'VPAI @ CVPR 2027 — a half-day workshop on detection, provenance, and authorized use of generative AI, with invited talks, archival research papers, a closing panel, and the Impostor Avatar Challenge.',
  openReviewUrl: '#', // Not live yet — opens upon workshop acceptance.
  abstract: [
    [
      'Generative AI is now ubiquitous in content creation, remote communication, and broadcasting. Policy measures such as the EU AI Act must be complemented by continuously evolving algorithms for verification, provenance, and identity assurance. VPAI brings together researchers across multimedia GenAI and forensics, content authenticity, provenance, and identity verification to examine these capabilities and their limitations.',
    ],
    [
      'The half-day program combines keynotes, invited talks, archival research papers, and a closing panel around three pillars: verification and forensic attribution, provenance and creator attribution, and authorized use of AI-mediated interactions. It also features the ',
      { text: 'Impostor Avatar Challenge', href: links.challenge },
      ', launching in December 2026, which asks whether a talking-head video is driven by the person it depicts and identifies unauthorized impostor drivers.',
    ],
  ] as RichParagraph[],
  awards:
    'A best-paper award and two honorable mentions are announced during the closing session, separate from the Impostor Avatar Challenge awards.',
};

export interface Person {
  name: string;
  affiliation: string;
  url?: string;
  role?: string;
  bio?: string;
  confirmed?: boolean;
  // Free-form status label (e.g. "Tentative"); overrides the default
  // confirmed/TBA badge when set.
  status?: string;
  photo?: string;
}

// Speakers and panelists are announced once confirmed for CVPR 2027.
// The half-day program reserves two keynotes, two invited talks, and a
// closing panel.
export const keynoteSpeakers: Person[] = [];
export const invitedSpeakers: Person[] = [];
export const panelists: Person[] = [];

export const speakersNote =
  'The program reserves two keynotes and two invited talks, each with a 30-minute slot including questions, and a 35-minute closing panel that connects these perspectives to the implications of the challenge results. Speakers and panelists will be announced here once confirmed.';

export const organizers: Person[] = [
  {
    name: 'Ekta Prashnani',
    affiliation: 'NVIDIA',
    bio: 'Senior Research Scientist at NVIDIA whose work spans avatar fingerprinting and synthetic-video detection. She is lead author of the ECCV 2024 avatar-fingerprinting paper and has contributed to impersonation defenses and generalizable, deployment-ready video forensics. She has co-organized CVPR and ECCV workshops on computer vision for videogames.',
    photo: '/images/prashnani.jpg',
  },
  {
    name: 'Shruti Agarwal',
    affiliation: 'Adobe',
    bio: 'Research Scientist on the AI for Content Authenticity team at Adobe and a co-author of TrustMark and ProMark. She served as General Chair of ACM IH&MMSec 2025 and co-organized Media Forensics at CVPR 2024 and APAI at ICCV 2025 and CVPR 2026. Her expertise connects forensic analysis with proactive provenance methods.',
    photo: '/images/agarwal.jpg',
  },
  {
    name: 'Maty Bohacek',
    affiliation: 'Stanford University',
    bio: 'Student researcher at Stanford and Google DeepMind, advised by Maneesh Agrawala. His work includes Human Action CLIPs and the DeepSpeak dataset. He co-organized APAI at ICCV 2025 and CVPR 2026.',
    photo: '/images/bohacek.jpg',
  },
  {
    name: 'Sarah Barrington',
    affiliation: 'UC Berkeley',
    bio: 'PhD candidate in Hany Farid’s digital forensics lab. Her research examines human responses to synthetic media, including the detection of AI-generated voice clones; she also co-created DeepSpeak. She co-organized APAI at ICCV 2025.',
    photo: '/images/barrington.jpg',
  },
  {
    name: 'Jesse Hostetler',
    affiliation: 'UL Research Institutes',
    url: 'https://jhostetler.github.io/',
    bio: 'Research Engineer at UL Research Institutes who leads development of the Dyff cloud platform that will host the Impostor Avatar Challenge. He holds a PhD from Oregon State University and has a research background in artificial intelligence, machine learning, and planning.',
    photo: '/images/hostetler.jpg',
  },
  {
    name: 'Aleksandar Petrov',
    affiliation: 'Google DeepMind',
    url: 'https://p-petrov.com/',
    bio: 'Research Scientist at Google DeepMind working on multimedia provenance and watermarking within the SynthID effort. His research on the coexistence and ensembling of watermarks connects the workshop to questions about combining provenance mechanisms in practical systems.',
  },
  {
    name: 'Matthew Stamm',
    affiliation: 'Drexel University',
    bio: 'Professor and director of the Multimedia and Information Security Lab at Drexel University. His work includes constrained-CNN forensic analysis, VideoFACT, and biometric approaches to exposing impersonation. He served as General Chair of ACM IH&MMSec 2017 and has co-organized workshops on synthetic media, biometrics, and operational forensics.',
    photo: '/images/stamm.jpg',
  },
  {
    name: 'David Luebke',
    affiliation: 'NVIDIA',
    bio: 'Vice President of Graphics Research at NVIDIA. He co-authored the avatar-fingerprinting and puppeteering-defense papers; his expertise in rendering and generative graphics connects the creation of synthetic representations to their verification.',
    photo: '/images/luebke.jpg',
  },
  {
    name: 'Jill Crisman',
    affiliation: 'UL Research Institutes',
    bio: 'Vice President and Executive Director of the Digital Safety Research Institute at UL Research Institutes. The institute runs research challenges that independently evaluate media-forensics systems and publish evaluation findings. She brings experience in comparative evaluation and engagement with researchers developing practical forensic capabilities.',
    photo: '/images/crisman.jpg',
  },
  {
    name: 'Facundo Fiorino',
    affiliation: 'UL Research Institutes',
    url: 'https://dsri.org/team/facundo-fiorino/',
    bio: 'Director of Engineering at the Digital Safety Research Institute at UL Research Institutes, which he joined in 2026. He brings more than 25 years of experience delivering large-scale systems and AI/ML prototypes across the federal and private sectors; previously, he founded and led Azul Engineering, delivering systems engineering and AI/ML solutions to clients including the FAA and GSA. He holds an M.S. in Computer Engineering from George Washington University and a B.S. in Electrical Engineering from the University of Maryland.',
    photo: '/images/fiorino.jpg',
  },
];

// Program Committee — prospective members; participation and affiliations
// are being confirmed for CVPR 2027.
export const programCommittee = {
  description:
    'We plan three reviews per submission and a target load of at most three papers per reviewer. The Program Committee draws on prior APAI committees and the communities represented by the workshop’s three research pillars. The prospective members below are tentative; their participation and affiliations are being confirmed for CVPR 2027.',
  note: 'Additional reviewers will be listed here as invitations are confirmed.',
  // Set to a reviewer self-nomination form URL to show the button.
  nominateUrl: '',
  members: [
    {
      name: 'Naresh Kumar Devulapally',
      affiliation: 'The State University of New York at Buffalo',
    },
    { name: 'Janos Horvath', affiliation: 'Visionary Tech & Event Solutions' },
    { name: 'Ziyue Xiang', affiliation: 'Purdue University' },
    { name: 'Mehrdad Saberi', affiliation: 'University of Maryland' },
    {
      name: 'Koushik Srivatsan Murali',
      affiliation: 'Adobe / Johns Hopkins University',
    },
    {
      name: 'Christian Riess',
      affiliation:
        'Friedrich-Alexander University Erlangen-Nürnberg, Germany',
    },
    { name: 'Davide Cozzolino', affiliation: 'University of Naples Federico II' },
    { name: 'Roberto Caldelli', affiliation: 'CNIT and Universitas Mercatorum' },
    { name: 'Benedikt Lorch', affiliation: 'GetReal Security' },
    {
      name: 'Chandrakanth Gudavalli',
      affiliation: 'University of California Santa Barbara',
    },
    { name: 'Seonwook Park', affiliation: 'NVIDIA' },
    { name: 'Amrita Mazumdar', affiliation: 'NVIDIA' },
    { name: 'Gautham Koorma', affiliation: 'Quandary Peak Research' },
    { name: 'Arun George Zachariah', affiliation: 'NVIDIA' },
    {
      name: 'Gianni Poggi',
      affiliation: 'Università Federico II di Napoli, Italy',
    },
    { name: 'Qiuyu Tang', affiliation: 'Lehigh University' },
    { name: 'Candice Gerstner', affiliation: 'Department of Defense' },
    { name: 'Davide Salvi', affiliation: 'Politecnico di Milano' },
  ] as Person[],
};

export interface ScheduleItem {
  time: string;
  title: string;
  detail?: string;
  tba?: boolean;
  highlight?: boolean;
}

// Preliminary five-hour program, illustrated as a 13:00–18:00 afternoon slot.
export const scheduleNote =
  'Preliminary five-hour, half-day program. Times illustrate a 13:00–18:00 afternoon slot; CVPR will assign the actual date and start time. If a different slot is assigned, times will shift while the session order and durations stay the same.';

export const schedule: ScheduleItem[] = [
  { time: '13:00 – 13:10', title: 'Opening remarks' },
  {
    time: '13:10 – 13:40',
    title: 'Keynote 1',
    detail: 'Speaker to be announced · 30 min including questions',
    tba: true,
  },
  {
    time: '13:40 – 14:10',
    title: 'Research spotlights',
    detail: 'Six five-minute talks from accepted papers',
  },
  {
    time: '14:10 – 14:40',
    title: 'Invited talk 1',
    detail: 'Speaker to be announced · 30 min including questions',
    tba: true,
  },
  {
    time: '14:40 – 14:55',
    title: 'Poster fast-forward presentations',
    detail: '30 seconds per poster',
  },
  { time: '14:55 – 15:30', title: 'Coffee break and poster discussion' },
  {
    time: '15:30 – 16:00',
    title: 'Keynote 2',
    detail: 'Speaker to be announced · 30 min including questions',
    tba: true,
  },
  {
    time: '16:00 – 16:15',
    title: 'Impostor Avatar Challenge: evaluation report and winner announcements',
    highlight: true,
  },
  {
    time: '16:15 – 16:45',
    title: 'Winning-team presentations and discussion',
    highlight: true,
  },
  {
    time: '16:45 – 17:15',
    title: 'Invited talk 2',
    detail: 'Speaker to be announced · 30 min including questions',
    tba: true,
  },
  {
    time: '17:15 – 17:50',
    title: 'Panel discussion',
    detail: 'Including time for audience questions',
  },
  { time: '17:50 – 18:00', title: 'Closing and best-paper announcements' },
];

export const recordingNote =
  'The workshop is held in person. Talks will be recorded through the CVPR-provided Zoom room and made available on the conference website.';

export interface DateItem {
  date: string;
  label: string;
  mandatory?: boolean;
}

export const cfp = {
  tracks: [
    {
      title: 'Main paper track',
      tag: 'Archival',
      body:
        'Research submissions across all three pillars: verification and forensic attribution, provenance and creator attribution, and authorized use of AI-mediated interactions, including identity verification. Accepted papers appear in the CVPR 2027 workshop proceedings.',
      deadline: 'Paper deadline: February 19, 2027 (AoE)',
      href: '#submission-details',
    },
    {
      title: 'Competition track',
      tag: 'Impostor Avatar Challenge',
      body:
        'Develop and submit systems from the December 2026 launch through June 6, 2027 — just over six months, closing roughly two weeks before the workshop. Participation, awards, and winning-team presentations do not require an archival paper.',
      deadline: 'System deadline: June 6, 2027 (AoE)',
      href: '/challenge',
    },
  ],
  details: [
    'Submissions are handled through OpenReview with double-blind review. All authors must have complete OpenReview profiles.',
    'Submissions must follow the CVPR 2027 paper submission style, format, and length restrictions, including the eight-page main-text limit, excluding references and the required LLM Usage Statement.',
    'Each submission receives three reviews. Accepted papers are presented either as one of six five-minute spotlight talks or as posters with fast-forward presentations; acceptance depends on review outcomes rather than a fixed quota.',
    'Contributors will be asked to describe dataset permissions, limitations, and relevant safeguards.',
  ],
  topicGroups: [
    {
      title: 'Verification and forensic attribution',
      topics: [
        'Synthetic-media detection',
        'Manipulation localization',
        'Model and source attribution',
        'Visual, temporal, and biometric representations',
        'Evaluation across generators, source domains, and post-processing, including compression',
        'Uncertainty and the consequences of erroneous decisions',
      ],
    },
    {
      title: 'Provenance and creator attribution',
      topics: [
        'Content Credentials and the C2PA standard',
        'Robust watermarking',
        'Proactive attribution',
        'Coexistence of multiple watermarking systems',
        'Provenance alongside forensic evidence when records are absent, incomplete, or inconsistent',
      ],
    },
    {
      title: 'Authorized use of AI-mediated interactions',
      topics: [
        'Avatar fingerprinting',
        'Identity-specific motion and biometric cues',
        'Impersonation defenses',
        'Identity, consent, and access policies',
        'Identity leakage, motion representations, and audio avatars',
      ],
    },
    {
      title: 'Across all pillars',
      topics: [
        'Deployed systems',
        'Failure analyses and negative results',
        'Interdisciplinary studies',
      ],
    },
  ],
  importantDates: [
    {
      date: 'December 2026',
      label:
        'Paper submissions open on OpenReview upon workshop acceptance (decision expected December 22)',
    },
    { date: 'February 19, 2027', label: 'Paper submission deadline' },
    { date: 'February 22 – March 12', label: 'Review period' },
    { date: 'March 15 – 18', label: 'Reviewer discussion and final decisions' },
    { date: 'March 19', label: 'Author notification' },
    { date: 'March 22 – 26', label: 'Author confirmations and metadata verification' },
    {
      date: 'March 29',
      label: 'CVPR accepted-paper author metadata deadline',
      mandatory: true,
    },
    { date: 'April 23', label: 'CVPR camera-ready deadline', mandatory: true },
    { date: 'June 20 or 21', label: 'Workshop day, assigned by CVPR' },
  ] as DateItem[],
  datesNote:
    'All deadlines are Anywhere on Earth (AoE). Dates are in 2027 unless noted. Workshop milestones are proposed; CVPR deadlines are mandatory. The Impostor Avatar Challenge follows its own timeline, which does not extend the paper deadlines.',
  publicationPolicy: [
    'The research paper track is archival: accepted papers will be published in the CVPR 2027 workshop proceedings, subject to satisfying the conference’s publication requirements, including the mandatory metadata and camera-ready deadlines above.',
    'Challenge submissions are evaluated systems rather than proceedings submissions; participation, awards, and winning-team presentations do not require an archival paper. Teams seeking archival publication must separately submit a paper by the paper deadline and complete the same peer-review and publication process as other authors.',
  ],
  conflicts: [
    'Organizers will not assess submissions from their own organization, and reviewers will declare conflicts before assignment.',
    'In line with CVPR policy, each author may submit at most ten papers to a single workshop.',
  ],
};

// =====================================================================
// Impostor Avatar Challenge
// =====================================================================

export const challenge = {
  name: 'Impostor Avatar Challenge',
  url: links.challenge,
  hosts:
    'Co-hosted by NVIDIA and the Digital Safety Research Institute (DSRI) at UL Research Institutes, and run on the Dyff evaluation platform.',
  summary:
    'Is this talking-head video driven by the person it depicts? The Impostor Avatar Challenge evaluates identity verification in synthetic avatar communication, building on avatar fingerprinting.',
  overview: [
    'The motivating application is avatar-based videoconferencing, where the person controlling a synthetic representation should remain verifiably linked to the claimed identity throughout the interaction. A system receives authentic enrollment videos for registered users and evaluates subsequent videos against a claimed identity.',
    'Unlike earlier challenges that targeted the detection, attribution, or localization of synthetic media, this challenge tests the identity relationship between the visible person and the driver when the video is already known to be synthetic.',
  ],
  tasks: [
    {
      title: 'Driver verification',
      body:
        'Determine over time whether the avatar is driven by the person it depicts, including videos in which the match status changes.',
    },
    {
      title: 'Closed-set driver identification',
      body:
        'Identify the driving person from a fixed registered set during impostor segments. This is a proposed extension; its interface and scoring will be finalized in the public protocol.',
    },
  ],
  data: [
    'The evaluation uses authentic enrollment videos and separately constructed challenge videos with temporal ground truth. Cases include matching and mismatching driver identities and changes in match status within a video.',
    'Participants may request NVFAIR for training. The challenge evaluation uses separately constructed, similar data rather than the existing NVFAIR test split. Enrollment and development materials are released with the protocol at launch, while Small and Full Test media remain sequestered.',
    'The public protocol defines the registered driver set, permitted inputs, identity labels, and the separation of training, development, and evaluation data.',
  ],
  submission: [
    'Teams submit Docker containers exposing an HTTP inference API, with an optional separate volume for model weights.',
    'The planned evaluation environment provides one NVIDIA L4 GPU, eight vCPUs, and 32 GiB of memory per system.',
    'All evaluation identities are enrolled before verification; the draft protocol targets registration within 60 seconds per user.',
    'Verification outputs are time-indexed match likelihoods between 0 and 1, reported to four decimal places; values above 0.5 are treated as matches.',
  ],
  stages: [
    {
      title: 'Interface Test',
      body: 'Accessible inputs and logs for debugging, with public scores.',
    },
    {
      title: 'Small Test',
      body: 'Sequestered inputs, with public scores for development feedback.',
    },
    {
      title: 'Full Test',
      body: 'Eligible systems enter the Full Test, whose results determine the final ranking.',
    },
  ],
  metrics: [
    'The draft verification metric aggregates per-video scores based on temporal matching behavior, with separate treatment of entirely mismatching videos.',
    'For identification, we propose top-1 driver accuracy on ground-truth impostor segments, reported separately from verification.',
    'Final metric definitions will be published with the protocol. In addition to producing rankings, the evaluation team will analyze system capabilities and limitations.',
  ],
  integrity: [
    'Before release, the evaluation team will confirm permission for enrollment, reenactment, evaluation, and controlled data sharing, including withdrawal procedures and access restrictions. Permissions for NVFAIR do not automatically cover newly collected or generated challenge data.',
    'The protocol uses pseudonymous driver identifiers and keeps evaluation labels private. Where the dataset supports it, the evaluation will examine variation across subjects and generators and document the limits of those comparisons.',
    'Rules governing organizer participation, baselines, and prize eligibility will be published before launch so that access to evaluation data does not confer an advantage. Participant citation requirements will be limited to work directly relevant to the challenge.',
  ],
  timeline: [
    { date: 'December 1, 2026', label: 'Challenge launch: public protocol, enrollment and development materials, and submission interface' },
    { date: 'December 1 – June 6', label: 'Participant development, rolling submissions, and Interface and Small Test feedback' },
    { date: 'June 6, 2027 (AoE)', label: 'Final container and model-weight submission deadline; systems are frozen for final evaluation' },
    { date: 'June 7 – 11', label: 'Sequestered Full Test evaluation and integrity checks' },
    { date: 'June 12', label: 'Private results and provisional winner notification to teams' },
    { date: 'June 12 – 14', label: 'Evaluation queries and corrections to evaluation errors, without model changes' },
    { date: 'June 15', label: 'Final confirmation to teams and preparation of workshop presentations' },
    { date: 'June 20 or 21', label: 'Public winner announcements, team presentations, and evaluation discussion at the workshop' },
  ] as DateItem[],
  timelineNotes: [
    'The challenge launches independently in early December, ahead of CVPR’s workshop acceptance notification; the results session at CVPR is conditional on workshop acceptance. The June challenge deadline is independent of the archival paper deadlines and does not extend them.',
    'If data or interface preparation is delayed, the launch and submission dates will be revised while preserving at least six months of development time from the release of usable materials. If a fair final evaluation cannot be completed before CVPR, the session will report verified interim findings and defer winner announcements.',
  ],
  atWorkshop:
    'The workshop announces the winners, hosts presentations from leading teams, and examines the evaluation team’s findings on system capabilities and limitations. The session connects these findings to the broader questions about identity evidence and practical verification raised in the research program and the closing panel.',
};
