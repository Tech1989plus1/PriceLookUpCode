const db = require('./index.js');
const Plu = require('./model/Plu.js');

const samplePlu = [
  { 
    name:'Honey Crisp',
    description: 'medium-to-large sized apple, with a light green/yellow background largely covered with red-orange flush with strong hint of pink if grown in good sunlight',
    plu: 6964,
    category: 'produce',
    sub_category: 'apple'
  },
  {
    name:'Navel Calif.',
    description: ' naturally tasty, refreshingly flavorful and utterly healthy.',
    plu: 5949,
    category: 'produce',
    sub_category: 'orange'
  },
  {
    name:'Red Seedless',
    description: 'Typically deep red, round or oval berries depending on variety. Sweet and juicy with a crisp texture',
    plu: 6954,
    category: 'produce',
    sub_category: 'grape'
  },
  {
    name:'Watermelon Seedless',
    description: 'Citrullus lanatus is a plant species in the family Cucurbitaceae, a vine-like flowering plant originating ',
    plu: 5433,
    category: 'produce',
    sub_category: 'melons'
  },
  {
    name:'Black Plums',
    description: '',
    plu: 4040,
    category: 'produce',
    sub_category: 'plums'
  }
];

const insertSamplePlu = () => {
  Plu.create(samplePlu)
    .then(() => db.disconnect());
};

insertSamplePlu();
