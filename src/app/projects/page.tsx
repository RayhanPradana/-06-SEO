import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import image1 from '../../../public/images/1.jpg';
import image2 from '../../../public/images/2.png';
import image3 from '../../../public/images/3.webp';
import image4 from '../../../public/images/4.webp';
import image5 from '../../../public/images/5.jpg';
import image6 from '../../../public/images/6.webp';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title:"Projek",
    description: "Halaman berisikan beberapa projek saya",
    openGraph: {
        images: "https://example/com/default-image.jpg" ,
        url: "https://exmaple.com"
    },
};

type ProjectsItemProps = {
  name: string;
  url: string;
  urlDisplay: string;
  imageSrc: StaticImageData;
  category: string;
  description: string;
};

function ProjectsItem({ name, url, urlDisplay, imageSrc, category, description }: ProjectsItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl bg-white">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          layout="fill"
        />
        <div className="absolute top-4 right-4 z-20">
          <span className="rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
            {category}
          </span>
        </div>
      </div>
      
      <div className="relative z-20 p-6">
        <h3 className="mb-2 text-2xl font-bold text-zinc-800 group-hover:text-teal-500 transition-colors duration-300">{name}</h3>
        
        <p className="mb-4 text-sm text-zinc-600 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <Link href={url} className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-800 transition-colors">
            <span>{urlDisplay}</span>
            <svg 
              className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
          
          <Link href={url} className="rounded-full bg-zinc-100 p-2 text-zinc-600 hover:bg-teal-500 hover:text-white transition-colors duration-300">
            <svg 
              className="h-5 w-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export default function Projects({ metadata }: any) {
  const featuredProjects = [
    {
      name: "Smart Home IoT Dashboard",
      url: "https://example.com/smart-home",
      urlDisplay: "Lihat Proyek",
      imageSrc: image1,
      category: "IoT",
      description: "Dashboard untuk mengontrol dan memonitor perangkat IoT rumah pintar dengan antarmuka interaktif."
    },
    {
      name: "AI Image Generator",
      url: "https://example.com/ai-image",
      urlDisplay: "Lihat Demo",
      imageSrc: image2,
      category: "AI",
      description: "Aplikasi berbasis AI untuk menghasilkan gambar berdasarkan prompt teks dengan berbagai gaya visual."
    }
  ];

  const webProjects = [
    {
      name: "E-commerce Platform",
      url: "https://example.com/ecommerce",
      urlDisplay: "Lihat Website",
      imageSrc: image3,
      category: "Web",
      description: "Platform e-commerce lengkap dengan sistem pembayaran, pengelolaan inventaris, dan analitik."
    },
    {
      name: "Travel Booking App",
      url: "https://example.com/travel",
      urlDisplay: "Lihat Aplikasi",
      imageSrc: image4,
      category: "Mobile",
      description: "Aplikasi pemesanan perjalanan dengan fitur pencarian, pemesanan, dan ulasan destinasi."
    },
    {
      name: "Fitness Tracker",
      url: "https://example.com/fitness",
      urlDisplay: "Lihat Produk",
      imageSrc: image5,
      category: "Health",
      description: "Aplikasi pelacak kebugaran dengan visualisasi data real-time dan rekomendasi latihan personalisasi."
    },
    {
      name: "Learning Management System",
      url: "https://example.com/lms",
      urlDisplay: "Lihat Platform",
      imageSrc: image6,
      category: "Education",
      description: "Sistem manajemen pembelajaran dengan fitur kursus, tugas, dan analitik kemajuan siswa."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <h1 className="mb-3 text-5xl font-bold text-zinc-800">Portofolio Proyek</h1>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-teal-500"></div>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600">
            Koleksi proyek terbaik yang telah saya rancang dan kembangkan dengan fokus pada pengalaman pengguna dan teknologi inovatif.
          </p>
        </header>

        <section className="mb-20">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-zinc-800">Proyek Unggulan</h2>
            <Link href="/all-projects" className="group flex items-center text-sm font-medium text-teal-600 hover:text-teal-800">
              Lihat Semua
              <svg 
                className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectsItem 
                key={index}
                name={project.name}
                url={project.url}
                urlDisplay={project.urlDisplay}
                imageSrc={project.imageSrc}
                category={project.category}
                description={project.description}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-10 flex items-center">
            <div className="mr-4 h-10 w-1 rounded-full bg-teal-500"></div>
            <h2 className="text-3xl font-bold text-zinc-800">Aplikasi & Website</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {webProjects.map((project, index) => (
              <ProjectsItem 
                key={index}
                name={project.name}
                url={project.url}
                urlDisplay={project.urlDisplay}
                imageSrc={project.imageSrc}
                category={project.category}
                description={project.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}