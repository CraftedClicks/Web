import { 
  HeartHandshake, 
  Home, 
  MonitorPlay, 
  Clapperboard, 
  LineChart, 
  Activity, 
  Network, 
  Plane 
} from 'lucide-react';

const industries = [
  { name: 'Healthcare', icon: HeartHandshake },
  { name: 'Real estate', icon: Home },
  { name: 'Education', icon: MonitorPlay },
  { name: 'Entertainment', icon: Clapperboard },
  { name: 'Finance', icon: LineChart },
  { name: 'Sports & Play', icon: Activity },
  { name: 'Social Networking', icon: Network },
  { name: 'Travel & Tourism', icon: Plane },
];

export default function IndustriesGrid() {
  return (
    <section className="py-20 bg-[#f8fbfa] relative overflow-hidden">
      {/* Background abstract watermark/wave - simulated with CSS */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#eaf5f7] to-transparent rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-[2rem] font-bold text-[#0c7094]">
            Industries we Served
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <div 
              key={industry.name} 
              className="bg-white flex flex-col items-center justify-center p-8 sm:p-10 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#f0f4f8] transform transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <industry.icon className="w-10 h-10 text-[#0c7094] mb-4 stroke-[1.5]" />
              <div className="text-[15px] font-medium text-[#4a5568]">{industry.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
