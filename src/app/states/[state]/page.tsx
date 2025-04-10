"use client";

import { notFound, useParams } from 'next/navigation';
import React from 'react';

// const stateData: Record<string, { name: string; description: string }> = {
//   'West_Bengal': {
//     name: 'West Bengal',
//     description: 'Rich in literary and artistic heritage, known for Rabindra Sangeet, Durga Puja, and terracotta temples.',
//   },
//   'Kerla': {
//     name: 'Kerala',
//     description: 'Known for Kathakali, backwaters, Ayurveda, and vibrant classical music and dance traditions.',
//   },
//   'Rajasthan': {
//     name: 'Rajasthan',
//     description: 'Famous for folk music, Ghoomar dance, majestic forts, and colorful festivals.',
//   },
// };
const stateData: Record<string, {
  name: string;
  description: string;
  population: string;
  languages: string[];
  food: { name: string; imageLink: string }[];
  dances: { name: string; imageLink: string }[];
  famousPlaces: { name: string; imageLink: string }[];
  festivals: { name: string; imageLink: string }[];
  traditionalDress: { name: string; imageLink: string }[];
}> = {
  'Rajasthan': {
    name: 'Rajasthan',
    description:
      'Land of kings and deserts, known for majestic forts, palaces, vibrant folk arts, and colorful festivals.',
    population: '82 million (2025 est.)',
    languages: ['Hindi', 'Rajasthani', 'English'],
    food: [
      { name: 'Dal Baati Churma', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dal_Baati_Churma.jpg' },
      { name: 'Gatte ki Sabzi', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gatte_ki_sabzi.jpg' },
      { name: 'Laal Maas', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Laal_maas.jpg' },
    ],
    dances: [
      { name: 'Ghoomar', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ghoomar_dance.jpg' },
      { name: 'Kalbeliya', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kalbeliya_dance.jpg' },
      { name: 'Bhavai', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bhavai_dance.jpg' },
    ],
    famousPlaces: [
      { name: 'Amer Fort', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Amer_Fort.jpg' },
      { name: 'City Palace, Jaipur', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/City_Palace_Jaipur.jpg' },
      { name: 'Thar Desert', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Thar_Desert.jpg' },
    ],
    festivals: [
      { name: 'Pushkar Camel Fair', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pushkar_Camel_Fair.jpg' },
      { name: 'Teej', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Teej_festival.jpg' },
      { name: 'Desert Festival (Jaisalmer)', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Desert_Festival_Jaisalmer.jpg' },
    ],
    traditionalDress: [
      { name: 'Angrakha & Dhoti (Men)', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Angrakha_and_dhoti.jpg' },
      { name: 'Ghagra Choli (Women)', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rajasthani_ghagra_choli.jpg' },
    ],
  },

  'material_7': {
    name: 'Uttar Pradesh',
    description:
      'Most populous state, cradle of Hinduism, home to the Ganges, with rich heritage in music, dance, and festivals.',
    population: '240 million (2025 est.)',
    languages: ['Hindi', 'Urdu', 'English'],
    food: [
      { name: 'Chole Bhature', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chole_Bhature.jpg' },
      { name: 'Petha', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Petha.jpg' },
      { name: 'Tehri', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tehri.jpg' },
    ],
    dances: [
      { name: 'Kathak', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kathak_dance.jpg' },
      { name: 'Raslila', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Raslila.jpg' },
    ],
    famousPlaces: [
      { name: 'Taj Mahal', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taj_Mahal.jpg' },
      { name: 'Varanasi Ghats', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Varanasi_Ghats.jpg' },
      { name: 'Agra Fort', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Agra_Fort.jpg' },
    ],
    festivals: [
      { name: 'Kumbh Mela', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kumbh_Mela.jpg' },
      { name: 'Diwali', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Diwali_lamps.jpg' },
      { name: 'Holi', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Holi_celebration.jpg' },
    ],
    traditionalDress: [
      { name: 'Kurta Pyjama (Men)', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kurta_Pyjama.jpg' },
      { name: 'Saree (Women)', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Saree.jpg' },
    ],
  },

  'material_11': {
    name: 'Madhya Pradesh',
    description:
      'Heart of India, known for ancient temples, UNESCO heritage sites, wildlife sanctuaries, and tribal culture.',
    population: '85 million (2025 est.)',
    languages: ['Hindi', 'English'],
    food: [
      { name: 'Poha', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Poha.jpg' },
      { name: 'Bhutte ka Kees', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bhutte_ka_Kees.jpg' },
      { name: 'Dal Bafla', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dal_Bafla.jpg' },
    ],
    dances: [
      { name: 'Rai Dance', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rai_dance.jpg' },
      { name: 'Gaur Dance', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gaur_dance.jpg' },
      { name: 'Panthi Dance', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Panthi_dance.jpg' },
    ],
    famousPlaces: [
      { name: 'Khajuraho Temples', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Khajuraho_Temples.jpg' },
      { name: 'Kanha National Park', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kanha_National_Park.jpg' },
      { name: 'Sanchi Stupa', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sanchi_Stupa.jpg' },
    ],
    festivals: [
      { name: 'Khajuraho Dance Festival', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Khajuraho_Dance_Festival.jpg' },
      { name: 'Diwali', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Diwali_lamps.jpg' },
      { name: 'Tansen Music Festival', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tansen_Music_Festival.jpg' },
    ],
    traditionalDress: [
      { name: 'Dhoti Kurta (Men)', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dhoti_Kurta.jpg' },
      { name: 'Saree (Women)', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Saree.jpg' },
    ],
  },

  'Maharashtra': {
    name: 'Maharashtra',
    description:
      'Economic powerhouse with Bollywood, historic caves, coastal beaches, and vibrant festivals.',
    population: '124 million (2025 est.)',
    languages: ['Marathi', 'Hindi', 'English'],
    food: [
      { name: 'Vada Pav', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Vada_Pav.jpg' },
      { name: 'Misal Pav', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Misal_Pav.jpg' },
      { name: 'Puran Poli', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Puran_Poli.jpg' },
    ],
    dances: [
      { name: 'Lavani', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lavani_dance.jpg' },
      { name: 'Tamasha', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tamasha.jpg' },
      { name: 'Koli Dance', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Koli_dance.jpg' },
    ],
    famousPlaces: [
      { name: 'Gateway of India', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gateway_of_India.jpg' },
      { name: 'Ajanta Caves', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ajanta_Caves.jpg' },
      { name: 'Shaniwar Wada', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shaniwar_Wada.jpg' },
    ],
    festivals: [
      { name: 'Ganesh Chaturthi', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ganesh_Chaturthi.jpg' },
      { name: 'Gudi Padwa', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gudi_Padwa.jpg' },
      { name: 'Nag Panchami', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nag_Panchami.jpg' },
    ],
    traditionalDress: [
      { name: 'Kurta Pyjama (Men)', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kurta_Pyjama.jpg' },
      { name: 'Nauvari Saree (Women)', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nauvari_Saree.jpg' },
    ],
  },
  "Kerla": {
    name: 'Kerala',
    description: "Known as God's Own Country…",
    population: '36 million (2025 est.)',
    languages: ['Malayalam', 'English'],
    food: [
      {
        name: 'Puttu and Kadala Curry',
        imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Puttu_with_Kadala.JPG'
      },
      {
        name: 'Appam with Stew',
        imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Appam_and_stew.jpg'
      },
      {
        name: 'Sadya',
        imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kerala_Sadya_Feast.jpg'
      }
    ],
    dances: [
      {
        name: 'Kathakali',
        imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kathakali_Krishna.jpg'
      },
      {
        name: 'Mohiniyattam',
        imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mohiniyattam5.JPG'
      },
      {
        name: 'Theyyam',
        imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Theyyam_northern_kerala.jpg'
      }
    ],
    famousPlaces: [
      {
        name: 'Alleppey Backwaters',
        imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Alleppey_Backwaters.jpg'
      },
      {
        name: 'Munnar Hills',
        imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Munnar_Hills.jpg'
      },
      {
        name: 'Padmanabhaswamy Temple',
        imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Padmanabhaswamy_Temple.jpg'
      }
    ],
    festivals: [
      {
        name: 'Onam',
        imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kerala_Onam_Sadya.jpg'
      },
      {
        name: 'Thrissur Pooram',
        imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Thrissur_Pooram_Festival.jpg'
      },
      {
        name: 'Pulikali',
        imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pulikali_Performance.jpg'
      }
    ],
    traditionalDress: [
      {
        name: 'Mundu (Men)',
        imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mundu_Traditional_Dress.jpg'
      },
      {
        name: 'Kasavu Saree (Women)',
        imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kasavu_Saree.jpg'
      }
    ]
  }
};


export default function StatePage() {
  const params = useParams<{ state: string }>();
  const state = stateData[params.state];
  console.log(params.state, state);
  if (!state) return notFound();
  return (
    <div className="max-w-5xl mx-auto mt-8 text-center">
      {/* State Name and Description */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-sky-400 mb-4">{state.name}</h1>
        <p className="text-lg text-gray-300">{state.description}</p>
      </div>

      {/* Population and Languages */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-sky-300 mb-4">General Information</h2>
        <p className="text-lg text-gray-300"><strong>Population:</strong> {state.population}</p>
        <p className="text-lg text-gray-300"><strong>Languages:</strong> {state.languages.join(', ')}</p>
      </div>

      {/* Dynamic Section Rendering */}
      {[
        { title: 'Famous Foods', data: state.food },
        { title: 'Traditional Dances', data: state.dances },
        { title: 'Famous Places', data: state.famousPlaces },
        { title: 'Famous Festivals', data: state.festivals },
        { title: 'Traditional Dresses', data: state.traditionalDress },
      ].map((section) => (
        <div key={section.title} className="mb-8">
          <h2 className="text-3xl font-semibold text-sky-300 mb-4">{section.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {section.data.map((item) => (
              <div key={item.name} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <img
                  src={item.imageLink}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-sky-400">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
  // return (
  //   <div className="max-w-3xl mx-auto mt-8 text-center">
  //     <h1 className="text-4xl font-bold text-sky-400 mb-4">{state.name}</h1>
  //     <p className="text-lg text-gray-300">{state.description}</p>
  //   </div>
  // );
}
