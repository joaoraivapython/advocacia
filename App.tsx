import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Scale, Users, FileText, Briefcase, Shield, Award,
  Clock, MapPin, Phone, Star, CheckCircle, Menu, X,
  ChevronRight, MessageCircle, ArrowUpRight,
} from "lucide-react";

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GoldLine() {
  return (
    <span className="inline-block w-8 h-px bg-[#C8A24A] align-middle" />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#C8A24A] text-[10px] tracking-[0.35em] uppercase font-sans font-semibold mb-4 flex items-center gap-3">
      <GoldLine />
      {children}
    </p>
  );
}

function SectionLabelCenter({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#C8A24A] text-[10px] tracking-[0.35em] uppercase font-sans font-semibold mb-4 flex items-center justify-center gap-3">
      <GoldLine />
      {children}
      <GoldLine />
    </p>
  );
}

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

const PRACTICE_AREAS = [
  {
    Icon: Shield,
    title: "Direito Previdenciário",
    desc: "Aposentadorias, benefícios por incapacidade, revisões e recursos junto ao INSS. Defendemos seus direitos perante a Previdência Social.",
  },
  {
    Icon: Scale,
    title: "Direito Civil",
    desc: "Contratos, responsabilidade civil, questões de família, herança e patrimônio. Soluções jurídicas para as relações civis do dia a dia.",
  },
  {
    Icon: Briefcase,
    title: "Direito Trabalhista",
    desc: "Defesa dos direitos do trabalhador: rescisões, horas extras, assédio moral e reclamações trabalhistas com atuação ágil e eficaz.",
  },
  {
    Icon: Users,
    title: "Direito do Consumidor",
    desc: "Proteção contra cobranças indevidas, produtos defeituosos e práticas abusivas de fornecedores.",
  },
  {
    Icon: FileText,
    title: "Consultoria Jurídica",
    desc: "Orientação preventiva para pessoas físicas e jurídicas, análise de contratos e pareceres jurídicos especializados.",
  },
  {
    Icon: Award,
    title: "Acompanhamento Processual",
    desc: "Monitoramento completo de processos judiciais e administrativos em todas as instâncias, com relatórios periódicos.",
  },
];

const DIFERENCIAIS = [
  {
    Icon: Users,
    title: "Atendimento Personalizado",
    desc: "Cada cliente recebe atenção individualizada, com soluções jurídicas sob medida para sua situação específica.",
  },
  {
    Icon: Shield,
    title: "Ética e Transparência",
    desc: "Atuamos com integridade absoluta, mantendo o cliente informado em cada etapa do processo.",
  },
  {
    Icon: Award,
    title: "Equipe Especializada",
    desc: "Profissionais com expertise em diversas áreas do direito, prontos para oferecer a melhor estratégia jurídica.",
  },
  {
    Icon: Clock,
    title: "Atendimento Presencial e Online",
    desc: "Flexibilidade para atender onde você estiver — em nosso escritório em Paço do Lumiar ou virtualmente.",
  },
  {
    Icon: CheckCircle,
    title: "Compromisso com Resultados",
    desc: "Nossa dedicação vai além do processo: buscamos a melhor solução para a sua vida, não apenas para o papel.",
  },
  {
    Icon: Scale,
    title: "Soluções Personalizadas",
    desc: "Desenvolvemos estratégias jurídicas exclusivas, adaptadas às necessidades reais de cada cliente.",
  },
];

