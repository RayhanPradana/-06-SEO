import Image, {StaticImageData} from "next/image";
import image1 from '../../../public/images/5.jpg';
import image2 from '../../../public/images/1.jpg';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title:"Struktur SEO",
    description: "Halaman mengandung SEO",
    openGraph: {
        images: "https://example/com/default-image.jpg" ,
        url: "https://exmaple.com"
    },
};

type SeoItemProps = {
    name: string;
    url: string;
    urlDisplay: string;
    imageSrc: StaticImageData;
};

function SeoItem( {name, url, urlDisplay, imageSrc }: SeoItemProps) {
    return (
        <li>
            <a href={url}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <Image className="w-full" src={imageSrc} alt={name} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{name}</div>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {urlDisplay}
                        </span>
                    </div>
                </div>
            </a>
        </li>
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export default function Seo({ metadata }: any) {
    return (
        <div className="mt-16 px-8">
            <header>
                <h1 className="font-bold text-4xl text-zinc-800">SEO</h1>
                <p className="text-base mt-6 text-zinc-600">Model SEO</p>
            </header>
            <div className="mt-16">
                <h2 className="text-2xl">Aplikasi</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
                    <SeoItem name="Aplikasi 1" url="https://example.com" urlDisplay="Readmore ->" imageSrc={image1}></SeoItem>
                    <SeoItem name="Aplikasi 2" url="https://example.com" urlDisplay="Readmore ->" imageSrc={image2}></SeoItem>
                </ul>
            </div>
        </div>
    );
}