// Central content — edit here to update the entire site.

export const profile = {
  name: 'Urvil Jivani',
  role: 'Software Engineer',
  tagline: 'I build scalable AI systems and distributed infrastructure.',
  about: [
    `I'm a Senior Software Engineer with 3+ years at Microsoft, now pursuing an MS in Software Engineering at Carnegie Mellon University. I specialize in building AI agents, generative-AI systems, and high-performance distributed infrastructure.`,
    `At Microsoft, I led CPU and GPU infrastructure optimizations for large-scale AI workloads and built distributed systems serving millions of requests. My work spans the full stack of ML systems — from kernel-level optimizations to production agent frameworks.`,
    `Previously, I completed my undergraduate degree at BITS Pilani, K.K. Birla Goa Campus, where I published research in machine learning and optimization. I also collaborated with MIT Media Lab on sleep engineering research published at IEEE EMBC.`,
    `When I'm not coding, you'll find me exploring the latest in AI research, tinkering with open-source projects, or hiking the trails around Pittsburgh.`,
  ],
  location: 'Pittsburgh, PA',
  email: 'urviljivani007@gmail.com',
}

export const socials = [
  { name: 'GitHub', url: 'https://github.com/urviljivani007', icon: 'github' },
  { name: 'LinkedIn', url: 'https://in.linkedin.com/in/urviljivani007', icon: 'linkedin' },
  { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=F1YFZ2gAAAAJ', icon: 'scholar' },
  { name: 'Twitter', url: 'https://twitter.com/urviljivani007', icon: 'twitter' },
  { name: 'Email', url: 'mailto:urviljivani007@gmail.com', icon: 'mail' },
]

export const experience = [
  {
    title: 'MS in Software Engineering',
    company: 'Carnegie Mellon University',
    url: 'https://www.cmu.edu',
    period: 'Aug 2024 — Present',
    description: 'Pursuing advanced coursework in software architecture, AI systems, and distributed computing. Focused on building scalable AI agent frameworks and infrastructure for next-generation intelligent systems.',
    tags: ['AI Agents', 'Distributed Systems', 'Software Architecture'],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Microsoft',
    url: 'https://www.microsoft.com',
    period: '2021 — 2024',
    description: 'Led CPU and GPU infrastructure optimizations for large-scale AI workloads. Built distributed high-throughput systems serving millions of requests. Contributed to generative AI and agent-based product features across the Azure platform.',
    tags: ['GPU Infra', 'Distributed Systems', 'Generative AI', 'Azure'],
  },
  {
    title: 'Research Collaborator',
    company: 'MIT Media Lab',
    url: 'https://www.media.mit.edu',
    period: '2023',
    description: 'Co-authored "Fascia Ecosystem: A Step Forward in Sleep Engineering and Research" published at the 45th IEEE Engineering in Medicine & Biology Society (EMBC) conference.',
    tags: ['Sleep Engineering', 'Wearables', 'IEEE EMBC'],
  },
  {
    title: 'Teaching Assistant',
    company: 'BITS Pilani, K.K. Birla Goa Campus',
    url: 'https://www.bits-pilani.ac.in/goa/',
    period: '2018 — 2021',
    description: 'Designed quizzes, assignments, and labs for AI, OOP, DSA, and Computer Programming courses. Mentored undergraduate students on ML research projects and optimization techniques.',
    tags: ['AI', 'Data Structures', 'Mentoring'],
  },
]

export const projects = [
  {
    title: 'EM-PSO Optimizer',
    description: 'Exponentially-averaged momentum particle swarm optimization — a derivative-free optimizer for neural networks and the Schrödinger solver. Published at IJCNN 2021.',
    tags: ['Python', 'Optimization', 'Neural Networks'],
    url: 'https://github.com/urviljivani007',
    stars: null,
  },
  {
    title: 'DeepSleepNet',
    description: 'Automatic sleep-stage scoring from single-channel EEG signals using deep convolutional and recurrent networks. Part of the Fascia Ecosystem research.',
    tags: ['PyTorch', 'EEG', 'Deep Learning'],
    url: 'https://github.com/urviljivani007',
    stars: null,
  },
  {
    title: 'CartPole RL Agent',
    description: 'Reinforcement-learning agents trained and evaluated for robustness under noisy observations and dynamics. Benchmarked DQN, PPO, and A2C under perturbation.',
    tags: ['RL', 'OpenAI Gym', 'Python'],
    url: 'https://github.com/urviljivani007',
    stars: null,
  },
  {
    title: 'EEG Classification Pipeline',
    description: 'Sleep-stage classification pipeline using CNN architectures on physiological signal data with automated preprocessing and feature extraction.',
    tags: ['CNN', 'Signal Processing', 'scikit-learn'],
    url: 'https://github.com/urviljivani007',
    stars: null,
  },
  {
    title: 'Document Ranking System',
    description: 'Information-retrieval system for ranking documents by relevance using TF-IDF, BM25, and neural re-ranking approaches.',
    tags: ['NLP', 'Information Retrieval', 'Python'],
    url: 'https://github.com/urviljivani007',
    stars: null,
  },
  {
    title: 'Meme Sentiment Analysis',
    description: 'Multimodal sentiment analysis combining image and text features to classify internet meme sentiment using late fusion techniques.',
    tags: ['Multimodal', 'NLP', 'Computer Vision'],
    url: 'https://github.com/urviljivani007',
    stars: null,
  },
]
