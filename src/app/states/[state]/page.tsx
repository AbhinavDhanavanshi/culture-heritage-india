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
  //J&K
  'material': {
  name: 'Jammu and Kashmir',
  description: 'Northernmost union territory, known for the Himalayas, Wazwan cuisine and Kashmiri handicrafts.',
  population: '12.5 million (2025 est.)',
  languages: ['Kashmiri', 'Urdu', 'Hindi', 'Dogri', 'English'],
  food: [
    { name: 'Rogan Josh', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rogan_Josh.JPG' },  // :contentReference[oaicite:0]{index=0}
    { name: 'Yakhni',    imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yakhni_from_kashmir.jpg' },  // :contentReference[oaicite:1]{index=1}
    { name: 'Gushtaba',  imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gushtaba.JPG' }  // :contentReference[oaicite:2]{index=2}
  ],
  dances: [
    { name: 'Rouf',      imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rouf_Dance.jpg' },  // :contentReference[oaicite:3]{index=3}
    { name: 'Bhand Pather', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bhand_Pather.jpg' },  // :contentReference[oaicite:4]{index=4}
    { name: 'Dumhal',    imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dhamali_Shah.jpg' }  // :contentReference[oaicite:5]{index=5}
  ],
  famousPlaces: [
    { name: 'Dal Lake', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dal_Lake.jpg' }, // need to pick a Dal Lake image
    { name: 'Gulmarg',  imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gulmarg.jpg' },  // need to pick a Gulmarg image
    { name: 'Vaishno Devi Temple', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Vaishno_Devi_Temple.jpg' } // need a correct link
  ],
  festivals: [
    { name: 'Hemis Festival', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hemis_Monastery_Festival_1.jpg' },  // :contentReference[oaicite:6]{index=6}
    { name: 'Tulip Festival',  imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tulip_Garden_in_Kashmir.jpg' },  // :contentReference[oaicite:7]{index=7}
    { name: 'Baisakhi',        imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Baisakhi_Celebration.jpg' } // need a Baisakhi image
  ],
  traditionalDress: [
    { name: 'Pheran',     imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kashmiri_Pheran.jpg' }, // need link
    { name: 'Kashmiri Cap', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Karakuli_Cap.jpg' } // need link
  ]
},
'Himachal_pradesh': {
  name: 'Himachal Pradesh',
  description: 'Hill state known for apple orchards, temples and snow‑capped mountains.',
  population: '7.5 million (2025 est.)',
  languages: ['Hindi', 'Pahari'],
  food: [
    { name: 'Chana Madra', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chana_Madra.jpg' },
    { name: 'Dham',        imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Himachali_Dham.jpg' },
    { name: 'Babru',       imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Babru.jpg' }
  ],
  dances: [
    { name: 'Nati',       imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nati_dance.jpg' },
    { name: 'Kullu Dance', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kullu_Dance.jpg' }
  ],
  famousPlaces: [
    { name: 'Shimla',      imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shimla_City.jpg' },
    { name: 'Manali',      imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Manali_Himachal_Pradesh.jpg' },
    { name: 'Dharamshala', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dharamshala.jpg' }
  ],
  festivals: [
    { name: 'Kullu Dussehra', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kullu_Dussehra.jpg' },
    { name: 'Lavi Fair',      imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lavi_Fair.jpg' },
    { name: 'Shivratri',      imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shivratri_Celebration.jpg' }
  ],
  traditionalDress: [
    { name: 'Chamba Angrakha', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chamba_Angrakha.jpg' },
    { name: 'Kinnauri Cap',    imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kinnauri_Cap.jpg' }
  ]
}
,'Haryana': {
  name: 'Haryana',
  description: 'Agricultural state surrounding Delhi, known for vigorous folk traditions.',
  population: '28.2 million (2025 est.)',
  languages: ['Hindi', 'Haryanvi'],
  food: [
    { name: 'Bajra Khichdi',    imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bajra_Khichdi.jpg' },
    { name: 'Kadhi Pakora',     imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kadhi_Pakora.jpg' },
    { name: 'Besan Masala Roti',imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Besan_Masala_Roti.jpg' }
  ],
  dances: [
    { name: 'Saang',   imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Saang_performance.jpg' },
    { name: 'Phag',    imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Phag_dance.jpg' }
  ],
  famousPlaces: [
    { name: 'Kurukshetra', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kurukshetra.jpg' },
    { name: 'Sultanpur Bird Sanctuary', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sultanpur_Bird_Sanctuary.jpg' },
    { name: 'Pinjore Gardens', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pinjore_Gardens.jpg' }
  ],
  festivals: [
    { name: 'Bharatpur Festival', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bharatpur_Festival.jpg' },
    { name: 'Surajkund Mela',      imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Surajkund_Mela.jpg' },
    { name: 'Teej',                imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Teej_festival.jpg' }
  ],
  traditionalDress: [
    { name: 'Dhoti Kurta (Men)', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dhoti_Kurta.jpg' },
    { name: 'Ghagra Choli (Women)', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ghagra_Choli.jpg' }
  ]
},
'Punjab': {
  name: 'Punjab',
  description: 'Land of five rivers, known for Bhangra, rich cuisine and Sufi shrines.',
  population: '31.4 million (2025 est.)',
  languages: ['Punjabi', 'Hindi', 'English'],
  food: [
    { name: 'Makki di Roti & Sarson da Saag', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Makki_Roti_Sarson_Saag.jpg' },
    { name: 'Butter Chicken',                imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Butter_Chicken.jpg' },
    { name: 'Amritsari Kulcha',               imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Amritsari_Kulcha.jpg' }
  ],
  dances: [
    { name: 'Bhangra', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bhangra_dance.jpg' },
    { name: 'Giddha',  imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Giddha_dance.jpg' }
  ],
  famousPlaces: [
    { name: 'Golden Temple', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Golden_Temple.jpg' },
    { name: 'Wagah Border',   imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wagah_Border.jpg' },
    { name: 'Jallianwala Bagh', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jallianwala_Bagh.jpg' }
  ],
  festivals: [
    { name: 'Baisakhi', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Baisakhi_Celebration.jpg' },
    { name: 'Lohri',    imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lohri.jpg' },
    { name: 'Hola Mohalla', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hola_Mohalla.jpg' }
  ],
  traditionalDress: [
    { name: 'Kurta Pyjama (Men)',    imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kurta_Pyjama.jpg' },
    { name: 'Punjabi Suit (Women)',  imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Punjabi_Suit.jpg' }
  ]
}
,
'Uttarakhand': {
  name: 'Uttarakhand',
  description: 'Land of the Himalayas, yoga and pilgrimage sites like Haridwar and Rishikesh.',
  population: '11.5 million (2025 est.)',
  languages: ['Hindi', 'Garhwali', 'Kumaoni'],
  food: [
    { name: 'Kafuli',         imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kafuli.jpg' },
    { name: 'Aloo ke Gutke',  imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aloo_ke_Gutke.jpg' },
    { name: 'Mandua ki Roti', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mandua_Roti.jpg' }
  ],
  dances: [
    { name: 'Garhwali', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Garhwali_dance.jpg' },
    { name: 'Thandi Raat', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Thandi_Raat_dance.jpg' }
  ],
  famousPlaces: [
    { name: 'Haridwar', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Haridwar.jpg' },
    { name: 'Rishikesh', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rishikesh.jpg' },
    { name: 'Nainital',  imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nainital.jpg' }
  ],
  festivals: [
    { name: 'Kumbh Mela', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kumbh_Mela.jpg' },
    { name: 'Nanda Devi Festival', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nanda_Devi_Festival.jpg' },
    { name: 'Basant Panchami',       imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Basant_Panchami.jpg' }
  ],
  traditionalDress: [
    { name: 'Pichhaura (Women)', imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pichhaura.jpg' },
    { name: 'Koti (Men)',         imageLink: 'https://commons.wikimedia.org/wiki/Special:FilePath/Koti.jpg' }
  ]
}
,

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
