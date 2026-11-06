// =====================================================================
// Central content for the DPAI @ CVPR 2027 workshop website.
// Edit the values here to update the site; pages read from this file.
// =====================================================================

// Rich text: a paragraph is a list of plain strings and inline links.
export type RichSegment = string | { text: string; href: string };
export type RichParagraph = RichSegment[];

export const links = {
  challenge: 'https://dsri.org/challenges/iac/',
};

export const workshop = {
  acronym: 'DPAI',
  shortName: 'DPAI @ CVPR 2027',
  title: 'Detection, Provenance, and Authorized Use of AI',
  status: 'Active Proposal',
  location: 'CVPR 2027 · Seattle, WA',
  date: 'June 20 or 21, 2027 · Half-day',
  dateNote: 'In person. The exact date and time slot will be assigned by CVPR.',
  tagline:
    'DPAI @ CVPR 2027 — a half-day workshop on detection, provenance, and authorized use of AI, spanning multimedia forensics, content authenticity, provenance for AI-designed biological sequences, and identity verification, with invited talks, archival research papers, the Impostor Avatar Challenge, and a closing panel.',
  openReviewUrl: '#', // Not live yet — opens upon workshop acceptance.
  abstract: [
    [
      'The use of generative AI (GenAI) is now ubiquitous across nearly every aspect of our digital and physical world: from the content we create and consume, to remote communication and broadcasting, and beyond the screen to medicine and biology. Policy measures supporting trustworthy use, such as the EU AI Act, must be complemented by advanced and continuously evolving algorithms for detection, provenance, and identity assurance.',
    ],
    [
      'DPAI brings together a diverse set of researchers across multimedia GenAI forensics, content authenticity, provenance — including emerging provenance for AI-designed biological sequences — and identity verification. The half-day program combines invited talks, archival research papers, a challenge track, and a closing panel around four research pillars: detection and forensic attribution, provenance and creator attribution, provenance for biological design, and authorized use of AI-mediated interactions.',
    ],
    [
      'The challenge track, the ',
      { text: 'Impostor Avatar Challenge', href: links.challenge },
      ', tackles a critical question looming over remote communication and broadcasting platforms: verifying whether a talking-head video is driven by the person it depicts and identifying an unauthorized impostor driver. The challenge launches on December 15, 2026, and its winners will be announced at the workshop.',
    ],
  ] as RichParagraph[],
  awards:
    'A best-paper award and two honorable mentions are announced during the closing session, separate from the Impostor Avatar Challenge awards. GPU prizes will go to the best paper and to the top performer in the challenge; the exact GPU model will be chosen to comply with US government export restrictions, which may prevent shipping to some locations.',
};

export interface Person {
  name: string;
  affiliation: string;
  url?: string;
  // Program role shown under the affiliation (e.g. "Panel moderator").
  role?: string;
  // Talk or discussion focus area, shown in italics.
  topic?: string;
  bio?: string;
  confirmed?: boolean;
  // Free-form status label (e.g. "Tentative"); overrides the default
  // confirmed/TBA badge when set.
  status?: string;
  photo?: string;
}

// Prospective speakers and panelists, with confirmed or tentative
// participation. The half-day program reserves two keynotes, two invited
// talks, and a closing panel; assignments to the keynote and invited-talk
// slots will be agreed with speakers once the workshop is accepted.
export const speakers: Person[] = [
  {
    name: 'Ilke Demir',
    affiliation: 'Cauth AI',
    topic: 'Trustworthy AI through content authentication',
    bio: 'Founder and CEO of Cauth AI and co-creator of FakeCatcher.',
    status: 'Confirmed',
  },
  {
    name: 'Hany Farid',
    affiliation: 'GetReal Security; Dartmouth College',
    topic: 'Scalable media forensics',
    status: 'Confirmed',
  },
  {
    name: 'Shawn Shan',
    affiliation: 'Dartmouth College',
    topic: 'Creator protection against generative mimicry',
    status: 'Confirmed',
  },
  {
    name: 'Chris Bregler',
    affiliation: 'Google DeepMind',
    topic: 'Generative video and deep synthesis',
    status: 'Confirmed',
  },
  {
    name: 'Luisa Verdoliva',
    affiliation: 'University of Naples Federico II',
    topic: 'Reliable detection of synthetic media',
    bio: 'Leader of the Multimedia Forensics Lab.',
    status: 'Tentative',
  },
  {
    name: 'Nicholas Carlini',
    affiliation: 'Anthropic',
    topic: 'Adversarial robustness and model red-teaming',
    status: 'Tentative',
  },
  {
    name: 'Alex Engler',
    affiliation: 'Penn Center on Media, Technology, and Democracy',
    topic: 'AI governance and algorithmic accountability',
    status: 'Tentative',
  },
];

