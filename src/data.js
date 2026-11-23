// Central content — edit here to update the entire site.

export const profile = {
  name: 'Urvil Jivani',
  role: 'Senior Software Engineer',
  tagline: 'I build high-throughput ML inference systems and the tooling around them.',
  about: [
    `I'm a Senior Software Engineer at Microsoft in Bangalore, working on the C++ online inference platform that serves ranking and selection models — GPU encoders and small language models — for Bing, Audience Network and Copilot ads at millions of requests per second. I care about making large-scale ML serving fast, cheap, and reliable.`,
    `Before Microsoft, I spent three years at Nutanix building hybrid-cloud management services in Go and Python. I also did research at the MIT Media Lab's Fluid Interfaces group, where I worked on deep-learning sleep staging and the architecture of the FASCIA sleep-data platform.`,
    `I studied Computer Science at BITS Pilani, Goa Campus, and have published at IJCNN and IEEE EMBC. These days I'm especially interested in LLM inference, AI agents and how to evaluate them, and distributed systems.`,
  ],
  location: 'Bangalore, India',
  email: 'urviljivani007@gmail.com',
}

export const socials = [
  { name: 'GitHub', url: 'https://github.com/urviljivani', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/urviljivani007', icon: 'linkedin' },
  { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=F1YFZ2gAAAAJ', icon: 'scholar' },
  { name: 'Email', url: 'mailto:urviljivani007@gmail.com', icon: 'mail' },
]

export const experience = [
  {
    title: 'Senior Software Engineer',
    company: 'Microsoft',
    url: 'https://www.microsoft.com',
    period: 'Nov 2024 — Present',
    description: 'Build and operate the online inference platform behind ads ranking for Paid Search, Audience Network and Copilot. Cut GPU usage with two-stage inference, dynamic batching and score caching; shipped dynamic filters for Product Ads in Copilot; and built skills and evals for AI agents that automate performance tuning and incident investigation. Promoted from Software Engineer II in Aug 2026. As on-call and release owner, led production rollouts across four regions.',
    tags: ['C++', 'GPU Inference', 'ONNX Runtime', 'TensorRT', 'AI Agents'],
  },
  {
    title: 'Member of Technical Staff 3',
    company: 'Nutanix',
    url: 'https://www.nutanix.com',
    period: 'Aug 2021 — Oct 2024',
    description: 'Designed and built the Domain Manager for Nutanix Central, used by 1000+ customers, and rebuilt its metadata API for 2x performance. Developed Projects V3, the governance and multitenancy layer scaling to 25K VMs. Mentored four new hires.',
    tags: ['Go', 'Python', 'JavaScript', 'Hybrid Cloud'],
  },
  {
    title: 'Research Intern',
    company: 'MIT Media Lab, Fluid Interfaces',
    url: 'https://www.media.mit.edu/groups/fluid-interfaces/overview/',
    period: 'Jan 2021 — Jan 2022',
    description: 'Tuned PyTorch sleep-staging models for robustness to noisy data (86% best accuracy) and designed the architecture of FASCIA, a platform for collecting sleep data at 4M data points per session. Co-authored the IEEE EMBC 2023 paper.',
    tags: ['PyTorch', 'Deep Learning', 'MQTT', 'EEG'],
  },
]

export const publications = [
  {
    year: '2023',
    title: 'Fascia Ecosystem: A Step Forward in Sleep Engineering and Research',
    venue: 'IEEE EMBC',
    url: 'https://www.media.mit.edu/publications/fascia-ecosystem-a-step-forward-in-sleep-engineering-and-research/',
  },
  {
    year: '2021',
    title: 'A Swarm Variant for the Schrödinger Solver',
    venue: 'IJCNN',
    url: 'https://arxiv.org/abs/2104.04795',
  },
]

export const projects = [
  {
    title: 'Raft & Fault-Tolerant KV Store',
    description: 'Implementation of the Raft consensus protocol and a fault-tolerant key/value service built on top of it, written in Go for MIT\'s 6.824 distributed systems course.',
    tags: ['Go', 'Raft', 'Distributed Systems'],
    url: 'https://github.com/urviljivani/raft',
    stars: null,
  },
  {
    title: 'MapReduce',
    description: 'MapReduce implementation in Go with a coordinator and workers, built for MIT\'s 6.824 distributed systems course.',
    tags: ['Go', 'MapReduce', 'Distributed Systems'],
    url: 'https://github.com/urviljivani/map-reduce',
    stars: null,
  },
  {
    title: 'CartPole RL in Noisy Conditions',
    description: 'Reinforcement-learning agents (DQN and policy-gradient approaches) for CartPole with randomized gravity, friction, and noise. Major ML project submission with a written report.',
    tags: ['Reinforcement Learning', 'DQN', 'Python'],
    url: 'https://github.com/urviljivani/CartPole-RL-in-Noisy-Conditions',
    stars: null,
  },
  {
    title: 'Document Ranking',
    description: 'Information-retrieval pipeline comparing boolean retrieval, term-frequency and TF-IDF models with clustering, plus a web crawler with a PageRank implementation.',
    tags: ['Information Retrieval', 'TF-IDF', 'PageRank'],
    url: 'https://github.com/urviljivani/Document_Ranking',
    stars: null,
  },
  {
    title: 'Meme Sentiment Analysis',
    description: 'Three modeling approaches for the Facebook Hateful Memes challenge, with exploratory data analysis and training notebooks.',
    tags: ['Multimodal', 'Deep Learning', 'Jupyter'],
    url: 'https://github.com/urviljivani/Meme_Sentiment_Analysis',
    stars: 1,
  },
  {
    title: 'Land Use / Land Cover Classification',
    description: 'Deep-learning semantic segmentation model for classifying Sentinel-2A satellite imagery into built-up areas, water bodies, vegetation, and barren land.',
    tags: ['Semantic Segmentation', 'Remote Sensing', 'Deep Learning'],
    url: 'https://github.com/urviljivani/LULC-land-use-land-classification-deeplearning-based-model-sementic-segmentation-',
    stars: 3,
  },
  {
    title: 'Paraphrase Detection',
    description: 'Kaggle competition entry comparing a Siamese MaLSTM network against a convolutional network that subtracts sentence feature vectors.',
    tags: ['NLP', 'Siamese Networks', 'Kaggle'],
    url: 'https://github.com/urviljivani/Paraphrase_Detection',
    stars: null,
  },
  {
    title: 'A* for the 8-Puzzle',
    description: 'C++ solver for the 8-puzzle using A* with Manhattan and mismatch heuristics, measuring runtime, fringe size, and nodes expanded.',
    tags: ['C++', 'A* Search', 'Heuristics'],
    url: 'https://github.com/urviljivani/AStar-for-8-puzzle-problem',
    stars: null,
  },
  {
    title: 'Modified WalkSAT',
    description: 'WalkSAT variant for satisfiability problems with a modified flip strategy, evaluated on 162 generated inputs.',
    tags: ['Python', 'SAT Solving', 'Algorithms'],
    url: 'https://github.com/urviljivani/Walksat-Algorithm',
    stars: null,
  },
]
