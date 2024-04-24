import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import page from './schemas/page'
import service from './schemas/service'
import { sectionSelection } from './schemas/builder/sectionSelection'
import { accessibleImage } from './schemas/objects/accessibleImage'
import { SEO } from './schemas/objects/SEO'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, service, post, author, category, blockContent, sectionSelection, accessibleImage, SEO],
}
