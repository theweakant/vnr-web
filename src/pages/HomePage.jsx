import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button, Container, Section, Card, CardContent } from '../components/ui';
import { ArrowRight, BookOpen, Zap,  Target, FileText, Users, Lightbulb, TrendingUp, Heart, Shield } from 'lucide-react';
import contentData from '../data/content';
import { congressData, reformPeriods, guidingPrinciples, keyTasks } from '../data/vnr202Content';
import VideoModal from '../components/VideoModal';
import { useState } from 'react';

const taskIcons = {
  1: FileText,      
  2: Users,       
  3: Lightbulb,     
  4: TrendingUp,   
  5: Heart,        
  6: Shield     
};

export default function HomePage() {
  const chapters = contentData.chapters;
  const [activeVideo, setActiveVideo] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
  {/* Hero Section */}
  <Section id="hero" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            style={{ left: '-10%', top: '-10%' }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            style={{ right: '-10%', bottom: '-10%' }}
          />
        </div>

<Container className="relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-6"
              variants={itemVariants}
            >
              <BookOpen className="w-8 h-8 text-blue-600" />
              <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                Lịch sử đảng Việt Nam
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
              variants={itemVariants}
            >
              Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                công cuộc đổi mới
              </span>
            </motion.h1>

            <motion.div
              className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto space-y-4"
              variants={itemVariants}
            >
              <p className="font-semibold text-slate-800">
                Chương 3: Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến hành công cuộc đổi mới (1975 - 2018)
              </p>
              <p className="text-slate-700">
                <span className="font-medium">II.</span> Lãnh đạo công cuộc đổi mới, đẩy mạnh công nghiệp hóa, hiện đại hóa và hội nhập quốc tế (từ năm 1986 đến nay)
              </p>
              <p className="text-slate-600">
                <span className="font-medium">2.</span> Tiếp tục công cuộc đổi mới, đẩy mạnh công nghiệp hoá, hiện đại hoá và hội nhập quốc tế (từ năm 1996 đến nay)
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>



      {/* Quan điểm Section */}
<section id="quan-diem" className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
  <div className="max-w-7xl mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">{guidingPrinciples.title}</h2>
      <p className="text-lg text-slate-600">Những quan điểm cốt lõi và bài học kinh nghiệm</p>
    </div>

    {/* Grid Layout - Tổng cộng 2 cột (I và II mỗi cái 1 cột), III chiếm 2 cột (full width) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Section I - Chiếm 1 cột */}
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
            I
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 mb-4">{guidingPrinciples.sections[0].heading}</h3>
            <ul className="space-y-2">
              {guidingPrinciples.sections[0].bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Section II - Chiếm 1 cột, nằm ngang với I */}
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
            II
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900 mb-4">{guidingPrinciples.sections[1].heading}</h3>
            <ul className="space-y-2">
              {guidingPrinciples.sections[1].bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-teal-600 mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Section III - Chiếm toàn bộ chiều rộng (2 cột), nằm dưới I và II */}
      <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow mt-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
            III
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 mb-6">{guidingPrinciples.sections[2].heading}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guidingPrinciples.sections[2].items.map((item, idx) => (
                <div key={idx} className="border-l-4 border-amber-600 pl-4">
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Nhiệm vụ Section */}
     <Section id="nhiem-vu" title="Nhiệm vụ trọng tâm" subtitle="Sáu nhiệm vụ trọng tâm (2021-2025)">
        <Container>

          {/* Grid 3 cột */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {keyTasks.map((task, index) => {
              const Icon = taskIcons[task.id];
              return (
                <motion.div
                  key={task.id}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 text-blue-600 transform transition-transform group-hover:scale-110">
                    <div className="w-full h-full rounded-lg bg-blue-50 flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                    {task.title}
                  </h3>

                  {/* Description nếu có */}
                  {task.description && (
                    <p className="text-base text-slate-600 leading-relaxed">
                      {task.description}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Content Section */}
<Section
  id="dot-pha"
  title="Nội Dung Chính"
  subtitle="Khám phá lịch sử và chính sách phát triển"
>
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" // Cập nhật: 3 cột trên lg
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {chapters.map((chapter, index) => (
      <motion.div key={chapter.id} variants={itemVariants}>
        <Link to={`/chapter/${chapter.number}`}>
          <Card className="h-full cursor-pointer hover:border-blue-400 transition-colors p-5"> {/* Thêm padding và làm nhỏ card */}
            <CardContent className="pt-4 pb-4"> {/* Giảm padding trên/dưới */}
              <div className="flex items-start justify-between mb-3"> {/* Giảm khoảng cách */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-blue-600">Mục {chapter.number}</span> {/* Giảm font */}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{chapter.title}</h3> {/* Giảm font */}
                  <p className="text-sm text-slate-600 mb-4">
                    {chapter.description.length > 50
                      ? `${chapter.description.substring(0, 50)}...`
                      : chapter.description}
                  </p>
                </div>
              </div>
              <Button variant="ghost" className="text-xs text-blue-600 px-3 py-1 h-auto">
                Đọc Thêm
              </Button>
            </CardContent>
          </Card>
        </Link>
      </motion.div>
    ))}
  </motion.div>
</Section>

  {/* Stats Section */}
<Section id="stats" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16 md:py-24 rounded-3xl">
  <Container>
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Con Số Ấn Tượng
      </h2>
      <p className="text-xl text-white/90">
        Hành trình đổi mới và phát triển của đất nước
      </p>
    </motion.div>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {[
        { 
          number: '35+', 
          label: 'Năm Đổi Mới',
          description: '(1986-2021)',
 
        },
        { 
          number: '3', 
          label: 'Đột Phá Chiến Lược',
          description: '',

        },
        { 
          number: '6', 
          label: 'Nhiệm Vụ Trọng Tâm',
          description: '',

        },
        { 
          number: '2045', 
          label: 'Tầm Nhìn Phát Triển',
          description: 'Nước phát triển theo CNXH',

        },
      ].map((stat, index) => (
        <motion.div 
          key={index} 
          variants={itemVariants}
          className="relative"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 h-full">
            
            {/* Number */}
            <div className="text-5xl md:text-6xl font-bold mb-2">
              {stat.number}
            </div>
            
            {/* Label */}
            <p className="text-xl font-semibold mb-2">
              {stat.label}
            </p>
            
            {/* Description */}
            <p className="text-sm text-white/80 leading-relaxed">
              {stat.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </Container>
</Section>

      {/* Quick Links / Videos Section */}
      <Section title="Khám Phá Nhanh">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: BookOpen,
              title: 'Đại Hội XII',
              description: 'Định hướng phát triển 2016-2020',
              video: 'MRHKMqVlDEw'
            },
            {
              icon: Zap,
              title: 'Đại Hội XIII',
              description: 'Tầm nhìn phát triển đến 2045',
              video: '-2z7JRUfHu8'
            },
            {
              icon: Target,
              title: 'Lịch Sử Đổi Mới',
              description: 'Bối cảnh và nền tảng của công cuộc đổi mới',
              video: 'lVeRPw1SgqQ'
            },
            {
              icon: Users,
              title: 'Vai Trò Thanh Niên',
              description: 'Sứ mệnh của thế hệ trẻ',
              video: 'qa1ED_Z-mQ0'
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center cursor-pointer" onClick={() => setActiveVideo(item)} role="button" tabIndex={0} onKeyDown={(e)=>{ if(e.key==='Enter') setActiveVideo(item)}}>
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-blue-50 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                    <div className="mt-4">
                      <span className="text-sm text-blue-600 underline">Xem video</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* Bối cảnh: So sánh Đại hội XII và XIII */}
      <Section id="timeline" title="Bối cảnh & So sánh" subtitle="So sánh Đại hội XII (2016) và XIII (2021)">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">So sánh Đại hội XII và XIII</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="overflow-x-auto">
                  <table className="w-full table-auto border-collapse">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="px-4 py-3 text-left font-semibold">Tiêu chí</th>
                        <th className="px-4 py-3 text-left font-semibold">Đại hội XII (2016)</th>
                        <th className="px-4 py-3 text-left font-semibold">Đại hội XIII (2021)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-medium">Mục tiêu chính</td>
                        <td className="px-4 py-3">Sớm trở thành nước công nghiệp theo hướng hiện đại</td>
                        <td className="px-4 py-3">Đến giữa thế kỷ XXI trở thành nước phát triển</td>
                      </tr>
                      <tr className="border-t bg-slate-50">
                        <td className="px-4 py-3 font-medium">Tầm nhìn</td>
                        <td className="px-4 py-3">Giai đoạn 2016-2020</td>
                        <td className="px-4 py-3">Đến 2030 và 2045</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-medium">Tổng kết</td>
                        <td className="px-4 py-3">30 năm đổi mới</td>
                        <td className="px-4 py-3">35 năm đổi mới</td>
                      </tr>
                      <tr className="border-t bg-slate-50">
                        <td className="px-4 py-3 font-medium">Trọng tâm mới</td>
                        <td className="px-4 py-3">3 đột phá chiến lược cơ bản</td>
                        <td className="px-4 py-3">3 đột phá nâng cấp (thêm chuyển đổi số, quản trị hiện đại)</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-medium">Động lực</td>
                        <td className="px-4 py-3">Khoa học công nghệ</td>
                        <td className="px-4 py-3">CMCN 4.0, chuyển đổi số, khát vọng phát triển</td>
                      </tr>
                      <tr className="border-t bg-slate-50">
                        <td className="px-4 py-3 font-medium">Nguồn lực</td>
                        <td className="px-4 py-3">Nguồn nhân lực</td>
                        <td className="px-4 py-3">Nguồn nhân lực chất lượng cao + hạ tầng số</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Video modal */}
      <VideoModal
        videoId={activeVideo?.video}
        title={activeVideo?.title}
        onClose={() => setActiveVideo(null)}
      />
    </div>

    
  );
}
