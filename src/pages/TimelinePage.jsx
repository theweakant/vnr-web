import React, { useState } from 'react';

// Milestones Data
const milestones = [
  { 
    year: 1986, 
    label: 'Khởi đầu Đổi Mới',
    description: 'Đại hội Đảng lần thứ VI đánh dấu bước ngoặt lịch sử với chủ trương đổi mới toàn diện đất nước. Việt Nam bắt đầu chuyển từ nền kinh tế kế hoạch hóa tập trung sang cơ chế thị trường có sự quản lý của Nhà nước.',
    mainImage: 'https://images.hcmcpv.org.vn//Uploads/Image/310120221547376E/anh%2033.jpg',
    gallery: [
        'https://nghiencuulichsu.com/wp-content/uploads/2015/07/1365561502baocap1.jpg?w=640', 
        'https://dukcq.hatinh.gov.vn/uploads/news/2022_11/image-20221122085612-1.jpeg', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR33l6q0MNw5VpV3mA5EWwe2wBWnk4_jE2saQ&s'
    ]
  },
  { 
    year: 1991, 
    label: 'Đại hội VII - Kinh tế thị trường',
    description: 'Đại hội VII chính thức xác định mục tiêu xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa. Đây là bước phát triển quan trọng trong tư duy đổi mới.',
    mainImage: 'https://file3.qdnd.vn/data/images/0/2025/01/28/upload_2318/dai%20hoi%20dai%20bieu%20toan%20quoc%20lan%20thu%204.jpg?dpi=150&mode=crop&anchor=topcenter&quality=100&w=500',
    gallery: [
        'https://img.baobacninhtv.vn/Medias/582/2025/03/25/dh-7-225-9-57-33.jpg?w=800&h=354&quality=100', 
        'https://file.thanhuyhanoi.vn/thanhuy/public/Uploads/TinTucThumbNail/2021/1/20/10008495/18895a45-0e67-4c16-a07b-276a1ee77339.jpg', 
        'https://file3.qdnd.vn/data/images/0/2025/01/30/upload_2105/2.jpg?dpi=150&quality=100&w=870'
    ]
  },
  { 
    year: 2006, 
    label: 'Đại hội X - Công nghiệp hóa',
    description: 'Đẩy mạnh toàn diện công cuộc đổi mới, phát triển nhanh và bền vững, sớm đưa nước ta ra khỏi tình trạng kém phát triển.',
    mainImage: 'https://imgnvsk.vnanet.vn/MediaUpload/Org/2023/08/22/1-cac-dai-bieu-bo-phieu-bau-ban-chap-hanh-trung-uong-dang-khoa-x-anh-the-thuan-ttxvn22-13-36-14.jpg',
    gallery: ['https://media.tapchikinhtetaichinh.vn/w1480/images/upload/vuminh/2017_04_05/26-255_QTIB.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeINp8NdtqDdVIiMLVWw2_4j7sLvEqSv8urw&s', 'https://img.timviec.com.vn/2022/02/Muc-tieu-cong-nghiep-hoa-o-Viet-Nam-1280x720-1.jpg']
  },
  { 
    year: 2011, 
    label: 'Đại hội XI - Phát triển bền vững',
    description: 'Tập trung phát triển toàn diện, bền vững, nâng cao chất lượng tăng trưởng, hiệu quả và sức cạnh tranh của nền kinh tế.',
    mainImage: 'https://cdn.nhandan.vn/images/78d92bfef5333421c1cfa9f19aa2572af2f6454a381555b801846adcfda202212876635d19f63edac4c186e004d51d8aaf76881c07667ace1f85a3f23ba1766c8f532ef89e3f608c4aeda2c9e331f251/cc75d666c3dbbaccb63eb351e23e8e30.jpg',
    gallery: ['https://images2.thanhnien.vn/528068263637045248/2024/4/24/1-1713984765049987706229.jpg', 'https://hdll.vn/FileUpload/Images/a_6.png', 'https://netzero.vn/wp-content/uploads/2023/09/tphcmxanh.jpg']
  },
  { 
    year: 2016, 
    label: 'Đại hội XII - Hội nhập quốc tế',
    description: 'Tiếp tục đổi mới mô hình tăng trưởng, nâng cao chất lượng nguồn nhân lực, chủ động hội nhập quốc tế sâu rộng.',
    mainImage: 'https://laichau.gov.vn/upload/2000066/20200214/7aa0bb34c27ab86b1dfc437268d11817bithuphutrong28116.jpg',
    gallery: ['https://tapchicongsan.org.vn/documents/20182/222645403/logo-tong-thu-ky-thu-tuong-1-1666421462558542600726.jpg/1792b6b7-d95a-4761-bae5-750bf853cbba?t=1669604253601', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfsO-AvRrUMKP1Y5pTNpKkqZaEggeXJONe3xBVxcOGKcSYi2uzTAZFb2wuHzckhBjmps&usqp=CAU', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPWIaRYJ-0joeZ8Bv0CmDVIxidzL9ie3a0g&s']
  },
  { 
    year: 2021, 
    label: 'Đại hội XIII - Chuyển đổi số, khát vọng phát triển',
    description: 'Phát huy ý chí và sức mạnh đại đoàn kết toàn dân tộc kết hợp với sức mạnh thời đại, đẩy mạnh toàn diện, đồng bộ công cuộc đổi mới.',
    mainImage: 'https://tuyenquang.dcs.vn/Image/Large/202151210019_18573.jpg',
    gallery: ['https://dangcongsan.org.vn/upload/2007067/20250419/b796926b1420f6c2d4772e0b06f4195alotrinhcds_1.jpg', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JIrVt5Euf4VJGNZ1wW3E7NeKnh0ch8lIPw&s', 'https://media.vietnamplus.vn/images/782b75656060bb88d3da0b5dc4f78d7c08c14ee9829a32ef14e9d69616120f156b273c498e5697c32632d57777350b0c/info-chuyen-doi-so2.jpg']
  },
  { 
    year: 2030, 
    label: 'Mục tiêu kỷ niệm 100 năm Đảng',
    description: 'Phấn đấu đến năm 2030, nhân kỷ niệm 100 năm thành lập Đảng, nước ta là nước đang phát triển có công nghiệp theo hướng hiện đại.',
    mainImage: 'https://cdn.tapchitoaan.vn//media/2025/files/%E1%BA%A2nh%20c%E1%BB%A7a%20Th%E1%BA%AFng/Kh%E1%BA%A3i%20Hoan/%E1%BA%A2nh%20qu%E1%BB%91c%20khanh%2022.jpg',
    gallery: ['https://www.tapchicongsan.org.vn/documents/20182/276320222/hai-phong-130423.jpg/5f02b801-39ec-4581-99bc-b03bb0b30b80?t=1685255751728', 'https://media.tapchixaydung.vn/mediav2/upload/userfiles2021/images/admin/%E1%BA%A2nh/6congnghiep-hoa.jpg', 'https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3ef6895917c38fa4fe2dcef4faae6e2f1e12cbdd723e3822b8f864322814f93f6851a9ba07354d325983563911658f47240/1a-5799-805.jpg']
  },
  { 
    year: 2045, 
    label: 'Tầm nhìn 100 năm nước - Nước phát triển',
    description: 'Tầm nhìn đến năm 2045, nhân kỷ niệm 100 năm thành lập nước, nước ta trở thành nước phát triển, thu nhập cao.',
    mainImage: 'https://media.vneconomy.vn/images/upload/2021/04/20/cover-1602533123623724186513-crop-16025335842181781155.jpg',
    gallery: ['https://cdn.thuvienphapluat.vn/uploads/tintuc/2025/09/03/viet-nam.jpg', 'https://tttctt.1cdn.vn/thumbs/720x480/2025/01/14/kinh-te-the-gioi.jpg', 'https://cdnphoto.dantri.com.vn/CDGJ0KN3gsmJAsJ8hQ7WPkBeo3g=/thumb_w/1020/2023/11/30/z4928998513536d0e9ab22cc919794ba110977fc69635e-1701318471537.jpg']
  }
];

// Timeline Component
function TimelineTab({ milestones = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const selectedMilestone = milestones[selectedIndex] || milestones[0];

  return (
    <div className="w-full px-4">
      {/* Timeline Navigation */}
      <div className="flex items-center justify-center mb-16 overflow-x-auto pb-4">
        <div className="flex items-center gap-3 min-w-max">
          {milestones.map((m, i) => (
            <React.Fragment key={m.year}>
              <button 
                onClick={() => setSelectedIndex(i)}
                className={`w-14 h-14 rounded-full text-sm font-semibold transition-all flex items-center justify-center ${
                  i === selectedIndex
                    ? 'bg-white text-amber-700 ring-2 ring-amber-600 shadow-lg' 
                    : 'bg-transparent text-amber-600 hover:bg-amber-50 border-2 border-amber-600'
                }`}
              >
                {m.year}
              </button>
              {i < milestones.length - 1 && (
                <div className="w-8 h-0.5 bg-amber-700"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Timeline Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Side - Main Image */}
        <div className="w-full">
          <div className="bg-slate-100 rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
            {selectedMilestone.mainImage ? (
              <img 
                src={selectedMilestone.mainImage} 
                alt={`${selectedMilestone.year} - ${selectedMilestone.label}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏛️</div>
                  <p className="text-sm">Hình ảnh chính</p>
                  <p className="text-xs text-slate-500 mt-2">Thêm hình ảnh lịch sử tại đây</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Year, Description and Gallery */}
        <div className="space-y-6">
          {/* Year Header */}
          <div>
            <h2 className="text-6xl font-bold text-amber-500 mb-4">
              {selectedMilestone.year}
            </h2>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              {selectedMilestone.label}
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {selectedMilestone.description}
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-3 gap-4">
            {selectedMilestone.gallery?.map((img, idx) => (
              <div key={idx} className="bg-slate-100 rounded-lg overflow-hidden shadow-lg aspect-[3/4]">
                {img ? (
                  <img 
                    src={img} 
                    alt={`Gallery image ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    <div className="text-center p-4">
                      <div className="text-3xl mb-2">🖼️</div>
                      <p className="text-xs">Hình {idx + 1}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Timeline Page Component
export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto mb-7">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Giai đoạn</h1>
          <p className="text-slate-600 text-lg">Các mốc thời gian của công cuộc đổi mới</p>
        </div>
        <TimelineTab milestones={milestones} />
      </div>
    </div>
  );
}