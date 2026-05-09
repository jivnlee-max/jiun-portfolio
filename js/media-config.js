/* =============================================================
   MEDIA CONFIG — 여기서 모든 프로젝트와 미디어를 수정하세요
   ✏️ 표시된 곳이 직접 수정하는 부분입니다
   ============================================================= */

const PROJECTS = [

  /* ── 프로젝트 0 ────────────────────────────────────────────
     ✏️ title, category, year, role, description 수정
     ✏️ hero: 메인 미디어 (이미지 or 영상 or 유튜브)
     ✏️ thumb: 홈/목록 그리드용 썸네일
     ✏️ gallery: 세부페이지 갤러리 이미지들
  ──────────────────────────────────────────────────────────── */

  {
    title: "Still Life for VARCO Art Fashion",
    category: "AI Visual",
    year: "2025",
    role: "AI Art Direction",
    description: "AI-generated still life series created using VARCO Art Fashion. Full creative ownership across concept, prompt engineering, visual direction, and image selection.",
    hero:  { type: "image", src: "assets/ai/19.png", alt: "",ratio: "3-4"},
    thumb: { type: "image", src: "assets/ai/19.png", alt: "",},    
    credits: [
      { key: "AI Art Direction", value: "Jiun Lee" }
       ],
    gallery: [
      { layout: "3col", items: [
        { type: "image", src: "assets/ai/18.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/16.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/17.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/14.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/22.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/20.png", alt: "", ratio: "3-4" },
      ]},
    ]
  },      
  
  
/* ── 프로젝트 1 ──────────────────────────────────────────── */
  {
    title: "Ovoids",
    category: "AI Visual",
    year: "2025",
    role: "AI Art Direction",
    description: "A personal project exploring objects that evoke the form of an egg. AI-generated images built around the recurring motif of ovoid shapes — examining texture, surface, and stillness through a series of quiet, considered compositions.",
    hero:  { type: "image", src: "assets/ai/10.png", alt: "",ratio: "3-4"},
    thumb: { type: "image", src: "assets/ai/10.png", alt: "",},    
    credits: [
      { key: "AI Art Direction", value: "Jiun Lee" }
       ],
    gallery: [
      { layout: "3col", items: [
        { type: "image", src: "assets/ai/10.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/8.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/11.png", alt: "", ratio: "3-4" },
      ]},
    ]
  },         
  
 /* ── 프로젝트 2 ──────────────────────────────────────────── */  
  {
    title: "Eyewear Campaign for VARCO Art Fashion",
    category: "AI Visual",
    year: "2026",
    role: "AI Art Direction",
    description: "AI-generated campaign imagery for a contemporary eyewear concept, created using VARCO Art Fashion. Full creative ownership across prompt design, visual direction, and AI-driven product image generation.",
    hero:  { type: "image", src: "assets/ai/33.png", alt: "",ratio: "3-4"},
    thumb: { type: "image", src: "assets/ai/33.png", alt: "",},    
    credits: [
      { key: "AI Art Direction", value: "Jiun Lee" }
       ],
    gallery: [
      { layout: "3col", items: [
        { type: "image", src: "assets/ai/34.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/35.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/31.png", alt: "", ratio: "3-4" }
      ]},
    ]
  },
  
/* ── 프로젝트 3 ──────────────────────────────────────────── */
  {
    title: "AI Models for VARCO Art Fashion",
    category: "AI Visual",
    year: "2025",
    role: "AI Art Direction",
    description: "AI-generated model imagery for VARCO Art Fashion. Full creative ownership across concept, prompt engineering, visual direction, and image selection.",
    hero:  { type: "image", src: "assets/ai/54.png", alt: "",ratio: "3-4"},
    thumb: { type: "image", src: "assets/ai/54.png", alt: "",},    
    credits: [
      { key: "AI Art Direction", value: "Jiun Lee" }
       ],
    gallery: [
      { layout: "3col", items: [
        { type: "image", src: "assets/ai/41.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/43.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/44.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/45.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/48.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/51.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/68.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/54.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/63.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/61.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/64.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/ai/67.png", alt: "", ratio: "3-4" },
      ]},
    ]
  },     
 /* ── 프로젝트 4 ──────────────────────────────────────────── */ 
  
   {
    title: "Store Imagery",
    category: "Photography",
    year: "2024-2025",
    role: "Photography",
    description: "Store imagery for AMOMENTO. Photography, retouching, and image selection.",

    hero: {
      type: "image",
      src: "assets/Store Imagery/9.jpg",
      alt: ""
    },

    thumb: {
      type: "image",
      src: "assets/Store Imagery/9.jpg",
      alt: ""
    },

    credits: [
      { key: "Photography", value: "Jiun Lee" }
    ],
    
    gallery: [
      { layout: "3col", items: [
        { type: "image", src: "assets/Store Imagery/1.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/Store Imagery/4.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/Store Imagery/18.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/Store Imagery/8.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/Store Imagery/9.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/Store Imagery/12.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/Store Imagery/14.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/Store Imagery/17.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/Store Imagery/5.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/Store Imagery/31.png", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/Store Imagery/32.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/Store Imagery/33.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/Store Imagery/34.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/Store Imagery/35.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/Store Imagery/3.jpg", alt: "", ratio: "4-3" },
      ]},
    ]

  },

  /* ── 프로젝트 5 ────────────────────────────────────────────*/
 {
    title: "Glass Work by Nurikim",
    category: "Film",
    year: "2025",
    role: "Videography",
    description: "Videography of the work and exhibition view at AMOMENTO Seochon flagship store. The piece was created in collaboration with AMOMENTO, first presented in Paris in June 2024, and exhibited alongside the AMOMENTO 25SS collection after a nine-month interval.",

    hero: {
      type: "video",
      src: "assets/nurikim/nurikim.mp4",
      alt: "",
      ratio: "9-16"
    },

    thumb: {
      type: "video",
      src: "assets/nurikim/nurikim.mp4",
      alt: "",
      ratio: "9-16"
    },

    credits: [
      { key: "Artwork", value: "Nuri Kim" },
      { key: "Videography", value: "Jiun Lee" },
      { key: "Photography", value: "Youngjoo Sul" },
      { key: "Editorial Design", value: "Seongjun Hahn" },
    ],
  },
    
  
 /* ── 프로젝트 6 ────────────────────────────────────────────*/

  {title: "AMOMENTO 25SS Original Soundtrack",
    category: "Film",
    year: "2025",
    role: "Visual Direction",
    description: "Visual direction and film production for a collaborative work with sound artist Namhoon Huh. The piece explores wrapping and preserving materials by extracting their inherent physical sounds — recorded through contact microphones via rubbing, crumpling, and striking. Layered over piano and cello, the sounds form a spatial, architectural texture. The accompanying film translates this into a visual and sensory experience through movement, vibration, and airflow.",

    hero: {
      type: "video",
      src: "assets/25SS Sound Film/25SS Sound Film.MP4",
      alt: ""
    },

    thumb: {
      type: "video",
      src: "assets/25SS Sound Film/25SS Sound Film.MP4",
      alt: ""
    },

    credits: [
      { key: "Videography", value: "Studio HNH" },
      { key: "Visual Direction, Styling & Edit", value: "Jiun Lee" },
      { key: "Model", value: "Le son du Couple"}
      ],
    },

  /* ── 프로젝트 7 ──────────────────────────────────────────── */
  {
    title: "AMOMENTO 25SS Campaign",
    category: "Campaign",
    year: "2025",
    role: "SNS Content & Edit",
    description: "SNS content production, image curation, and video editing for the AMOMENTO 25SS Campaign — a resort-inspired visual narrative that reinterprets the brand's archive through contemporary tailoring, sculptural silhouettes, and a warm, unhurried mood.",
    hero:  { type: "video", src: "assets/25SS/25SS TEASER.mp4", alt: "" },
    thumb: { type: "image", src: "assets/25SS/6.jpg", alt: "" },
    credits: [
      { key: "SNS Content & Edit", value: "Jiun Lee" },
      { key: "Visual Production", value: "ES Consultancy" },
      { key: "Photography", value: "Hyungoo Park" },
    ],
    gallery: [
      { layout: "3col", items: [
        { type: "image", src: "assets/25SS/1.jpg", alt: "", ratio: "4-3" },
        { type: "video", src: "assets/25SS/01.mp4", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/25SS/2.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/25SS/5.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/25SS/4.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/25SS/8.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/25SS/6.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/25SS/7.jpg", alt: "", ratio: "4-3" },
        { type: "video", src: "assets/25SS/02.mp4", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/25SS/9.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/25SS/11.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/25SS/12.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/25SS/16.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/25SS/14.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/25SS/15.jpg", alt: "", ratio: "4-3" },
      ]},
    ]
  },

  /* ── 프로젝트 8 ──────────────────────────────────────────── */
  {
    title: "AMOMENTO 25PS Campaign",
    category: "Campaign",
    year: "2025",
    role: "Visual Direction",
    description: "Visual direction and social media content for AMOMENTO 25SS. The collection reinterprets the brand's iconic archive designs through a contemporary lens — sharp tailoring with clean, linear lines balanced against AMOMENTO's signature sculptural curves, presenting a modern and minimal aesthetic.",
    hero:  { type: "image", src: "assets/25PS/1.jpeg", alt: "" },
    thumb: { type: "image", src: "assets/25PS/AMOMENTO_25PS_2.jpg", alt: "" },
    credits: [
      { key: "Visual Direction & SNS Content", value: "Jiun Lee" },
      { key: "Graphic Design", value: "Taeyeon Kim" },
      { key: "Photography", value: "Janghyun Hong" },
      { key: "Styling", value: "AMOMENTO" },
      { key: "Hair & Makeup", value: "Jukyung Lee" },
     
    ],
    gallery: [
      { layout: "3col", items: [
        { type: "image", src: "assets/25PS/2.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/25PS/3.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/25PS/4.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/25PS/5.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/25PS/6.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/25PS/7.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/25PS/8.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/25PS/9.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/25PS/20.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/25PS/14.jpeg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/25PS/15.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/25PS/16.jpeg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/25PS/17.jpg", alt: "", ratio: "4-3" },
		{ type: "image", src: "assets/25PS/18.jpeg", alt: "", ratio: "4-3" },
		{ type: "image", src: "assets/25PS/1.jpeg", alt: "", ratio: "4-3" },
		{ type: "image", src: "assets/25PS/13.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/25PS/19.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/25PS/AMOMENTO_25PS_2.jpg", alt: "", ratio: "3-4" }
      ]},
    ]
  },
  /* ── 프로젝트 9 ──────────────────────────────────────────── */
  {
    title: "Small Joys, Big Comforts",
    category: "Campaign",
    year: "2024",
    role: "Visual Direction",
    description: "Visual direction, styling, and SNS content for a collaboration between AMOMENTO and fabric design brand Kittybunnypony. The collection merges AMOMENTO's modern, minimal aesthetic with Kittybunnypony's vibrant identity — resulting in practical yet playful lifestyle items. Rooted in the concept 'Small Joys, Big Comforts', the project captures everyday moments of rest and quiet pleasure: reading, listening to music, drinking tea.",
    hero:  { type: "image", src: "assets/KBP/4.jpg", alt: "" },
    thumb: { type: "image", src: "assets/KBP/1.jpg", alt: "" },
    credits: [
      { key: "Visual Direction & Styling", value: "Jiun Lee" },
      { key: "Graphic Design", value: "Seongjun Hahn" },
      { key: "Photography", value: "Yeyoung Kim" },
      { key: "Hair & Makeup", value: "Heeji Ban" },
      { key: "Model", value: "Sogumm & Wonjin from Balming Tiger" },
    ],
    gallery: [
      { layout: "2col", items: [
        { type: "image", src: "assets/KBP/1.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/KBP/2.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/KBP/3.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/KBP/5.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/KBP/6.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/KBP/7.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/KBP/8.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/KBP/11.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/KBP/9.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/KBP/10.jpg", alt: "", ratio: "4-3" },
      ]},
    ]
  },

  /* ── 프로젝트 10 ──────────────────────────────────────────── */
  {
    title: "AMOMENTO 24FW Editorial",
    category: "Editorial",
    year: "2024",
    role: "Editorial Design",
    description: "Editorial design for AMOMENTO 24FW, featuring bedding and cushion pieces with signature shirring detail.",
    hero:  { type: "image", src: "assets/24FW Editorial/1.jpg", alt: "" },
    thumb: { type: "image", src: "assets/24FW Editorial/6.jpg", alt: "" },
    credits: [
      { key: "Editorial Design", value: "Jiun Lee" },
      { key: "Photography", value: "Jinwoo Park" },
      { key: "Styling", value: "Yeyoung Kim" },
      { key: "Hair", value: "Hyun" },
      { key: "Makeup", value: "Seongmin" },
    ],
    gallery: [
      { layout: "full", items: [
        { type: "image", src: "assets/24FW Editorial/2.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/24FW Editorial/3.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/24FW Editorial/4.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/24FW Editorial/5.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/24FW Editorial/6.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/24FW Editorial/7.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/24FW Editorial/8.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/24FW Editorial/9.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/24FW Editorial/10.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/24FW Editorial/11.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/24FW Editorial/12.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/24FW Editorial/13.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/24FW Editorial/14.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/24FW Editorial/15.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/24FW Editorial/16.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/24FW Editorial/17.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/24FW Editorial/18.jpg", alt: "", ratio: "16-9" },
      ]},
    ]
  },
  
  /* ── 프로젝트 11 ──────────────────────────────────────────── */
  {
    title: "AMOMENTO 24FW Featured Items",
    category: "Editorial",
    year: "2024",
    role: "Editorial Design",
    description: "Editorial featuring Le Son Du Couple in AMOMENTO 24FW's Grandma Cardigan and Grandpa Cardigan.",
    hero:  { type: "image", src: "assets/Le Son Du Couple Editorial/1.jpg", alt: "",},
    thumb: { type: "image", src: "assets/Le Son Du Couple Editorial/1.jpg", alt: "",},    credits: [
      { key: "Editorial Design", value: "Jiun Lee" },
      { key: "Photography", value: "Joori Park" },
      { key: "Model", value: "Le Son Du Couple" },
    ],
    gallery: [
      { layout: "2col", items: [
        { type: "image", src: "assets/Le Son Du Couple Editorial/2.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/Le Son Du Couple Editorial/3.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/Le Son Du Couple Editorial/4.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/Le Son Du Couple Editorial/5.jpg", alt: "", ratio: "4-5" }
      ]},
    ]
  },

  /* ── 프로젝트 12 ──────────────────────────────────────────── */
  {
    title: "AMOMENTO Friends Interview",
    category: "Editorial",
    year: "2024",
    role: "Editorial Design",
    description: "Editorial design for AMOMENTO 24SS Global Friends.",
    
    hero:  { type: "image", src: "assets/AMOMENTO Friends Interview/1.jpg", alt: "",},
    thumb: { type: "image", src: "assets/AMOMENTO Friends Interview/1.jpg", alt: "",},    
    credits: [
      { key: "Editorial Design", value: "Jiun Lee" },
      { key: "Model", value: "Jenn Kang, Milan Henderikx, Laszlo Badet" },
    ],
    gallery: [
      { layout: "3col", items: [
        { type: "image", src: "assets/AMOMENTO Friends Interview/1.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/AMOMENTO Friends Interview/3.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/AMOMENTO Friends Interview/4.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/AMOMENTO Friends Interview/5.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/AMOMENTO Friends Interview/6.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/AMOMENTO Friends Interview/7.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/AMOMENTO Friends Interview/10.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/AMOMENTO Friends Interview/11.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/AMOMENTO Friends Interview/12.jpg", alt: "", ratio: "4-5" }
      ]},
    ]
  },

  /* ── 프로젝트 13 ──────────────────────────────────────────── */
  {
    title: "'Marfa #22: Life Is Short, Have An Affair' Exhibition",
    category: "Photography",
    year: "2024",
    role: "Photography",
    description: "Photography and SNS content for MARFA Magazine's 'Marfa #22: Life Is Short, Have An Affair' exhibition, produced in collaboration with AMOMENTO.",
    hero:  { type: "image", src: "assets/MARFA/1.jpg", alt: "",},
    thumb: { type: "image", src: "assets/MARFA/0.jpg", alt: "",},    
    credits: [
      { key: "Photography & SNS Content", value: "Jiun Lee" },
      { key: "Graphic Design", value: "Seongjun Hahn" },
    ],
    gallery: [
      { layout: "full", items: [
        { type: "image", src: "assets/MARFA/2.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/MARFA/3.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/MARFA/4.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/MARFA/5.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/MARFA/6.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/MARFA/7.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/MARFA/8.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/MARFA/9.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/MARFA/10.jpg", alt: "", ratio: "16-9" },
        { type: "image", src: "assets/MARFA/11.jpg", alt: "", ratio: "16-9" }   
      ]},
    ]
  },

  /* ── 프로젝트 14 ──────────────────────────────────────────── */
  {
    title: "AMOMENTO 24SS Mens Campaign",
    category: "Campaign",
    year: "2024",
    role: "Visual Direction",
    description: "Visual direction and styling for AMOMENTO 24SS Mens Campaign — capturing a sporty, effortless masculinity naturally integrated into an urban setting.",
    hero:  { type: "image", src: "assets/24SS Mens Campaign/1.jpg", alt: "",},
    thumb: { type: "image", src: "assets/24SS Mens Campaign/0.jpg", alt: "",},    
    credits: [
      { key: "Visual Direction, Graphic Design & Styling", value: "Jiun Lee" },
      { key: "Photography", value: "Beomsuk Won" },
      { key: "Hair & Makeup", value: "Jukyung Lee" },
    ],
    gallery: [
      { layout: "3col", items: [
        { type: "image", src: "assets/24SS Mens Campaign/4.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/24SS Mens Campaign/5.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/24SS Mens Campaign/2.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/24SS Mens Campaign/9.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/24SS Mens Campaign/8.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/24SS Mens Campaign/6.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/24SS Mens Campaign/10.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/24SS Mens Campaign/12.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/24SS Mens Campaign/11.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/24SS Mens Campaign/14.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/24SS Mens Campaign/15.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/24SS Mens Campaign/16.jpg", alt: "", ratio: "4-5" }
      ]},
    ]
  },
  
/* ── 프로젝트 15 ──────────────────────────────────────────── */
  {
    title: "AMOMENTO 24SS Capsule Collection",
    category: "Film",
    year: "2024",
    role: "SNS Content & Edit",
    description: "Film and photography for AMOMENTO 24SS Capsule Collection. Conceived as a commercial project, the work employs trompe-l'œil techniques to present the pieces in a direct, visually striking manner.",
    hero:  { type: "video", src: "assets/24SS Capsule Collection/0.mp4", alt: "",},
    thumb: { type: "video", src: "assets/24SS Capsule Collection/1.mp4", alt: "",},    
    credits: [
      { key: "Film & Photography", value: "Jiun Lee" },
      { key: "Graphic Design & Package", value: "Taeyeon Kim" }
    ],
    gallery: [
      { layout: "3col", items: [
        { type: "image", src: "assets/24SS Capsule Collection/3.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/24SS Capsule Collection/4.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/24SS Capsule Collection/5.jpg", alt: "", ratio: "4-5" },
        { type: "image", src: "assets/24SS Capsule Collection/6.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/24SS Capsule Collection/9.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/24SS Capsule Collection/8.jpg", alt: "", ratio: "4-3" }
      ]},
    ]
  },
  
/* ── 프로젝트 16 ──────────────────────────────────────────── */
  {
    title: "AMOMENTO 24SS Seasonal Film",
    category: "Film",
    year: "2024",
    role: "Film",
    description: "Film, styling, and sound production for AMOMENTO 24SS Seasonal Film. Directed to highlight the season's key sheer fabrications and capture a distinct sense of seasonality.",
    hero:  { type: "video", src: "assets/24SS Seasonal Film/1.mp4", alt: "", ratio: "3-4",},
    thumb: { type: "video", src: "assets/24SS Seasonal Film/1.mp4", alt: "",},    
    credits: [
      { key: "Film & Styling", value: "Jiun Lee" }
    ],
    gallery: [
      { layout: "3col", items: [
      ]},
    ]
  },
  
 /* ── 프로젝트 17 ──────────────────────────────────────────── */
  {
    title: "AMOMENTO Hannam Store",
    category: "Film",
    year: "2024",
    role: "Visual Direction",
    description: "Visual direction and sound for the opening teaser film of AMOMENTO Hannam Store.",
    hero:  { type: "video", src: "assets/Amomento Hannam Store/0.mp4", alt: "",},
    thumb: { type: "video", src: "assets/Amomento Hannam Store/0.mp4", alt: "",},    
    credits: [
      { key: "Visual Direction & Sound", value: "Jiun Lee" },
      { key: "3D grapchic Design", value: "Sungwoo Hong" }
    ],
    gallery: [
      { layout: "3col", items: [
      ]},
    ]
  },
    
    
/* ── 프로젝트 18 ──────────────────────────────────────────── */
  {
    title: "odlyworkshop 23FW Campaign ",
    category: "Campaign",
    year: "2023",
    role: "Apparel Design",
    description: "Apparel design and visual direction for Odlyworkshop 23FW — a dreamlike encounter with unknown creatures in the dead of night.",
    hero:  { type: "video", src: "assets/23FW/0.mp4", alt: "",},
    thumb: { type: "image", src: "assets/23FW/1.jpg", alt: "",},    
    credits: [
      { key: "Apparel Design & Visual Direction", value: "Jiun Lee" },
      { key: "Photography", value: "Jimin Son" },
      { key: "Videography", value: "Human of Studio" },
      { key: "Styling", value: "Byungun Park" },
      { key: "Hair & Makeup ", value: "Taeyoung Kim" },
    ],
    gallery: [
      { layout: "3col", items: [
        { type: "image", src: "assets/23FW/2.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/23FW/3.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/23FW/7.jpg", alt: "", ratio: "4-3" },
        { type: "image", src: "assets/23FW/5.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/23FW/6.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/23FW/4.jpg", alt: "", ratio: "3-4" },
      ]},
    ]
  },
  
  
/* ── 프로젝트 19 ──────────────────────────────────────────── */
  {
    title: "odlyworkshop 23SS Campaign ",
    category: "Campaign",
    year: "2023",
    role: "Apparel Design",
    description: "Apparel design and campaign visual direction for Odlyworkshop 23SS — an imagined narrative set on Epta, an undiscovered island, exploring the events and encounters that unfold within it.",
    hero:  { type: "image", src: "assets/23SS/1.jpg", alt: "",},
    thumb: { type: "image", src: "assets/23SS/001.jpg", alt: "",},    
    credits: [
      { key: "Apparel Design & Visual Direction", value: "Jiun Lee" },
      { key: "Photography", value: "Jimin Son" },
      { key: "Styling", value: "Jaechang Yu" },
      { key: "Hair & Makeup ", value: "Taeyoung Kim" },
    ],
    gallery: [
      { layout: "3col", items: [
        { type: "image", src: "assets/23SS/2.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/23SS/3.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/23SS/4.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/23SS/5.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/23SS/6.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/23SS/7.jpg", alt: "", ratio: "3-4" },
      ]},
    ]
  },        
  
/* ── 프로젝트 20 ──────────────────────────────────────────── */
  {
    title: "odlyworkshop 22FW Campaign ",
    category: "Campaign",
    year: "2022",
    role: "Apparel Design",
    description: "Apparel design and campaign visual direction for Odlyworkshop 22FW — imagining a quirky, inventive muse setting off on a journey to somewhere unknown.",
    hero:  { type: "image", src: "assets/22FW/10.jpg", alt: "",},
    thumb: { type: "image", src: "assets/22FW/10.jpg", alt: "",},    
    credits: [
      { key: "Apparel Design & Visual Direction", value: "Jiun Lee" },
      { key: "Photography", value: "Eric Persona" },
      { key: "Styling", value: "Imberti Francesco" }
    ],
    gallery: [
      { layout: "3col", items: [
        { type: "image", src: "assets/22FW/1.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/22FW/2.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/22FW/3.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/22FW/4.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/22FW/5.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/22FW/6.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/22FW/7.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/22FW/8.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/22FW/9.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/22FW/10.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/22FW/11.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/22FW/12.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/22FW/13.jpg", alt: "", ratio: "3-4" }
      ]},
    ]
  },       
    
/* ── 프로젝트 21 ──────────────────────────────────────────── */
  {
    title: "odlyworkshop 22SS Campaign ",
    category: "Campaign",
    year: "2022",
    role: "Apparel Design",
    ddescription: "Apparel design and campaign visual direction for Odlyworkshop 22SS — a casual mood built around a playful mix of varied prints and curved forms.",
    hero:  { type: "image", src: "assets/22SS/3.jpg", alt: "",},
    thumb: { type: "image", src: "assets/22SS/3.jpg", alt: "",},    
    credits: [
      { key: "Apparel Design & Visual Direction", value: "Jiun Lee" },
      { key: "Photography", value: "Jungwoo Park" },
      { key: "Styling", value: "Jaechang Yu" },
      { key: "Hair & Makeup ", value: "Taeyoung Kim" }
    ],
    gallery: [
      { layout: "2col", items: [
        { type: "image", src: "assets/22SS/1.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/22SS/2.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/22SS/5.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/22SS/6.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/22SS/4.jpg", alt: "", ratio: "3-4" },
        { type: "image", src: "assets/22SS/9.jpg", alt: "", ratio: "3-4" }
        ]},
    ]
  },
   
];


/* =============================================================
   INFO 페이지 — 프로필 이미지
   ✏️ type과 src 수정
   ============================================================= */
const PORTRAIT = {
  type: "none",       // ✏️ "image" | "none"
  src: "",            // ✏️ "assets/portrait.jpg"
  alt: "Jiun Lee"
};


/* =============================================================
   홈 히어로 미디어
   ✏️ type과 src 수정
   ============================================================= */
const HERO_MEDIA = {
  type: "image",       // ✏️ "image" | "video" | "youtube" | "none"
  src: "assets/ai/1.jpg",             // ✏️ 이미지/영상 경로 또는 유튜브 링크
  alt: "",
  ratio: "sq" 
};


/* =============================================================
   HELPER FUNCTIONS — 수정 불필요
   ============================================================= */

function getYouTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|v=|\/embed\/)([^?&]+)/);
  return match ? match[1] : null;
}

