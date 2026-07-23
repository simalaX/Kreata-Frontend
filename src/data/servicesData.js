import {
  FaShieldAlt,
  FaPalette,
  FaCode,
} from 'react-icons/fa';

const servicesData = [
  {
    category: 'Cyber Services',
    icon: FaShieldAlt,
    description: 'Internet, computer, and IT support services',
    items: [
      // Internet & Computer Services
      'Email access',
      'Online research',
      'File downloads/uploads',
      'Email creation',
      'Online account setup',
      'Social media account creation',
      // Mobile & Technical Services
      'Software installation',
      'Phone flashing',
      'Phone unlocking',
      'Computer formatting',
      'Virus removal',
      'Data recovery',
      'Computer troubleshooting',
      // Digital & Online Services
      'PDF conversion (Word ↔ PDF)',
      'Online form filling',
      'Visa application assistance',
      'Scholarship applications',
      'Job applications',
    ]
  },
  {
    category: 'Design and Photography',
    icon: FaPalette,
    description: 'Creative design, graphics, and photography services',
    items: [
      // Graphic Design & Marketing
      'Logo design',
      'Posters',
      'Flyers',
      'Banners',
      'Business cards',
      'Wedding cards',
      'Funeral programmes',
      'Certificates',
      'Calendars',
      'Social media posters',
      // Photography Services
      'Passport-size photography',
      'Passport photo printing',
      'ID photo capture',
      // Branding (from Business Services)
      'Company profile design',
      'Branding materials',
    ]
  },
  {
    category: 'Technical Services',
    icon: FaCode,
    description: 'Document services, printing, government, education & business assistance',
    items: [
      // Document Services
      'Printing (black & white and color)',
      'Photocopying',
      'Scanning',
      'Lamination',
      'Binding',
      'Typesetting',
      'Document editing and formatting',
      'CV and cover letter writing',
      // Business Services
      'Business name registration',
      'Company registration',
      'Business permit applications',
      'Invoice and receipt printing',
      // Government Services
      'eCitizen applications',
      'KRA PIN registration',
      'KRA tax returns (iTax)',
      'NTSA services (driving licence renewal, smart DL)',
      'Passport applications',
      'Good Conduct applications',
      'SHA/medical insurance registration',
      'NSSF services',
      'Birth certificate applications',
      'Huduma-related online services',
      // Education Services
      'HELB applications',
      'KUCCPS applications',
      'University and college admissions',
      'School portal access',
      'Assignment typing',
      'Exam registration',
      'Certificate printing',
      // Other Services
      'Document translation',
      'Secretarial services',
      'Bulk printing',
      'Exam and project printing',
      'File storage on flash drives or cloud',
      'Stationery sales (pens, papers, envelopes, files, etc.)',
    ]
  }
];

export default servicesData;