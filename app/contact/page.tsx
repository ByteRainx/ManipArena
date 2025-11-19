import { Mail, MessageSquare, FileText } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Have questions? We are here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Email Card */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
           <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
             <Mail className="h-6 w-6" />
           </div>
           <h3 className="text-lg font-medium text-gray-900">Email Support</h3>
           <p className="mt-2 text-sm text-gray-500">
             For general inquiries, registration issues, and partnership opportunities.
           </p>
           <a href="mailto:support@maniparena.org" className="mt-4 inline-block text-blue-600 hover:text-blue-500 font-medium">
             support@maniparena.org
           </a>
        </div>

        {/* Community Card */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
           <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 mb-4">
             <MessageSquare className="h-6 w-6" />
           </div>
           <h3 className="text-lg font-medium text-gray-900">Community Forum</h3>
           <p className="mt-2 text-sm text-gray-500">
             Join our Discord server or GitHub Discussions to chat with other participants.
           </p>
           <a href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-500 font-medium">
             Join Discord
           </a>
        </div>

        {/* Ticket Card */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
           <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
             <FileText className="h-6 w-6" />
           </div>
           <h3 className="text-lg font-medium text-gray-900">Submit a Ticket</h3>
           <p className="mt-2 text-sm text-gray-500">
             Found a bug in the dataset or evaluation code? File an issue.
           </p>
           <a href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-500 font-medium">
             Open Ticket
           </a>
        </div>
      </div>

      <div className="mt-16 bg-gray-50 rounded-lg overflow-hidden">
        <div className="px-6 py-8 sm:p-10">
           <h3 className="text-2xl font-bold text-gray-900 text-center">Contact Form</h3>
           <form className="mt-8 max-w-xl mx-auto space-y-6">
              <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border h-10 px-3" />
              </div>
              <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border h-10 px-3" />
              </div>
              <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-3"></textarea>
              </div>
              <div>
                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                      Send Message
                  </button>
              </div>
           </form>
        </div>
      </div>
    </div>
  );
}

