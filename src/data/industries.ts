export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const industries: Industry[] = [
  { id: '1', name: 'Healthcare', icon: 'health', description: 'HIPAA-compliant digital solutions for clinics, hospitals, and health startups.' },
  { id: '2', name: 'Real Estate', icon: 'realestate', description: 'Property listing platforms, virtual tours, and lead generation sites.' },
  { id: '3', name: 'Education', icon: 'education', description: 'E-learning platforms, school websites, and student portals.' },
  { id: '4', name: 'Finance & FinTech', icon: 'finance', description: 'Secure, compliant web apps for banks, fintech startups, and advisors.' },
  { id: '5', name: 'Retail & E-Commerce', icon: 'ecommerce', description: 'Online stores, marketplaces, and omnichannel retail platforms.' },
  { id: '6', name: 'Hospitality & Travel', icon: 'travel', description: 'Booking systems, hotel websites, and travel agency platforms.' },
  { id: '7', name: 'Legal', icon: 'legal', description: 'Professional law firm websites with secure client portals.' },
  { id: '8', name: 'Technology', icon: 'tech', description: 'SaaS products, tech startup sites, and developer tools.' },
  { id: '9', name: 'Food & Restaurant', icon: 'food', description: 'Restaurant websites, online ordering, and delivery platforms.' },
  { id: '10', name: 'Sports & Fitness', icon: 'sports', description: 'Gym management software, fitness apps, and sports club sites.' },
  { id: '11', name: 'Non-Profit', icon: 'nonprofit', description: 'Donation platforms, volunteer management, and awareness campaigns.' },
  { id: '12', name: 'Entertainment', icon: 'entertainment', description: 'Media platforms, streaming sites, and event management apps.' },
];
