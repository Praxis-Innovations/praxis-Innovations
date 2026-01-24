'use client';

import { useMemo } from 'react';
import { Clock, Mail, MessageSquareText, ShieldCheck, Users } from 'lucide-react';

export type ContactProps = {
  show_header?: boolean;
  email?: string;
};

const DEFAULT_EMAIL = 'info.praxisinnovations@gmail.com';

const Contact = ({
  show_header = true,
  email = DEFAULT_EMAIL,
}: ContactProps) => {
  const trust_items = useMemo(() => {
    return [
      { key: 'consultation', Icon: MessageSquareText, label: 'Free consultation' },
      { key: 'pricing', Icon: ShieldCheck, label: 'Transparent pricing' },
      { key: 'support', Icon: Users, label: 'Ongoing support' },
      { key: 'response', Icon: Clock, label: 'Fast response times' },
    ] as const;
  }, []);

  return (
    <section className="relative section-padding overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent-200 to-primary-200 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {show_header && (
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-5">
              Let&apos;s <span className="gradient-text">Work Together</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Tell us what you’re building. We’ll reply with next steps, a rough timeline, and a clear plan.
            </p>
          </div>
        )}

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-neutral-200 shadow-lg p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary-700" aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                  Reach us directly
                </h3>
                <p className="text-neutral-600 mt-1">
                  Email us your project details and we’ll get back quickly.
                </p>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium transition-colors duration-200 break-all"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    {email}
                  </a>

                  <div className="inline-flex items-center gap-2 text-sm text-neutral-600">
                    <Clock className="w-4 h-4 text-neutral-500" aria-hidden="true" />
                    Typical response: 24 to 48 hours
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 shadow-lg p-6 sm:p-8">
            <h4 className="text-lg font-semibold text-neutral-900 mb-4">Why choose us</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trust_items.map(({ key, Icon, label }) => (
                <div
                  key={key}
                  className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3"
                >
                  <span className="w-9 h-9 rounded-lg bg-white border border-neutral-200 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-accent-600" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-neutral-800">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