const TESTIMONIALS = [
  {
    name: "Vitória Eduarda",
    text: "Profissionais realmente competentes, que resolvem de verdade.",
  },
  {
    name: "Maria da Conceição Santos da Luz",
    text: "Excelentes advogados, super prestativos e eficientes.",
  },
  {
    name: "Marlon Mailson",
    text: "Escritório excelente em atendimento, recomendo para todos que querem resolver seus assuntos jurídicos.",
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", area: "", message: "" });
  };

  return (
    <div className="bg-background text-foreground font-sans overflow-x-hidden scroll-smooth">

      {/* ── NAVBAR ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0B1F3A]/97 backdrop-blur-sm shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); goTo("#inicio"); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 border-2 border-[#C8A24A] flex items-center justify-center transition-colors group-hover:bg-[#C8A24A]/10">
              <Scale className="w-4 h-4 text-[#C8A24A]" />
            </div>
            <div className="leading-none">
              <p className="text-white font-display font-bold text-[17px] tracking-wide">
                Belfort & Fonseca
              </p>
              <p className="text-[#C8A24A] text-[9px] tracking-[0.25em] uppercase mt-0.5">
                Advogados
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => { e.preventDefault(); goTo(l.href); }}
                className="text-white/75 hover:text-[#C8A24A] text-[13px] tracking-wide transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => goTo("#contato")}
            className="hidden lg:flex items-center gap-2 bg-[#C8A24A] text-[#0B1F3A] px-6 py-2.5 text-[12px] font-bold tracking-widest hover:bg-[#b8922f] transition-colors duration-300"
          >
            Agendar Atendimento
          </button>

          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-[#0B1F3A] border-t border-[#C8A24A]/20 px-6 py-6 space-y-4"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => { e.preventDefault(); goTo(l.href); }}
                className="flex items-center justify-between py-2.5 border-b border-white/10 text-white/80 hover:text-[#C8A24A] text-sm transition-colors"
              >
                {l.label}
                <ChevronRight className="w-4 h-4 opacity-40" />
              </a>
            ))}
            <button
              onClick={() => goTo("#contato")}
              className="w-full mt-2 bg-[#C8A24A] text-[#0B1F3A] py-3.5 text-sm font-bold tracking-widest"
            >
              Agendar Atendimento
            </button>
          </motion.div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1F3A]"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop&auto=format"
            alt="Biblioteca jurídica de alto padrão"
            className="w-full h-full object-cover opacity-[0.18]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/90 to-[#0a1c35]/70" />
        </div>

        {/* Gold left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#C8A24A] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 w-full grid lg:grid-cols-[1fr_420px] gap-16 xl:gap-24 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#C8A24A] text-[10px] tracking-[0.35em] uppercase font-sans font-semibold mb-7 flex items-center gap-3">
              <span className="w-8 h-px bg-[#C8A24A]" />
              Excelência Jurídica no Maranhão
            </p>

            <h1 className="font-display text-[2.6rem] lg:text-[3.4rem] xl:text-[4rem] text-white leading-[1.12] font-bold mb-7 max-w-2xl">
              Defendendo seus{" "}
              <em className="not-italic text-[#C8A24A]">direitos</em> com
              excelência e compromisso.
            </h1>

            <p className="text-white/65 text-base lg:text-[17px] leading-[1.75] mb-10 max-w-xl">
              O escritório Belfort & Fonseca Advogados atua com ética,
              transparência e dedicação total. Nossa missão é oferecer soluções
              jurídicas eficazes e personalizadas, garantindo seus direitos com
              compromisso em cada etapa.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <button
                onClick={() => goTo("#contato")}
                className="bg-[#C8A24A] text-[#0B1F3A] px-8 py-4 text-[12px] font-bold tracking-[0.18em] uppercase hover:bg-[#b8922f] transition-all duration-300 hover:shadow-xl hover:shadow-[#C8A24A]/25 hover:-translate-y-0.5"
              >
                Agendar Consulta
              </button>
              <a
                href="https://wa.me/5598984595951"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 border border-white/30 text-white px-8 py-4 text-[12px] font-semibold tracking-[0.15em] uppercase hover:border-[#C8A24A] hover:text-[#C8A24A] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 lg:gap-14">
              {[
                ["15+", "Anos de Experiência"],
                ["98%", "Clientes Satisfeitos"],
                ["5,0", "Avaliação no Google"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="text-[#C8A24A] font-display text-[2rem] font-bold leading-none">
                    {n}
                  </p>
                  <p className="text-white/50 text-[10px] tracking-wide mt-1.5 leading-relaxed">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block self-end"
          >
            <div className="relative">
              {/* Offset border */}
              <div className="absolute -top-5 -left-5 w-full h-full border border-[#C8A24A]/25 pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=680&h=820&fit=crop&auto=format&q=85"
                alt="Equipe Belfort & Fonseca Advogados — atendimento humanizado"
                className="w-full h-[540px] xl:h-[600px] object-cover"
              />
              {/* Google rating badge */}
              <div className="absolute -bottom-7 -right-7 bg-[#C8A24A] p-5 shadow-2xl z-10">
                <p className="text-[#0B1F3A] font-display font-bold text-3xl leading-none">
                  5,0
                </p>
                <div className="flex gap-0.5 my-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#0B1F3A] text-[#0B1F3A]"
                    />
                  ))}
                </div>
                <p className="text-[#0B1F3A] text-[10px] font-bold tracking-wider uppercase">
                  Google Reviews
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#C8A24A]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C8A24A]" />
        </motion.div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1fr] gap-16 xl:gap-24 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="absolute top-8 left-8 w-full h-full bg-[#0B1F3A]/6 pointer-events-none" />
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=780&fit=crop&auto=format&q=85"
                alt="Ambiente do escritório Belfort & Fonseca Advogados"
                className="relative z-10 w-full h-[500px] lg:h-[580px] object-cover"
              />
              <div className="absolute -bottom-8 left-10 bg-[#0B1F3A] p-7 z-20 max-w-[260px] shadow-2xl">
                <p className="text-[#C8A24A] font-display text-4xl font-bold leading-none">
                  15+
                </p>
                <p className="text-white text-sm mt-3 leading-relaxed">
                  Anos defendendo direitos com ética e excelência no Maranhão
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.18}>
            <SectionLabel>Sobre o Escritório</SectionLabel>
            <h2 className="font-display text-3xl lg:text-[2.4rem] font-bold text-[#0B1F3A] leading-[1.2] mb-6">
              Um escritório comprometido com você em cada etapa da sua jornada
              jurídica.
            </h2>
            <p className="text-gray-600 leading-[1.8] mb-5 text-[15px]">
              O escritório Belfort & Fonseca Advogados nasceu com o propósito de
              oferecer atendimento jurídico humanizado, ético e transparente.
              Acreditamos que cada cliente merece atenção individualizada, com
              soluções construídas a partir de um profundo entendimento de sua
              realidade.
            </p>
            <p className="text-gray-600 leading-[1.8] mb-10 text-[15px]">
              Nossa equipe atua com rigor técnico e dedicação pessoal, sempre
              pautada pela ética profissional, pela transparência nas relações e
              pelo comprometimento genuíno com os resultados. Aqui, você não é
              apenas um número de processo — é uma pessoa com direitos a serem
              defendidos.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                "Atendimento Humanizado",
                "Ética Profissional",
                "Transparência Total",
                "Soluções Personalizadas",
                "Comprometimento com Resultados",
                "Equipe Especializada",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-4 h-4 border border-[#C8A24A] flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-[#C8A24A]" />
                  </div>
                  <span className="text-[#0B1F3A] text-[13px] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => goTo("#contato")}
              className="mt-10 flex items-center gap-2 text-[#0B1F3A] border-b border-[#0B1F3A] pb-0.5 text-[13px] font-bold tracking-widest uppercase hover:text-[#C8A24A] hover:border-[#C8A24A] transition-colors duration-300"
            >
              Fale com nossa equipe
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── ÁREAS DE ATUAÇÃO ── */}
      <section id="areas" className="py-24 lg:py-36 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <SectionLabelCenter>Nossa Atuação</SectionLabelCenter>
            <h2 className="font-display text-3xl lg:text-[2.4rem] font-bold text-[#0B1F3A] mb-4">
              Áreas de Atuação
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-[15px]">
              Expertise jurídica abrangente para atender às mais diversas
              necessidades, com especialização e dedicação em cada área do direito.
            </p>
          </AnimatedSection>

          {/* Grid separated by 1px lines */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {PRACTICE_AREAS.map((area, i) => (
              <AnimatedSection key={area.title} delay={i * 0.08}>
                <div className="group bg-white p-9 lg:p-10 hover:bg-[#0B1F3A] transition-colors duration-500 h-full cursor-default">
                  <div className="w-11 h-11 border border-[#C8A24A]/40 group-hover:border-[#C8A24A] group-hover:bg-[#C8A24A]/10 flex items-center justify-center mb-7 transition-all duration-500">
                    <area.Icon className="w-5 h-5 text-[#C8A24A]" />
                  </div>
                  <h3 className="font-display text-[17px] font-bold text-[#0B1F3A] group-hover:text-white mb-3 transition-colors duration-500 leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-white/65 text-[13px] leading-[1.8] transition-colors duration-500">
                    {area.desc}
                  </p>
                  <div className="mt-7 flex items-center gap-2 text-[#C8A24A] text-[10px] tracking-[0.2em] uppercase font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-1 group-hover:translate-y-0">
                    Saiba Mais
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ── */}
      <section className="py-24 lg:py-36 bg-[#0B1F3A] relative overflow-hidden">
        {/* Subtle texture lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 inset-x-0 h-px bg-[#C8A24A]/20" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-[#C8A24A]/20" />
          {/* Diagonal pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #C8A24A 0px, #C8A24A 1px, transparent 1px, transparent 60px)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <SectionLabelCenter>Por que nos escolher</SectionLabelCenter>
            <h2 className="font-display text-3xl lg:text-[2.4rem] font-bold text-white mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-white/55 max-w-xl mx-auto leading-relaxed text-[15px]">
              O que nos torna únicos é o compromisso genuíno com cada cliente,
              aliado à excelência técnica que só a experiência proporciona.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {DIFERENCIAIS.map((d, i) => (
              <AnimatedSection key={d.title} delay={i * 0.08}>
                <div className="bg-[#0B1F3A] p-8 lg:p-10 hover:bg-[#0f2647] transition-colors duration-400 h-full group">
                  <d.Icon className="w-7 h-7 text-[#C8A24A] mb-6" />
                  <h3 className="font-display text-[16px] font-bold text-white mb-3">
                    {d.title}
                  </h3>
                  <p className="text-white/55 text-[13px] leading-[1.8]">{d.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── AVALIAÇÕES ── */}
      <section id="avaliacoes" className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-12">
            <SectionLabelCenter>Depoimentos</SectionLabelCenter>
            <h2 className="font-display text-3xl lg:text-[2.4rem] font-bold text-[#0B1F3A] mb-4">
              Avaliações dos Nossos Clientes
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-[15px] leading-relaxed">
              A confiança de nossos clientes é o maior reconhecimento pelo nosso
              trabalho.
            </p>
          </AnimatedSection>

          {/* Google badge */}
          <AnimatedSection delay={0.1} className="flex justify-center mb-14">
            <div className="inline-flex flex-col items-center bg-[#0B1F3A] px-12 py-8">
              <p className="text-[#C8A24A] font-display text-6xl font-bold leading-none">
                5,0
              </p>
              <div className="flex gap-1 mt-3 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#C8A24A] text-[#C8A24A]"
                  />
                ))}
              </div>
              <p className="text-white/70 text-[11px] tracking-[0.2em] uppercase mt-1">
                Avaliação Máxima no Google
              </p>
            </div>
          </AnimatedSection>

          {/* Testimonial cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.12}>
                <div className="border border-gray-200 p-8 hover:border-[#C8A24A]/50 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-[#C8A24A] text-[#C8A24A]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 text-[15px] leading-[1.8] italic font-display flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Footer */}
                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between gap-3 flex-wrap">
                    <p className="font-semibold text-[#0B1F3A] text-[13px]">
                      {t.name}
                    </p>
                    <div className="flex items-center gap-1.5 bg-[#F8F7F4] px-3 py-1.5">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 flex-shrink-0">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      <span className="text-[10px] text-gray-500 tracking-wide whitespace-nowrap">
                        Avaliação verificada no Google
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#C8A24A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <AnimatedSection>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#0B1F3A] leading-snug">
              Pronto para defender seus direitos?
            </h2>
            <p className="text-[#0B1F3A]/65 text-[14px] mt-2">
              Entre em contato agora e agende uma consulta com nossa equipe
              especializada.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.12} className="flex gap-4 flex-wrap flex-shrink-0">
            <button
              onClick={() => goTo("#contato")}
              className="bg-[#0B1F3A] text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#0d2244] transition-colors duration-300"
            >
              Agendar Consulta
            </button>
            <a
              href="https://wa.me/5598984595951"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 border-2 border-[#0B1F3A] text-[#0B1F3A] px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#0B1F3A] hover:text-white transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="py-24 lg:py-36 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 xl:gap-24">
          {/* Info */}
          <AnimatedSection>
            <SectionLabel>Fale Conosco</SectionLabel>
            <h2 className="font-display text-3xl lg:text-[2.4rem] font-bold text-[#0B1F3A] mb-6 leading-[1.2]">
              Entre em Contato
            </h2>
            <p className="text-gray-600 leading-[1.8] mb-10 text-[15px]">
              Estamos prontos para ouvir você. Utilize nossos canais de contato ou
              preencha o formulário e nossa equipe retornará o mais breve possível.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  Icon: MapPin,
                  title: "Endereço",
                  content: (
                    <>
                      Av. 03, Quadra 98, nº 31, Maiobão
                      <br />
                      Paço do Lumiar-MA, CEP 65137-000
                    </>
                  ),
                },
                {
                  Icon: Phone,
                  title: "Telefone / WhatsApp",
                  content: (
                    <a
                      href="https://wa.me/5598984595951"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#C8A24A] transition-colors"
                    >
                      (98) 98459-5951
                    </a>
                  ),
                },
                {
                  Icon: Clock,
                  title: "Horário de Atendimento",
                  content: "Segunda a Sexta: 08:30 às 17:30",
                },
              ].map(({ Icon, title, content }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0B1F3A] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#C8A24A]" />
                  </div>
                  <div>
                    <p className="text-[#0B1F3A] font-semibold text-[13px] mb-1 tracking-wide">
                      {title}
                    </p>
                    <div className="text-gray-600 text-[14px] leading-relaxed">
                      {content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="w-full h-52 bg-gray-200 overflow-hidden border border-gray-200">
              <iframe
                title="Localização Belfort & Fonseca Advogados — Paço do Lumiar, MA"
                src="https://maps.google.com/maps?q=Paco+do+Lumiar,+Maranhao,+Brasil&output=embed&z=13"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.18}>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 lg:p-10 shadow-sm border border-gray-100"
            >
              <h3 className="font-display text-xl font-bold text-[#0B1F3A] mb-8">
                Solicitar Consulta
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#0B1F3A] font-bold mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Seu nome completo"
                    className="w-full border border-gray-200 bg-[#F8F7F4] px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#C8A24A] transition-colors duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#0B1F3A] font-bold mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="seu@email.com"
                      className="w-full border border-gray-200 bg-[#F8F7F4] px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#C8A24A] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#0B1F3A] font-bold mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="(98) 99999-9999"
                      className="w-full border border-gray-200 bg-[#F8F7F4] px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#C8A24A] transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#0B1F3A] font-bold mb-2">
                    Área de interesse
                  </label>
                  <select
                    value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                    className="w-full border border-gray-200 bg-[#F8F7F4] px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#C8A24A] transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Selecione uma área</option>
                    <option>Direito Previdenciário</option>
                    <option>Direito Civil</option>
                    <option>Direito Trabalhista</option>
                    <option>Direito do Consumidor</option>
                    <option>Consultoria Jurídica</option>
                    <option>Acompanhamento Processual</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#0B1F3A] font-bold mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Descreva brevemente sua situação jurídica..."
                    className="w-full border border-gray-200 bg-[#F8F7F4] px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#C8A24A] transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B1F3A] text-white py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#C8A24A] hover:text-[#0B1F3A] transition-all duration-300"
                >
                  {submitted ? "Mensagem Enviada ✓" : "Enviar Mensagem"}
                </button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-[#0B1F3A] text-[13px] font-semibold"
                  >
                    Obrigado! Nossa equipe entrará em contato em breve.
                  </motion.p>
                )}

                <p className="text-center text-gray-400 text-[12px]">
                  Prefere o WhatsApp?{" "}
                  <a
                    href="https://wa.me/5598984595951"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#C8A24A] hover:underline font-semibold"
                  >
                    (98) 98459-5951
                  </a>
                </p>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#070e1c] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
            {/* Brand */}
            <div>
              <a
                href="#inicio"
                onClick={(e) => { e.preventDefault(); goTo("#inicio"); }}
                className="flex items-center gap-3 mb-5 group w-fit"
              >
                <div className="w-9 h-9 border-2 border-[#C8A24A] flex items-center justify-center group-hover:bg-[#C8A24A]/10 transition-colors">
                  <Scale className="w-4 h-4 text-[#C8A24A]" />
                </div>
                <div>
                  <p className="text-white font-display font-bold text-[17px] leading-none">
                    Belfort & Fonseca
                  </p>
                  <p className="text-[#C8A24A] text-[9px] tracking-[0.25em] uppercase mt-0.5">
                    Advogados
                  </p>
                </div>
              </a>
              <p className="text-white/40 text-[13px] leading-[1.8] max-w-xs">
                Excelência jurídica com ética, transparência e compromisso com os
                direitos de nossos clientes no Maranhão.
              </p>
              <div className="flex gap-5 mt-7">
                {["Instagram", "Facebook", "LinkedIn"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-white/35 hover:text-[#C8A24A] text-[11px] tracking-widest transition-colors duration-300"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-[#C8A24A] text-[10px] tracking-[0.25em] uppercase font-bold mb-5">
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={(e) => { e.preventDefault(); goTo(l.href); }}
                      className="text-white/40 hover:text-white text-[13px] transition-colors duration-300"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas */}
            <div>
              <h4 className="text-[#C8A24A] text-[10px] tracking-[0.25em] uppercase font-bold mb-5">
                Áreas
              </h4>
              <ul className="space-y-3">
                {[
                  "Direito Previdenciário",
                  "Direito Civil",
                  "Direito Trabalhista",
                  "Direito do Consumidor",
                  "Consultoria Jurídica",
                ].map((a) => (
                  <li key={a}>
                    <a
                      href="#areas"
                      onClick={(e) => { e.preventDefault(); goTo("#areas"); }}
                      className="text-white/40 hover:text-white text-[13px] transition-colors duration-300"
                    >
                      {a}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#C8A24A] text-[10px] tracking-[0.25em] uppercase font-bold mb-5">
                Contato
              </h4>
              <ul className="space-y-4 text-white/40 text-[13px]">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A24A] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Av. 03, Quadra 98, nº 31, Maiobão, Paço do Lumiar-MA
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#C8A24A] flex-shrink-0" />
                  (98) 98459-5951
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-[#C8A24A] flex-shrink-0" />
                  Seg–Sex: 08:30 às 17:30
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/25 text-[11px]">
              © 2025 Belfort & Fonseca Advogados. Todos os direitos reservados.
            </p>
            <p className="text-white/20 text-[11px]">
              OAB/MA — Advocacia com excelência e ética
            </p>
          </div>
        </div>
      </footer>

      {/* ── WHATSAPP FLOATING BUTTON ── */}
      <motion.a
        href="https://wa.me/5598984595951"
        target="_blank"
        rel="noreferrer"
        aria-label="Fale conosco no WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 16 }}
        className="fixed bottom-7 right-7 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-[#25D366]/40 transition-all duration-300"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </div>
  );
}
