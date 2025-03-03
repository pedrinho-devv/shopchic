import { createClient } from 'next-sanity'
import imageURLBuilder from '@sanity/image-url'

// Tipo de dado para a imagem do Sanity
import { Image } from '@sanity/types' // Importando o tipo correto, caso disponível

export const client = createClient({
    projectId: 'zzvakq3o',
    dataset: 'production',
    apiVersion: '2025-03-01',
    useCdn: true,
})

const builder = imageURLBuilder(client)

// Especificando o tipo para o parâmetro 'source'
export function urlFor(source: Image) {
    return builder.image(source)
}
