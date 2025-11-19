export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy & Terms</h1>
      
      <div className="prose prose-blue prose-lg text-gray-500">
        <h2>1. Data Collection</h2>
        <p>
          We collect information you provide directly to us, such as when you register for the competition, submit a model, 
          or contact us for support. This may include your name, email address, institution, and team details.
        </p>

        <h2>2. Use of Information</h2>
        <p>
          We use the collected information to:
        </p>
        <ul>
            <li>Administer the ManipArena benchmark and competition.</li>
            <li>Communicate with you regarding your submissions and results.</li>
            <li>Analyze trends and improve our evaluation infrastructure.</li>
            <li>Publish the leaderboard (displaying team names and scores).</li>
        </ul>

        <h2>3. Submission Licensing</h2>
        <p>
          By submitting a container or code to ManipArena, you grant the organizers a non-exclusive, worldwide, royalty-free license 
          to run, evaluate, and display the results of your submission. You retain all ownership rights to your underlying intellectual property.
        </p>

        <h2>4. Cookies</h2>
        <p>
           We use essential cookies to maintain your login session and improve site performance. We do not use third-party tracking cookies for advertising.
        </p>

        <h2>5. Updates</h2>
        <p>
            We may update this policy from time to time. We will notify you of any changes by posting the new policy on this page.
        </p>

        <h2>6. Contact</h2>
        <p>
            If you have any questions about this privacy policy, please contact us at privacy@maniparena.org.
        </p>
      </div>
    </div>
  );
}

