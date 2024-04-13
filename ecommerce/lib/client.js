//import sanityClient from '@sanity/client';
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId:'bb0leewk',
    dataset:'production',
    apiVersion: '2024-03-25',
    useCdn:true,
    token:'skeYeecnrhnJ4IqBFuaZoUESjWCst5dIaJBp9KLgxxbOVLchGs5nYNClRFN40RG4F3uOB5PvG9jo7ypNDp7wmDZi8M9GVzURoGqnHTxgqOC4V9iEFxZaPTke0sETHbWQoOCKHytKF8CHWc5GfSvPJqHqipoW1S3JdjHm7kWhkMGVTOgL5nff'
});

const builder = imageUrlBuilder(client);

export const UrlFor = (source) => builder.image(source);