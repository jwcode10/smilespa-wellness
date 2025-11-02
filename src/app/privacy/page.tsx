import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The Smile Spa Wellness",
  description:
    "Notice of Privacy Practices for Smile Spa Wellness: how we collect, use, disclose, and protect your information, and your rights.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-blue-50 text-blue-900">

      <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Notice of Privacy Practices</h1>

        <section className="mt-8 space-y-4 leading-7">
          <p>
            Smile Spa Wellness operates the{' '}
            <a href="https://www.smilespawellness.com" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
              https://www.smilespawellness.com
            </a>{' '}
            website, which provides the SERVICE. This page is used to inform website visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone decides to use our Service, the Smile Spa Wellness
            website.
          </p>
          <p>
            If you choose to use our Service, then you agree to the collection and use of information in relation to this policy.
            The Personal Information that we collect is used for providing and improving the Service. We will not use or share your
            information with anyone except as described in this Privacy Policy.
          </p>
          <p>
            The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at{' '}
            <a href="https://www.smilespawellness.com" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
              https://www.smilespawellness.com
            </a>
            , unless otherwise defined in this Privacy Policy.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">Your Information. Your Rights. Our Responsibilities.</h2>
          <p className="mt-3">This notice explains how your medical information may be used and shared, and how you can access it. Please read it carefully.</p>
        </section>

        <section className="mt-8">
          <h3 className="text-xl sm:text-2xl font-semibold">Your Rights</h3>
          <ul className="mt-4 list-disc pl-5 space-y-3">
            <li>
              <span className="font-semibold">Get a copy of your medical record</span>
              <p className="mt-1 text-blue-900/80">
                You can ask for a paper or electronic copy of your medical records and other health info we have. Usually, we’ll
                give it to you within 30 days. We might charge a reasonable fee.
              </p>
            </li>
            <li>
              <span className="font-semibold">Ask to correct your medical record</span>
              <p className="mt-1 text-blue-900/80">
                If you think your health info is wrong or incomplete, you can ask us to fix it. We may say no, but we will explain why
                in writing within 60 days.
              </p>
            </li>
            <li>
              <span className="font-semibold">Request confidential communications</span>
              <p className="mt-1 text-blue-900/80">
                You can ask us to contact you a certain way (like at home or work) or send mail to a different address. We’ll say yes to
                reasonable requests.
              </p>
            </li>
            <li>
              <span className="font-semibold">Ask us to limit how we use or share your info</span>
              <p className="mt-1 text-blue-900/80">
                You can ask us not to use or share certain health info for treatment, payment, or business. We don’t have to agree, but if
                you pay fully out of pocket for a service, you can ask us not to share that info with your insurance. We will say yes unless
                the law says otherwise.
              </p>
            </li>
            <li>
              <span className="font-semibold">Get a list of who we shared your info with</span>
              <p className="mt-1 text-blue-900/80">
                You can ask for a list of when and why we shared your info in the past six years. We provide one free list a year; after that,
                there may be a small fee.
              </p>
            </li>
            <li>
              <span className="font-semibold">Get a copy of this privacy notice</span>
              <p className="mt-1 text-blue-900/80">You can ask for a paper copy anytime, even if you agreed to get it electronically.</p>
            </li>
            <li>
              <span className="font-semibold">Choose someone to act for you</span>
              <p className="mt-1 text-blue-900/80">
                If you gave someone medical power of attorney or have a legal guardian, they can exercise your rights and make decisions for
                you. We will verify their authority before acting.
              </p>
            </li>
            <li>
              <span className="font-semibold">File a complaint</span>
              <p className="mt-1 text-blue-900/80">
                If you think your rights were violated, you can contact us or file a complaint with the U.S. Department of Health and Human
                Services. We won’t retaliate against you for filing a complaint.
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-xl sm:text-2xl font-semibold">Your Choices</h3>
          <p className="mt-3 text-blue-900/80">
            You can tell us how you want us to share your health info in certain situations. Here are some examples:
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-blue-900/80">
            <li>You can choose to let us share info with your family, close friends, or others involved in your care.</li>
            <li>You can choose to let us share info in a disaster relief situation.</li>
            <li>You can choose whether your info is included in a hospital directory.</li>
            <li>
              If you can’t tell us your preference (for example, if you’re unconscious), we might share your info if it’s in your best
              interest or to prevent a serious threat to health or safety.
            </li>
            <li>We never share your info for marketing, selling your info, or most psychotherapy notes unless you give us written permission.</li>
            <li>For fundraising, we may contact you, but you can tell us not to contact you again.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-xl sm:text-2xl font-semibold">Our Uses and Disclosures</h3>
          <p className="mt-3 text-blue-900/80">Here’s how we usually use or share your health info:</p>
          <ul className="mt-3 list-disc pl-5 space-y-3">
            <li>
              <span className="font-semibold">To treat you:</span>{' '}
              <span className="text-blue-900/80">We share your info with other doctors or providers helping care for you.</span>
              <div className="mt-1 text-sm italic text-blue-900/70">Example: A doctor treating your injury talks to your primary doctor.</div>
            </li>
            <li>
              <span className="font-semibold">To run our practice:</span>{' '}
              <span className="text-blue-900/80">We use your info to manage your treatment and services.</span>
              <div className="mt-1 text-sm italic text-blue-900/70">Example: Managing appointments or billing.</div>
            </li>
            <li>
              <span className="font-semibold">To bill for services:</span>{' '}
              <span className="text-blue-900/80">We share info with insurance to get payment.</span>
              <div className="mt-1 text-sm italic text-blue-900/70">Example: Sending info to your health plan for payment.</div>
            </li>
          </ul>
          <p className="mt-4 text-blue-900/80">
            We can also share your info for public health, research, legal reasons, organ donation, law enforcement, workers’ compensation,
            and court orders, following strict laws.
          </p>
        </section>

        <section className="mt-8">
          <h3 className="text-xl sm:text-2xl font-semibold">Our Responsibilities</h3>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-blue-900/80">
            <li>We must keep your health info private and secure.</li>
            <li>We will notify you if there’s ever a breach that might affect your info.</li>
            <li>We will follow this notice and give you a copy.</li>
            <li>
              We won’t use or share your info beyond what’s described here unless you give us written permission. You can change your mind
              anytime by telling us in writing.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-xl sm:text-2xl font-semibold">Contact Information</h3>
          <div className="mt-3 space-y-1 text-blue-900/90">
            <p>
              <span className="font-semibold">Jude Marino</span> | Co-Owner
            </p>
            <p>Smile Spa Wellness | <a href="tel:+15049759225" className="underline hover:no-underline">504-975-9225</a></p>
            <p>
              Dr. Aimee Russo-Mounger –{' '}
              <a href="mailto:drrusso@smilespawellness.com" className="underline hover:no-underline">drrusso@smilespawellness.com</a>
            </p>
            <p>
              Jude Marino –{' '}
              <a href="mailto:jude@smilespawellness.com" className="underline hover:no-underline">jude@smilespawellness.com</a>
            </p>
            <p>9456 Jefferson Hwy | Baton Rouge, LA 70809</p>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold">Changes to This Notice</h3>
          <p className="text-blue-900/80">
            We can update this notice anytime. New terms will apply to all your info. You can always ask for the latest version in our
            office or on our website.
          </p>
          <div className="pt-2 border-t border-blue-900/10">
            <p>
              <span className="font-semibold">This Notice Applies To:</span> Smile Spa Wellness
            </p>
            <p>
              <span className="font-semibold">Effective Date of this Notice:</span> May 19th, 2025
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
