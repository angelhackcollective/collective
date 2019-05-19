const filterData = [
  {
    title: "Type",
    opts: [
      {
        name: "Oral (Pill)",
        val: "type-oral",
        subOpts: [
          {
            name: "Mini (Non-Estrogen)",
            val: "type-oral-mini",
          },
          {
            name: "Combo (Progestin and Estrogen)",
            val: "type-oral-combo",
          },
          {
            name: "Extended Cycle",
            val: "type-oral-extended",
          },
        ]
      },
      {
        name: "IUD",
        val: "type-iud",
      },
      {
        name: "IUS",
        val: "type-ius",
      }
    ]
  },
  {
    title: "Effort",
    opts: [
      {
        name: "Low",
        val: "low-effort",
      },
      {
        name: "Medium",
        val: "medium-effort",
      },
      {
        name: "High",
        val: "high-effort",
      }
    ]
  },
  {
    title: "EFFICACY",
    opts: [
      {
        name: "99%",
        val: "99%",
      },
      {
        name: "91-94%",
        val: "91-94%",
      },
      {
        name: "72-82%",
        val: "72-82%",
      }
    ]
  }
]

export default filterData;