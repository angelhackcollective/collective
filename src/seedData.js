// const types = ["Oral", "Combo", "Extended Cycle"]
// const effortss = ["Low", "Medium", "High"]
// const names = ["Allesse", "Apri", "Aranelle", "Caziant", "Desogen"]
// const fakeData = [];
const symptoms = ['Intermenstrual spotting',
'Nausea', 'Breast tenderness',
'Headaches and migraine',
'Weight gain',
'Mood changes',
'Missed periods',
'decreased libido',
'Vaginal discharge',
'Changes to eyesight for those using contact lenses',
'Mental depression',
'Reduced tolerance to carbohydrates (insulin resistance)',
'Change in corneal curvature (steepening)',
'Vaginal candidiasis',
'Abdominal cramps and bloating',
'Edema (water retention)',
'Melasma (dark pigmentation on the face) which may persist'];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function generateSymptoms() {
      var rsymptoms = [];
      var count = 0;
    while(count <= 4) {
      count++
      rsymptoms.push(symptoms[getRandomInt(symptoms.length)]);
    }
    return rsymptoms;
}
// console.log(generateSymptoms())

var data = [
  {
  name: 'Alesse',
  type: 'Oral',
  pillType: 'Combo Pill',
  efficacy: '99% with typical use',
  efforts: 'High',
  commonlyReported: ['Swelling (edema), weakness, breakthrough bleeding, changes in weight, changes in appetite, headache, nausea, vomiting, bloating, stomach cramps, breast tenderness/swelling, nipple discharge, darkening of facial skin, increased hair growth, loss of scalp hair, problems with contacts, vaginal discharge, decreased sex drive']
},
  {
  name: 'Apri',
  type: 'Oral',
  pillType: 'Combo Pill',
  efficacy: '99% with typical use',
  efforts: 'High',
  commonlyReported: ['Nausea (when you first take it), vomiting, headache, stomach cramping, bloating, dizziness, vaginal itching, increased vaginal discharge, breast tenderness/swelling, nipple discharge, darkening of facial skin, acne, loss of scalp hair, problems with contacts, decreased sex drive, vaginal bleeding']
},
  {
  name: 'Yaz',
  type: 'Oral',
  pillType: 'Combo Pill',
  efficacy: '99% with typical use',
  efforts: 'High',
  commonlyReported: ['Headache, mentrual period changes, spotting, missed/irregular period, nausea (when you first take it), vomiting, bloating, stomach cramps, breast tenderness/swelling, fatigue, irritability, decreased sex drive, mood changes, increased chance of blood clots, changes in weight, swelling of feet, vaginal itching']
},
  {
  name: 'Camila',
  type: 'Oral',
  pillType: 'Mini Pill',
  efficacy: '99% with typical use',
  efforts: 'High',
  commonlyReported: ['Breast tenderness, acne, weight gain, frequent/irregular bleeding, menstrual changes, headaches, increased hair growth on face, mood changes, insomnia']
},
  {
  name: 'Errin',
  type: 'Oral',
  pillType: 'Mini Pill',
  efficacy: '99% with typical use',
  efforts: 'High',
  commonlyReported: ['Weight gain, acne, menstrual irregularity, headache, dizziness, increased hair growth on face, bloating, fatigue, rash, itching']
},
{

    name: 'Jolivette',
    type: 'Oral',
    pillType: 'Mini Pill',
    efficacy: '99% with typical use',
    efforts: 'High',
    commonlyReported: ['Nausea, vomiting, bloating, acne, headache, weight gain, bleeding/spotting, breast tenderness']
  },
    {
    name: 'Skyla',
    type: 'IUD',
    pillType: 'Hormone Release',
    efficacy: 'High',
    efforts: 'Medium',
    commonlyReported: ['Abdominal/pelvic pain, bleeding, dizziness, inflammation of vulva, irregular menstrual periods, changes in menstrual period']
  },
    {
    name: 'ParaGuard',
    type: 'IUD',
    pillType: 'No Release of Hormone',
    efficacy: 'High',
    efforts: 'High',
    commonlyReported: ['Heavier menstrual flow, irregular bleeding, difficult removal, expulsion of device, cramps']
  },
    {
    name: 'QuaSense',
    type: 'Oral',
    pillType: 'Extended Cycle',
    efficacy: 'High',
    efforts: 'High',
    commonlyReported: ['Headache, heavy/irregular vaginal bleeding, acne, dysmenorrhea, weight increased, mood changes, anxiety/panic attack, breast pain, increased blood pressure, depression']
  },
  {
  name: 'Mircette',
  type: 'Oral',
  pillType: 'Combo Pill',
  efficacy: '99% with typical use',
  efforts: 'High',
  commonlyReported: ['Headache, mentrual period changes, spotting, missed/irregular period, nausea (when you first take it), vomiting, bloating, stomach cramps, breast tenderness/swelling, fatigue, irritability, decreased sex drive, mood changes, increased chance of blood clots, changes in weight, swelling of feet, vaginal itching'],
  conditions: [
    {
      condit:"depression",
      amount: 3,
    },
    {
      condit:"weightLoss",
      amount: 1,
    },
    {
      condit:"fatigue",
      amount: 1,
    },
    {
      condit:"anxiety",
      amount: 1,
    },
    {
      condit:"moodchange",
      amount: 1,
    },
    {
      condit:"acne",
      amount: 2,
    },
  ],
  reports: [
  {
    user: 'susuwatari',
    dateReported: '05/02/2019',
    ethnicity: 'Asian',
    age: '30 years old',
    reportedSymptoms: ['weight loss', 'depression'],
    experience: 'This pill made me lose weight just for the fact it made me so depressed. I think I\'m going to stay on it just for the fact I don\'t wanna get pregnant.',
    similar: true
  },
  {
    user: 'devonne',
    dateReported: '04/01/2019',
    ethnicity: 'Caucasian',
    age: '25 years old',
    reportedSymptoms: ['depression'],
    experience: 'Just got really depressed'
  },
  {
    user: 'hshsuu',
    dateReported: '03/01/2019',
    ethnicity: 'Asian',
    age: '27 years old',
    reportedSymptoms: ['depression, fatigue, acne'],
    experience: 'I can say this really wasn\'t the right pill for me. I have a one year old daughter, so I decided that I wasn\'t really for anymore babies and I wanted birth control. Well my insurance got cut so I went to the county because a friend said I could get free birth control. They gave me 3 months worth of this one first and after I finish the last month they want me to come back for a check up. I have had severe anxiety and depression for as long as I can remember and I was just starting to be able to manage it on my own. I\'m almost done with the first week on my second pack and I have absolutely no desire to do anything anymore. It\'s almost too hard to get out of bed. If you have anxiety/depression be careful!',
    similar: true,
  },
  {
    user: 'locked',
    dateReported: '03/01/2019',
    ethnicity: 'African-American',
    age: '29 years old',
    reportedSymptoms: ['depression, fatigue'],
    experience: 'Unmotivated to do anything. Not sure whats going on, my life is in shambles'
  },
  {
    user: 'dbulled',
    dateReported: '02/24/2019',
    ethnicity: 'Asian',
    age: '30 years old',
    reportedSymptoms: ['acne, moodswings'],
    experience: 'got them pimples and mood swings ',
    similar: true
  },
  {
    user: 'sylvyuu',
    dateReported: '01/11/2019',
    ethnicity: 'Asian',
    age: '30 years old',
    reportedSymptoms: ['depression, anxiety, moodchange'],
    experience: 'I just started my 5th pack. I have never taken any other birth control pills prior to this one so I don\'t really have anything to compare it to, but this one has worked well for me. My boyfriend and I are sexually active and do not want any children so I decided to the pill. My first couple of months on it I did feel little different - kind of anxious and more mood swings but that went away as I continued to take the pill and my body adjusted. The positive aspects I have noticed it is easy to swallow, makes your skin very healthy looking (my skin is glowing after a few months of taking), and makes my periods much much lighter than they were before starting on birth control. ',
    similar: true,
  },
  {
    user: 'innout',
    dateReported: '01/09/2019',
    ethnicity: 'Asian',
    age: '16 years old',
    reportedSymptoms: ['menstrual changes, change in appetite'],
    experience: 'I told my physician that I had an issue with heavy bleeding and very long periods and this is what she prescribed me. I can say though I eat A LOT. I\'m 124 and before started this BC I ate a lot anyways because hey I\'m a woman that loves food! It just makes me crave foods more. I also have sore boobs but it\'s soreness that isn\'t bearable. It’s made me very emotional, but I don’t really mind it.',
    similar: true,
  }
]
}];

export default data

// console.log(data[0].reports[0].reportedSymptoms, data[0].reports[0].reportedSymptoms);

// createData();