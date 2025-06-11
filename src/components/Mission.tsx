
import { Target, Lightbulb, GraduationCap, Globe } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-16 shadow-lg">
          <div className="text-center mb-12">
            <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
              "To revolutionize technology education by fostering innovation, empowering individuals 
              with cutting-edge skills, and building bridges between academic excellence and industry leadership. 
              We are committed to creating a global community of tech professionals who shape the future 
              through knowledge, creativity, and collaborative excellence."
            </p>
          </div>
        </div>

        {/* Mission Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              Driving technological advancement through creative problem-solving, 
              research initiatives, and breakthrough solutions that transform industries.
            </p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200">
            <div className="bg-gradient-to-r from-purple-100 to-purple-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Educational Empowerment</h3>
            <p className="text-gray-600 leading-relaxed">
              Providing world-class education that bridges theoretical knowledge with 
              practical application, preparing students for tomorrow's challenges.
            </p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200">
            <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Global Community</h3>
            <p className="text-gray-600 leading-relaxed">
              Building an interconnected network of professionals, institutions, and 
              innovators working together to shape the future of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
