import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

const funFacts = [
  "Earth has over 96% of the solar system's liquid water, most stored in oceans.",
  "The world's largest living organism is a fungus covering 2,385 acres in Oregon!",
  "A single oak tree can support over 900 different insect species.",
  "The Amazon rainforest produces 20% of the world's oxygen.",
  "A sloth's poop takes two weeks to digest due to their low-energy lifestyle.",
  "The Earth is about 4.54 billion years old.",
  "Lightning strikes the Earth about 44 times every second.",
  "Clouds are made up of tiny water droplets or ice crystals.",
  "The hottest recorded temperature on Earth was 134°F (56.7°C) in Death Valley, California.",
  "The coldest recorded temperature on Earth was -89.2°F (-62.3°C) in Vostok Station, Antarctica.",
  "A group of owls is called a parliament.",
  "A group of butterflies is called a kaleidoscope.",
  "A group of hedgehogs is called a prickle.",
  "The Earth has one moon, but Jupiter has 79 confirmed moons!",
  "The Great Barrier Reef is the world's largest coral reef system composed of over 2,900 individual reefs.",
  "The world's tallest tree is a Redwood in California, reaching over 380 feet tall.",
  "The world's smallest bird is the Bee Hummingbird, measuring just 2.2 inches long.",
  "There are more stars in the universe than grains of sand on all the beaches on Earth.",
  "The Earth's atmosphere is made up of 78% nitrogen, 21% oxygen, and 1% other gases.",
  "Recycling one aluminum can saves enough energy to power a TV for 3 hours.",
  "A compost pile can reach temperatures of 160°F (71°C) due to decomposing materials.",
  "Deforestation contributes to about 10% of global greenhouse gas emissions.",
  "Wetlands are vital ecosystems that filter water, prevent floods, and provide habitat for wildlife.",
  "Coral reefs are home to about 25% of all marine life.",
  "The largest desert in the world is the Sahara Desert, covering over 3.6 million square miles.",
  "The average American throws away about 4.5 pounds of trash every day.",
  "It takes about 450 years for a plastic bottle to decompose in a landfill.",
  "A glass bottle can take over 1 million years to decompose!",
  "Only about 9% of plastic waste ever gets recycled.",
  "Recycling one aluminum can conserves enough energy to make 20 new cans.",
  "Composting food scraps and yard waste reduces methane emissions from landfills.",
  "Paper can be recycled up to 7 times before the fibers become too weak.",
  "E-waste (electronic waste) is the fastest-growing waste stream in the world.",
  "Recycling one ton of paper saves about 17 trees.",
  "Using a reusable water bottle instead of disposable ones can save hundreds of plastic bottles a year.",
  "Microplastics, tiny plastic fragments, are now being found in everything from our oceans to our food.",
  "Biodegradable trash breaks down naturally within a few months or years.",
  "Composting toilets can be a sustainable sanitation option in areas with limited water access.",
  "Many communities offer curbside recycling programs for paper, plastic, glass, and metal.",
  "Before throwing something away, consider if it can be reused, repaired, or donated.",
  "Fast fashion contributes significantly to textile waste, with many clothes ending up in landfills.",
  "Organic waste like food scraps can be composted to create nutrient-rich soil amendment.",
  "Some companies are developing innovative ways to recycle plastic waste, such as turning it into new clothing or building materials.",
  "Landfills take up valuable land and can pollute the environment if not properly managed.",
  "Many everyday items, like batteries and old electronics, have specific disposal methods to avoid environmental harm.",
  "Recycling aluminum cans uses 95% less energy than creating new ones from scratch.",
  "Biodegradable materials like bamboo can be a sustainable alternative to plastic products.",
  "Compost bins are a convenient way to collect food scraps and yard waste for composting at home.",
  "Educating yourself and others about waste reduction and recycling is crucial for a sustainable future.",
  "Litter can harm wildlife by causing entanglement, ingestion, and habitat destruction.",
  "Plastic pollution is a major threat to marine life, with many animals mistaking plastic for food.",
  "Air pollution can cause respiratory problems, heart disease, and other health issues.",
  "Water pollution can contaminate drinking water supplies and harm aquatic ecosystems.",
  "Light pollution disrupts natural light cycles and can impact wildlife behavior.",
  "Noise pollution can cause hearing loss, stress, and sleep disturbance.",
  "Soil pollution can reduce agricultural productivity and harm ecosystems.",
  "Many everyday products contain harmful chemicals that can pollute the environment.",
  "Organic farming practices can help reduce pollution from agricultural runoff.",
  "Renewable energy sources like solar and wind power can help reduce our reliance on fossil fuels and air pollution.",
  "Electric vehicles produce zero tailpipe emissions, contributing to cleaner air.",
  "Energy-efficient appliances and light bulbs can help conserve resources and reduce pollution.",
  "Supporting companies committed to sustainability can make a difference.",
  "Individuals can take action to reduce their environmental impact by reducing, reusing, and recycling.",
  "Volunteering for clean-up events is a great way to make a positive impact on your community.",
  "Pick up litter whenever you see it to prevent it from entering waterways or harming wildlife.",
  "Properly dispose of hazardous materials like paint and batteries to avoid environmental contamination.",
  "Composting food scraps reduces methane emissions from landfills, a major contributor to climate change.",
  "Planting trees can help absorb carbon dioxide from the atmosphere and mitigate climate change.",
  "Conserving water at home by taking shorter showers and fixing leaky faucets can make a difference.",
  "The first Earth Day was celebrated in 1970.",
  "The world's quietest place is an anechoic chamber at Microsoft where it's so quiet you can hear your own heartbeat.",
  "A group of flamingos is called a flamboyance.",
  "The population of the Earth is estimated to be over 8 billion people.",
  "The Great Blue Hole is a giant underwater sinkhole off the coast of Belize.",
  "The northern lights (aurora borealis) are caused by charged particles from the sun colliding with Earth's atmosphere.",
  "There are more trees on Earth than stars in our galaxy (the Milky Way).",
  "Honeybees can visit up to 100 flowers per trip to collect nectar.",
  "The human brain uses about 20% of the body's total energy.",
  "Recycling one glass bottle conserves enough energy to power a computer for an hour.",
  "There are over 1 million known species of insects on Earth.",
  "The world's hottest pepper is the Carolina Reaper, which can be 200 times hotter than a jalapeno.",
  "A sloth's three-toed feet are specially adapted for hanging upside down from trees.",
  "The world's deepest ocean trench is the Mariana Trench, reaching over 36,000 feet deep.",
  "Whales can communicate with each other over long distances using complex songs.",
  "The human body contains trillions of bacteria, outnumbering our human cells by 10 to 1.",
  "Recycling one ton of aluminum saves enough energy to power a home for 6 months.",
  "The Dead Sea is one of the saltiest bodies of water on Earth, making it difficult for most organisms to survive in its waters.",
  "Composting toilets can also help conserve water in areas facing water scarcity.",
  "Some countries have implemented bans on single-use plastic bags to reduce plastic pollution.",
  "Upcycling involves transforming unwanted items into new and useful products.",
  "There are estimated to be millions of species on Earth that remain undiscovered.",
  "Rainforests are home to over half of the world's known plant and animal species.",
  "Endangered species are animals or plants at risk of extinction.",
  "Conservation efforts aim to protect endangered species and their habitats.",
  "National parks and wildlife refuges provide safe havens for wildlife.",
  "Seed banks store seeds from various plant species to preserve biodiversity.",
  "Sustainable forestry practices ensure responsible harvesting of trees.",
  "Ecotourism involves traveling to natural areas in a way that benefits conservation.",
  "Citizen science allows the public to participate in scientific research and data collection.",
  "Many endangered species have made successful comebacks due to conservation efforts.",
  "Protecting pollinators like bees and butterflies is crucial for healthy ecosystems.",
  "Habitat fragmentation, when natural habitats are broken up, can threaten wildlife populations.",
  "Climate change is a major threat to biodiversity, causing habitat loss and species extinction.",
  "Individuals can support conservation efforts by donating to organizations, volunteering, and making sustainable choices.",
  "The Earth is the only planet in our solar system known to support life.",
  "The human heart beats about 100,000 times a day.",
  "The world's tallest mountain is Mount Everest, reaching over 29,000 feet tall.",
  "The speed of light is about 186,282 miles per second.",
  "The human body can regenerate new skin cells every 28 days.",
  "There are eight planets in our solar system (excluding Pluto, now classified as a dwarf planet).",
  "The five senses are sight, touch, taste, smell, and hearing.",
  "The world's largest ocean is the Pacific Ocean.",
  "A group of penguins is called a colony or waddle.",
  "The human brain is made up of about 86 billion neurons.",
  "The world's longest river is the Nile River in Africa, stretching over 4,100 miles."
];

const FunFacts: React.FC = () => {
  const [currentFact, setCurrentFact] = useState('');

  const generateRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    setCurrentFact(funFacts[randomIndex]);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Button title="Fun Facts" onPress={generateRandomFact} />
        {currentFact ? <Text style={styles.factText}>{currentFact}</Text> : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  factText: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#1e4d2b',
  },
});

export default FunFacts;
