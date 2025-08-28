import React, { useMemo, useState } from "react";
import {
  BookOpen,
  Clock,
  Code,
  Briefcase,
  IndianRupee,
  Layers,
  Database,
  Server,
  Cloud,
  Rocket,
  Award,
  Users,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Globe,
  MonitorSmartphone,
  ShieldCheck,
  Bot,
  Cpu,
  GitBranch,
  Wrench,
  Video,
  MessageSquare,
  Star,
  GraduationCap,
  Building2,
  CalendarDays,
  ClipboardList,
  FileCode,
  TerminalSquare,
  Boxes,
  Brain,
  Link,
  MousePointer,
  NotebookPen,
} from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Utility: simple classnames joiner
const cn = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(" ");

// Reusable building blocks
const Section: React.FC<{ id?: string; title: string; subtitle?: string; children: React.ReactNode; className?: string }>
  = ({ id, title, subtitle, children, className }) => (
  <section id={id} className={cn("max-w-6xl mx-auto mb-12", className)}>
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
    </div>
    {children}
  </section>
);

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string; accent?: string }>
  = ({ icon, label, value, accent = "text-blue-600" }) => (
  <div className="bg-white rounded-2xl shadow p-5">
    <div className={cn("w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-3", accent)}>
      <div className="text-current">{icon}</div>
    </div>
    <div className="text-sm text-gray-500">{label}</div>
    <div className="text-xl font-semibold">{value}</div>
  </div>
);

const Badge: React.FC<{ children: React.ReactNode }>= ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
    {children}
  </span>
);

const Pill: React.FC<{ children: React.ReactNode }>= ({ children }) => (
  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
    {children}
  </span>
);

const Divider = () => <div className="h-px bg-gray-200 my-8" />;

// Data
const technologies = {
  frontend: [
    "HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES2023)", "TypeScript",
    "React", "Next.js", "Vite", "Redux Toolkit", "Zustand",
    "Vercel", "Framer Motion", "Form validation", "Accessibility (a11y)",
  ],
  backend: [
    "Node.js", "Express.js", "REST APIs", "GraphQL", "WebSockets",
    "Authentication (JWT/OAuth)", "RBAC", "Caching (Redis)",
    "Rate limiting", "File uploads", "Testing (Jest)",
  ],
  database: ["MongoDB", "PostgreSQL", "Prisma ORM", "Mongoose", "SQL Basics", "Indexing"],
  devops: ["Git & GitHub", "CI/CD", "Docker Basics", "Cloud (AWS/Vercel)", "Environment variables", "Monitoring"],
  extras: ["DSA for Interviews", "System Design 101", "Payment gateways", "Email/SMS", "Analytics", "Security Basics"],
};

const outcomes = [
  "Build & deploy responsive full-stack apps",
  "Design REST/GraphQL APIs with auth & roles",
  "Model data with SQL/NoSQL effectively",
  "Write clean, testable code with Git workflows",
  "Deploy to cloud with CI/CD pipelines",
  "Crack interviews: DSA + projects + mock rounds",
];

const roles = [
  { title: "Full-Stack Developer", icon: <Layers className="w-5 h-5" /> },
  { title: "Frontend Engineer", icon: <MonitorSmartphone className="w-5 h-5" /> },
  { title: "Backend Engineer", icon: <Server className="w-5 h-5" /> },
  { title: "Software Engineer", icon: <Code className="w-5 h-5" /> },
  { title: "DevOps Associate", icon: <Cloud className="w-5 h-5" /> },
  { title: "Solutions Engineer", icon: <Wrench className="w-5 h-5" /> },
];

const projects = [
  {
    name: "E‑Commerce Store (MERN)",
    skills: ["JWT Auth", "Cart", "Payments", "Admin Panel"],
    level: "Capstone",
  },
  {
    name: "Job Board (Next.js + Prisma)",
    skills: ["PostgreSQL", "Server Actions", "Filters", "SSR/ISR"],
    level: "Advanced",
  },
  {
    name: "Chat App (Socket.io)",
    skills: ["Real-time", "Notifications", "Typing", "Status"],
    level: "Intermediate",
  },
  {
    name: "Portfolio + Blog", skills: ["SEO", "MDX", "Forms", "CMS"], level: "Starter",
  },
];

