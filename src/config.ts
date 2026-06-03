export const siteConfig = {
  name: "Artamis Karrys",
  title: "SOC Analyst I | IT Clinical Optimization Analyst | Malware Researcher",
  description: "Portfolio website of Artamis Karrys",
  accentColor: "#1d4ed8",
  social: {
    email: "artamiskarrys@gmail.com",
    linkedin: "https://linkedin.com/in/artamiskarrys",
    github: "https://github.com/akarrys",
  },
  aboutMe:
    "I am a cybersecurity professional with experience in Security Operations Center monitoring, incident response, threat hunting, and enterprise IT support. My background includes investigating phishing activity, malware alerts, suspicious authentication events, PowerShell-based threats, and account compromise indicators using Microsoft Sentinel, Microsoft Defender, Entra ID, and endpoint telemetry. I also build hands-on security labs focused on malware analysis, Cloudflare security hardening, network traffic analysis, and defensive security operations.",
  skills: ["Microsoft Sentinel", "Microsoft Defender XDR", "Defender for Endpoint", "Exchange Admin Center", "O365 Admin Center", "IOC Development",  "WMI Persistence", "Entra ID", "Incident Response", "Threat Hunting",
    "Malware Analysis",
    "Wireshark",
    "PowerShell",
    "Azure",
    "Cloud Security",
    "Active Directory",
    "Python"],
  projects: [
  {
    name: "Cloudflare Security Hardening Project",
    description:
      "Implemented CSP, HSTS, TLS 1.3, Cloudflare security controls, bot mitigation, and web security hardening. Improved Mozilla Observatory score from B+ (80) to A+ (110).",
    link: "#",
    skills: ["Cloudflare", "CSP", "TLS", "Web Security"]
  },

  {
    name: "Malware Analysis Laboratory",
    description:
      "Built isolated malware analysis environments and investigated persistence mechanisms, process execution, PowerShell activity, registry modifications, and network communications.",
    link: "#",
    skills: ["Malware Analysis", "Procmon", "Process Explorer", "Wireshark"]
  },

  {
    name: "Quasar RAT Analysis",
    description:
      "Performed dynamic malware analysis using Process Monitor, Event Viewer, Process Explorer, and network monitoring tools to identify persistence and execution behaviors.",
    link: "#",
    skills: ["Threat Hunting", "Windows Internals", "Malware Analysis"]
  },

  {
    name: "Wireless Network Attack Analysis",
    description:
      "Decrypted and analyzed WLAN traffic captures to identify attack activity, network indicators, and wireless security weaknesses.",
    link: "#",
    skills: ["Wireshark", "Network Security", "Packet Analysis"]
  }
],
   
  experience: [
  {
    company: "Phoenix Children's Hospital",
    title: "IT Clinical Optimization Analyst I",
    dateRange: "Sep 2024 – Present",
    bullets: [
      "Support clinical and administrative staff in a regulated healthcare environment.",
      "Partner with clinical teams to optimize EHR workflows and technical processes.",
      "Create technical documentation and coordinate escalation of complex issues.",
      "Assist in maintaining reliable and secure technology operations supporting patient care."
    ],
  },

  {
    company: "AccountabilIT",
    title: "SOC Analyst I",
    dateRange: "May 2023 – Sep 2024",
    bullets: [
      "Investigated Microsoft Sentinel and Defender security alerts involving phishing, malware, and account compromise activity.",
      "Analyzed PowerShell-based threats, WMI persistence, credential abuse, and lateral movement techniques.",
      "Correlated endpoint, identity, email, and network telemetry to identify indicators of compromise.",
      "Supported containment, remediation, threat hunting, and post-incident validation activities.",
      "Mapped adversary behavior to MITRE ATT&CK techniques and documented investigative findings."
    ],
  },

  {
    company: "Troon Golf",
    title: "IT Systems Technician",
    dateRange: "Jun 2022 – Mar 2023",
    bullets: [
      "Provided enterprise IT support for hardware, software, VOIP, and POS systems.",
      "Managed Active Directory accounts, permissions, and access controls.",
      "Supported network infrastructure utilizing UniFi and Meraki platforms.",
      "Troubleshot endpoint, network, and authentication issues across enterprise environments."
    ],
  }
],
  education: [
  {
    school: "Arizona State University",
    degree: "Bachelor of Science, Applied Computing (Cybersecurity)",
    dateRange: "",
    achievements: [
      "Focused on cybersecurity, networking, systems administration, and defensive security operations.",
      "Completed projects involving malware analysis, wireless traffic analysis, incident response, and cloud security.",
      "Developed hands-on experience with threat detection, security investigations, and enterprise technologies."
    ],
  }
],
};
