export default function ContactPage() {
  return (
    <div className="relative min-h-full w-full bg-white font-sans text-black antialiased">
      <section className="relative mr-auto ml-auto max-w-7xl pt-16 pr-4 pb-24 pl-4 sm:px-6 lg:px-8">
        {/* How can we help? */}
        <div className="mb-16">
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl">How can we help?</h1>
          <p className="mb-5 max-w-3xl text-sm text-neutral-600 sm:text-base">
            We’re always eager to help you out with any questions you have. For useful tips and answers,
            visit our FAQ & Help Center.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/home#services" className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100">FAQs</a>
            <a href="/privacy" className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100">Policies</a>
          </div>
        </div>

        {/* First time logging in? */}
        <div className="mb-16">
          <h2 className="mb-3 text-2xl font-extrabold tracking-tight sm:text-3xl">First time logging in?</h2>
          <p className="mb-5 max-w-3xl text-sm text-neutral-600 sm:text-base">
            If this is your first time accessing your subscription or you’re having trouble logging in, make sure you
            activate your account by clicking on the button below.
          </p>
          <a href="#activate" className="inline-block rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100">Account</a>
        </div>

        {/* Delivery notice */}
        <div className="mb-16">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight sm:text-3xl">DELIVERY NOTICE</h2>
          <p className="max-w-3xl text-sm leading-6 text-neutral-700">
            Orders are typically delivered within 3–6 business days. In some cases, deliveries may take longer due to
            carrier delays or safety precautions at fulfillment centers. If your tracking shows no updates after 6
            business days, please rest assured our team is working hard to get your order to you as quickly as possible.
            We appreciate your patience.
          </p>
        </div>

        {/* Message us */}
        <div className="mb-20">
          <h2 className="mb-3 text-2xl font-extrabold tracking-tight sm:text-3xl">Message us!</h2>
          <p className="mb-5 max-w-3xl text-sm text-neutral-600 sm:text-base">
            Get in touch with us by clicking one of the buttons below. Include detailed information about your query for
            the best assistance.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="mailto:hello@smilespawellness.com" className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100">Email Support</a>
            <a href="https://wa.me/15555555555" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white hover:opacity-90">Chat on WhatsApp</a>
          </div>
          <p className="mt-4 max-w-3xl text-xs text-neutral-500">
            Please use only one contact method; our Customer Experience team will respond as soon as possible.
          </p>
        </div>

        {/* Join the family (newsletter) */}
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
          <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-1 text-xl font-extrabold tracking-tight sm:text-2xl">Join the Smile Spa Wellness family</h3>
              <p className="text-sm text-neutral-600">Get the scoop on exclusive offers and product launches.</p>
            </div>
            <form className="flex w-full items-center gap-3">
              <input
                type="email"
                required
                placeholder="example@domain.com"
                className="h-11 w-full flex-1 rounded-full border border-neutral-300 bg-white px-4 text-sm outline-none placeholder:text-neutral-400 focus:border-neutral-400"
              />
              <button type="submit" className="h-11 rounded-full bg-black px-5 text-sm font-semibold text-white hover:bg-neutral-900">Sign up</button>
            </form>
            <p className="col-span-1 text-xs text-neutral-500 sm:col-span-2">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply. You can
              unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
