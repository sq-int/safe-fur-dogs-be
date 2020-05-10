
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('food').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert([
        {
          food: 'chocolate',
          safe: false,
          img: 'https://safefurdogs.com/img/chocolate.svg',
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
          img: 'https://safefurdogs.com/img/chicken.svg',
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
          img: 'https://safefurdogs.com/img/eggs.svg',
          summary: 'The high protein content, essential amino acids, and fatty acids in eggs make them an excellent treat or dietary supplement for dogs.',
          resources: [
            ['Can Dogs Eat Eggs?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-eggs/', 'In the past, dogs stole eggs from birds’ nests and ate them raw, shell and all. Today, most of us don’t let our dogs wander far and wide in search of unguarded nests, but eggs are still a good source of food for dogs, especially in homemade diets.'],
            ['Can Dogs Eat Eggs?', 'https://www.purina.com/articles/dog/nutrition/can-dogs-eat-eggs', 'Dogs can have eggs. In fact, they are a wonderful source of protein. And protein is essential for dogs. “Eggs are considered a gold standard because they’re almost the closest you can get to 100 percent complete, as far as protein goes.”']
          ]
        },
        {
          food: 'grapes',
          safe: false,
          img: 'https://safefurdogs.com/img/grapes.svg',
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
          img: 'https://safefurdogs.com/img/pork.svg',
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
          img: 'https://safefurdogs.com/img/bananas.svg',
          summary: 'Bananas are a great source of potassium, vitamin B6, and vitamin C. They can be an excellent healthy treat.',
          resources: [
            ['Can Dogs Eat Bananas?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-bananas/', 'Bananas are high in potassium, vitamin B6, and vitamin C. In fact, sometimes veterinarians recommend this fruit as a healthy alternative to fatty, salty treats. The fruit is also high in fiber, which can help if your dog is having gastrointestinal problems, and magnesium, which promotes bone growth and helps the body produce protein and absorb vitamins.'],
            ['Can Dogs Have Bananas?', 'https://www.purina.com/articles/dog/nutrition/can-dogs-eat-bananas', 'Peeled bananas are best for dogs, but if he gobbles one whole, don’t worry. Banana peels aren’t toxic to dogs. “That’s not to say eating a banana whole won’t cause your dog to throw up or have diarrhea,” Purina Senior Nutritionist Jan Dempsey says. “That reaction means his system isn’t accustomed to digesting all the fiber a banana peel contains.” It’s always best to peel this fruit and cut it into appropriate serving sizes.']
          ]
        },
        {
          food: 'turkey',
          safe: true,
          img: 'https://safefurdogs.com/img/turkey.svg',
          summary: 'Like the other main meats, turkey can be safe for dogs in moderation as long as it is served plain.',
          resources: [
            ['Can Dogs Eat Turkey?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-turkey/', 'Thanksgiving, for most families, is all about the bird. Hours go into the roasting and basting, and once the feast is over, there are turkey sandwiches, turkey potpies, and turkey casseroles to make. In the midst of all of that leftover turkey, it is tempting to slip our dogs some meat, or even to make them up a plate of it as a special Thanksgiving treat.'],
            ['Is turkey good for my dog?', 'https://trupanion.com/pet-care/can-dogs-eat-turkey', 'Turkey is a popular meat and can be eaten in all sorts of different ways. Especially during Thanksgiving! There\'s plenty of recipes to help you get creative with the leftovers, but question that always comes up is, should you feed turkey to your dog? The answer might be a bit more complicated than you think.']
          ]
        },
        {
          food: 'beef',
          safe: true,
          img: 'https://safefurdogs.com/img/steak.svg',
          summary: 'Beef is very protein-rich and can can also provide other essentials like fatty acids, minerals, and vitamins in your dog\'s diet.',
          resources: [
            [
              "Can My Dog Eat This? A List of Human Foods Dogs Can and Can't Eat",
              "https://www.healthline.com/nutrition/human-foods-for-dogs#section41",
              "The beef that you feed to your dog should be plain, without any added sauces or seasonings. These often contain ingredients that may be harmful to your dog, such as salt."
            ],
            [
              "Can My Dog Eat Beef?",
              "https://www.rover.com/blog/can-my-dog-eat-beef/",
              "Yes! A protein-rich diet is important for your dog as it provides the energy your dog needs, and a lean source of beef is a great option.  Grass-fed beef is recommended and will provide the essential fatty acids, minerals, and vitamins that give your dog a healthy coat, skin, joints, and muscles."
            ]
          ]
        },
        {
          food: 'oranges',
          safe: true,
          img: 'https://safefurdogs.com/img/oranges.svg',
          summary: 'Oranges can be a healthy snack for your dogs in moderate, limited amounts.',
          resources: [
            ['Are Oranges Good for Dogs?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-oranges/', 'Oranges are full of nutrients, potassium, and some fiber, and they are low in sodium, which makes them a healthy snack if given in limited amounts — maybe one or two segments a day. This fruit is also full of vitamin C, which can benefit your dog’s immune system.'],
            ['Can dogs have oranges?', 'https://www.purina.com/articles/dog/nutrition/can-dogs-eat-oranges', 'Yes. Dogs can have fleshy fruit parts of oranges because they aren’t toxic. But does that mean your dog should eat them? A veterinarian can help you answer that. Some factors that impact whether oranges are good or bad for your dog are...'],
            ['Can Dogs Eat Oranges?', 'https://www.petmd.com/dog/nutrition/can-dogs-eat-oranges', 'A few well-known healthy fruits for dogs include blueberries, bananas, and apples. You may even see these fruits as ingredients in your dog’s food and treats. Not only can some fruits promote better health in your pet, they can also become a favorite snack thanks to their sweet and delicious flavors.']
          ]
        },
        {
          food: 'watermelon',
          safe: true,
          img: 'https://safefurdogs.com/img/watermelon.svg',
          summary: 'With no fat or cholesterol, this hydrating fruit can be a great snack for dogs, but seeds and rinds should be avoided.',
          resources: [
            ['Can Dogs Eat Watermelon?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-watermelon/', 'The answer is yes, with a couple of precautions. Seeds could cause an intestinal blockage, so make sure you remove them. It’s also probably not a good idea to allow a dog to chew on the rind, because it can cause gastrointestinal upset.'],
            ['Can dogs eat watermelon?', 'https://trupanion.com/pet-care/can-dogs-eat-watermelon', 'If you\'re a big watermelon fan and so is your dog then you\'re in luck. You can feed your dog watermelon but, like anything else, it\'s important to give it to them in moderation. Exercising caution is always a good idea, as all dogs can react differently to certain foods.']
          ]
        },
        {
          food: 'bacon',
          safe: false,
          img: 'https://safefurdogs.com/img/bacon.svg',
          summary: 'Processed meats such as bacon or sausage are known carcinogens linked to cancer and should be avoided.',
          resources: [
            ['Is Preserved Pork, Such as Ham and Bacon, Safe for My Dog to Eat?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-pork/', 'The answer to both of these meats is no! In 2015, the World Health Organization found that processed meats such as bacon and sausage were known carcinogens linked to cancer. Bacon is an incredibly rich and fatty food with a high salt content, which can prove to be too much for a dog’s stomach to handle. Eating a large amount can cause pancreatitis, which can be fatal.'],
            ['The Truth About Giving Your Dog Bacon!', 'https://canigivemydog.com/bacon', 'Be smart. Do not give a precious pooch any fried bacon. You want your dog to be around for many years. It can be hard to say no, but be strong.'],
            ['Can Dogs Have Bacon or Bacon Grease?', 'https://www.pethealthpharmacy.com/can-dogs-have-bacon-or-bacon-grease/', 'When pets constantly eat rich and fatty foods it can cause inflammation of the pancreas gland. The pancreas is responsible for releasing digestive enzymes in the stomach so that the body can properly absorb and digest food that is taken in. When this gland becomes inflamed, it ceases to function efficiently.']
          ]
        },
        {
          food: 'onions',
          safe: false,
          img: 'https://safefurdogs.com/img/onions.svg',
          summary: 'Onions contain a toxin that can cause severe damage to a dog. Avoid giving them any.',
          resources: [
            ['Are onions toxic to dogs?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-onions/', 'The toxin causes oxidative damage to your dog\'s red blood cells by attaching to the oxygen molecules in your dog\'s red blood cells. This reduces the ability of the red blood cells to carry oxygen, and also tricks your dog\'s body into thinking that the blood cell is an invader. The red blood cell is destroyed in a process known as hemolysis, resulting in hemolytic anemia.'],
            ['Are Onions Bad for Dogs? How to Handle Onion Toxicity', 'https://wildearth.com/blogs/dog-knowledge/are-onions-bad-for-dogs', 'No, onions are not something your dog should eat. In fact, they\'re one of the most dangerous human foods out there for our canine companions. It turns out that ingesting too much onion can damage a dog\'s red blood cells, possibly leading to a serious medical issue called hemolytic anemia.']
          ]
        },
        {
          food: 'garlic',
          safe: false,
          img: 'https://safefurdogs.com/img/garlic.svg',
          summary: 'Garlic, like other members in the allium family, are toxic for dogs and should be avoided.',
          resources: [
            ['Can Dogs Eat Garlic?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-garlic/', 'The smell of roasting garlic is one of those scents that immediately makes most of us hungry. It’s featured in cuisines around the globe and is found in many of our favorite foods. Scientific evidence even suggests that garlic has medicinal benefits for humans, so it’s perfectly natural for you to wonder: Can dogs eat garlic?'],
            ['The Shocking Truth About Dogs and Garlic', 'https://www.petguide.com/health/dog/the-shocking-truth-about-dogs-and-garlic/', 'How do you feel about Dogs and Garlic? Many experts believe that it’s good for your dog’s health. Some say that it’s toxic for dogs. Who is right? The answer might be more complicated than you think.'],
            ['Onion, Garlic, Chive, and Leek Toxicity in Dogs', 'https://vcahospitals.com/know-your-pet/onion-garlic-chive-and-leek-toxicity-in-dogs', 'Besides making your dinner taste great, onions, garlic, leeks and chives can instigate severe medical problems for your dog. Although clinical signs of illness can occur soon after your dog eats the veggies, symptoms may take days to appear.']
          ]
        },
        {
          food: 'apples',
          safe: true,
          img: 'https://safefurdogs.com/img/apples.svg',
          summary: 'Low in protein and fat, apples provide vitamin A and C and are a great snack for dogs.',
          resources: [
            ['Fruits and Vegetables Dogs Can or Can’t Eat', 'https://www.akc.org/expert-advice/nutrition/fruits-vegetables-dogs-can-and-cant-eat/', 'It’s not uncommon to want to spoil your dog by sharing table scraps or your favorite snack. After all, if it is safe for you to eat, it must be OK for them to eat, right? Not necessarily. While many human foods are perfectly safe for dogs, some are very unhealthy and downright dangerous, so it’s critical to learn which fruits and vegetables dogs can eat.'],
            ['Are Apples Good for Dogs?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-apples/', 'Apples are an excellent source of vitamin C, fiber, calcium, and phosphorus, and they’re a safe way to satisfy your pet’s sweet tooth (as opposed to chocolate and other doggy diet no-nos). The fruit is also relatively low in calories, and many dogs love the taste, as well as the crunch. ']
          ]
        },
        {
          food: 'avocado',
          safe: false,
          img: 'https://safefurdogs.com/img/avocado.svg',
          summary: 'Although dogs are more resistant to the toxin in avocados than other animals, they can still be unsafe to consume.',
          resources: [
            ['Can Dogs Eat Avocado?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-avocado/', 'Avocados are one of the trendiest health foods on the market. They’re touted as a nutritious and delicious snack for humans, but what about for our four-legged friends? Can dogs eat avocado? The answer is yes and no. Avocados contain persin, a fungicidal toxin, which can cause serious health problems — even death — in many animals.'],
            ['Can Dogs Eat Avocados? Are Avocados Safe For Dogs?', 'https://dogtime.com/dog-health/dog-food-dog-nutrition/59343-can-dogs-eat-avocados', 'Can dogs eat avocados? There isn’t a short yes or no answer. Avocados can be dangerous for dogs, though reports that they are actually toxic are sometimes blown out of proportion. So long as they are prepared properly, avocados are usually safe for dogs to eat.']
          ]
        },
        {
          food: 'potatoes',
          safe: false,
          img: 'https://safefurdogs.com/img/potatoes.svg',
          summary: 'Recent research has suggested that even though potatoes aren\'t poisonous to dogs, they are not recommended for their diet.',
          resources: [
            ['​Can Dogs Eat Potatoes?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-potatoes/', 'The humble potato — the makings of french fries, hash browns, tater tots, and many other essential comfort foods. When prepared in a healthy way, white potatoes are a nutritious food for humans, but can dogs eat potatoes? The answer is: it depends.'],
            ['Can Dogs Eat Potatoes?', 'https://www.pawculture.com/pet-wellness/nutrition/can-dogs-eat-potatoes/', 'It’s meal time, and you can feel it: your dog looking at you with big, round eyes, hoping for a bite of whatever you’re having. However, not all human indulgences are fit for dog consumption, so you’re wise to think twice before sharing food off of your plate.'],
            ['Can Dogs Eat Potatoes Safely? What About Sweet Potatoes?', 'https://www.dogster.com/lifestyle/can-dogs-eat-potatoes-sweet-potato', 'Originating in South America, potatoes have been grown by humans for thousands upon thousands of years. Grown around the world now, alongside corn, rice, and wheat, potatoes are one of the top food crops on earth. Potatoes, like eggplants and tomatoes, are members of the nightshade family.']
          ]
        },
        {
          food: 'pizza',
          safe: false,
          img: 'https://safefurdogs.com/img/pizza.svg',
          summary: 'Pizza often contains onions or garlic which is toxic to dogs.',
          resources: [
            ['Can My Dog Eat Pizza?', 'https://www.rover.com/blog/can-my-dog-eat-pizza/', 'Probably not. Many pizzas contain onion or garlic in the crust, sauce, or as a topping. These can cause tummy upset for dogs, so be sure to check all ingredients before sharing a pizza with your dog. Dogs may be lactose-intolerant and may also be sensitive to wheat, as well. Monitor your dog carefully if they consume pizza.'],
            ['Can Dogs Eat Pizza? Just the Crust…?', 'https://www.dailydogstuff.com/can-dogs-eat-pizza-just-the-crust/', 'Pizza is filled with delectable ingredients and has an aroma that will send any pooch into a frenzy. While you may be tempted to give in to your canine companion\'s puppy dog eyes and let them enjoy a slice, it\'s important that you don\'t.']
          ]
        },
        {
          food: 'rice',
          safe: true,
          img: 'https://safefurdogs.com/img/rice.svg',
          summary: 'Rice is often an ingredient in dog food, and is safe to consume when cooked.',
          resources: [
            ['Can Dogs Eat Rice?', 'https://www.akc.org/expert-advice/advice/can-dogs-eat-rice/', 'In fact, if you ask many pet owners what they feed their dog when he’s sick, they’ll likely tell you that white rice is a part of their pup’s diet. One of the reasons white rice is the chosen grain for a dog with an upset stomach is that it’s easy to digest, quick to prepare, and low in fiber.'],
            ['Can Dogs Eat Rice?', 'https://www.thesprucepets.com/can-dogs-eat-rice-4769478', 'Since pet food was first commercialized, rice has been a widely used ingredient. The past decade, or so, there has been a grain-free movement among paraprofessionals such as pet supply stores (both national chain and boutique), breeders, trainers, etc. and it doesn\'t seem to be going anywhere soon.']
          ]
        },
        {
          food: 'bread',
          safe: true,
          img: 'https://safefurdogs.com/img/bread.svg',
          summary: 'Bread in moderation is safe for dogs to consume.',
          resources: [
            ['Can Dogs Eat Bread?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-bread/', 'The short answer to the question “can dogs eat bread?” is yes. Dogs can safely eat bread in much the same way as humans—in moderation. Plain white and wheat bread is generally safe for dogs to eat, provided they don’t have any allergies, and it usually does not cause any stomach upset.'],
            ['Can dogs eat bread?', 'https://trupanion.com/pet-care/can-dogs-eat-bread', 'Bread is a common staple in most kitchens, and many dogs have enjoyed a sandwich crust left too close to the edge of the kitchen table or counter. But, is it safe for dogs to eat bread? Here’s what you need to know about dogs and bread.']
          ]
        },
        {
          food: 'milk',
          safe: true,
          img: 'https://safefurdogs.com/img/milk.svg',
          summary: 'Although milk is safe in moderation, a lot of dogs can be lactose intolerant and milk can cause some intestinal issues.',
          resources: [
            ['Can Dogs Drink Milk?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-drink-milk/', 'Milk is a safe treat in small quantities. A few tablespoons of cow’s milk or goat’s milk on an occasional basis can be a nice reward for your dog without the side effects of overindulgence. But, you should probably hold off on offering your dog an entire bowl in one sitting, as it can cause unpleasant reactions, including diarrhea, vomiting, and loose stools.'],
            ['Can Dogs Drink Milk?', 'https://www.petmd.com/dog/nutrition/can-dogs-drink-milk', 'When you picture a pet drinking milk, most will imagine a cat happily lapping up some out of her bowl. So many, might be surprised to hear that cats really shouldn’t ever be poured a bowl of milk. But, when it comes to their four-legged counterparts, is there a similar answer to the question: Can dogs drink `milk?']
          ]
        },

        {
          food: 'peaches',
          safe: true,
          img: 'https://safefurdogs.com/img/peaches.svg',
          summary: 'Peaches can be a great source of vitamin A and fiber, but should be given in moderation as it isn\'t a typical part of a dog\'s diet.',
          resources: [
            ['Can Dogs Eat Peaches?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-peaches/', 'Peaches are a great source of vitamin A and fiber. In small, cut-up pieces the flesh of a peach is safe for your dog. But, like any food that’s not a regular part of his diet, peaches can cause some stomach upset, most commonly temporary diarrhea.'],
            ['Can Dogs Eat Peaches?', 'https://www.healthypawspetinsurance.com/blog/2018/08/21/can-dogs-eat-peaches', 'Sweet and succulent, peaches are the fruit staple of summer. And yes, they are safe for your dog to eat! Peaches are a great source of fiber and Vitamins A and C. A very small amount of the fruit can serve as a nice treat for your pup in the hot summer months.']
          ]
        },
        {
          food: 'chips',
          safe: false,
          img: 'https://safefurdogs.com/img/chips.svg',
          summary: 'Although dogs could potentially safely eat chips, it isn\'t recommended as they do not provide any nutritional value.',
          resources: [
            ['Can Dogs Eat Potato Chips? Are Potato Chips Safe For Dogs?', 'https://dogtime.com/dog-health/dog-food-dog-nutrition/84137-can-dogs-eat-potato-chips', 'Can dogs eat potato chips? You may be wondering if you can share with your pooch as you enjoy a bag of potato chips for yourself, or maybe your dog accidentally ate some off the floor. For most of us human parents, potato chips are a tasty snack we like to have from time to time, so are potato chips also safe for dogs to eat?'],
            ['Can My Dog Eat Chips? How Junk Food Can Harm Your Dog', 'https://www.rover.com/blog/can-my-dog-eat-chips-how-junk-food-can-harm-your-dog/', 'Junk food is a craving that many humans have trouble resisting. From some Cheetos at midnight to potato chips during a game, it’s easy to forget that these tasty treats aren’t that great for us. But what about our dogs? If chips are bad for us, what about our furry best friends?']
          ]
        },
        {
          food: 'cookies',
          safe: false,
          img: 'https://safefurdogs.com/img/cookies.svg',
          summary: 'Common ingredients that are in cookies like nutmeg, chocolate, raisins, and macadamia nuts make cookies and unsafe treat for dogs.',
          resources: [
            ['Can my dog eat cookies?', 'https://www.rover.com/blog/can-dog-eat-cookies/', 'Recipes for the cookies we all love and eat are full of ingredients that can make your dog sick. (Classic chocolate chip, anyone?) My dogs tend to be way more resilient than I think when they eat something questionable, but it’s always better to be safe than sorry.'],
            ['Don’t Feed Your Dog Cookies', 'https://canigivemydog.com/cookies', 'If you want to feed your dog cookies then make them yourself instead of buying them at the grocery store. Homemade is a much better way to share this snack (and in small amounts of course). Another option is specially made organic dog cookies.']
          ]
        },
        {
          food: 'pasta',
          safe: true,
          img: 'https://safefurdogs.com/img/pasta.svg',
          summary: 'Plain pasta isn\'t poinsous to dogs, but it provides very little nutritional value, so it is not recommended. Also avoid serving it with anything additional.',
          resources: [
            ['Can My Dog Eat Pasta?', 'https://www.rover.com/blog/can-my-dog-eat-pasta/', 'We’ve all seen hilarious recreations of the Lady and the Tramp scene with the shared spaghetti noodle. And let’s admit it, tortellini are fun to throw so we can watch our dog try and catch them. Pasta is a great comfort food for us humans, but is it ok for our furry best friends?'],
            ['Is Pasta Good for Dogs?', 'https://smartdogowners.com/pasta/', 'Pasta is a guaranteed comfort food. You make it light and loaded with veggies, or you can make it cheesy and drowning in a rich tomato cream sauce or a white cheese sauce. However you take your pasta, you’ll take it as long as it’s delicious. Before you give your dog a heaping serving of your favorite pasta dish, take a few things into consideration.']
          ]
        },
        {
          food: 'strawberries',
          safe: true,
          img: 'https://safefurdogs.com/img/strawberries.svg',
          summary: 'Strawberries are a great summer, warm weather treat for your dogs, but you should only serve them fresh strawberries.',
          resources: [
            ['Can I Feed My Dog Strawberries?', 'https://www.akc.org/expert-advice/nutrition/feed-dog-strawberries/', 'Strawberries are a healthy, low-calorie, sweet treat for your dog, full of antioxidants, high in fiber and vitamin C. Here’s a bonus. By giving your dog strawberries, you are also helping him stay healthy in more ways than one. For example, over time, fresh fruit may help slow down the aging process, strengthen the immune system, and help with weight management. Strawberries can also help whiten your pup’s teeth.'],
            ['Can Dogs Eat Strawberries? Are Strawberries Safe For Dogs?', 'https://dogtime.com/dog-health/dog-food-dog-nutrition/59519-can-dogs-eat-strawberries', 'Strawberries are full of healthy nutrients that are good for dogs, but like any good thing, they are best enjoyed in moderation. They’re not toxic or poisonous to dogs, but they do contain sugar, and too many can cause an upset stomach.']
          ]
        },
        {
          food: 'pineapples',
          safe: true,
          img: 'https://safefurdogs.com/img/pineapples.svg',
          summary: 'Pineapples are a great treat for dogs that provide a lot of vitamins and minerals, but should be given in moderation because of its high sugar content.',
          resources: [
            ['Can Dogs Eat Pineapple?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-pineapple/', 'Pineapple is a favorite fruit for many people. It is tart, sweet, and tangy, and its tropical origins put us in mind of warmer climates. In moderation, it can also be a healthy treat for dogs, similar to other types of fruit, like strawberries and watermelon.'],
            ['Can Dogs Eat Pineapple? What to Know About Dogs and Pineapples', 'https://www.dogster.com/dog-food/can-dogs-eat-pineapple', 'So, can dogs eat pineapple? Emmy award-winning veterinarian Dr. Jeff Werber confirms that not only is pineapple safe for dogs, pineapple is actually a healthy treat to share with your dogs! But before you feed your dog pineapple, read this first.']
          ]
        },
        {
          food: 'cheese',
          safe: 'true',
          img: 'https://safefurdogs.com/img/cheese.svg',
          summary: 'Cheese is a great source of protein and calcium and is often used to train dogs, but should be given in moderation.',
          resources: [
            ['Can Dogs Eat Cheese?​', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-cheese/', 'Yes, dogs can eat cheese. In fact, cheese is often a great training tool, especially for puppies. But should dogs eat cheese? While some dogs can eat cheese, and most dogs love it, many dogs can be intolerant of cheese. Even for dogs that are able to tolerate cheese, it is probably best fed in moderation.'],
            ['Can Dogs Eat Cheese?', 'https://www.rover.com/blog/can-dogs-eat-cheese/', 'Can dogs eat cheese? Our furry companions would, of course, give an enthusiastic yes. And while cheese is not toxic to dogs, a simple yes doesn’t quite cover the canine relationship with cheese.']
          ]
        },
        {
          food: 'peanut butter',
          safe: 'true',
          img: 'https://safefurdogs.com/img/peanutbutter.svg',
          summary: 'Unsalted peanut butter without extra sugar or additives can be a safe treat for dogs in moderation.',
          resources: [
            ['Can Dogs Eat Peanut Butter?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-peanut-butter/', 'Does your dog magically appear in the kitchen every time you open up the peanut butter jar? You are not alone. Most dog owners give their dogs peanut butter from time to time, and this nutty treat does indeed drive dogs nuts. It can be spread inside hollow bones and toys for a long-lasting treat, or just licked from a spoon or finger as a quick reward.'],
            ['What Kind of Peanut Butter is Safe for Dogs?', 'https://www.preventivevet.com/dogs/is-peanut-butter-safe-for-dogs', 'Xylitol is an increasingly common sugar-replacement sweetener that\'s in hundreds of products, including some brands of peanut butter. It\'s an “all natural” sugar substitute that’s fine for people, but it’s extremely poisonous to dogs and poisons thousands of dogs each year.']
          ]
        },
        {
          food: 'peanuts',
          safe: 'true',
          img: 'https://safefurdogs.com/img/peanuts.svg',
          summary: 'Raw, unsalted peanuts can be a treat high in protein and healthy fats for dogs. Nuts that have more additives that people usually enjoy eating should be avoided.',
          resources: [
            ['Can Dogs Eat Peanuts?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-peanuts/', 'Everyone knows that dogs love peanut butter. Since peanut butter is made from peanuts, most of us assume that peanuts are safe for dogs, too. The answer is not quite that simple, however.'],
            ['Can Dogs Eat Peanuts? Are Peanuts Safe For Dogs?', 'https://dogtime.com/dog-health/dog-food-dog-nutrition/59009-can-dogs-eat-peanuts', 'Can dogs eat peanuts? The short answer is yes, dogs can eat peanuts, but there are some big exceptions and things you should know before you feed them to your dog.']
          ]
        },
        {
          food: 'broccoli',
          safe: 'true',
          img: 'https://safefurdogs.com/img/broccoli.svg',
          summary: 'Raw and cooked broccoli is safe for dogs to consume as long as there are no seasonings or oil added.',
          resources: [
            ['Can Dogs Eat Broccoli?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-broccoli/', 'Yes, dogs can eat broccoli. Dogs can eat both cooked and raw broccoli, as long as there are no seasonings or oils added. However, this vegetable should always be given in very small quantities, especially because the florets contain isothiocyanates, which can cause gastric irritation in dogs.'],
            ['Can My Dog Eat Broccoli?', 'https://www.rover.com/blog/can-dog-eat-broccoli/', 'Did you know that the top of the broccoli florets are truly flower buds? Maybe that’s why it’s one of the healthiest foods in our diets. Broccoli is rich in vitamins and minerals, a great source of dietary fiber, and delicious when roasted, steamed, or any way you cook it. But can dogs eat broccoli?']
          ]
        },
        {
          food: 'cauliflower',
          safe: 'true',
          img: 'https://safefurdogs.com/img/cauliflower.svg',
          summary: 'Cauliflower is an excellent source of fiber, vitamin K, vitamin C, calcium, and potassium for dogs.',
          resources: [
            ['Can Dogs Eat Cauliflower?', 'https://www.rover.com/blog/can-my-dog-eat-cauliflower/', 'Yes! Cauliflower is healthy for your dog to eat and is a good source of fiber, vitamins K, vitamin C, calcium, potassium, and folate. These vitamins support the health of your dog’s vision, blood, liver, muscles, immune system, and more. Fiber is good for your dog’s colon health, weight issues, and bowel issues.'],
            ['Can Dogs Eat Cauliflower?', 'https://www.littlethings.com/can-dogs-eat-cauliflower', 'Cauliflower is not toxic to dogs, according to Jessica Potosky, doctor of veterinary medicine (DVM). “We don’t recommend feeding them much of it at a time, as anything not a part of the usual diet, especially in excess, can cause gastrointestinal problems, such as nausea, gas or loose stools,” she said. “But a little at a time is fine. A couple of bites of the florets would probably be enough for a small dog, a little more for a larger one.”']
          ]
        },
        {
          food: 'kiwis',
          safe: 'true',
          img: 'https://safefurdogs.com/img/kiwis.svg',
          summary: 'Kiwis are a great snack in moderation for dogs, but they do not provide much nutritional value.',
          resources: [
            ['Can Dogs Eat Kiwi?', 'https://www.akc.org/expert-advice/advice/can-dogs-eat-kiwi/', 'Available all year-round and loaded with more vitamin C than an orange and more potassium than a banana, kiwi is a sweet fruit that tastes good and provides an abundance of nutritious benefits. But, can dogs eat kiwi? If you’re snacking on a kiwi, it’s perfectly fine to share with your dog. Just be mindful of a few concerns before you do.'],
            ['Are Kiwis Safe for Dogs?', 'https://smartdogowners.com/kiwis/', 'The furry brown fruit known today as the kiwi belongs in the genus Actinidia, a group of woody plants that originate from north-central and eastern Asia. Growing as vines or shrubs, these plants produce several types of edible berries that are have been exported worldwide.']
          ]
        },
        {
          food: 'carrots',
          safe: 'true',
          img: 'https://safefurdogs.com/img/carrots.svg',
          summary: 'Carrots can be a great low calorie treat for your dogs to reward them with for good behavior.',
          resources: [
            ['Can Dogs Eat Carrots?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-carrots/', 'Carrots offer dog owners an affordable and nutritious snack for their pets. In addition, this vegetable is perfect for rewarding good behavior, without the calorie count associated with biscuits and other treats. Some vets even recommend cold or frozen carrots for teething puppies, as a way to relieve teething discomfort.'],
            ['Can Dogs Eat Carrots? Are Carrots Good for Dogs?', 'https://www.dogster.com/dog-food/can-dogs-eat-carrots-are-carrots-good-for-dogs', 'The short answer to “Can dogs eat carrots?” is good news. The better news is that not only can dogs eat carrots, but carrots are actually very healthy for dogs. Experts everywhere say carrots are amazing, healthy snacks for our canine friends. Dr. Evan Antin of Conejo Valley Veterinary Hospital in Thousand Oaks, California, agrees. “Carrots are great,” he says. “I feed them to my [dog] Henry every day! They offer a low-calorie source of extra food for hungry dogs, are high in fiber and also help to slow down the progression of dental disease.”']
          ]
        },
        {
          food: 'lettuce',
          safe: 'true',
          img: 'https://safefurdogs.com/img/lettuce.svg',
          summary: 'Given in moderation, lettuce is a great healthy snack for dogs as it\'s roughly around 90 percent water.',
          resources: [
            ['Can Dogs Eat Lettuce?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-lettuce/', 'For a lot of Americans, salads are a popular meal option. But can dogs eat lettuce? In general, yes. Lettuce of the romaine, arugula, and iceberg variety do not contain anything that can really harm your dog. After all, it is 90 percent water. It’s also a low-calorie snack that could be a good training treat for an overweight dog. Plus, there’s just something about that crunch that dogs love!'],
            ['Can My Dog Eat Lettuce?', 'https://www.rover.com/blog/can-my-dog-eat-lettuce/', 'Yes! Romaine, iceberg, and green leaf lettuce are safe for your dog. The greener the lettuce, the healthier it will be for your dog. Lettuce is a great source of vitamin A and K. These vitamins support the health of your dog’s liver, blood, vision, immune function, and cell function.']
          ]
        },
        {
          food: 'peas',
          safe: 'true',
          img: 'https://safefurdogs.com/img/peas.svg',
          summary: 'Green peas, such as snow peas, sugar snap peas, and garden, or English peas can be a good snack for dogs, but canned peas should be avoided.',
          resources: [
            ['Can Dogs Eat Peas?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-peas/', 'Spring is the season for fresh peas, straight from the garden or farmer’s market. Keeping in mind that fruits and vegetables aren’t necessary to a dog’s diet and should only be an occasional treat, there’s nothing wrong with adding some peas to your dog’s food or offering them as a treat. Peas are often included as an ingredient in commercial dog food.'],
            ['Can My Dog Eat Green Peas?', 'https://www.rover.com/blog/can-my-dog-eat-green-peas/', 'Yes! Green peas are a healthy treat for your dog as they are high in vitamin A, vitamin K, and various B vitamins. Peas are also a good source of fiber, iron, zinc, potassium, and magnesium. These vitamins and minerals are good for your dog’s vision, skin, digestion, immune system, nerves, heart, and more.']
          ]
        },
        {
          food: 'salmon',
          safe: 'true',
          img: 'https://safefurdogs.com/img/salmon.svg',
          summary: 'Salmon is a great source of omega-3 fatty acids, protein, and is often an ingredient in high quality dog foods.',
          resources: [
            ['Can Dogs Eat Salmon?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-salmon/', 'The short answer is yes. Salmon is a great source of omega-3 fatty acids, which support the immune system, may decrease inflammation, and can keep your dog’s coat looking shiny and healthy. It’s also a good protein source. In fact, salmon is a common ingredient in high-quality dog foods. If your dog is allergic to more common sources of protein, like chicken, salmon may be a good alternative.'],
            ['Can Dogs Eat Salmon? Is Salmon Safe For Dogs?', 'https://dogtime.com/dog-health/83818-can-dogs-eat-salmon', 'Salmon has many dense nutrients that can be beneficial to your dog’s health. For example, it’s high in eicosatetraenoic acid (EPA) and docosahexaenoic acid (DHA), which are both long-chain omega-3 fatty acids. Here are some of the benefits of EPA and DHA consumption for your pup.']
          ]
        },
        {
          food: 'french fries',
          safe: 'false',
          img: 'https://safefurdogs.com/img/frenchfries.svg',
          summary: 'French fries can be high in salt and fat content. Although it may be safe for your pup to have a fry or too, it isn\'t recommended.',
          resources: [
            ['Can Dogs Eat French Fries?', 'https://www.dogster.com/dog-food/can-dogs-eat-french-fries', '“The basic principle is that you shouldn’t feed your pet human foods, but foods such as French fries, hot dogs and hamburgers contain excessive amounts of salt and fat for your canine companions,” says Dr. Frederic Gaschen, a specialist in small animal internal medicine and professor at Louisiana State University.'],
            ['Read This Before Giving Your Dog French Fries!', 'https://canigivemydog.com/french-fries', 'Well, obviously, it is not a great treat. You’d be smart to avoid feeding your dog french fries (at least not regularly) and especially fried potatoes with added oil and salt.']
          ]
        },
        {
          food: 'hamburgers',
          safe: 'true',
          img: 'https://safefurdogs.com/img/burgers.svg',
          summary: 'Plain hamburgers, just the beef, without salt or added seasonings is safe for dogs, but with additions like garlic, onions, etc., can make them very dangerous.',
          resources: [
            ['Can My Dog Eat Hamburger?', 'https://www.rover.com/blog/can-dog-eat-hamburger/', 'Yes! Plain hamburger meat, without added salt or spices, is a healthy source of protein for your dog. Cooked hamburger carries a lower risk of food-borne illness, but dogs’ strong stomach acid kills most bacteria. Be sure that there is no onion or garlic cooked into the meat, as both can be fatal to dogs. If you’re feeding your pet your leftovers, remove all condiments and extras so that your pet gets the protein boost without unnecessary sugars.'],
            ['Can Dogs Eat Hamburger Meat?', 'https://perfectpattyshaperz.com/can-dogs-eat-hamburger-meat/', 'You may think about giving your dog ground beef, but can dogs eat hamburger meat? Yes, you actually can feed your dog plain hamburger meat without added spices including salt and pepper. Hamburger meat, or ground beef, is a good source of protein for your pet. Absolutely do not put any cooked onion or garlic into the meat as can be the fatal outcome for your dog – so no spices at all.']
          ]
        },
        {
          food: 'pears',
          safe: 'true',
          img: 'https://safefurdogs.com/img/pears.svg',
          summary: 'Pears are a great source of fiber, vitamin A, and vitamin C for dogs, but should be given in moderation.',
          resources: [
            ['Can Dogs Eat Pears?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-pears/', 'As humans, we love pears, and it is natural to want to share the things we love with our dogs. Sometimes this tendency gets our dogs into trouble. Most pet owners know that not all fruits and veggies are safe for dogs, but can dogs eat pears? Luckily for our canine companions, the answer is yes.'],
            ['Can My Dog Eat Pears?', 'https://www.rover.com/blog/can-dog-eat-pears/', 'The answer is Yes! Pears are perfectly healthy for dogs, and many dogs love them. They are rich in important nutrients but keep in mind that they are also high in sugar, so they should be used as an occasional treat only.']
          ]
        },
        {
          food: 'bell peppers',
          safe: 'true',
          img: 'https://safefurdogs.com/img/bellpeppers.svg',
          summary: 'Bell peppers are a nutritious treat for your furry companions, packed with essential vitamins and nutrients.',
          resources: [
            ['Can Dogs Eat Bell Peppers?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-bell-peppers/', 'For pet owners, it can be difficult to keep track of which foods are harmful to dogs. For example, can dogs eat bell peppers? In this instance, the answer is yes. Bell peppers pack a punch when it comes to nutritional value for both you and your furry friend. “They’re not toxic, and they are a healthy alternative snack to share with your dog,” says Dr. Carly Fox, a staff doctor at New York City’s Animal Medical Center.'],
            ['Can My Dog Eat Red Peppers?', 'https://www.rover.com/blog/can-my-dog-eat-red-peppers/', 'Maybe. Red bell peppers are healthy for dogs and contain high levels of vitamins A, C, E, and lots of antioxidants. While red bell peppers boost your dog’s immune system and reduce inflammation, spicy red peppers are not recommended for your dog.']
          ]
        },
        {
          food: 'jalapenos',
          safe: 'false',
          img: 'https://safefurdogs.com/img/jalapenos.svg',
          summary: 'Because of their spiciness, jalapenos are not recommended because it can be hard for dogs to digest.',
          resources: [
            ['Can Dogs Have Jalapenos Safely?', 'https://ultimatehomelife.com/can-dogs-eat-jalapenos/', 'Because Jalapenos are considered to be spicy peppers and not sweet peppers, the answer to that question is NO, canines can’t safely eat Jalapenos without the risk of negative effects taking place.'],
            ['Read This Before Feeding Your Dog a Jalapeno!', 'https://canigivemydog.com/jalapeno', 'If your dog ate a jalapeno, or food containing jalapenos, without your consent you probably don’t have to worry about any long term problems. You should, however, prepare for some diarrhea and keep an eye on them over the next few hours to see how they’re doing.']
          ]
        },
        {
          food: 'squash',
          safe: 'true',
          img: 'https://safefurdogs.com/img/squash.svg',
          summary: 'Squash is fibrous and can help dogs with bouts of diarrhea.',
          resources: [
            ['What Vegetables Can Dogs Eat?', 'https://www.whole-dog-journal.com/food/what-vegetables-can-dogs-eat/', 'Vegetables can be a great addition to your dog\'s diet if you stick to those that are safe and hand out an appropriate amount. So which vegetables are good for dogs? Let\'s explore the best vegetables for dogs by veggie type.'],
            ['Can My Dog Eat Butternut Squash?', 'https://www.rover.com/blog/can-my-dog-eat-butternut-squash/', 'Butternut squash is a popular fall vegetable for good reason: its sweet, nutty flavor, long shelf life, and versatility. If you’re making butternut squash soup, roasted butternut squash, or even butternut squash pie (we hear it’s superior to pumpkin!), you may be wondering if your dog can have a taste of all that squash goodness.']
          ]
        }
      ]);
    });
};
