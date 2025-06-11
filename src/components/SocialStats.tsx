
import { Instagram, Linkedin, Twitter, TrendingUp, Users, Globe } from "lucide-react";

const SocialStats = () => {
  const socialStats = [
    {
      platform: "Instagram",
      followers: "145,890",
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-gradient-to-r from-pink-50 to-purple-50",
      growth: "+12.5%"
    },
    {
      platform: "LinkedIn",
      followers: "89,234",
      icon: Linkedin,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-gradient-to-r from-blue-50 to-blue-100",
      growth: "+18.3%"
    },
    {
      platform: "Twitter",
      followers: "76,543",
      icon: Twitter,
      color: "from-sky-400 to-blue-500",
      bgColor: "bg-gradient-to-r from-sky-50 to-blue-50",
      growth: "+9.7%"
    }
  ];

  const networkStats = [
    {
      label: "Active Students",
      value: "25,847",
      icon: Users,
      color: "text-blue-600"
    },
    {
      label: "Alumni Network",
      value: "18,932",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      label: "Industry Partners",
      value: "2,156",
      icon: Globe,
      color: "text-indigo-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Growing <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Community</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals and students in our thriving global technology community
          </p>
        </div>

        {/* Social Media Stats */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Social Media Reach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialStats.map((stat, index) => (
              <div
                key={index}
                className={`${stat.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group`}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{stat.platform}</h4>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent">
                      {stat.followers}
                    </span>
                    <p className="text-gray-600 text-sm mt-1">Followers</p>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-green-600 text-sm font-semibold">{stat.growth}</span>
                    <span className="text-gray-500 text-sm">this month</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Statistics */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Network Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {networkStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 shadow-lg">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with us on social media and become part of the MITS family. 
              Stay updated with the latest in technology education and innovation.
            </p>
            <div className="flex justify-center space-x-6">
              {socialStats.map((stat, index) => (
                <a
                  key={index}
                  href="#"
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl`}
                  aria-label={`Follow MITS on ${stat.platform}`}
                >
                  <stat.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialStats;
