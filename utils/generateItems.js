import {faker} from '@faker-js/faker'

const {commerce, database} = faker

const generateCategories = num => {
  const categories = []
  let i = 0;
  if(num > 10) num = 10;
  do {
    const category = commerce.department()
    const condition = categories.some(e => e.value === category)
    if (!condition || i === 0) {
      categories[i] = {value: category, id: database.mongodbObjectId()}
      i++
    }
  } while(i < num)
  return categories
}
const generateProducts = (categories, num = 1) => {
  let products = []
  for (let i = 0; i < num; i++) {
    const newProducts = categories.map(e => {return{
      value:commerce.product(), 
      id: database.mongodbObjectId(), 
      price: commerce.price(10, 300, 1, '$'), 
      category: e.value
    }})
    products = [...products,...newProducts]
  }
  return products
}

export { generateCategories, generateProducts}