
const UniversityPartnerships = () => {
  const universities = [
    {
      name: "Massachusetts Institute of Technology",
      shortName: "MIT",
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=200&fit=crop&crop=center",
      country: "USA"
    },
    {
      name: "Stanford University",
      shortName: "Stanford",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=200&fit=crop&crop=center",
      country: "USA"
    },
    {
      name: "University of Oxford",
      shortName: "Oxford",
      logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop&crop=center",
      country: "UK"
    },
    {
      name: "ETH Zurich",
      shortName: "ETH",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=200&fit=crop&crop=center",
      country: "Switzerland"
    },
    {
      name: "University of Tokyo",
      shortName: "UTokyo",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=center",
      country: "Japan"
    },
    {
      name: "Technical University of Munich",
      shortName: "TUM",
      logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=200&fit=crop&crop=center",
      country: "Germany"
    },
    {
      name: "National University of Singapore",
      shortName: "NUS",
      logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=200&fit=crop&crop=center",
      country: "Singapore"
    },
    {
      name: "University of Melbourne",
      shortName: "Melbourne",
      logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=200&h=200&fit=crop&crop=center",
      country: "Australia"
    },
    {
      name: "Indian Institute of Technology",
      shortName: "IIT",
      logo: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=200&h=200&fit=crop&crop=center",
      country: "India"
    },
    {
      name: "University of Toronto",
      shortName: "UofT",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&crop=center",
      country: "Canada"
    },
    {
      name: "Sorbonne University",
      shortName: "Sorbonne",
      logo: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=200&h=200&fit=crop&crop=center",
      country: "France"
    },
    {
      name: "University of São Paulo",
      shortName: "USP",
      logo: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=200&h=200&fit=crop&crop=center",
      country: "Brazil"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Global <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Partnerships</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with world-renowned institutions to deliver excellence in technology education
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                12+
              </div>
              <p className="text-gray-600 font-medium">Partner Universities</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                25+
              </div>
              <p className="text-gray-600 font-medium">Countries Reached</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <p className="text-gray-600 font-medium">Students Impacted</p>
            </div>
          </div>
        </div>

        {/* University Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {universities.map((university, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={university.logo}
                  alt={`${university.name} logo representing our educational partnership`}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="text-center">
                <h3 className="font-bold text-gray-800 text-sm mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {university.shortName}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{university.country}</p>
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Partnership Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">🎓</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Joint Programs</h4>
              <p className="text-sm text-gray-600">Collaborative degree and certification programs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">🔬</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Research Exchange</h4>
              <p className="text-sm text-gray-600">Shared research initiatives and knowledge transfer</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-bold">👥</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Faculty Exchange</h4>
              <p className="text-sm text-gray-600">International faculty and student mobility programs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">🌍</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Global Network</h4>
              <p className="text-sm text-gray-600">Access to worldwide educational resources</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityPartnerships;
