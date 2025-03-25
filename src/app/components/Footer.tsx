
type FooterLinkProps = {
    text: string;
    url: string;
};

function FooterLink({ text, url }: FooterLinkProps) {
    return <a className="transition hover:text-teal-500" href={url}>{text}</a>
}

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-white pt-10 px-10 pb-16 border-t">
            <div className="flex justify-between gap-6">
                <div className="flex gap-6 text-sm font-medium text-zinc-600">
                    <FooterLink text="Tentang Saya" url="/"/>
                    <FooterLink text="Proyek" url="/projects"/>
                    <FooterLink text="Esai" url="/essays"/>
                </div>
                <p className="text-sm text-zinc-400">© 2025 Rayhan Pradana</p>
            </div>
        </footer>
    )
}