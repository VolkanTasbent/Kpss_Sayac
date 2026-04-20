import type { Metadata } from "next";
import Link from "next/link";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "İletişim",
  description: "KPSS Sayaç için iletişim kanalları, geri bildirim ve KVKK başvuru bilgileri.",
};

const contact = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export default function ContactPage() {
  return (
    <PolicyPage title="İletişim" lastUpdated="20 Nisan 2026">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Bize ulaşın</h2>
        <p>
          Görüş, öneri, düzeltme talebi veya yasal başvurularınız için aşağıdaki e-posta adresini kullanabilirsiniz.
        </p>
        {contact ? (
          <p>
            E-posta:{" "}
            <a className="text-cyan-300 underline-offset-4 hover:underline" href={`mailto:${contact}`}>
              {contact}
            </a>
          </p>
        ) : (
          <p className="rounded-xl border border-amber-400/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100/90">
            İletişim e-postası yakında eklenecektir.
          </p>
        )}
      </section>

      <p className="pt-4 text-sm text-white/55">
        İlgili:{" "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/hakkimizda">
          Hakkımızda
        </Link>
        {" · "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/kullanim-kosullari">
          Kullanım koşulları
        </Link>
      </p>
    </PolicyPage>
  );
}
