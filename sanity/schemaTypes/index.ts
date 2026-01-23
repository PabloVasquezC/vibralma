import { type SchemaTypeDefinition } from 'sanity'
import { activityType } from './activityType'
import { collaboratorType } from './collaboratorType'
import { galeriaItemType } from './galeriaItemType'
import { serviceType } from './serviceType'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [activityType, collaboratorType, galeriaItemType, serviceType],
}
