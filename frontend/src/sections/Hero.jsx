import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <span className="inline-block mb-6 px-4 py-1 text-sm rounded-full bg-red-100 text-red-600">
          Détection d’anomalies par Machine Learning
        </span>

        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Anticipez le risque de vos OPCVM <br />
          avec{" "}
          <span className="text-red-600">
            l’Intelligence Artificielle
          </span>
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
          FundWatch AI analyse les performances de vos fonds,
          détecte les anomalies et projette le risque à 30 jours ,comme elle met à votre dispostion un système de recommendation.
        </p>

        <div className="flex justify-center gap-4">

          {/* 🔴 BOUTON DASHBOARD (corrigé) */}
          <button
  onClick={() => window.location.href = "https://opcvm-streamlit-gre7.onrender.com"}
  className="bg-black text-white px-6 py-3 rounded-lg"
>
  Explorer le Dashboard →
</button>


          <button
            className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            En savoir plus
          </button>

        </div>

      </div>
    </section>
  );
}