export const moderators: Person[] = [
  {
    name: 'David Luebke',
    affiliation: 'NVIDIA',
    role: 'Panel moderator',
    topic: 'Graphics research and avatar authentication',
    bio: 'Vice President of Graphics Research at NVIDIA.',
    status: 'Confirmed',
    photo: '/images/luebke.jpg',
  },
];

export const speakersNote =
  'The program reserves two keynotes and two invited talks, each with a 30-minute slot including questions, and a 35-minute closing panel that connects these perspectives to the implications of the challenge results. The list records confirmed and tentative participation and focus areas; final assignments to the keynote and invited-talk slots will be agreed with speakers, and the CVPR program is subject to workshop acceptance.';

export const organizers: Person[] = [
  {
    name: 'Ekta Prashnani',
    affiliation: 'NVIDIA',
    bio: 'Senior Research Scientist at NVIDIA whose work spans avatar fingerprinting and synthetic-video detection. She is lead author of the pioneering paper on avatar fingerprinting at ECCV 2024 and has contributed to impersonation defenses and generalizable, deployment-ready video forensics. She has co-organized CVPR and ECCV workshops on computer vision for videogames.',
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
    bio: 'Researcher at Stanford, previously at Google DeepMind, advised by Maneesh Agrawala. His work includes Human Action CLIPs and the DeepSpeak dataset. He co-organized APAI at ICCV 2025 and CVPR 2026.',
    photo: '/images/bohacek.jpg',
  },
  {
    name: 'Sarah Barrington',
    affiliation: 'UC Berkeley',
    bio: 'PhD candidate in Hany Farid’s digital forensics lab. Her research examines human responses to synthetic media, including the detection of AI-generated voice clones; she also co-created DeepSpeak. She co-organized APAI at ICCV 2025 and CVPR 2026.',
    photo: '/images/barrington.jpg',
  },
  {
    name: 'Jesse Hostetler',
    affiliation: 'UL Research Institutes',
    url: 'https://jhostetler.github.io/',
    bio: 'Research Engineer at UL Research Institutes (ULRI) who leads development of the Dyff cloud platform that will host the Impostor Avatar Challenge. He holds a PhD from Oregon State University and has a research background in artificial intelligence, machine learning, and planning. He represents ULRI, whose Digital Safety Research Institute (DSRI) has hosted the SAFE video and audio challenges and the Image Edit Detection and Localization Challenge.',
    photo: '/images/hostetler.jpg',
  },
  {
    name: 'Aleksandar Petrov',
    affiliation: 'Google DeepMind',
    url: 'https://p-petrov.com/',
    bio: 'Research Scientist at Google DeepMind working on multimedia provenance and watermarking within the SynthID effort. His research on the coexistence and ensembling of watermarks connects the workshop to questions about combining provenance mechanisms in practical systems, and to the SynthID team’s extension of watermarking to biological design.',
  },
  {
    name: 'Matthew Stamm',
    affiliation: 'Drexel University',
    bio: 'Professor and director of the Multimedia and Information Security Lab at Drexel University. His work includes constrained-CNN forensic analysis, VideoFACT, and biometric approaches to exposing impersonation. He served as General Chair of ACM IH&MMSec 2017 and has co-organized workshops on synthetic media, biometrics, and operational forensics.',
    photo: '/images/stamm.jpg',
  },
  {
    name: 'Andrew Owens',
    affiliation: 'Cornell Tech',
    url: 'https://andrewowens.com/',
    bio: 'Associate Professor of Computer Science at Cornell Tech. He has developed early methods for self-supervised image forensics and AI-generated image detection. He has organized the yearly CVPR Sight and Sound workshop (2018–2026) and was a CVPR Workshop Chair in 2024.',
    photo: '/images/owens.jpg',
  },
];

