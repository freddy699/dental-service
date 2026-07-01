import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Calendar, ArrowUpRight, Sparkles, Stethoscope, Zap, Layers,
  ShieldCheck, Activity, Microscope, Clock, MapPin, ChevronRight, Plus, Quote, Star,
} from "lucide-react";
import heroWhitening from "@/assets/hero-whitening.jpg";
import trustPortrait from "@/assets/trust-portrait.jpg";
import equipChair from "@/assets/equipment-chair.jpg";
import equipScanner from "@/assets/equipment-scanner.jpg";
import equipXray from "@/assets/equipment-xray.jpg";
import charisLogo from "@/assets/charis-logo.asset.json";
import whiteningBA from "@/assets/whitening-before-after.asset.json";

const PHONE_DISPLAY = "0814 331 5547";
const PHONE_TEL = "+2348143315547";
const WHATSAPP_CATALOGUE = `https://wa.me/2348143315547?text=${encodeURIComponent(
  "Hello Charis B2B — I'd like to request the dental equipment catalogue.",
)}`;
const WHATSAPP_BASE = "https://wa.me/2348143315547";
const EMAIL_ADDRESS = "exceedingcharisdentalmedical@gmail.com";
const serviceOptions = [
  "Teeth Whitening",
  "Advanced Surgery",
  "Laser Dentistry",
  "Dental Implants",
  "Cosmetic & Veneers",
  "Pediatric Care",
  "General Consultation",
  "Emergency / After-hours",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Exceeding Charis Dental Clinic — 24/7 Clinic in GRA, Benin City" },
      { name: "description", content: "Teeth whitening, advanced surgery, laser dentistry, implants and B2B dental equipment supply. Open 24/7 at 15 Ihama Road, GRA, Benin City." },
      { property: "og:title", content: "Exceeding Charis Dental Clinic — 24/7 in GRA, Benin City" },
      { property: "og:description", content: "Teeth whitening, advanced surgery, laser dentistry, implants and B2B dental equipment supply. Open 24/7 at 15 Ihama Road, GRA, Benin City." },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "B2B Equipment", href: "#equipment" },
  { label: "24/7 Emergency", href: "#emergency" },
  { label: "Bookings", href: "#booking" },
];

const services = [
  { icon: Sparkles, title: "Teeth Whitening", tag: "Cosmetic Brightening", copy: "Clinical-grade LED whitening. Up to 8 shades brighter in a single session.", span: "md:col-span-2 md:row-span-2", featured: true },
  { icon: Stethoscope, title: "Advanced Surgery", tag: "Oral & Maxillofacial", copy: "Hospital-grade procedures, performed in-house." },
  { icon: Zap, title: "Laser Dentistry", tag: "Precision Care", copy: "No drills. Less pain. Faster healing." },
  { icon: Layers, title: "Dental Implants", tag: "Permanent Restoration", copy: "Titanium-grade implants with lifetime structural integrity." },
  { icon: Activity, title: "Cosmetic & Whitening", tag: "Smile Design", copy: "Editorial-grade veneers and brightening." },
  { icon: ShieldCheck, title: "Pediatric Care", tag: "Family Dentistry", copy: "Gentle, world-class care from age one." },
];

const equipment = [
  {
    img: equipChair,
    name: "Charis ProChair X1",
    spec: "Integrated dental unit • Touchless controls",
    price: "Enquire",
    specs: ["FDA & ISO 13485 certified", "360° programmable positioning", "LED surgical light 50,000 lux", "Integrated suction + scaler"],
  },
  {
    img: equipScanner,
    name: "Intraoral 3D Scanner",
    spec: "0.012mm accuracy • Wireless",
    price: "Enquire",
    specs: ["Full-arch scan in 40 seconds", "AI-assisted margin detection", "Open STL export", "Cloud-synced patient records"],
  },
  {
    img: equipXray,
    name: "Portable Dental X-Ray",
    spec: "Handheld • DC 60–70kV",
    price: "Enquire",
    specs: ["Low-dose <1μSv per shot", "Rechargeable Li-ion, 400 shots", "Bluetooth sensor sync", "Lead-shielded ergonomic grip"],
  },
];

