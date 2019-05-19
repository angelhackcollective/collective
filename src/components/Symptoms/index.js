import React from 'react';
import SymptomCard from './SymptomCard';

const fakeSymptoms = [
  {
    name: "querty",
    date: "2019-05-19",
    ethnicity: "Asian",
    yearsOld: "30",
    description: ";lkgjaer goiaerg oiajergoiajerg oaijerg aoij a lkjga;eorjga  lakjdg",
  },
  {
    name: "ascii",
    date: "2019-05-19",
    ethnicity: "Caucasian",
    yearsOld: "32",
    description: ";lkgjaer goiaerg oiajergoiajerg oaijerg aoij a lkjga;eorjga  lakjdg",
  },
  {
    name: "Foo",
    date: "2019-05-19",
    ethnicity: "Linux",
    yearsOld: "76",
    description: ";lkgjaer goiaerg oiajergoiajerg oaijerg aoij a lkjga;eorjga  lakjdg",
  },
  {
    name: "Bar",
    date: "2019-05-19",
    ethnicity: "ios",
    yearsOld: "25",
    description: ";lkgjaer goiaerg oiajergoiajerg oaijerg aoij a lkjga;eorjga  lakjdg",
  },
]

const Symptoms = ({symptoms}, props) => {
  console.log("TODO, build list of symptom cards", props)
  return (
    <div>
      {fakeSymptoms.map((item,i) => <SymptomCard {...item}/>)}
    </div>
  )
};

export default Symptoms;