const curriculum: { title: string; weeks: string; topics: string[] }[] = [
  { title: "Web Foundations", weeks: "Week 1-2", topics: ["HTML5 semantics", "CSS Flex/Grid", "Responsive design", "Tailwind utility-first"] },
  { title: "JavaScript Essentials", weeks: "Week 3-4", topics: ["ES modules", "Async/Await", "Fetch", "Array & Object patterns", "Error handling"] },
  { title: "Frontend Framework", weeks: "Week 5-7", topics: ["React hooks", "State mgmt", "Routing", "Forms", "A11y", "Testing UI"] },
  { title: "Backend APIs", weeks: "Week 8-10", topics: ["Express", "Middlewares", "Auth", "RBAC", "File upload", "Email"] },
  { title: "Databases", weeks: "Week 11-12", topics: ["MongoDB", "PostgreSQL", "Prisma", "Mongoose", "Indexes", "Migrations"] },
  { title: "Advanced Topics", weeks: "Week 13-14", topics: ["Caching", "Queues", "Sockets", "Rate limiting", "Security basics"] },
  { title: "DevOps & Deployment", weeks: "Week 15", topics: ["Docker basics", "CI/CD", "Env vars", "Monitoring", "Vercel/AWS"] },
  { title: "Capstone & Interview", weeks: "Week 16-24", topics: ["System design 101", "DSA sprints", "Resume/LinkedIn", "Mock interviews"] },
];

const pricing = [
  { plan: "Starter", price: "₹19,999", duration: "3 months", features: ["Self-paced videos", "Weekly doubt clearing", "1 Capstone", "Certificate"] },
  { plan: "Pro", price: "₹39,999", duration: "6 months", features: ["Live + recorded", "Mentor support", "2 Capstones", "Placement prep"] },
  { plan: "Career+", price: "₹59,999", duration: "9-12 months", features: ["1:1 mentorship", "Interview prep", "Internship assistance", "Job referrals"] },
];

const faqs = [
  { q: "Is prior coding experience required?", a: "Basics help, but we start from fundamentals and ramp up with projects." },
  { q: "Do you provide certificates?", a: "Yes, a verifiable certificate is awarded upon successful completion." },
  { q: "Is there placement assistance?", a: "Career+ includes resume reviews, mock interviews, and referrals to hiring partners." },
  { q: "What if I miss a live class?", a: "All live sessions are recorded; you can watch anytime and ask doubts in forums." },
  { q: "Do you offer EMI or scholarships?", a: "Yes—EMI options are available and merit-based scholarships up to 40%." },
];

const mentors = [
  { name: "Ananya Rao", title: "Senior Full-Stack @ FinTech", exp: "8+ yrs", skills: ["React", "Node", "AWS"] },
  { name: "Rohit Singh", title: "SWE II @ SaaS", exp: "6+ yrs", skills: ["Next.js", "Postgres", "Prisma"] },
  { name: "Sneha Iyer", title: "Lead Backend @ HealthTech", exp: "10+ yrs", skills: ["Node", "Security", "DevOps"] },
];

const companies = [
  "Amazon", "Flipkart", "Zoho", "Infosys", "TCS", "Wipro", "Accenture", "Freshworks", "Razorpay", "Zerodha",
];

const schedule = [
  { day: "Mon", items: ["Live: React Hooks Deep Dive", "Doubt Clearing"] },
  { day: "Wed", items: ["Project Lab: API Auth", "Standup & Review"] },
  { day: "Fri", items: ["Career Clinic: Resume", "Mock Interview"] },
];

const scholarships = [
  { title: "Merit Scholarship", off: "20%", note: "Score >80% in entry test" },
  { title: "Women in Tech", off: "25%", note: "Limited seats" },
  { title: "Early Bird", off: "15%", note: "Enroll 30 days before batch" },
];

const salaryBrackets = [
  { label: "Minimum", value: "₹3 – 5 LPA" },
  { label: "Average", value: "₹6 – 10 LPA" },
  { label: "Top 25%", value: "₹12 – 18 LPA" },
  { label: "Experienced", value: "₹20+ LPA" },
];