function buildMediaEl(media, extraClass = '') {
  if (!media || media.type === 'none' || !media.src) return null;
  if (media.type === 'image') {
    return `<img src="${media.src}" alt="${media.alt || ''}" class="${extraClass}" loading="lazy" />`;
  }
  if (media.type === 'video') {
    return `<video autoplay muted loop playsinline src="${media.src}" class="${extraClass}"></video>`;
  }
  if (media.type === 'youtube') {
    const vid = getYouTubeId(media.src);
    if (!vid) return null;
    return `<div class="yt-embed"><iframe src="https://www.youtube.com/embed/${vid}?autoplay=0&rel=0&modestbranding=1" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>`;
  }
  return null;
}

function buildThumb(project, listPage = false) {
  const m = project.thumb;
  const el = buildMediaEl(m, 'thumb-img');
  if (el) {
    return `<div class="grid-thumb">${el}</div>`;
  }
  return `<div class="grid-thumb"><div class="thumb-placeholder">${project.category}</div></div>`;
}


function buildHeroMedia(project) {
  const m = project.hero;

  if (!m || m.type === 'none' || !m.src) {
    return `<div class="media-placeholder"><span class="label">Hero media — media-config.js 참고</span></div>`;
  }

  /* 🔥 ratio fallback (중요) */
  const ratio = (m.ratio === '9-16' || m.ratio === '16-9')
    ? m.ratio
    : '16-9';

  const wrapperClass = `hero-media ratio-${ratio}`;

  /* ─────────────────────────────
     YOUTUBE
     ───────────────────────────── */
  if (m.type === 'youtube') {
    const vid = getYouTubeId(m.src);

    return `
      <div class="${wrapperClass}">
        <iframe
          src="https://www.youtube.com/embed/${vid}?rel=0&modestbranding=1"
          title="${m.alt || 'YouTube video'}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    `;
  }

  /* ─────────────────────────────
     VIDEO (LOCAL UPLOAD FIX 핵심)
     ───────────────────────────── */
  if (m.type === 'video') {
    return `
      <div class="${wrapperClass}">
        <video
          src="${m.src}"
          playsinline
          controls
        ></video>
      </div>
    `;
  }

  /* ─────────────────────────────
     IMAGE fallback
     ───────────────────────────── */
  if (m.type === 'image') {
    return `
      <div class="${wrapperClass}">
        <img src="${m.src}" alt="${m.alt || ''}" />
      </div>
    `;
  }

  return null;
}

