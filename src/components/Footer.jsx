import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Users, BookOpen } from 'lucide-react';
import { Container } from './ui';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const projectInfo = [
    { label: 'Dự Án', value: 'VNR20' },
    { label: 'Nhóm', value: 'Nhóm 3' },
  ];

  // Cập nhật: Thêm MSSV cho từng thành viên
  const members = [
    { name: 'Nam', id: 'SE1' },
    { name: 'Nhật', id: 'SE2' },
    { name: 'Dĩ', id: 'SE3' },
    { name: 'Thy', id: 'SE4' },
    { name: 'Ngọc', id: 'SE5' },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

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
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200 mt-20">
      <Container>
        <motion.div
          className="py-12 md:py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Project Info */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">VNR20</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Dự án học thuật của Nhóm 3 - Trường Đại học FPT
              </p>
              <div className="grid grid-cols-2 gap-4">
                {projectInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <p className="text-sm font-medium text-slate-900">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Members - Hiển thị ngang với MSSV */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <h4 className="font-semibold text-slate-900 mb-4">Thành Viên</h4>
              <div className="flex flex-wrap gap-4">
                {members.map((member, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-sm font-medium text-slate-900">{member.name}</span>
                    <span className="text-xs text-slate-500">{member.id}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="border-t border-slate-200"
            variants={itemVariants}
          />

          {/* Bottom */}
          <motion.div
            className="pt-8 text-center"
            variants={itemVariants}
          >
            <p className="text-sm text-slate-600">
              © {currentYear} Dự án VNR20 - Nhóm 3. Tất cả các quyền được bảo lưu.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  );
}