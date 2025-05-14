
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Leaf, Mail, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-emerald-50 text-gray-800">
      <header className="p-6 flex justify-between items-center shadow-md bg-white">
        <div className="text-2xl font-bold text-green-700">bioConcept</div>
        <div className="flex gap-4 text-sm">
          <Button variant="ghost">BOS</Button>
          <Button variant="ghost">ITA</Button>
          <Button variant="ghost">ENG</Button>
        </div>
      </header>

      <section className="text-center py-20 bg-[url('/forest.jpg')] bg-cover bg-center text-white shadow-inner">
        <h1 className="text-5xl font-bold drop-shadow-xl">Energija prirode. Pouzdanost budućnosti.</h1>
        <p className="mt-4 text-lg">Pelet najviše klase – ENplus A1 / A2</p>
        <Button className="mt-6 bg-green-700 hover:bg-green-800">Kontaktirajte nas</Button>
      </section>

      <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">O nama</h2>
            <p>Proizvodimo i dostavljamo premium drveni pelet uz poštivanje ENplus standarda. Smješteni smo u Novom Gradu, BiH.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Proizvodi</h2>
            <ul className="list-disc list-inside">
              <li>Pelet ENplus A1 – 15kg vreće</li>
              <li>Pelet ENplus A2 – big bag i rasuto</li>
              <li>Mogućnost dostave</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
            <p className="flex items-center gap-2"><Phone size={16} /> +387 66 44 33 22</p>
            <p className="flex items-center gap-2"><Mail size={16} /> info@bioconcept.ba</p>
          </CardContent>
        </Card>
      </section>

      <footer className="bg-white py-6 text-center text-sm border-t">
        <p>&copy; 2025 bioConcept d.o.o. | Poljavnice bb, Novi Grad</p>
      </footer>
    </div>
  );
}
