import {createClient} from 'next-sanity'
import imageURLBuilder from '@sanity/image-url'



export const client = createClient({
    projectId:'zzvakq3o',
    dataset:'production',
    apiVersion: '2025-03-01',
    useCdn: true,
})

const builder = imageURLBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}