// Program Committee — reviewers who have confirmed for CVPR 2027.
export const programCommittee = {
  description:
    'We plan three reviews per submission and a target load of at most three papers per reviewer; for the expected 40–60 submissions, this requires 40–60 active reviewers, subject to conflicts and expertise. We have already received reviewing confirmations from many prospective reviewers, listed below, and will continue to recruit from the communities represented by the workshop’s four research pillars.',
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
      affiliation: 'University of California, Santa Barbara',
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
  'Preliminary five-hour, half-day program. Times illustrate a 13:00–18:00 afternoon slot; CVPR will assign the actual date and start time. If a different slot is assigned, times will shift while the session order and durations stay the same. Speaker assignments and sponsored activities remain provisional.';

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
    detail: '30 seconds per poster, for an anticipated 14–24 posters',
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
    detail: 'Moderated by David Luebke · including time for audience questions',
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
        'Research submissions across all four pillars: detection and forensic attribution, provenance and creator attribution, provenance for biological design, and authorized use of AI-mediated interactions, including identity verification. Accepted papers appear in the CVPR 2027 workshop proceedings.',
      deadline: 'Paper deadline: February 28, 2027 (AoE)',
      href: '#submission-details',
    },
    {
      title: 'Competition track',
      tag: 'Impostor Avatar Challenge',
      body:
        'Develop and submit systems from the December 15, 2026 launch through June 6, 2027 — about six months, closing roughly two weeks before the workshop. Participation, awards, and winning-team presentations do not require an archival paper.',
      deadline: 'System deadline: June 6, 2027 (AoE)',
      href: '/challenge',
    },
  ],
  details: [
    'Submissions are handled through OpenReview with double-blind review. All authors must have complete OpenReview profiles.',
    'Submissions must follow the CVPR 2027 paper submission style, format, and length restrictions, including the eight-page main-text limit, excluding references and the required LLM Usage Statement.',
    'Each submission receives three reviews. Six accepted papers are presented as five-minute spotlight talks, and other accepted contributions are presented as posters with fast-forward presentations; acceptance depends on review outcomes rather than a fixed quota.',
    'Contributors will be asked to describe dataset permissions, limitations, and relevant safeguards.',
  ],
  topicGroups: [
    {
      title: 'Detection and forensic attribution',
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
      title: 'Provenance for biological design',
      topics: [
        'Verifiable origin of AI-designed sequences and structures as designs are modified and synthesized',
        'Watermarking that preserves biological function',
        'Metadata-based provenance for molecular and structural data',
        'Implications for biosecurity screening and database integrity',
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
        'Distinguishing driver-identity verification from authorization of a particular use',
        'Reliability under bandwidth constraints, video compression, and channel degradation',
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
        'Website, call for papers, and OpenReview submissions open upon workshop acceptance (decision expected December 22)',
    },
    { date: 'February 28, 2027', label: 'Paper submission deadline' },
    { date: 'March 1 – 19', label: 'Peer review' },
    { date: 'March 20 – 21', label: 'Discussion and decisions' },
    { date: 'March 22', label: 'Author notification' },
    { date: 'March 23 – 26', label: 'Author and metadata checks' },
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
    'The working conflict policy excludes submissions from organizers and from people with personal conflicts with organizers, including their students, postdocs, and close collaborators on the submitted work.',
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
    'The motivating application is avatar-based videoconferencing, where the person controlling a synthetic representation should remain verifiably linked to the claimed identity throughout the interaction. A system receives authentic enrollment videos for registered users and evaluates subsequent videos against a claimed identity. The driving identity must remain verifiable from the video received after encoding and transmission, and the challenge results will inform discussion of robustness under these conditions.',
    'Earlier evaluations, including the SAFE challenges and VASDL at APAI CVPR 2026, focused on the detection, attribution, and temporal localization of synthetic and manipulated media. This challenge takes a new direction: given a synthetic talking-head video, verify who drives it.',
    'The challenge builds on DSRI’s experience running the SAFE video, SAFE audio, and image-edit detection evaluations, and adopts the Dyff container-based inference interface from the image-edit challenge, adapting its inputs and outputs to driver verification and identification.',
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
        'Identify the driving person from a fixed registered set during impostor segments.',
    },
  ],
  data: [
    'The evaluation uses authentic enrollment videos and separately constructed challenge videos with temporal ground truth. Cases include matching and mismatching driver identities and changes in match status within a video.',
    'Participants may request the NVFAIR dataset for training. NVFAIR is a suggested training resource; participants may also draw on datasets such as DeepSpeak and VoxCeleb, subject to their access conditions, licenses, and the challenge protocol. These provide complementary audiovisual material but do not replace the challenge-specific enrollment and evaluation data.',
    'The challenge evaluation uses separately constructed, similar data rather than the existing NVFAIR test split. Enrollment and development materials are released with the protocol at launch, while Small and Full Test media remain sequestered. The public protocol defines the registered driver set, permitted inputs, identity labels, and the separation of training, development, and evaluation data.',
  ],
  submission: [
    'Teams submit Docker containers exposing an HTTP inference API, with an optional separate volume for model weights.',
    'The planned evaluation environment provides one NVIDIA L4 GPU, eight vCPUs, and 32 GiB of memory per system.',
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
      body: 'Final evaluation of eligible systems on sequestered data, determining the ranking.',
    },
  ],
  metrics: [
    'Verification metrics aggregate per-video scores and report standard measures such as accuracy and ROC AUC, alongside metrics for the speed and efficiency of participants’ methods.',
    'In addition to producing rankings, the evaluation team will analyze system capabilities and limitations.',
    'The evaluation strategy will be further refined and announced on the challenge submission system.',
  ],
  integrity: [
    'Before release, the evaluation team will confirm permission for enrollment, reenactment, evaluation, and controlled data sharing, including withdrawal procedures and access restrictions for the NVFAIR dataset.',
    'The protocol uses pseudonymous driver identities from NVFAIR and will adhere to similar measures for additional test data. Where the dataset supports it, the evaluation will examine qualitative variation across subjects (without uniquely identifying them) and generators, and document the limits of those comparisons.',
    'Rules governing organizer participation, baselines, and prize eligibility will be published before launch so that access to evaluation data does not confer an advantage. Participant citation requirements will be limited to work directly relevant to the challenge.',
  ],
  timeline: [
    { date: 'December 15, 2026', label: 'Challenge launch: public protocol, enrollment and development materials, and submission interface' },
    { date: 'December 15 – June 6', label: 'Participant development, rolling submissions, and Interface and Small Tests' },
    { date: 'June 6, 2027 (AoE)', label: 'Final containers and model weights due; systems are frozen for final evaluation' },
    { date: 'June 7 – 11', label: 'Sequestered Full Test evaluation and integrity checks' },
    { date: 'June 15', label: 'Team confirmation and preparation of workshop presentations' },
    { date: 'June 20 or 21', label: 'Winner announcements, team presentations, and evaluation discussion at the workshop' },
  ] as DateItem[],
  timelineNotes: [
    'The December 15 launch precedes CVPR’s December 22 workshop acceptance notification and is therefore an independent challenge launch; the results session at CVPR is conditional on workshop acceptance. The June challenge deadline is independent of the archival paper deadlines and does not extend them.',
    'These dates and the final evaluation capacity are subject to confirmation with the evaluation team. If data or interface preparation is delayed, the launch and submission dates will be revised while preserving at least five months of participant development time from the release of usable materials. If a fair final evaluation cannot be completed before CVPR, the session will report verified interim findings and defer winner announcements.',
  ],
  prizes:
    'The top performer in the challenge will receive a GPU prize. The exact GPU model will be chosen to comply with US government export restrictions, which may mean we cannot ship a GPU to every location.',
  atWorkshop:
    'The workshop announces the winners, hosts presentations from leading teams, and examines the organizers’ findings on system capabilities and limitations. The session connects these findings to broader questions about identity evidence and how practical verification techniques need to evolve as AI-mediated interactions become prevalent.',
};