function buildGallery(galleryData) {
  return galleryData.map(section => {
    const cls = `gallery gallery-${section.layout}`;
    const cells = section.items.map(item => {
      const el = buildMediaEl(item);
      const inner = el ? el : `<div class="thumb-placeholder" style="min-height:200px;">Image</div>`;
      return `<div class="gallery-cell ratio-${item.ratio}">${item.type === 'youtube' ? el : inner}</div>`;
    }).join('');
    return `<div class="${cls}">${cells}</div>`;
  }).join('');
}


/* =============================================================
   홈 그리드 구성 — 원하는 프로젝트를 순서대로 넣으세요
   ✏️ id: PROJECTS 배열 인덱스 (0부터 시작)
   ✏️ span: "normal" | "tall" | "wide"
   ============================================================= */
const HOME_GRID = [
  { id: 1,  span: "tall"   },   // AMOMENTO 25SS Sound Film
  { id: 4,  span: "normal" },   // Glass Work by Nurikim
  { id: 7,  span: "normal" },   // AMOMENTO 25SS Campaign
  { id: 14,  span: "wide"   },   // 'Marfa #22: Life Is Short, Have An Affair' Exhibition
  { id: 17,  span: "normal" },   // AMOMENTO 25PS Campaign
  { id: 10,  span: "normal" },   // AMOMENTO 24FW Editorial
];
