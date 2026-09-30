/* =====================================================
   SATTVIC EATS — PRODUCT CATALOG
   Single source of truth for every Product Detail Page.
   Add a new product = add one object here. No new HTML needed.
   Content sourced from the Sattvic Eats Product Catalogue.
===================================================== */

const PRODUCTS = [

  {
    slug: "arabica-coffee",
    category: "Coffee",
    name: "Arabica/Robusta Filter Coffee Powder",
    tagline: "Bold Aroma. Deep Body. Smooth Balance.",
    image: "images/coffee.jpg",
    tags: ["BEST SELLER", "SOUTH INDIAN FILTER COFFEE"],
    price: 499,
    unit: "500 g pack",
    description:
      "A classic South Indian filter coffee, hand-blended from Arabica and Robusta beans with roasted chicory for a rich aroma and full-bodied cup. Choose Medium for a smooth, everyday brew or Strong for a bolder, deeper cup. Brew as decoction, add hot milk and sweetener to taste.",
    benefits: [
      "Rich, full-bodied South Indian filter coffee",
      "Blend of Arabica aroma and Robusta strength",
      "Roasted chicory adds classic depth of flavour",
      "Two blends to suit your everyday taste"
    ],
    healthValue: [
      "Naturally rich in antioxidants",
      "Boosts alertness and focus",
      "Chicory adds a smooth, mellow finish"
    ],
    variants: {
      label: "Blend",
      options: [
        { id: "medium", name: "Medium", arabica: 45, robusta: 30, chicory: 25 },
        { id: "strong", name: "Strong", arabica: 42, robusta: 28, chicory: 30 }
      ]
    }
  },

  { slug: "badam-powder", category: "Health Blends", name: "Badam Powder",
    tagline: "Daily Nourishment in Every Spoon", image: "images/badam.jpg",
    tags: ["POPULAR"], price: 599, unit: "500 g pack",
    description: "A wholesome almond-based powder made for easy everyday use. Stir into warm milk, smoothies, breakfast bowls or recipes for a comforting, nutty flavour and a daily dose of nourishment.",
    benefits: ["Easy daily almond nutrition", "Stirs smoothly into milk or smoothies", "Comforting nutty flavour", "Ideal for kids and adults"],
    healthValue: ["Made from wholesome almonds", "Naturally rich in healthy fats", "A nourishing everyday ritual"] },

  { slug: "dry-fruit-laddu", category: "Health Blends", name: "Seeds and Dry Fruits Ladoo",
    tagline: "Traditional Goodness, Made for Today.", image: "images/laddu.jpg",
    tags: ["HEALTHY", "NO REFINED SUGAR"], price: 399, unit: "250 g box",
    description: "A wholesome take on the traditional laddu, bringing together the natural richness of almonds, cashews, pistachios, walnuts, raisins and seeds with jaggery and ghee for a satisfying, nourishing bite.",
    benefits: ["Made with dry fruits, seeds, jaggery & ghee", "No refined sugar", "Traditional recipe, everyday portion", "Perfect wholesome treat"],
    healthValue: ["Naturally sweetened with jaggery", "Good source of energy", "Combines the goodness of dry fruits & seeds"] },

  { slug: "almonds", category: "Dry Fruits", name: "Almonds",
    tagline: "Crunch into Nature's Goodness.", image: "images/almond.jpg",
    tags: ["PREMIUM"], price: 799, unit: "500 g pack",
    description: "Premium almonds selected for their natural taste, satisfying crunch and everyday versatility. Enjoy them as a snack or add them to breakfast bowls, smoothies and recipes.",
    benefits: ["21.2 g protein per 100 g", "12.5 g dietary fibre per 100 g", "Satisfying everyday crunch"],
    healthValue: ["Rich in protein & dietary fibre", "Naturally high in healthy fats", "Versatile for snacking & recipes"] },

  { slug: "cashews", category: "Dry Fruits", name: "Cashews",
    tagline: "Creamy Crunch. Pure Indulgence.", image: "images/cashew.jpg",
    tags: ["PREMIUM"], price: 899, unit: "500 g pack",
    description: "Sattvic Eats Cashews are carefully selected for their creamy texture, delicate sweetness and satisfying crunch. Perfect for snacking, cooking, festive preparations or enjoying by the handful.",
    benefits: ["18.2 g protein per 100 g", "Creamy texture, delicate sweetness", "Great for cooking & festive treats"],
    healthValue: ["Good source of healthy fats", "Naturally energising", "A festive favourite"] },

  { slug: "walnuts", category: "Dry Fruits", name: "Walnuts",
    tagline: "Rich Taste. Natural Goodness.", image: "images/walnut.jpg",
    tags: ["PREMIUM"], price: 899, unit: "500 g pack",
    description: "Sattvic Eats Walnuts bring a rich, earthy flavour and naturally satisfying texture to your everyday diet. Enjoy them on their own or add them to breakfast bowls, baking and homemade recipes.",
    benefits: ["15.2 g protein per 100 g", "6.7 g dietary fibre per 100 g", "Rich, earthy everyday flavour"],
    healthValue: ["Naturally rich in healthy fats", "Great for baking & breakfast bowls", "A wholesome everyday nut"] },

  { slug: "pistachios", category: "Dry Fruits", name: "Pistachios",
    tagline: "A Little Green Goodness in Every Bite.", image: "images/pistachio.jpg",
    tags: ["PREMIUM"], price: 1099, unit: "500 g pack",
    description: "Premium pistachios with a naturally rich flavour and satisfying crunch. A beautiful addition to snack boxes, desserts and everyday mindful snacking.",
    benefits: ["20.2 g protein per 100 g", "10.6 g dietary fibre per 100 g", "Naturally rich, satisfying flavour"],
    healthValue: ["High in protein & fibre", "Great for snack boxes & desserts", "A mindful everyday snack"] },

  { slug: "raisins", category: "Dry Fruits", name: "Raisins",
    tagline: "Nature's Little Bites of Sweetness.", image: "images/raisin.jpg",
    tags: [], price: 299, unit: "500 g pack",
    description: "Naturally sweet raisins selected for their pleasant flavour and chewy texture. A convenient addition to breakfast bowls, trail mixes, desserts or an everyday snack.",
    benefits: ["Naturally sweet, no added sugar", "Chewy, everyday snacking texture", "Great in breakfast bowls & trail mixes"],
    healthValue: ["Natural source of quick energy", "3.7 g dietary fibre per 100 g", "A wholesome everyday sweetness"] },

  { slug: "sunflower-seeds", category: "Seeds", name: "Sunflower Seeds",
    tagline: "A Crunch Worth Adding to Every Day.", image: "images/sunflower.jpg",
    tags: [], price: 179, unit: "200 g pack",
    description: "Naturally crunchy sunflower seeds with a mild, nutty taste. A versatile ingredient for snacking, salads, breakfast bowls and homemade mixes.",
    benefits: ["20.8 g protein per 100 g", "8.6 g dietary fibre per 100 g", "Mild, nutty everyday flavour"],
    healthValue: ["Naturally rich in healthy fats", "Versatile for salads & mixes", "A crunchy everyday topping"] },

  { slug: "pumpkin-seeds", category: "Seeds", name: "Pumpkin Seeds",
    tagline: "Small Seeds. Big Everyday Nutrition.", image: "images/pumpkin.jpg",
    tags: [], price: 249, unit: "200 g pack",
    description: "Crunchy pumpkin seeds with a naturally nutty flavour. Enjoy them as a snack, sprinkle them over salads and breakfast bowls, or add them to homemade trail mixes.",
    benefits: ["30.2 g protein per 100 g", "Highest protein of the seed range", "Great over salads & breakfast bowls"],
    healthValue: ["Naturally protein-rich", "6.0 g dietary fibre per 100 g", "A versatile everyday seed"] },

  { slug: "melon-seeds", category: "Seeds", name: "Melon Seeds",
    tagline: "Traditional Goodness in Every Bite.", image: "images/melon.jpg",
    tags: [], price: 249, unit: "200 g pack",
    description: "Delicate, mildly nutty melon seeds that are perfect for snacking and traditional Indian recipes. Add them to desserts, gravies, breakfast bowls or enjoy them on their own.",
    benefits: ["Delicate, mildly nutty flavour", "A traditional Indian kitchen staple", "Great in desserts & gravies"],
    healthValue: ["Good source of protein", "Naturally versatile in cooking", "An everyday traditional favourite"] },

  { slug: "flax-seeds", category: "Seeds", name: "Flax Seeds",
    tagline: "Naturally Fibre-Rich Goodness.", image: "images/flax.jpg",
    tags: [], price: 129, unit: "200 g pack",
    description: "Flaxseeds have a pleasant nutty flavour and are a versatile addition to everyday meals. Add them to smoothies, breakfast bowls, rotis, salads or homemade mixes.",
    benefits: ["27.3 g dietary fibre per 100 g", "Pleasant, nutty everyday flavour", "Versatile in rotis, salads & bowls"],
    healthValue: ["One of the most fibre-rich seeds", "Naturally rich in healthy fats", "An easy everyday addition"] },

  { slug: "chia-seeds", category: "Seeds", name: "Chia Seeds",
    tagline: "Tiny Seeds. Everyday Nutrition.", image: "images/chia.jpg",
    tags: [], price: 199, unit: "200 g pack",
    description: "Chia seeds are an easy way to add texture and nutrients to everyday meals. Soak them in water, add them to smoothies, breakfast bowls, yoghurt or homemade recipes.",
    benefits: ["34.4 g dietary fibre per 100 g", "Soaks well for puddings & drinks", "Easy everyday texture boost"],
    healthValue: ["Exceptionally high in dietary fibre", "16.5 g protein per 100 g", "Great for hydration & smoothies"] },

  { slug: "sesame-seeds", category: "Seeds", name: "Sesame Seeds",
    tagline: "Nature's Power Seeds", image: "images/sesame.jpg",
    tags: [], price: 170, unit: "200g pack",
    description: "Traditional sesame seeds, rich in calcium and a staple of everyday Sattvic cooking.",
    benefits: ["Strengthens bones", "Improves skin & hair", "Supports hormonal balance"],
    healthValue: ["Rich in calcium & iron", "Natural detox support"] }

];

function getProductBySlug(slug) {
  return PRODUCTS.find(p => p.slug === slug);
}