const partners = ["AXA Mansard", "Hygeia HMO", "Avon Healthcare", "Reliance HMO", "Leadway Health", "NDIC", "FDA Approved", "ISO 13485", "Total Health Trust"];

const testimonials = [
  { name: "Adaeze Okonkwo", role: "Lagos", quote: "The whitening result was unreal. Eight shades brighter in one afternoon — my wedding photos speak for themselves." },
  { name: "Chukwuemeka Eze", role: "Benin City", quote: "Rushed in at 2am with a broken molar. A specialist met me at the door. This clinic genuinely never closes." },
  { name: "Ngozi Balogun", role: "Abuja", quote: "Aligners, implants, whitening — all under one roof, all world-class. Exceeding Charis earns the name." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Dock />
      <Hero />
      <Services />
      <Equipment />
      <Emergency />
      <Booking />
      <Testimonials />
      <Trust />
      <Footer />
    </div>
  );
}

function Dock() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
      <div className="glass-dock flex items-center gap-1 rounded-full px-2 py-2 sm:gap-2 sm:px-3">
        <a href="#" className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-bold tracking-tight">
          <img src={charisLogo.url} alt="Exceeding Charis Dental Clinic logo" width={28} height={28} className="h-7 w-7 rounded-full ring-1 ring-midnight/10" />
          <span className="hidden sm:inline">Charis</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="rounded-full px-3 py-1.5 text-sm font-medium text-midnight/70 transition hover:bg-midnight/5 hover:text-midnight">
              {l.label}
            </a>
          ))}
        </div>
        <a href="#booking" className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-midnight px-3 py-1.5 text-sm font-semibold text-clinical transition hover:bg-obsidian sm:px-4">
          Book <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-midnight/10 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-midnight/70">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" />
              Open 24/7 • Ihama Branch
            </div>
            <h1 className="mt-6 text-[clamp(2.75rem,7vw,5.75rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-midnight-deep">
              The advanced<br />dental clinic<br />
              <span className="text-midnight/40">that never</span> <span className="relative inline-block">
                closes.
                <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-mint" />
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-midnight/60">
              Premier 24/7 dental care in GRA. Invisalign, laser dentistry, implants and advanced oral surgery — paired with a B2B division supplying hi-tech equipment to clinics across the region.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#booking" className="inline-flex items-center gap-2 rounded-full bg-midnight px-6 py-3.5 text-sm font-semibold text-clinical shadow-[0_20px_40px_-15px_oklch(0.22_0.06_260/0.6)] transition hover:bg-obsidian">
                <Calendar className="h-4 w-4" /> Book an Appointment
              </a>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full border border-midnight/15 bg-white px-5 py-3.5 text-sm font-semibold text-midnight transition hover:border-midnight/30">
                <Phone className="h-4 w-4 text-mint" /> 24/7 Hotline · {PHONE_DISPLAY}
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-midnight/10 pt-8 sm:max-w-lg">
              {[["24/7", "Always open"], ["12+", "Specialties"], ["100%", "Sterile suite"]].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-2xl font-extrabold tracking-tight text-midnight-deep sm:text-3xl">{k}</dt>
                  <dd className="mt-1 text-xs text-midnight/55">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-obsidian">
              <img src={heroWhitening} alt="Professional LED teeth whitening treatment at Exceeding Charis" width={1600} height={1024} className="h-full w-full object-cover" />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl glass-dark px-4 py-3 text-clinical">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-mint">In session</p>
                  <p className="text-sm font-semibold">LED Teeth Whitening</p>
                </div>
                <Microscope className="h-5 w-5 text-mint" />
              </div>
            </div>
            <div className="absolute -left-4 -top-4 hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-midnight/5 sm:block">
              <p className="text-[10px] uppercase tracking-[0.2em] text-midnight/40">Avg. consult</p>
              <p className="text-2xl font-extrabold text-midnight-deep">12 min</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-5 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionLabel kicker="01 — Patient Care" title="The dental care ecosystem." sub="Every specialty under one sterile, sub-zero-tolerance roof." />
        <div className="mt-12 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className={`group relative overflow-hidden rounded-3xl border border-midnight/8 p-7 transition hover:border-midnight/20 ${s.span ?? ""} ${s.featured ? "bg-midnight text-clinical" : "bg-white text-midnight"}`}>
                <div className="flex h-full flex-col justify-between gap-8">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${s.featured ? "bg-mint text-midnight" : "bg-midnight/5 text-midnight"}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className={`text-[10px] uppercase tracking-[0.22em] ${s.featured ? "text-mint" : "text-midnight/40"}`}>{s.tag}</p>
                    <h3 className={`mt-2 font-extrabold tracking-tight ${s.featured ? "text-3xl md:text-4xl" : "text-xl"}`}>{s.title}</h3>
                    <p className={`mt-3 text-sm leading-relaxed ${s.featured ? "text-clinical/70 max-w-sm" : "text-midnight/55"}`}>{s.copy}</p>
                  </div>
                </div>
                <ChevronRight className={`absolute right-6 top-7 h-4 w-4 transition group-hover:translate-x-1 ${s.featured ? "text-mint" : "text-midnight/30"}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Equipment() {
  return (
    <section id="equipment" className="bg-midnight-deep px-5 py-24 text-clinical sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-mint">02 — B2B Division</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Sales & supply of<br />hi-tech dental equipment.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-clinical/60">
              Equipping clinics, hospitals and corporate buyers across West Africa with the latest dental and medical technology — direct from manufacturer.
            </p>
          </div>
          <a href={WHATSAPP_CATALOGUE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-mint px-5 py-3 text-sm font-semibold text-midnight-deep transition hover:bg-mint-soft">
            Request catalogue on WhatsApp <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {equipment.map((e) => (
            <article key={e.name} className="group flex flex-col overflow-hidden rounded-3xl bg-clinical text-midnight-deep transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="aspect-square overflow-hidden bg-white">
                <img src={e.img} alt={e.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-extrabold tracking-tight">{e.name}</h3>
                    <p className="mt-1 text-xs text-midnight/55">{e.spec}</p>
                  </div>
                  <span className="rounded-full bg-midnight/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-midnight/70">{e.price}</span>
                </div>
                <ul className="mt-1 grid gap-1.5 border-t border-midnight/8 pt-3 text-xs text-midnight/70">
                  {e.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-mint" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP_CATALOGUE} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center justify-between rounded-2xl border border-midnight/10 px-4 py-2.5 text-sm font-semibold transition group-hover:border-midnight group-hover:bg-midnight group-hover:text-clinical">
                  Enquire on WhatsApp <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Emergency() {
  return (
    <section id="emergency" className="px-5 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-midnight/10 bg-gradient-to-br from-white via-white to-mint-soft p-8 sm:p-12">
        <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-midnight text-mint">
            <Clock className="h-7 w-7" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.24em] text-midnight/50">24/7 Emergency</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-midnight-deep sm:text-4xl">
              Trauma. Pain. After-hours. We answer.
            </h2>
            <p className="mt-2 max-w-2xl text-midnight/60">A specialist is on call every hour of every day at our GRA flagship.</p>
          </div>
          <a href={`tel:${PHONE_TEL}`} className="inline-flex shrink-0 items-center gap-3 rounded-full bg-midnight px-6 py-4 font-semibold text-clinical transition hover:bg-obsidian">
            <Phone className="h-5 w-5 text-mint" />
            <span className="text-sm">Call {PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [selectedDay, setSelectedDay] = useState(2);
  const [selectedTime, setSelectedTime] = useState("10:30");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return { label: d.toLocaleDateString("en", { weekday: "short" }), date: d.getDate(), idx: i };
  });
  const times = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

  const chosenDay = days[selectedDay];
  
  // Format the Date object nicely
  const getFormattedDate = () => {
    if (!chosenDay) return "";
    const d = new Date();
    d.setDate(d.getDate() + selectedDay);
    return d.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  const bookingMessage =
    `🦷 *EXCEEDING CHARIS DENTAL CLINIC* 🦷\n` +
    `_New Appointment Booking Request_\n\n` +
    `👤 *Patient Name:* ${fullName.trim() || "(Not Provided)"}\n` +
    `📞 *Phone Number:* ${phone.trim() || "(Not Provided)"}\n` +
    `📋 *Requested Service:* ${service}\n` +
    `📅 *Date:* ${getFormattedDate()}\n` +
    `⏰ *Time Slot:* ${selectedTime}\n\n` +
    `---\n` +
    `_Sent via Exceeding Charis Dental Web Portal_`;

  const bookingWhatsApp = `${WHATSAPP_BASE}?text=${encodeURIComponent(bookingMessage)}`;

  return (
    <section id="booking" className="px-5 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <div>
            <SectionLabel kicker="03 — Bookings" title={<>Reserve your<br />chairside slot.</>} sub="Real-time availability across all specialists. No phone tag." />
            <div className="mt-8 space-y-4">
              {[
                { i: MapPin, t: "GRA Flagship", s: "15 Ihama Road, GRA, Benin City" },
                { i: Clock, t: "Always open", s: "Walk-ins welcome 24/7" },
                { i: ShieldCheck, t: "All HMOs accepted", s: "Direct billing available" },
              ].map(({ i: I, t, s }) => (
                <div key={t} className="flex items-center gap-4 rounded-2xl border border-midnight/10 bg-white p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint-soft text-midnight">
                    <I className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-midnight-deep">{t}</p>
                    <p className="text-sm text-midnight/55">{s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-midnight/10 bg-white p-6 shadow-[0_30px_60px_-30px_oklch(0.22_0.06_260/0.35)] sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-midnight/40">Scheduler</p>
                <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-midnight-deep">Pick a slot</h3>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-soft px-3 py-1 text-xs font-semibold text-midnight">
                <span className="h-1.5 w-1.5 rounded-full bg-mint" /> Live availability
              </span>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-midnight/50">Select day</p>
              <div className="grid grid-cols-7 gap-2">
                {days.map((d) => (
                  <button key={d.idx} onClick={() => setSelectedDay(d.idx)} className={`flex flex-col items-center gap-1 rounded-2xl border py-3 text-xs font-semibold transition ${selectedDay === d.idx ? "border-midnight bg-midnight text-clinical" : "border-midnight/10 text-midnight hover:border-midnight/30"}`}>
                    <span className={selectedDay === d.idx ? "text-mint" : "text-midnight/50"}>{d.label}</span>
                    <span className="text-base font-extrabold">{d.date}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-midnight/50">Select time</p>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                {times.map((t) => (
                  <button key={t} onClick={() => setSelectedTime(t)} className={`rounded-xl border py-2.5 text-sm font-semibold transition ${selectedTime === t ? "border-mint bg-mint text-midnight-deep" : "border-midnight/10 text-midnight hover:border-midnight/30"}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full name" className="rounded-xl border border-midnight/10 bg-clinical px-4 py-3 text-sm outline-none transition focus:border-midnight" />
              <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="rounded-xl border border-midnight/10 bg-clinical px-4 py-3 text-sm outline-none transition focus:border-midnight" />
            </div>
            <div className="mt-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-midnight/50">Service interested in</p>
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setService(s)}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${service === s ? "border-midnight bg-midnight text-clinical" : "border-midnight/10 text-midnight/70 hover:border-midnight/30"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <a
              href={bookingWhatsApp}
              onClick={(e) => {
                if (!fullName.trim() || !phone.trim()) {
                  e.preventDefault();
                  alert("Please enter both your full name and phone number to confirm your appointment.");
                }
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-midnight px-6 py-4 text-sm font-semibold text-clinical transition hover:bg-obsidian"
            >
              Confirm appointment on WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-2 text-center text-[11px] text-midnight/45">Sends your slot & details to our 24/7 line.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="border-y border-midnight/10 bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="overflow-hidden rounded-[2rem]">
            <img src={trustPortrait} alt="Confident smiling professional" loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-midnight/50">04 — Trusted by</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-midnight-deep sm:text-4xl">
              The clinic of choice for professionals, HMOs and enterprise health partners.
            </h2>
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
          <div className="marquee flex w-max gap-12 whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="text-xl font-bold uppercase tracking-tight text-midnight/30 transition hover:text-midnight">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-obsidian px-5 py-16 text-clinical sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
            <img src={charisLogo.url} alt="Exceeding Charis Dental Clinic" width={40} height={40} className="h-10 w-10 rounded-full bg-white p-0.5" />
            Charis
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-clinical/60">
            Exceeding Charis Dental Clinic — premier 24/7 advanced dental care and B2B equipment supply. 15 Ihama Road, GRA, Benin City.
          </p>
        </div>
        {[
          { h: "Care", l: ["Teeth Whitening", "Implants", "Laser", "Surgery"] },
          { h: "Business", l: ["Equipment", "Bulk supply", "Service contracts"] },
          { h: "Contact", l: ["15 Ihama Road, GRA", `24/7 · ${PHONE_DISPLAY}`, EMAIL_ADDRESS] },
        ].map((c) => (
          <div key={c.h}>
            <p className="text-[11px] uppercase tracking-[0.22em] text-mint">{c.h}</p>
            <ul className="mt-4 space-y-2 text-sm text-clinical/70">
              {c.l.map((x) => <li key={x} className="cursor-pointer transition hover:text-clinical">{x}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-clinical/10 pt-6 text-xs text-clinical/40">
        <span>© {new Date().getFullYear()} Exceeding Charis Dental Clinic. All rights reserved.</span>
        <span>Designed for the 24-hour life.</span>
      </div>
    </footer>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="px-5 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionLabel kicker="05 — Results" title={<>Smiles, transformed.</>} sub="Real patients. Real outcomes. Photographed under clinical lighting." />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-stretch">
          <figure className="group relative overflow-hidden rounded-[2rem] bg-obsidian">
            <img src={whiteningBA.url} alt="Before and after professional teeth whitening at Exceeding Charis Dental Clinic" loading="lazy" className="h-full w-full object-cover" />
            <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl glass-dark px-4 py-3 text-clinical">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-mint">Before → After</p>
                <p className="text-sm font-semibold">Single-session LED Whitening</p>
              </div>
              <span className="rounded-full bg-mint px-3 py-1 text-[11px] font-bold text-midnight-deep">+8 shades</span>
            </figcaption>
          </figure>

          <div className="grid gap-4">
            {testimonials.map((t) => (
              <article key={t.name} className="relative rounded-3xl border border-midnight/8 bg-white p-6 transition hover:border-midnight/20">
                <Quote className="absolute right-6 top-6 h-6 w-6 text-mint" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-midnight-deep text-midnight-deep" />
                  ))}
                </div>
                <p className="mt-3 text-base leading-relaxed text-midnight/80">"{t.quote}"</p>
                <footer className="mt-4 flex items-center gap-3 border-t border-midnight/8 pt-4">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-midnight text-xs font-bold text-mint">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-midnight-deep">{t.name}</p>
                    <p className="text-xs text-midnight/50">{t.role}</p>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ kicker, title, sub }: { kicker: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-[11px] uppercase tracking-[0.24em] text-midnight/50">{kicker}</p>
      <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.03em] text-midnight-deep sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-base text-midnight/55">{sub}</p>}
    </div>
  );
}
