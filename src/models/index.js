// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Assets } = initSchema(schema);

export {
  Assets
};