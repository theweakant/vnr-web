import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { Shield, Users, TrendingUp, BookOpen, ArrowRight, Quote, ChevronLeft, ChevronRight, Calendar, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { congressData, reformPeriods, youthResponsibility, comparisonTable } from '../data/vnr202Content';

// Helper function to combine class names
const cn = (...classes) => classes.filter(Boolean).join(' ');


const Container = ({ className, children }) => (
  <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", className)}>
    {children}
  </div>
);

const Button = forwardRef(({ className, as: Comp = 'button', variant = 'primary', size = 'md', ...props }, ref) => {
  const sizeClasses = {
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg font-semibold',
  };

  const variantClasses = {
    primary: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400'
  };

  return (
    <Comp
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
});
Button.displayName = 'Button';


const Card = ({ className, children, hover = false }) => (
  <div className={cn("bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-300",
    hover && "hover:shadow-lg hover:-translate-y-1",
    className
  )}>
    {children}
  </div>
);

const CardContent = ({ className, children, padding = 'md' }) => {
  const paddingClasses = {
    md: 'p-6',
    lg: 'p-8',
  }
  return <div className={cn(paddingClasses[padding], className)}>{children}</div>;
}
const CardTitle = ({ className, children }) => <h3 className={cn("text-lg font-semibold text-gray-900", className)}>{children}</h3>;
const CardDescription = ({ className, children }) => <p className={cn("text-gray-600", className)}>{children}</p>;

const ScrollRevealSection = ({ children, direction = 'up', delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const directionClasses = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: '-translate-x-10',
    right: 'translate-x-10',
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directionClasses[direction]}`
      )}
    >
      {children}
    </div>
  );
};

const CaseCarousel = ({ cases }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? cases.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === cases.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-4xl mx-auto relative group">
      <div className="relative h-80 w-full overflow-hidden rounded-lg">
        {cases.map((caseItem, index) => (
          <div
            key={caseItem.id}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={caseItem.image} alt={caseItem.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-end p-6"
              style={{ backgroundColor: "rgba(144, 17, 17, 0.5)" }}>
              <h3 className="text-2xl font-bold text-white">{caseItem.title}</h3>
              <p className="text-gray-200 mt-2">{caseItem.summary}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>
    </div>
  )
}

// --- Component chính: LandingPage ---
const LandingPage = () => {
  const backgroundImages = [
    '/landingpage1.jpg',
    '/landingpage2.jpg'
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 15000);
    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);

  const features = [
    { icon: Shield, title: "Thông tin minh bạch", description: "Cung cấp thông tin chi tiết về các vụ án tham nhũng một cách minh bạch và chính xác" },
    { icon: Users, title: "Nâng cao nhận thức", description: "Giúp người dân hiểu rõ tác hại của tham nhũng và cách phòng chống" },
    { icon: TrendingUp, title: "Theo dõi tiến độ", description: "Cập nhật liên tục về tình hình xử lý các vụ án tham nhũng" },
    { icon: BookOpen, title: "Tài liệu tham khảo", description: "Cung cấp các tài liệu, văn bản pháp luật liên quan đến chống tham nhũng" }
  ];

  const stats = [
    { number: "20+", label: "Vụ án được theo dõi" },
    { number: "10+", label: "Tài liệu tham khảo" },
    { number: "20+", label: "Người dùng truy cập" },
    { number: "100%", label: "Độ chính xác thông tin" }
  ];

  const hoChiMinhQuotes = [
    { quote: "Tham ô là hành động xấu xa nhất, tội lỗi, đê tiện nhất trong xã hội. Tham ô là trộm cắp của công, chiếm của công làm của tư.", context: "Về bản chất của tham nhũng" },
    { quote: "Tham ô, lãng phí và bệnh quan liêu là kẻ thù của nhân dân, của bộ đội và của Chính phủ.", context: "Về tác hại của tham nhũng" },
    { quote: "Phải thực hành tự phê bình và phê bình nghiêm chỉnh trong Đảng... Kỷ luật của Đảng phải nghiêm minh.", context: "Về giải pháp chống tham nhũng" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {backgroundImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>

        <Container className="relative py-20 z-10">
          <ScrollRevealSection direction="up" delay={0.2}>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight shadow-text">
                Chương 3: Đảng lãnh đạo công cuộc đổi mới
                <span className="block text-red-400 mt-2">(1975 - 2018)</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed shadow-text">
                Lãnh đạo công cuộc đổi mới, đẩy mạnh công nghiệp hóa, hiện đại hóa và hội nhập quốc tế từ năm 1986 đến nay.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  as={Link}
                  to="/cases"
                  size="xl"
                  className="group"
                >
                  <span>Tìm hiểu Đại hội Đảng</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                <Button
                  as={Link}
                  to="/resources"
                  variant="secondary"
                  size="xl"
                >
                  Tài liệu tham khảo
                </Button>
              </div>
            </div>
          </ScrollRevealSection>
        </Container>
      </section>

      {/* Hồ Chí Minh's View Section */}

      {/* <iframe
        allowFullScreen
        allow="clipboard-write"
        scrolling="no"
        className="fp-iframe"
        style={{ border: '1px solid lightgray', width: '100%', height: '400px' }}
        src="https://heyzine.com/flip-book/445928f54d.html"
        title="Heyzine Flipbook">
      </iframe> */}

      <section className="py-24 bg-white" style={{ backgroundColor: "#f8f9fa" }}>

        <Container>
          <ScrollRevealSection direction="up" delay={0.2}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Các Đại hội Đảng trong thời kỳ đổi mới
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Đại hội XII và XIII đánh dấu những cột mốc quan trọng trong việc lãnh đạo công cuộc đổi mới, 
                đẩy mạnh công nghiệp hóa, hiện đại hóa và hội nhập quốc tế.
              </p>
            </div>
          </ScrollRevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {congressData.map((congress, index) => (
              <ScrollRevealSection key={congress.id} direction="up" delay={0.3 + index * 0.1}>
                <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent padding="lg">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-8 w-8 text-red-600 mr-3" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{congress.title}</h3>
                        <p className="text-sm text-red-600">{congress.period}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{congress.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Chủ đề:</h4>
                      <p className="text-sm text-gray-600 italic">"{congress.theme}"</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Mục tiêu chính:</h4>
                      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                        {congress.keyObjectives.slice(0, 2).map((objective, idx) => (
                          <li key={idx}>{objective}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </ScrollRevealSection>
            ))}
          </div>

          <ScrollRevealSection direction="up" delay={0.6}>
            <Card className="bg-gradient-to-r from-red-600 to-red-700 border-0 text-white overflow-hidden">
              <CardContent padding="lg">
                <h3 className="text-3xl font-bold mb-8 text-center">
                  Các giai đoạn của công cuộc đổi mới
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {reformPeriods.slice(2, 4).map((period, index) => (
                    <div key={period.id} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                      <h4 className="text-xl font-semibold mb-4 flex items-center">
                        <TrendingUp className="h-6 w-6 mr-2" />
                        {period.title}
                      </h4>
                      <p className="text-base leading-relaxed mb-4">{period.description}</p>
                      <ul className="space-y-2">
                        {period.keyAchievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <div className="h-2 w-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollRevealSection>
        </Container>
      </section>

      {/* Solutions Today Section */}

      <section className="py-24 bg-gray-50" style={{ backgroundColor: "wheat" }}>

        <Container>
          <ScrollRevealSection direction="up" delay={0.2}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Vận dụng tư tưởng Hồ Chí Minh trong công tác phòng, chống tham nhũng hiện nay
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Cần thực hiện đồng bộ nhiều giải pháp, cả về tư tưởng, tổ chức, pháp luật và vai trò của quần chúng nhân dân.
              </p>
            </div>
          </ScrollRevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollRevealSection key={index} direction="up" delay={0.2 + index * 0.1}>
                <Card hover className="text-center group h-full">
                  <CardContent padding="lg">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-red-200 transition-colors duration-300">
                      <feature.icon className="h-8 w-8 text-red-600" />
                    </div>
                    <CardTitle className="text-xl mb-4">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollRevealSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Impact on Public Trust Section */}
      <section className="py-24 bg-white" style={{ backgroundColor: "antiquewhite" }}>
        <Container>
          <ScrollRevealSection direction="up" delay={0.2}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Trách nhiệm công dân của thanh niên trong kỷ nguyên mới
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                {youthResponsibility.introduction}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {youthResponsibility.keyRoles.map((role, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{role.title}</h4>
                    <p className="text-gray-600">{role.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-red-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Yêu cầu đối với thanh niên</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {youthResponsibility.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-2 w-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollRevealSection>
          <ScrollRevealSection direction="up" delay={0.6}>
            <Card className="bg-gradient-to-r from-red-600 to-red-700 border-0 text-white text-center overflow-hidden">
              <CardContent padding="lg">
                <h3 className="text-3xl md:text-4xl font-bold mb-8">
                  So sánh Đại hội XII và XIII
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="py-3 px-4 text-white font-semibold">Khía cạnh</th>
                        <th className="py-3 px-4 text-white font-semibold">Đại hội XII (2016)</th>
                        <th className="py-3 px-4 text-white font-semibold">Đại hội XIII (2021)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonTable.categories.slice(0, 2).map((category, index) => (
                        <tr key={index} className="border-b border-white/10">
                          <td className="py-4 px-4 font-medium text-white">{category.aspect}</td>
                          <td className="py-4 px-4 text-gray-100 text-sm">{category.congress12}</td>
                          <td className="py-4 px-4 text-gray-100 text-sm">{category.congress13}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </ScrollRevealSection>
        </Container>
      </section>
    </div>
  );
};

export default LandingPage;
