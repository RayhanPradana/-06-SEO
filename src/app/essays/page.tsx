import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title:"Essai",
    description: "Berita terbaru seputar teknologi, desain, dan pengembangan digital",
    openGraph: {
        images: "https://example/com/default-image.jpg" ,
        url: "https://exmaple.com"
    },
};

type ArticleItemProps = {
  title: string;
  url: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
  readTime: string;
};

function ArticleItem({ 
  title, 
  url, 
  description, 
  imageUrl, 
  category, 
  date, 
  readTime 
}: ArticleItemProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-teal-500 text-white text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-zinc-500 mb-3">
          <div className="flex items-center mr-4">
            <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            <span>{readTime}</span>
          </div>
        </div>
        
        <h2 className="font-bold text-xl mb-2 text-zinc-800 group-hover:text-teal-600 transition-colors duration-200">
          {title}
        </h2>
        
        <p className="text-zinc-600 text-sm mb-4 flex-grow">
          {description}
        </p>
        
        <Link href={url} passHref className="mt-auto inline-flex items-center font-semibold text-teal-600 hover:text-teal-800 transition-colors cursor-pointer">
          Baca Selengkapnya
          <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export default function Artikel({ metadata }: any) {
  const articles = [
    {
      title: "Mengenal UI/UX Design",
      url: "https://example.com/uiux-design",
      description: "Panduan komprehensif memahami prinsip dasar desain UI/UX untuk pemula. Pelajari bagaimana menciptakan pengalaman pengguna yang efektif dan menarik.",
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Design",
      date: "12 Mar 2025",
      readTime: "5 menit baca"
    },
    {
      title: "Blockchain dalam Dunia Finansial",
      url: "https://example.com/blockchain-finance",
      description: "Analisis mendalam tentang teknologi blockchain dan dampak transformatifnya terhadap sektor keuangan global saat ini.",
      imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Finansial",
      date: "8 Mar 2025",
      readTime: "6 menit baca"
    },
    {
      title: "Internet of Things (IoT) dan Smart Home",
      url: "https://example.com/iot-smarthome",
      description: "Bagaimana teknologi IoT telah merevolusi konsep rumah pintar dan mengubah cara kita berinteraksi dengan lingkungan tempat tinggal.",
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "IoT",
      date: "5 Mar 2025",
      readTime: "8 menit baca"
    },
    {
      title: "Keamanan Siber di Era Digital",
      url: "https://example.com/cybersecurity",
      description: "Panduan praktis tentang langkah-langkah penting untuk melindungi data pribadi dan privasi Anda di era digital yang semakin terkoneksi.",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Keamanan",
      date: "1 Mar 2025",
      readTime: "6 menit baca"
    },
    {
      title: "Machine Learning untuk Bisnis",
      url: "https://example.com/ml-business",
      description: "Implementasi machine learning dalam strategi bisnis modern dan bagaimana teknologi ini dapat mendorong pengambilan keputusan yang lebih baik.",
      imageUrl: "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Bisnis",
      date: "28 Feb 2025",
      readTime: "7 menit baca"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-zinc-800 mb-3">Artikel Terbaru</h1>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Temukan wawasan dan pemikiran terbaru seputar teknologi, desain, dan pengembangan digital
          </p>
        </header>

        {/* Featured Article - Larger and more prominent */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="lg:flex">
              <div className="lg:w-2/3 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Web 3.0: Masa Depan Internet"
                  className="w-full h-full object-cover object-center lg:h-96"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-teal-500 text-white font-semibold rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="lg:w-1/3 p-8 lg:p-10 flex flex-col justify-center">
                <div className="text-teal-600 font-medium mb-2">Teknologi</div>
                <h2 className="text-3xl font-bold mb-4 text-zinc-800">Web 3.0: Masa Depan Internet yang Terdesentralisasi</h2>
                <p className="text-zinc-600 mb-6">
                  Menjelajahi konsep revolusioner Web 3.0 dan bagaimana internet terdesentralisasi dapat mengubah cara kita terhubung, berinteraksi, dan bertransaksi secara online.
                </p>
                <div className="flex items-center text-zinc-500 text-sm mb-6">
                  <div className="flex items-center mr-6">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>14 Mar 2025</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    <span>10 menit baca</span>
                  </div>
                </div>
                <Link href="https://example.com/web3-future" className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors inline-flex items-center">
                  Baca Artikel
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleItem
              key={index}
              title={article.title}
              url={article.url}
              description={article.description}
              imageUrl={article.imageUrl}
              category={article.category}
              date={article.date}
              readTime={article.readTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
}