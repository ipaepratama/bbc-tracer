let dataKecamatan = {
  cities: [
    // Denpasar
    {
      name: "Denpasar Barat",
      x: 1448,
      y: 1158,
      connected: [],
    },
    {
      name: "Denpasar Selatan",
      x: 1504,
      y: 1211,
      connected: ["Denpasar Barat", "Denpasar Timur"],
    },
    {
      name: "Denpasar Timur",
      x: 1548,
      y: 1104,
      connected: [],
    },
    {
      name: "Denpasar Utara",
      x: 1468,
      y: 1055,
      connected: [
        "Kuta Utara",
        "Denpasar Barat",
        "Denpasar Timur",
        "Abiansemal",
        "Ubud",
        "Sukawati",
      ],
    },
    
    
    
    
    // Tabanan
    {
      name: "Baturiti",
      x: 1403,
      y: 547,
      connected: [],
    },
    {
      name: "Kediri",
      x: 1342,
      y: 975,
      connected: ["Kuta Utara", "Marga", "Abiansemal"],
    },
    {
      name: "Kerambitan",
      x: 1234,
      y: 888,
      connected: ["Selemadeg Barat", "Tabanan", "Penebel", "Marga"],
    },
    {
      name: "Marga",
      x: 1385,
      y: 757,
      connected: [],
    },
    {
      name: "Penebel",
      x: 1327,
      y: 684,
      connected: [
        "Selemadeg Timur",
        "Selemadeg",
        "Selemadeg Barat",
        "Pupuan",
        "Baturiti",
        "Marga",
        "Kerambitan",
      ],
    },
    {
      name: "Pupuan",
      x: 1090,
      y: 547,
      connected: [],
    },
    {
      name: "Selemadeg",
      x: 1147,
      y: 870,
      connected: ["Selemadeg Timur", "Selemadeg Barat", "Pupuan"],
    },
    {
      name: "Selemadeg Barat",
      x: 1200,
      y: 860,
      connected: ["Pupuan"],
    },
    {
      name: "Selemadeg Timur",
      x: 1075,
      y: 860,
      connected: ["Pupuan", "Pekutatan"],
    },
    {
      name: "Tabanan",
      x: 1317,
      y: 931,
      connected: [],
    },
    
    
    
    
    
    // Klungkung
    {
      name: "Banjarangkan",
      x: 1816,
      y: 933,
      connected: ["Klungkung", "Gianyar", "Tembuku", "Bangli"],
    },
    {
      name: "Dawan",
      x: 1989,
      y: 886,
      connected: ["Manggis", "Selat", "Sidemen", "Klungkung"],
    },
    {
      name: "Klungkung",
      x: 1878,
      y: 858,
      connected: ["Sidemen", "Dawan", "Banjarangkan", "Tembuku", "Bangli"],
    },
    {
      name: "Nusa Penida",
      x: 2082,
      y: 1299,
      connected: ["Denpasar Selatan", "Dawan", "Manggis"],
    },
    
    
    
    
    
    // Karangasem
    {
      name: "Abang",
      x: 2217,
      y: 645,
      connected: [],
    },
    {
      name: "Bebandem",
      x: 2063,
      y: 737,
      connected: ["Selat", "Abang", "Karangasem"],
    },
    {
      name: "Karangasem",
      x: 2208,
      y: 784,
      connected: ["Abang", "Bebandem", "Manggis"],
    },
    {
      name: "Kubu",
      x: 2012,
      y: 492,
      connected: [
        "Abang",
        "Bebandem",
        "Selat",
        "Rendang",
        "Kintamani",
        "Tembuku",
        "Tejakula",
      ],
    },
    {
      name: "Manggis",
      x: 2021,
      y: 864,
      connected: ["Dawan", "Bebandem", "Selat", "Karangasem"],
    },
    {
      name: "Rendang",
      x: 1877,
      y: 671,
      connected: ["Kubu", "Tembuku", "Selat"],
    },
    {
      name: "Selat",
      x: 1965,
      y: 746,
      connected: [],
    },
    {
      name: "Sidemen",
      x: 1893,
      y: 845,
      connected: [
        "Klungkung",
        "Dawan",
        "Selat",
        "Rendang",
        "Banjarangkan",
        "Tembuku",
        "Bangli",
      ],
    },
    
    
    
    
    
    // Jembrana
    {
      name: "Jembrana",
      x: 501,
      y: 558,
      connected: ["Gerokgak", "Mendoyo", "Negara"],
    },
    {
      name: "Melaya",
      x: 270,
      y: 506,
      connected: ["Gerokgak", "Negara"],
    },
    {
      name: "Mendoyo",
      x: 655,
      y: 567,
      connected: ["Gerokgak", "Jembrana", "Pekutatan"],
    },
    {
      name: "Negara",
      x: 402,
      y: 601,
      connected: ["Gerokgak", "Melaya", "Jembrana"],
    },
    {
      name: "Pekutatan",
      x: 819,
      y: 721,
      connected: ["Gerokgak", "Mendoyo"],
    },
    
    
    
    
    
    // Gianyar
    {
      name: "Blahbatuh",
      x: 1706,
      y: 957,
      connected: ["Gianyar", "Tampaksiring"],
    },
    {
      name: "Gianyar",
      x: 1735,
      y: 906,
      connected: [],
    },
    {
      name: "Payangan",
      x: 1598,
      y: 675,
      connected: ["Tegallalang", "Ubud", "Abiansemal", "Petang", "Kintamani"],
    },
    {
      name: "Sukawati",
      x: 1632,
      y: 994,
      connected: ["Blahbatuh", "Denpasar Timur", "Denpasar Utara", "Ubud"],
    },
    {
      name: "Tampaksiring",
      x: 1716,
      y: 708,
      connected: [
        "Susut",
        "Bangli",
        "Payangan",
        "Ubud",
        "Gianyar",
        "Sukawati",
        "Tegallalang",
      ],
    },
    {
      name: "Tegallalang",
      x: 1697,
      y: 646,
      connected: [],
    },
    {
      name: "Ubud",
      x: 1589,
      y: 854,
      connected: [],
    },
    
    
    
    
    
    // Buleleng
    {
      name: "Banjar",
      x: 1187,
      y: 444,
      connected: [
        "Busung Biu",
        "Seririt",
        "Sukasada",
        "Buleleng",
        "Baturiti",
        "Pupuan",
      ],
    },
    {
      name: "Buleleng",
      x: 1272,
      y: 208,
      connected: [],
    },
    {
      name: "Busung Biu",
      x: 1029,
      y: 463,
      connected: ["Seririt", "Pekutatan", "Pupuan", "Banjar"],
    },
    {
      name: "Gerokgak",
      x: 788,
      y: 360,
      connected: [
        "Jembrana",
        "Melaya",
        "Mendoyo",
        "Negara",
        "Pekutatan",
        "Seririt",
      ],
    },
    {
      name: "Kubutambahan",
      x: 1498,
      y: 236,
      connected: ["Tejakula", "Petang"],
    },
    {
      name: "Sawan",
      x: 1406,
      y: 263,
      connected: ["Kubutambahan", "Sukasada", "Buleleng", "Petang", "Baturiti"],
    },
    {
      name: "Seririt",
      x: 953,
      y: 351,
      connected: ["Gerokgak", "Busung Biu", "Banjar", "Pekutatan", "Mendoyo"],
    },
    {
      name: "Sukasada",
      x: 1282,
      y: 298,
      connected: ["Buleleng","Baturiti"],
    },
    {
      name: "Tejakula",
      x: 1671,
      y: 217,
      connected: [],
    },
    
    
    
    
    
    // Bangli
    {
      name: "Bangli",
      x: 1725,
      y: 789,
      connected: [],
    },
    {
      name: "Kintamani",
      x: 1610,
      y: 393,
      connected: [
        "Petang",
        "Tejakula",
        "Payangan",
        "Tegallalang",
        "Tembuku",
        "Susut",
        "Kubutambahan",
      ],
    },
    {
      name: "Susut",
      x: 1725,
      y: 676,
      connected: ["Tegallalang", "Tampaksiring", "Tembuku", "Bangli"],
    },
    {
      name: "Tembuku",
      x: 1797,
      y: 695,
      connected: [],
    },
    
    
    
    
    
    // Badung
    {
      name: "Abiansemal",
      x: 1463,
      y: 789,
      connected: [
        "Petang",
        "Marga",
        "Payangan",
        "Ubud",
        "Denpasar Utara",
        "Kuta Utara",
        "Kediri",
        "Tabanan",
      ],
    },
    {
      name: "Kuta",
      x: 1414,
      y: 1230,
      connected: [
        "Kuta Utara",
        "Denpasar Barat",
        "Denpasar Selatan",
        "Kuta Selatan",
      ],
    },
    {
      name: "Kuta Selatan",
      x: 1414,
      y: 1372,
      connected: ["Denpasar Selatan"],
    },
    {
      name: "Kuta Utara",
      x: 1395,
      y: 1114,
      connected: [],
    },
    {
      name: "Mengwi",
      x: 1323,
      y: 984,
      connected: ["Tabanan", "Kediri", "Kuta Utara"],
    },
    {
      name: "Petang",
      x: 1501,
      y: 496,
      connected: [
        "Baturiti",
        "Kintamani",
        "Kubutambahan",
        "Sawan",
        "Payangan",
        "Abiansemal",
        "Marga",
      ],
    },
  ],
};
