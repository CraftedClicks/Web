import { Crown, Smartphone, Megaphone } from 'lucide-react';

const services = [
  {
    title: 'Custom Web App\nDevelopment',
    description: 'We are a company that specializes in providing the best business solutions for you. Visit to SoftCrowd Technologies to learn how we can assist you. SoftCrowd Technologies is a Nashik-based company that has...',
    icon: Crown,
  },
  {
    title: 'Custom Mobile App\nDevelopment',
    description: 'Smartphones and mobile technology have had a significant impact on our lives! Businesses can connect with mobile customers all over the world by leveraging the technical capabilities and facilities of cutting-edge technologies...',
    icon: Smartphone,
  },
  {
    title: 'Digital Marketing & SEO\nServices',
    description: 'SoftCrowd Technologies is a Nashik-based digital marketing firm. Without a doubt, your company has the best products and services available, but how will they be promoted if no one knows about them? That is where we can help...',
    icon: Megaphone,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#3b9cb8]">
      {/* Background overlay to simulate the image background */}
      <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] leading-[1.3] text-white font-medium">
            Our Leading Web Development Company Offers Professional IT Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-lg transform transition duration-500 hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 rounded-full border-2 border-[#1c6a85] flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-[#1c6a85]" />
              </div>
              <h3 className="text-[1.35rem] font-medium text-[#2d3748] mb-4 leading-tight whitespace-pre-line">
                {service.title}
              </h3>
              <p className="text-[#718096] text-[0.95rem] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
