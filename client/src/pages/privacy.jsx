import React from 'react'

export const Privacy = () => {
  return (
    <main className='mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16'>
      <header className='mb-10'>
        <p className='mb-3 font-medium text-orange-800 dark:text-orange-400'>Your privacy matters</p>
        <h1 className='text-3xl font-bold md:text-5xl'>Privacy Policy</h1>
        <p className='mt-4 text-slate-700 dark:text-slate-300'>Last updated: September 17, 2026</p>
      </header>

      <div className='space-y-10 leading-7 text-slate-700 dark:text-slate-300'>
        <section>
          <h2 className='mb-3 text-2xl font-bold text-slate-900 dark:text-white'>About this policy</h2>
          <p>Thande&apos;s Blog is a space for practical ideas, honest experiences, and thoughtful stories about technology, business, startups, the economy, nature, and personal growth. This policy explains what information we may collect, how we use it, and the choices available to you when you visit or interact with the website.</p>
        </section>

        <section>
          <h2 className='mb-3 text-2xl font-bold text-slate-900 dark:text-white'>Information we may collect</h2>
          <p>We may collect information you choose to provide, such as your name and email address when you contact us, subscribe to updates, create an account, or submit a story. We may also receive the content and images you submit for publication. Basic technical information, such as your browser, device type, pages visited, and approximate usage patterns, may be collected to help us maintain and improve the website.</p>
        </section>

        <section>
          <h2 className='mb-3 text-2xl font-bold text-slate-900 dark:text-white'>How we use information</h2>
          <p>We use information to provide and improve the blog, respond to messages, manage subscriptions, review story submissions, communicate important updates, prevent abuse, and keep the website secure. We do not sell your personal information. If you submit a story for publication, we may use the information and content you provide to review, edit, publish, or contact you about that submission.</p>
        </section>

        <section>
          <h2 className='mb-3 text-2xl font-bold text-slate-900 dark:text-white'>Story submissions</h2>
          <p>Anyone who meets our submission requirements may be able to share a story through the platform. Submitted stories may be reviewed before publication. Do not include private, confidential, or sensitive information that you do not want shared. You are responsible for ensuring that your submission is original, lawful, respectful, and does not violate another person&apos;s rights.</p>
        </section>

        <section>
          <h2 className='mb-3 text-2xl font-bold text-slate-900 dark:text-white'>Accounts and third-party services</h2>
          <p>When account features are introduced, authentication providers such as Clerk may process account information to help us securely sign you in. Future backend services, including Express and MongoDB, may process and store account and story information on our behalf. These services may have their own privacy policies, and we recommend reviewing them when you use those features.</p>
        </section>

        <section>
          <h2 className='mb-3 text-2xl font-bold text-slate-900 dark:text-white'>Cookies and local storage</h2>
          <p>The website may use browser storage to remember preferences such as your selected theme. Future analytics, authentication, or subscription features may use cookies or similar technologies. You can manage cookies and stored data through your browser settings, although some features may not work as expected when they are disabled.</p>
        </section>

        <section>
          <h2 className='mb-3 text-2xl font-bold text-slate-900 dark:text-white'>Your choices</h2>
          <p>You may choose not to provide optional information, unsubscribe from emails, or contact us to ask about information associated with your account or submission. We may need to verify your identity before handling certain requests. We will retain information only for as long as it is reasonably needed for the purposes described in this policy or as required by law.</p>
        </section>

        <section>
          <h2 className='mb-3 text-2xl font-bold text-slate-900 dark:text-white'>Policy updates and contact</h2>
          <p>We may update this policy as the blog grows and new account, submission, or backend features are introduced. The updated version will appear on this page with a new revision date. If you have a privacy question, use the Contact Us page to reach the team.</p>
        </section>
      </div>
    </main>
  )
}
