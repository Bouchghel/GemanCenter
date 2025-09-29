import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 mt-24">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* LEFT */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <div className="text-2xl font-bold tracking-wide cursor-pointer hover:text-black transition">
                German Center
              </div>
            </Link>
            <p>95 Bd Mohamed 5 Casablanca</p>
            <span className="font-medium">alalmaniazentrum@gmail.com</span>
            <span className="font-medium">+212 642-752740</span>
            <div className="flex gap-4 mt-2">
              <Link href="#"><Image src="/facebook.png" alt="Facebook" width={24} height={24} className="hover:opacity-70 transition"/></Link>
              <Link href="#"><Image src="/instagram.png" alt="Instagram" width={24} height={24} className="hover:opacity-70 transition"/></Link>
              <Link href="#"><Image src="/youtube.png" alt="YouTube" width={24} height={24} className="hover:opacity-70 transition"/></Link>
              <Link href="#"><Image src="/x.png" alt="X" width={24} height={24} className="hover:opacity-70 transition"/></Link>
            </div>
          </div>

          {/* CENTER */}
          <div className="hidden md:flex justify-around">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg">LIENS</h3>
              <Link href="/courses" className="hover:text-black transition">Cours</Link>
              <Link href="/inscription" className="hover:text-black transition">Inscription</Link>
              <Link href="/contact" className="hover:text-black transition">Contact</Link>
              <Link href="/about" className="hover:text-black transition">À propos</Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">NEWSLETTER</h3>
            <p>Recevez nos dernières nouvelles et offres spéciales !</p>
            <div className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="bg-black text-white px-4 rounded-md hover:bg-gray-800 transition">
                S’inscrire
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>© 2025 German Center. Tous droits réservés.</div>
          <div className="flex gap-6">
            <div>
              <span className="text-gray-400 mr-2">Langue:</span>
              <span className="font-medium">Français</span>
            </div>
            <div>
              <span className="text-gray-400 mr-2">Devise:</span>
              <span className="font-medium">MAD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
