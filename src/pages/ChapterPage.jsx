import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Container, Section, Card, CardContent, CardHeader, CardTitle } from '../components/ui';
import { 
  ArrowLeft, ArrowRight, BookOpen, Target, Lightbulb, Shield, Award, Scale, Users, Cpu, FileText, Quote, AlertTriangle, Calendar, CheckSquare, Zap 
} from 'lucide-react';
import contentData from '../data/content';

export default function ChapterPage() {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const chapter = contentData.chapters.find(c => c.number === chapterId);

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md mx-4">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-red-600 font-bold text-xl">404</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Không tìm thấy chương</h1>
          <p className="text-slate-600 mb-6">Chương bạn yêu cầu không tồn tại trong hệ thống.</p>
          <Link to="/">
            <Button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
              <ArrowLeft className="w-4 h-4 mr-2" /> Quay về Trang chủ
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = contentData.chapters.findIndex(c => c.number === chapterId);
  const prevChapter = currentIndex > 0 ? contentData.chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < contentData.chapters.length - 1 ? contentData.chapters[currentIndex + 1] : null;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.05,  
      delayChildren: 0,       
      duration: 0.3         
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.3,  
      ease: "easeOut" 
    } 
  },
};

  // Reusable components for different section types
  const RenderKeyPoints = ({ points }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-8"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
        <Target className="w-5 h-5 mr-2 text-blue-600" /> Những Điểm Chính
      </h3>
      <div className="grid gap-4">
        {points.map((point, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="flex gap-4 p-4 rounded-lg bg-blue-50 border border-blue-200 hover:border-blue-400 transition-colors"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm">
              {idx + 1}
            </div>
            <p className="text-slate-700 leading-relaxed">{point}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const RenderAchievements = ({ items }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-8"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
        <Award className="w-5 h-5 mr-2 text-green-600" /> Thành Tựu Tiêu Biểu
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="p-5 rounded-xl bg-white border border-emerald-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="font-bold text-emerald-700 mb-1">{item.area}</div>
            <p className="text-slate-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const RenderLimitations = ({ items }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-8"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
        <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" /> Hạn Chế Cần Khắc Phục
      </h3>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="p-4 rounded-lg bg-amber-50 border border-amber-200"
          >
            <div className="font-bold text-amber-800">{item.area}</div>
            <p className="text-slate-700 mt-1">{item.issue}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const RenderLessons = ({ items }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-8"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
        <BookOpen className="w-5 h-5 mr-2 text-purple-600" /> Bài Học Kinh Nghiệm
      </h3>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200"
          >
            <div className="font-bold text-purple-800 mb-2">{item.principle}</div>
            <p className="text-slate-700 italic">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const RenderVision = ({ vision }) => (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-8"
    >
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="flex items-center mb-3">
          <Target className="w-6 h-6 mr-2" />
          <span className="text-lg font-bold">TẦM NHÌN ĐẾN NĂM {vision.year}</span>
        </div>
        <p className="text-xl font-semibold text-white/90">{vision.goal}</p>
      </div>
    </motion.div>
  );

  const RenderMilestones = ({ items }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-8"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
        <Calendar className="w-5 h-5 mr-2 text-blue-600" /> Cột Mốc Lịch Sử
      </h3>
      <div className="relative pl-6 border-l-2 border-blue-200">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="mb-6 ml-4"
          >
            <div className="absolute -left-7 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow" />
            <div className="font-bold text-blue-800">{item.period}</div>
            <p className="text-slate-700 mt-1">{item.achievement}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const RenderCongress = ({ items }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-8"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
        <Users className="w-5 h-5 mr-2 text-rose-600" /> Các Kỳ Đại Hội Tiêu Biểu
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="p-4 rounded-lg bg-rose-50 border border-rose-200"
          >
            <div className="font-bold text-rose-800">{item.name}</div>
            <p className="text-slate-700">Năm {item.year}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const RenderTasks = ({ items }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-8"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
        <CheckSquare className="w-5 h-5 mr-2 text-sky-600" /> Nhiệm Vụ Trọng Tâm
      </h3>
      <div className="space-y-4">
        {items.map((task) => (
          <motion.div
            key={task.number}
            variants={itemVariants}
            className="group"
          >
            <Card className="hover:shadow-xl transition-all cursor-pointer border border-sky-100">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-lg">
                    {task.number}
                  </div>
                  <CardTitle className="text-xl text-slate-900">{task.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">{task.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const RenderBreakthroughs = ({ items }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-8"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
        <Zap className="w-5 h-5 mr-2 text-amber-600" /> Đột Phá Chiến Lược
      </h3>
      <div className="space-y-4">
        {items.map((item) => (
          <motion.div
            key={item.number}
            variants={itemVariants}
            className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 hover:border-amber-400 transition-colors"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-lg">
                {item.number}
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-700 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const RenderSubSections = ({ sections }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-8"
    >
      {sections.map((sub, idx) => (
        <div key={idx} className="mt-8 border-l-4 border-slate-200 pl-6 py-4">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">{sub.heading}</h3>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">{sub.content}</p>
          
          {sub.keyPoints && (
            <div className="mt-4 pl-4">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center">
                <Lightbulb className="w-4 h-4 mr-2 text-purple-600" /> Những Điểm Chính
              </h4>
              <ul className="space-y-2">
                {sub.keyPoints.map((point, pIdx) => (
                  <li key={pIdx} className="flex gap-2 text-slate-700">
                    <span className="text-purple-600 font-bold mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );

  const RenderQuote = ({ quote }) => (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-8"
    >
      <div className="border-l-4 border-blue-600 pl-6 py-4 italic text-slate-700 bg-blue-50 rounded-r-lg">
        <Quote className="w-6 h-6 text-blue-600 mb-2" />
        <p className="text-xl font-medium text-slate-800">"{quote}"</p>
      </div>
    </motion.div>
  );

  const RenderResolutions = ({ items }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-8"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
        <FileText className="w-5 h-5 mr-2 text-green-600" /> Nghị Quyết Trọng Tâm
      </h3>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="p-5 rounded-xl bg-green-50 border border-green-200"
          >
            <div className="font-bold text-green-800 mb-1">
              {item.number && `${item.number}, `}{item.date}
            </div>
            <p className="text-slate-700">{item.focus || item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const RenderObjectives = ({ items }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-8"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
        <Target className="w-5 h-5 mr-2 text-indigo-600" /> Mục Tiêu Tổng Quát
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 hover:border-indigo-400 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                {idx + 1}
              </div>
              <p className="text-slate-700 leading-relaxed font-medium">{item}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const RenderResolution = ({ resolution }) => (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-8"
    >
      <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 shadow-md">
        <div className="flex items-center mb-3">
          <FileText className="w-6 h-6 mr-2 text-green-700" />
          <span className="text-lg font-bold text-green-800">
            {resolution.number || resolution.reference}
          </span>
        </div>
        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
            {resolution.date}
          </span>
        </div>
        <p className="text-slate-700 font-medium mt-3">{resolution.focus}</p>
      </div>
    </motion.div>
  );

  const RenderCongressInfo = ({ congress }) => (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-8"
    >
      <div className="p-6 rounded-xl bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-300 shadow-md">
        <div className="flex items-center mb-3">
          <Users className="w-6 h-6 mr-2 text-rose-700" />
          <span className="text-2xl font-bold text-rose-800">{congress.name}</span>
        </div>
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-semibold mr-2">
            Năm {congress.year}
          </span>
          {congress.period && (
            <span className="inline-block px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-semibold">
              {congress.period}
            </span>
          )}
        </div>
        {congress.theme && (
          <div className="mt-4 p-4 bg-white/60 rounded-lg border border-rose-200">
            <p className="text-slate-700 font-medium italic leading-relaxed">
              "{congress.theme}"
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );

  const RenderLessonsSimple = ({ items }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="mb-8"
  >
    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
      <BookOpen className="w-5 h-5 mr-2 text-purple-600" /> Bài Học Kinh Nghiệm
    </h3>
    <div className="space-y-3">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          className="flex gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 hover:border-purple-400 transition-colors"
        >
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold text-sm">
            {idx + 1}
          </div>
          <p className="text-slate-700 leading-relaxed font-medium">{item}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <Section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-b-3xl">
        <Container>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -20 }}  
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}    
        >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
                {chapter.number.includes('CLO') ? chapter.number : `Mục ${chapter.number}`}
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
              variants={itemVariants}
            >
              {chapter.title}
            </motion.h1>

            <motion.p
              className="text-xl text-white/90 max-w-3xl"
              variants={itemVariants}
            >
              {chapter.subtitle || chapter.description}
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Content */}
      <Container className="py-16 md:py-20 max-w-4xl">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true,  amount: 0.1  }}
        >
          {chapter.sections.map((section, sectionIndex) => (
            <motion.section
              key={section.id}
              variants={itemVariants}
              className="scroll-mt-20"
              id={section.id}
            >
              {/* Section Title */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {section.heading}
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full" />
              </motion.div>

              {/* Section Content */}
              <motion.div
                className="prose prose-lg max-w-none mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </motion.div>

              {/* Conditional Rendering for All Fields */}
              {section.keyPoints && <RenderKeyPoints points={section.keyPoints} />}
              {section.achievements && <RenderAchievements items={section.achievements} />}
              {section.limitations && <RenderLimitations items={section.limitations} />}
              {section.lessons && (
                typeof section.lessons[0] === 'string' 
                  ? <RenderLessonsSimple items={section.lessons} />
                  : <RenderLessons items={section.lessons} />
              )}              
              {section.vision && <RenderVision vision={section.vision} />}
              {section.milestones && <RenderMilestones items={section.milestones} />}
              {section.congresses && <RenderCongress items={section.congresses} />}
              {section.tasks && <RenderTasks items={section.tasks} />}
              {section.breakthroughs && <RenderBreakthroughs items={section.breakthroughs} />}
              {section.corePoints && <RenderKeyPoints points={section.corePoints} />}
              {section.requirements && <RenderKeyPoints points={section.requirements} />}
              {section.resolutions && <RenderResolutions items={section.resolutions} />}
              {section.subSections && <RenderSubSections sections={section.subSections} />}
              {section.quote && <RenderQuote quote={section.quote} />}
              {section.objectives && <RenderObjectives items={section.objectives} />}
              {section.resolution && <RenderResolution resolution={section.resolution} />}
              {section.congress && <RenderCongressInfo congress={section.congress} />}
              {/* Divider */}
              {sectionIndex < chapter.sections.length - 1 && (
                <motion.div
                  className="my-12 h-1 bg-gradient-to-r from-blue-200 via-teal-200 to-blue-200 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
              )}
            </motion.section>
          ))}
        </motion.div>
      </Container>

      {/* Navigation */}
      <Section className="py-12 bg-slate-50 border-t border-slate-200">
        <Container>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            {prevChapter ? (
              <Link to={`/chapter/${prevChapter.number}`} className="block">
                <Button variant="outline" className="w-full justify-start h-full py-6 hover:bg-slate-100 transition-colors">
                  <ArrowLeft className="w-5 h-5 mr-3 text-blue-600" />
                  <div className="text-left">
                    <span className="block text-sm font-medium text-slate-500">Chương Trước</span>
                    <span className="block text-lg font-semibold text-slate-900">{prevChapter.title}</span>
                  </div>
                </Button>
              </Link>
            ) : (
              <div />
            )}

            {nextChapter ? (
              <Link to={`/chapter/${nextChapter.number}`} className="block">
                <Button variant="primary" className="w-full justify-end h-full py-6 hover:bg-blue-700 transition-colors">
                  <div className="text-right mr-3">
                    <span className="block text-sm font-medium text-white/90">Chương Tiếp Theo</span>
                    <span className="block text-lg font-semibold">{nextChapter.title}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 ml-3 text-white" />
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}