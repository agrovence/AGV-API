'use strict'

const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')
const ImageTransformer = use('App/Transformers/Admin/ImageTransformer')
const CategoryTransformer = use('App/Transformers/Admin/CategoryTransformer')

/**
 * ProductTransformer class
 *
 * @class ProductTransformer
 * @constructor
 */
class ProductTransformer extends TransformerAbstract {
  defaultInclude() {
    return ['image', 'categories']
  }
  /**
   * This method is used to transform the data.
   */
  transform(model) {
    return {
      id: model.id,
      name: model.name,
      description: model.description,
      price: model.price
    }
  }

  includeImage(model) {
    return this.item(model.getRelated('image'), ImageTransformer)
  }

  includeCategories(model) {
    return this.collection(model.getRelated('categories'), CategoryTransformer)
  }
}

module.exports = ProductTransformer
