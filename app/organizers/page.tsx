import { Globe, Twitter, Linkedin } from 'lucide-react';

const organizers = [
  {
    name: 'Dr. Alan Grant',
    role: 'General Chair',
    affiliation: 'Robotics Institute, Tech University',
    image: '',
  },
  {
    name: 'Dr. Ellie Sattler',
    role: 'Program Chair',
    affiliation: 'Paleobotany Lab, Dino Research',
    image: '',
  },
  {
    name: 'Ian Malcolm',
    role: 'Technical Lead',
    affiliation: 'Chaos Theory Dept, Mathematics Uni',
    image: '',
  },
];

const sponsors = [
  { name: 'NVIDIA', tier: 'Platinum', logo: 'NVIDIA' },
  { name: 'Google DeepMind', tier: 'Platinum', logo: 'DeepMind' },
  { name: 'Hugging Face', tier: 'Gold', logo: 'Hugging Face' },
  { name: 'Boston Dynamics', tier: 'Gold', logo: 'Boston Dynamics' },
];

export default function OrganizersPage() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Organizers & Sponsors</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Meet the team behind ManipArena and our generous supporters.
          </p>
        </div>

        <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-2">Organizing Committee</h3>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {organizers.map((person) => (
                <div key={person.name} className="text-center">
                    <div className="mx-auto h-40 w-40 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-4xl font-bold">
                        {person.name.charAt(0)}
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium text-gray-900">{person.name}</h3>
                        <p className="text-sm text-green-600 font-medium">{person.role}</p>
                        <p className="mt-1 text-sm text-gray-500">{person.affiliation}</p>
                        <div className="mt-3 flex justify-center space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gray-500"><Globe className="h-5 w-5"/></a>
                            <a href="#" className="text-gray-400 hover:text-gray-500"><Twitter className="h-5 w-5"/></a>
                            <a href="#" className="text-gray-400 hover:text-gray-500"><Linkedin className="h-5 w-5"/></a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>

        <div className="mt-24">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-2">Sponsors</h3>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {sponsors.map((sponsor) => (
                    <div key={sponsor.name} className="col-span-1 flex justify-center md:col-span-1">
                         <div className="h-24 w-full bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
                             <span className="text-xl font-bold text-gray-400">{sponsor.logo}</span>
                         </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                    Interested in sponsoring? <a href="/contact" className="text-green-600 hover:underline">Contact us</a>.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

