"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  // Fonction qui ferme le menu quand on clique sur un lien
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div>
      <Image
        src="/menu.png"
        alt="menu"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/" onClick={handleLinkClick}>
            Page d&apos;accueil
          </Link>
          <Link href="/inscription" onClick={handleLinkClick}>
            S&apos;inscrire
          </Link>
          <Link href="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
