import fs from "fs";
import path from "path";
import { Instrument_Serif } from "next/font/google";
import { IconCertificate } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

function getCertificateImages(): string[] {
  const certificatesDir = path.join(process.cwd(), "public", "pics", "certificates");
  try {
    const files = fs.readdirSync(certificatesDir, { withFileTypes: true });
    return files
      .filter((f) => f.isFile())
      .map((f) => f.name)
      .filter((name) => /\.(png|jpg|jpeg|webp|gif|svg)$/i.test(name))
      .sort();
  } catch {
    return [];
  }
}

export default function CertificatesPage() {
  const images = getCertificateImages();

  return (
    <div className="relative min-h-full w-full bg-white font-sans text-black antialiased">
      <section className="relative mr-auto ml-auto max-w-7xl pt-16 pr-4 pb-16 pl-4 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex items-center gap-3 rounded-full bg-red-50 px-6 py-3">
              <IconCertificate className="h-6 w-6 text-red-500" />
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">Certificates</span>
            </div>
          </div>
          <h1 className="text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            <span className={cn("text-6xl font-normal tracking-tight text-black", serif.className)}>
              Professional Certificates
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {images.length === 0 && (
            <p className="text-center text-neutral-600">No certificates found.</p>
          )}
          {images.map((filename) => (
            <div
              key={filename}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={`/pics/certificates/${filename}`}
                  alt={filename}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}