const tableOfContents = [
  { id: "overview", label: "Overview" },
  { id: "outcomes", label: "Outcomes" },
  { id: "technologies", label: "Technologies" },
  { id: "curriculum", label: "Curriculum" },
  { id: "projects", label: "Projects" },
  { id: "pricing", label: "Pricing" },
  { id: "careers", label: "Careers & Salary" },
  { id: "mentors", label: "Mentors" },
  { id: "faqs", label: "FAQs" },
  { id: "apply", label: "Apply" },
];

// Simple Accordion
const Accordion: React.FC<{ items: { title: string; content: React.ReactNode }[] }>= ({ items }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <div key={i} className="border border-gray-200 rounded-xl bg-white overflow-hidden">
          <button
            className="w-full flex items-center justify-between p-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-medium">{it.title}</span>
            {open === i ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {open === i && (
            <div className="p-4 pt-0 text-gray-600">{it.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

// Simple Tabs
const Tabs: React.FC<{ tabs: { key: string; label: string; content: React.ReactNode }[] }>= ({ tabs }) => {
  const [active, setActive] = useState(tabs[0]?.key ?? "");
  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={cn(
              "px-3 py-2 rounded-lg text-sm border",
              active === t.key ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-4 bg-white border border-gray-200 rounded-xl p-4">
        {tabs.find(t => t.key === active)?.content}
      </div>
    </div>
  );
};

// Scroll helper (TOC)
const useScrollSpy = (ids: string[]) => {
  const [active, setActive] = useState(ids[0]);
  React.useEffect(() => {
    const handler = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [ids]);
  return active;
};

const FullStackDevelopment: React.FC = () => {
  const tocActive = useScrollSpy(tableOfContents.map(t => t.id));

  const techTabs = useMemo(() => ([
    {
      key: "frontend",
      label: "Frontend",
      content: (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
          {technologies.frontend.map((t, i) => (
            <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /><span>{t}</span></li>
          ))}
        </ul>
      ),
    },
    {
      key: "backend",
      label: "Backend",
      content: (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
          {technologies.backend.map((t, i) => (
            <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /><span>{t}</span></li>
          ))}
        </ul>
      ),
    },
    {
      key: "database",
      label: "Database",
      content: (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
          {technologies.database.map((t, i) => (
            <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /><span>{t}</span></li>
          ))}
        </ul>
      ),
    },
    {
      key: "devops",
      label: "DevOps",
      content: (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
          {technologies.devops.map((t, i) => (
            <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /><span>{t}</span></li>
          ))}
        </ul>
      ),
    },
    {
      key: "extras",
      label: "Extras",
      content: (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
          {technologies.extras.map((t, i) => (
            <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /><span>{t}</span></li>
          ))}
        </ul>
      ),
    },
  ]), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header/>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.07),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.07),transparent_40%)]" />
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex gap-2 mb-3 flex-wrap">
                <Badge><Award className="w-3.5 h-3.5 mr-1" /> Certificate</Badge>
                <Badge><ShieldCheck className="w-3.5 h-3.5 mr-1" /> Job Assistance</Badge>
                <Badge><Globe className="w-3.5 h-3.5 mr-1" /> Remote Friendly</Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Become a <span className="text-blue-600">Full‑Stack Developer</span> from scratch
              </h1>
              <p className="mt-4 text-gray-600 md:text-lg">
                Master frontend, backend, databases, and cloud deployment. Build 4+ portfolio projects and get interview‑ready.
              </p>
              <div className="mt-6 flex gap-3 flex-wrap">
                <a href="#apply" className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700">Apply Now</a>
                <a href="#curriculum" className="px-5 py-3 rounded-xl bg-white border hover:bg-gray-50">View Curriculum</a>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <StatCard icon={<Clock />} label="Duration" value="6–12 months" />
                <StatCard icon={<Users />} label="Format" value="Live + Self‑paced" />
                <StatCard icon={<Briefcase />} label="Projects" value="4+ Capstones" />
                <StatCard icon={<Award />} label="Certificate" value="Yes" />
              </div>
            </div>
            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white grid place-items-center"><Code /></div>
                <div>
                  <div className="font-semibold">What you'll learn</div>
                  <div className="text-sm text-gray-500">A snapshot of modules & skills</div>
                </div>
              </div>
              <Divider />
              <ul className="space-y-2 text-sm">
                {outcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600" /><span>{o}</span></li>
                ))}
              </ul>
              <Divider />
              <div className="grid grid-cols-2 gap-2 text-xs">
                <Pill><GitBranch className="w-3.5 h-3.5 mr-1" /> Git & PRs</Pill>
                <Pill><Cpu className="w-3.5 h-3.5 mr-1" /> DSA Basics</Pill>
                <Pill><Database className="w-3.5 h-3.5 mr-1" /> SQL/NoSQL</Pill>
                <Pill><Server className="w-3.5 h-3.5 mr-1" /> REST/GraphQL</Pill>
                <Pill><Cloud className="w-3.5 h-3.5 mr-1" /> CI/CD</Pill>
                <Pill><ShieldCheck className="w-3.5 h-3.5 mr-1" /> Security</Pill>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section id="overview" title="Program Overview" subtitle="Everything students need to know at a glance">
        <div className="grid md:grid-cols-3 gap-6">
          <StatCard icon={<IndianRupee />} label="Avg Salary" value="₹6–10 LPA" />
          <StatCard icon={<IndianRupee />} label="Min Salary" value="₹3–5 LPA" />
          <StatCard icon={<Rocket />} label="Top Packages" value="₹20+ LPA" />
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border">
            <h3 className="font-semibold text-lg flex items-center gap-2"><BookOpen className="w-5 h-5" /> Prerequisites</h3>
            <ul className="mt-3 space-y-2 text-gray-700 text-sm">
              <li>Basic computer usage and curiosity to learn.</li>
              <li>Laptop with 8GB RAM (16GB recommended).</li>
              <li>Stable internet connection (10Mbps+).</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 border">
            <h3 className="font-semibold text-lg flex items-center gap-2"><ClipboardList className="w-5 h-5" /> Assessments</h3>
            <ul className="mt-3 space-y-2 text-gray-700 text-sm">
              <li>Module quizzes and coding challenges.</li>
              <li>Project evaluations with code reviews.</li>
              <li>Final capstone & interview simulation.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section id="outcomes" title="Learning Outcomes" subtitle="Graduate with job‑ready skills">
        <div className="grid md:grid-cols-3 gap-6">
          {outcomes.map((o, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border">
              <div className="w-10 h-10 rounded-lg bg-green-50 text-green-700 grid place-items-center mb-3"><CheckCircle2 /></div>
              <div className="font-semibold">{o}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Technologies */}
      <Section id="technologies" title="Technologies & Tools" subtitle="Modern stack used by top companies">
        <Tabs tabs={techTabs} />
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={<FileCode />} label="Code Editor" value="VS Code" />
          <StatCard icon={<TerminalSquare />} label="Terminal" value="Zsh/Bash" />
          <StatCard icon={<Boxes />} label="Package Manager" value="pnpm / npm" />
          <StatCard icon={<Link />} label="APIs" value="REST • GraphQL" />
        </div>
      </Section>

      {/* Curriculum */}
      <Section id="curriculum" title="Curriculum Roadmap" subtitle="Week‑by‑week modules and topics">
        <div className="space-y-4">
          {curriculum.map((mod, i) => (
            <div key={i} className="bg-white rounded-2xl border p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white grid place-items-center"><BookOpen className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold">{mod.title}</div>
                    <div className="text-xs text-gray-500">{mod.weeks}</div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {mod.topics.slice(0, 4).map((t, j) => (
                    <Pill key={j}>{t}</Pill>
                  ))}
                </div>
              </div>
              <Divider />
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                {mod.topics.map((t, k) => (
                  <li key={k} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" />{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Hands‑on Projects" subtitle="Build a strong portfolio">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl border p-6 hover:shadow transition">
              <div className="flex items-center gap-2 text-sm text-gray-500"><Star className="w-4 h-4 text-yellow-500" /> {p.level}</div>
              <div className="text-lg font-semibold mt-1">{p.name}</div>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs">
                {p.skills.map((s, j) => <Pill key={j}>{s}</Pill>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      {/* Careers & Salary */}
      <Section id="careers" title="Careers & Salaries" subtitle="Roles you can target after graduation">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><Briefcase className="w-5 h-5" /> Roles</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {roles.map((r, i) => (
                <li key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 border"><span className="text-blue-600">{r.icon}</span><span>{r.title}</span></li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><IndianRupee className="w-5 h-5" /> Salary Insights</h3>
            <ul className="space-y-2 text-sm">
              {salaryBrackets.map((s, i) => (
                <li key={i} className="flex items-center justify-between border rounded-xl px-3 py-2 bg-gray-50">
                  <span>{s.label}</span>
                  <span className="font-semibold">{s.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-white rounded-2xl border p-6">
          <h3 className="font-semibold flex items-center gap-2"><Building2 className="w-5 h-5" /> Hiring Partners</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {companies.map((c, i) => <Pill key={i}>{c}</Pill>)}
          </div>
        </div>
      </Section>

      {/* Mentors */}
      <Section id="mentors" title="Your Mentors" subtitle="Learn from industry experts">
        <div className="grid md:grid-cols-3 gap-6">
          {mentors.map((m, i) => (
            <div key={i} className="bg-white rounded-2xl border p-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white grid place-items-center text-lg font-bold">{m.name.split(" ").map(p=>p[0]).slice(0,2).join("")}</div>
              <div className="mt-3 font-semibold">{m.name}</div>
              <div className="text-sm text-gray-500">{m.title} • {m.exp}</div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {m.skills.map((s, j) => <Pill key={j}>{s}</Pill>)}
              </div>
              <Divider />
              <div className="text-sm text-gray-600 flex items-center gap-2"><Video className="w-4 h-4" /> Weekly live workshops</div>
              <div className="text-sm text-gray-600 flex items-center gap-2 mt-1"><MessageSquare className="w-4 h-4" /> 24×7 doubt support</div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQs */}
      <Section id="faqs" title="Frequently Asked Questions" subtitle="Still curious? We got you">
        <Accordion items={faqs.map(f => ({ title: f.q, content: <p>{f.a}</p> }))} />
      </Section>

      {/* Schedule */}
      <Section id="schedule" title="Weekly Schedule" subtitle="Balance work and learning">
        <div className="grid md:grid-cols-3 gap-6">
          {schedule.map((d, i) => (
            <div key={i} className="bg-white rounded-2xl border p-6">
              <div className="text-lg font-semibold flex items-center gap-2"><CalendarDays className="w-5 h-5" /> {d.day}</div>
              <ul className="mt-3 space-y-2 text-sm">
                {d.items.map((it, j) => <li key={j} className="flex items-center gap-2"><MousePointer className="w-4 h-4" /> {it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Apply */}
      <Section id="apply" title="Apply Now" subtitle="Limited seats per cohort">
        <div className="grid md:grid-cols-2 gap-6">
          <form className="bg-white rounded-2xl border p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input type="text" placeholder="Your name" className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input type="email" placeholder="you@example.com" className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Phone</label>
                <input type="tel" placeholder="+91" className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Experience Level</label>
                <select className="mt-1 w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-gray-600">What do you want to achieve?</label>
              <textarea rows={4} placeholder="Tell us your goals" className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <input id="terms" type="checkbox" className="w-4 h-4" />
              <label htmlFor="terms">I agree to terms and privacy policy.</label>
            </div>
            <button type="submit" className="mt-5 w-full px-4 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700">Submit Application</button>
          </form>

          <div className="bg-white rounded-2xl border p-6">
            <h3 className="font-semibold flex items-center gap-2"><Brain className="w-5 h-5" /> Why Choose This Program</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" /> Mentor‑led learning with real‑world projects.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" /> Updated 2025 stack and best practices.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" /> Career support until you land a role.</li>
            </ul>
            <Divider />
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border p-4">
                <div className="text-sm text-gray-500">Contact</div>
                <div className="font-semibold">admissions@academy.edu</div>
                <div className="text-sm">+91 90000 00000</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="text-sm text-gray-500">Next Cohort</div>
                <div className="font-semibold">Oct 15, 2025</div>
                <div className="text-sm">Evening batch (IST)</div>
              </div>
            </div>
            <Divider />
            <div className="flex flex-wrap gap-2 text-xs">
              <Badge>EMI Available</Badge>
              <Badge>Placement Support</Badge>
              <Badge>Recorded Sessions</Badge>
            </div>
          </div>
        </div>
      </Section>
      <Footer/>
    </div>
  );
};

export default FullStackDevelopment;
