export default function Home() {
  const faqs = [
    {
      q: 'What categories does the assessment cover?',
      a: 'The checker evaluates your startup across four key domains: Financials (MRR, churn, margins), Operations (processes, team, documentation), Legal (IP, contracts, compliance), and Market Positioning (TAM, competitive moat, growth trajectory).'
    },
    {
      q: 'How is the readiness score calculated?',
      a: 'Each category is weighted based on what acquirers prioritize most. Your answers are scored against real acquisition benchmarks, producing a 0–100 readiness score with a detailed breakdown and prioritized action items.'
    },
    {
      q: 'Who is this tool for?',
      a: 'Startup founders preparing for an exit, business brokers evaluating clients, and investors assessing portfolio companies. It works for SaaS, marketplace, and service businesses at any stage.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest font-semibold">
          Startup Exit Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Is Your Startup{' '}
          <span className="text-[#58a6ff]">Acquisition-Ready?</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Run a comprehensive readiness assessment across financials, operations, legal, and market positioning. Get a scored report with benchmarks and a prioritized action plan — before you talk to a single buyer.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-base transition-colors"
        >
          Start My Assessment
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No credit card required to preview · Cancel anytime</p>

        {/* Score preview */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          {[
            { label: 'Financials', score: '82', color: 'text-green-400' },
            { label: 'Operations', score: '61', color: 'text-yellow-400' },
            { label: 'Legal', score: '74', color: 'text-[#58a6ff]' },
            { label: 'Market Fit', score: '90', color: 'text-green-400' }
          ].map((item) => (
            <div key={item.label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <p className="text-xs text-[#8b949e] mb-1">{item.label}</p>
              <p className={`text-2xl font-bold ${item.color}`}>{item.score}<span className="text-sm font-normal text-[#484f58]">/100</span></p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-xs text-[#58a6ff] uppercase tracking-widest font-semibold mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$99<span className="text-lg font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Full access · Unlimited assessments</p>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              '50+ point interactive checklist',
              'Weighted readiness score (0–100)',
              'Industry benchmark comparisons',
              'Prioritized improvement roadmap',
              'PDF report for investors & brokers',
              'Re-assess as you improve'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Acquisition-Ready →
          </a>
          <p className="mt-3 text-xs text-[#484f58]">Secure checkout via Lemon Squeezy · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{faq.q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Acquisition Readiness Checker. All rights reserved.
      </footer>
    </main>
  )
}
