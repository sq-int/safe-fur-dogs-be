
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('food').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert([
        {
          food: 'chocolate',
          safe: false,
          img: 'http://safefurdogs.com/img/chocolate.svg',
          summary: 'Chocolate is toxic to dogs and could cause a medical emergency depending on the amount ingested.',
          resources: [
            ['What to Do if Your Dog Eats Chocolate', 'https://www.akc.org/expert-advice/health/what-to-do-if-your-dog-ate-chocolate/', 'Chocolate is toxic to dogs, and depending on the type and amount of chocolate consumed and the weight of your dog, it could cause a serious medical emergency. If you know your dog has eaten chocolate, it’s important to monitor him for signs of toxicity'],
            ['4 Types of Chocolate, and How They Impact Dogs', 'https://www.petmd.com/dog/nutrition/4-types-chocolate-and-how-they-impact-dogs', 'While chocolate is a sweet treat that humans can enjoy, it’s something dogs should never have. Depending on body weight, even a small bite of chocolate can make a dog sick—in a large enough quantity, death is a possibility.'],
            ['Chocolate Poisoning in Dogs', 'https://vcahospitals.com/know-your-pet/chocolate-poisoning-in-dogs', 'Yes, chocolate is toxic to dogs (and cats!). While rarely fatal, chocolate ingestion can result in significant illness. Chocolate is toxic because it contains a chemical called theobromine, as well as caffeine. Theobromine is the predominant toxin in chocolate and is very similar to caffeine.'],
            ['What to do if Your Dog Eats Chocolate', 'https://www.vets-now.com/pet-care-advice/dog-eaten-chocolate/', 'No, dogs should not eat chocolate as it contains a chemical called theobromine, which is poisonous to dogs. Darker, purer varieties of chocolate tend to have the highest levels but it’s also found in milk chocolate. Is chocolate bad for dogs is a common question but the bottom line is dogs and chocolate don’t mix.']
          ]
        },
        {
          food: 'chicken',
          safe: true,
          img: 'http://safefurdogs.com/img/chicken.svg',
          summary: 'Chicken can be a great source of protein for dogs, and can even be substituted for or added to his or her regular meal.',
          resources: [
            ['Can Dogs Eat Chicken', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-chicken/', 'Considering how many dog foods contain it, it’s a safe bet that you can feed your dog chicken. In fact, it’s a good source of protein, and cooked chicken can even be substituted for or added to his regular meal.'],
            ['Healthy Food Checklist: Chicken for Dogs', 'https://www.petmd.com/dog/nutrition/healthy-foods-checklist-chicken-dogs', 'Chicken is considered a lean meat and it provides many benefits to our canine companions. Dogs need protein as a main energy source, and chicken provides that boost without a big calorie count.'],
            ['28 Foods Not To Feed Your Dog (And A List Of Those You Can)', 'https://www.caninejournal.com/foods-not-to-feed-dog/', 'https://www.caninejournal.com/foods-not-to-feed-dog/']
          ]
        },
        {
          food: 'eggs',
          safe: true,
          img: 'http://safefurdogs.com/img/eggs.svg',
          summary: 'The high protein content, essential amino acids, and fatty acids in eggs make them an excellent treat or dietary supplement for dogs.',
          resources: [
            ['Can Dogs Eat Eggs?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-eggs/', 'In the past, dogs stole eggs from birds’ nests and ate them raw, shell and all. Today, most of us don’t let our dogs wander far and wide in search of unguarded nests, but eggs are still a good source of food for dogs, especially in homemade diets.'],
            ['Can Dogs Eat Eggs?', 'https://www.purina.com/articles/dog/nutrition/can-dogs-eat-eggs', 'Dogs can have eggs. In fact, they are a wonderful source of protein. And protein is essential for dogs. “Eggs are considered a gold standard because they’re almost the closest you can get to 100 percent complete, as far as protein goes.”']
          ]
        },
        {
          food: 'grapes',
          safe: false,
          img: 'http://safefurdogs.com/img/grapes.svg',
          summary: 'Grapes and their raisin counterpart are highly toxic to dogs.',
          resources: [
            ['Are Grapes Bad for Dogs?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-grapes/', 'Can dogs eat grapes? The answer (and this goes for raisins, too, which are just dried grapes) is easy: No. Grapes and raisins are known to be highly toxic to dogs, though research has yet to pinpoint exactly which substance in the fruit causes this reaction.'],
            ['Can Dogs Eat Grapes?', 'https://www.purina.com/articles/dog/nutrition/can-dogs-eat-grapes', 'If you’re wondering “Can dogs eat grapes?” the answer is a resounding no. Both grapes and raisins are bad for dogs. They can cause severe reactions and may even be fatal. Keep reading to find out why grapes and raisins aren’t good for dogs, learn the signs of toxicity and explore alternative treats for your pup.'],
            ['Grape and Raisin Poisoning in Dogs', 'https://www.petmd.com/dog/emergency/digestive/e_dg_grape_raisin_toxicity', 'Grape and raisin (dried grapes) toxicity is well documented in dogs.* Although the exact substance that causes the toxic reaction is not yet known, dogs should not eat grapes and raisins because even small amounts can prove to be fatally toxic for a dog.'],
            ['How Toxic Are Grapes for Dogs', 'https://www.petful.com/pet-health/how-toxic-are-grapes-for-dogs/', 'The type of grape doesn’t matter. It can be green, red, commercially grown or from your backyard. The source of the toxicity is unknown, but what is known is that dogs have become ill and died from ingesting grapes and raisins (dried grapes).']
          ]
        },
        {
          food: 'pork',
          safe: true,
          img: 'http://safefurdogs.com/img/pork.svg',
          summary: 'Pork can be safe to eat, but only if there is not a lot of extra additions like seasonings added to it.',
          resources: [
            ['Can Dogs Eat Pork?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-pork/', 'While this is an area some owners might debate, the answer is a little more involved than just a straight yes or no. It is safe to eat pork, but there are certain conditions that must be adhered to if you plan to feed your dog the other white meat.'],
            ['Is Pork Bad For Dogs?', 'https://www.thedogclinic.com/is-pork-bad-for-dogs', 'Dog foods containing pork are all the rage at the moment. Pet stores stock everything from from pork biscuits to pigs ears, so it’s not surprising owners assume this type of meat is healthy.'],
            ['Can Dogs Eat Pork?', 'https://www.cuteness.com/13707549/can-dogs-eat-pork', 'Typically, we think that meat is okay for dogs to ingest because it seems natural. We eat it. Wolves eat it. It seems only fair that dogs should be able to chow down on some too. But is pork safe for dogs to eat?']
          ]
        },
        {
          food: 'bananas',
          safe: true,
          img: 'http://safefurdogs.com/img/bananas.svg',
          summary: 'Bananas are a great source of potassium, vitamin B6, and vitamin C. They can be an excellent healthy treat.',
          resources: [
            ['Can Dogs Eat Bananas?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-bananas/', 'Bananas are high in potassium, vitamin B6, and vitamin C. In fact, sometimes veterinarians recommend this fruit as a healthy alternative to fatty, salty treats. The fruit is also high in fiber, which can help if your dog is having gastrointestinal problems, and magnesium, which promotes bone growth and helps the body produce protein and absorb vitamins.'],
            ['Can Dogs Have Bananas?', 'https://www.purina.com/articles/dog/nutrition/can-dogs-eat-bananas', 'Peeled bananas are best for dogs, but if he gobbles one whole, don’t worry. Banana peels aren’t toxic to dogs. “That’s not to say eating a banana whole won’t cause your dog to throw up or have diarrhea,” Purina Senior Nutritionist Jan Dempsey says. “That reaction means his system isn’t accustomed to digesting all the fiber a banana peel contains.” It’s always best to peel this fruit and cut it into appropriate serving sizes.']
          ]
        },
        {
          food: 'turkey',
          safe: true,
          img: 'http://safefurdogs.com/img/turkey.svg',
          summary: 'Like the other main meats, turkey can be safe for dogs in moderation as long as it is served plain.',
          resources: [
            ['Can Dogs Eat Turkey?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-turkey/', 'Thanksgiving, for most families, is all about the bird. Hours go into the roasting and basting, and once the feast is over, there are turkey sandwiches, turkey potpies, and turkey casseroles to make. In the midst of all of that leftover turkey, it is tempting to slip our dogs some meat, or even to make them up a plate of it as a special Thanksgiving treat.'],
            ['Is turkey good for my dog?', 'https://trupanion.com/pet-care/can-dogs-eat-turkey', 'Turkey is a popular meat and can be eaten in all sorts of different ways. Especially during Thanksgiving! There\'s plenty of recipes to help you get creative with the leftovers, but question that always comes up is, should you feed turkey to your dog? The answer might be a bit more complicated than you think.']
          ]
        }
      ]);
    });
};
