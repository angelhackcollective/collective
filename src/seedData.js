const types = ["Oral", "Combo", "Extended Cycle"]
const efforts = ["Low", "Medium", "High"]
const names = ["Allesse", "Apri", "Aranelle", "Caziant", "Desogen"]
const fakeData = [];
const symptoms = ['intermenstrual spotting', 
'nausea', 'breast tenderness',
'headaches and migraine',
'weight gain',
'mood changes',
'missed periods',
'decreased libido',
'vaginal discharge',
'changes to eyesight for those using contact lenses',
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

function generate() {
  for (let i = 0; i < 30; i++) {
    var rEfforts = getRandomInt(efforts.length);
    var rnames = getRandomInt(names.length);
    var rtypes = getRandomInt(types.length);
    var count = 0;
    var rsymptoms = [];
    while(count <= 6) {
      count++
      rsymptoms.push(symptoms[getRandomInt(symptoms.length)]);
    }
  fakeData.push({
        name: names[rnames],
        type: types[rtypes],
        efforts: efforts[rEfforts],
        symptoms: rsymptoms, 
      });
  }
}

generate();
