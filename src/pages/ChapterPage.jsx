import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Container, Section, Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import contentData from '../data/content';

export default function ChapterPage() {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const chapter = contentData.chapters.find(c => c.number === chapterId);

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Chương không tìm thấy</h1>
          <Link to="/">
            <Button>Quay lại Trang chủ</Button>
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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <Section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-b-3xl">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
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
                Chương {chapter.number}
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              variants={itemVariants}
            >
              {chapter.title}
            </motion.h1>

            <motion.p
              className="text-xl text-white/90"
              variants={itemVariants}
            >
              {chapter.description}
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
          viewport={{ once: true }}
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
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  {section.content}
                </p>
              </motion.div>

              {/* Key Points / Tasks Cards */}
              {section.keyPoints && (
                <motion.div
                  className="mb-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Những Điểm Chính</h3>
                  <div className="grid gap-4">
                    {section.keyPoints.map((point, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="flex gap-4 p-4 rounded-lg bg-blue-50 border border-blue-200 hover:border-blue-400 transition-colors"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm">
                          {idx + 1}
                        </div>
                        <p className="text-slate-700 leading-relaxed">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {section.highlights && (
                <motion.div
                  className="mb-8 p-6 rounded-lg bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-200"
                  variants={itemVariants}
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Thông Tin Nổi Bật</h3>
                  <ul className="space-y-3">
                    {section.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-teal-600 font-bold">•</span>
                        <span className="text-slate-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {section.tasks && (
                <motion.div
                  className="mb-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Sáu Nhiệm Vụ Trọng Tâm</h3>
                  <div className="space-y-4">
                    {section.tasks.map((task, idx) => (
                      <motion.div
                        key={task.number}
                        variants={itemVariants}
                        className="group"
                      >
                        <Card className="hover:shadow-xl transition-all cursor-pointer">
                          <CardHeader>
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                                {task.number}
                              </div>
                              <CardTitle className="text-xl text-slate-900">
                                {task.title}
                              </CardTitle>
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
              )}

              {section.corePoints && (
                <motion.div
                  className="mb-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Quan Điểm Chỉ Đạo Cốt Lõi</h3>
                  <div className="space-y-4">
                    {section.corePoints.map((point, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="p-4 rounded-lg border-l-4 border-blue-600 bg-blue-50"
                      >
                        <p className="text-slate-700 leading-relaxed">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {section.keyPolicies && (
                <motion.div
                  className="mb-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Các Chủ Trương Lớn</h3>
                  <div className="space-y-4">
                    {section.keyPolicies.map((policy, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="p-5 rounded-lg bg-white border-2 border-slate-200 hover:border-blue-400 transition-colors"
                      >
                        <p className="text-slate-700 leading-relaxed italic">"{policy}"</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {section.breakthroughs && (
                <motion.div
                  className="mb-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Ba Đột Phá Chiến Lược</h3>
                  <div className="space-y-4">
                    {section.breakthroughs.map((breakthrough, idx) => (
                      <motion.div
                        key={breakthrough.number}
                        variants={itemVariants}
                        className="p-6 rounded-lg bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-200"
                      >
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                            {breakthrough.number}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">
                              {breakthrough.title}
                            </h4>
                            <p className="text-slate-700 leading-relaxed">
                              {breakthrough.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {section.requirements && (
                <motion.div
                  className="mb-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Yêu Cầu</h3>
                  <ul className="space-y-3">
                    {section.requirements.map((req, idx) => (
                      <motion.li
                        key={idx}
                        variants={itemVariants}
                        className="flex gap-3 p-3 rounded-lg bg-teal-50 border border-teal-200"
                      >
                        <span className="text-teal-600 font-bold flex-shrink-0">✓</span>
                        <span className="text-slate-700">{req}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

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
              <Link to={`/chapter/${prevChapter.number}`}>
                <Button variant="outline" className="w-full justify-start">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Chương Trước: {prevChapter.title}
                </Button>
              </Link>
            ) : (
              <div />
            )}

            {nextChapter ? (
              <Link to={`/chapter/${nextChapter.number}`} className="ml-auto w-full md:w-auto">
                <Button variant="primary" className="w-full justify-end">
                  Chương Sau: {nextChapter.title}
                  <ArrowRight className="w-4 h-4 ml-2" />
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
