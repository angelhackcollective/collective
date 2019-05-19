import React from 'react';
import SymptomCard from './SymptomCard';

const fakeSymptoms = [
  {
    name: "querty",
    date: "2019-05-19",
    ethnicity: "Asian",
    yearsOld: "30",
    color: "yellow",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    name: "ascii",
    date: "2019-05-19",
    ethnicity: "Caucasian",
    yearsOld: "32",
    color: "pink",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a sapien scelerisque, porta purus vel, sagittis ante. Quisque non venenatis.",
  },
  {
    name: "Foo",
    date: "2019-05-19",
    ethnicity: "Linux",
    yearsOld: "76",
    color: "green",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus rutrum ante ut bibendum. Suspendisse ornare, felis et scelerisque pellentesque, ipsum dolor tristique odio, ac efficitur dolor augue id nunc. Vestibulum aliquet eros id convallis.",
  },
  {
    name: "Bar",
    date: "2019-05-19",
    ethnicity: "ios",
    yearsOld: "25",
    color: "blue",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui dolor, ultrices non commodo id, commodo.",
  },
]

const Symptoms = ({symptoms}, props) => {
  console.log("TODO, build list of symptom cards", props)
  return fakeSymptoms.map((item,i) => <SymptomCard {...item}/>)
};

export default Symptoms;
