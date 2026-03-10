export type PostSection =
  | {
      type: 'paragraph'
      content: string
    }
  | {
      type: 'heading'
      content: string
    }
  | {
      type: 'list'
      items: string[]
    }
  | {
      type: 'quote'
      content: string
    }

export interface Post {
  slug: string
  title: string
  description: string
  category: string
  publishedAt: string
  readingTime: string
  featured: boolean
  hero: string
  sections: PostSection[]
}

// Para agregar un post nuevo:
// 1. Duplica uno de los objetos dentro de `posts`.
// 2. Cambia `slug`, `title`, `description` y `publishedAt`.
// 3. Escribe el contenido dentro de `sections`.
// 4. Si quieres mostrarlo en el home, usa `featured: true`.
export const posts: Post[] = [
  {
    slug: 'el-prompt-que-uso-para-evitar-texto-robotico-de-ia',
    title:
      'El prompt que uso para evitar texto robótico de IA',
    description:
      'Un prompt simple para reducir el tono artificial, cortar relleno y lograr texto más claro desde el primer intento.',
    category: 'AI Writing',
    publishedAt: '2026-03-10',
    readingTime: '4 min read',
    featured: true,
    hero: 'La IA escribe rápido. Tu trabajo es quitar ruido y devolverle claridad.',
    sections: [
      {
        type: 'paragraph',
        content:
          'Muchos publican texto generado por IA sin editar.'
      },
      {
        type: 'paragraph',
        content: 'El lector lo nota.'
      },
      {
        type: 'list',
        items: [
          'El tono suena artificial.',
          'Las frases se sienten infladas.',
          'El mensaje pierde fuerza.'
        ]
      },
      {
        type: 'paragraph',
        content:
          'Gran parte del texto generado por IA muestra patrones claros.'
      },
      {
        type: 'list',
        items: [
          'frases largas',
          'lenguaje inflado',
          'exageración',
          'emojis',
          'hashtags',
          'formato extraño'
        ]
      },
      {
        type: 'paragraph',
        content: 'El resultado parece spam.'
      },
      {
        type: 'paragraph',
        content:
          'Existe una forma simple de mejorar el resultado.'
      },
      {
        type: 'paragraph',
        content: 'Indicar al modelo cómo escribir.'
      },
      {
        type: 'paragraph',
        content:
          'Antes de pedir cualquier texto, agrego un bloque de instrucciones. Ese bloque elimina gran parte del ruido típico de la IA.'
      },
      {
        type: 'heading',
        content: 'Prompt que uso'
      },
      {
        type: 'quote',
        content: 'Sigue este estilo de escritura.'
      },
      {
        type: 'list',
        items: [
          'Usa lenguaje claro y simple.',
          'Usa frases cortas.',
          'Usa voz activa.',
          'Prioriza ideas prácticas.',
          'Usa ejemplos cuando ayuden a explicar.',
          'Dirígete al lector con "tú".'
        ]
      },
      {
        type: 'quote',
        content: 'Evita lo siguiente.'
      },
      {
        type: 'list',
        items: [
          'emojis',
          'hashtags',
          'exageración',
          'frases largas',
          'metáforas',
          'clichés',
          'lenguaje inflado'
        ]
      },
      {
        type: 'paragraph',
        content: 'Evita palabras de relleno.'
      },
      {
        type: 'heading',
        content: 'Ejemplo'
      },
      {
        type: 'paragraph',
        content:
          'Pides a una IA escribir un post para LinkedIn.'
      },
      {
        type: 'paragraph',
        content: 'Resultado sin instrucciones.'
      },
      {
        type: 'list',
        items: [
          'Texto largo.',
          'Tono de marketing.',
          'Mucho relleno.'
        ]
      },
      {
        type: 'paragraph',
        content: 'Resultado con instrucciones.'
      },
      {
        type: 'list',
        items: [
          'frases cortas',
          'ideas claras',
          'tono directo',
          'lectura rápida'
        ]
      },
      {
        type: 'paragraph',
        content: 'La diferencia aparece de inmediato.'
      },
      {
        type: 'heading',
        content: 'Cómo uso este prompt'
      },
      {
        type: 'paragraph',
        content:
          'Coloco estas instrucciones antes de pedir cualquier texto.'
      },
      {
        type: 'paragraph',
        content: 'Ejemplos.'
      },
      {
        type: 'list',
        items: [
          'escribir un post',
          'redactar un email',
          'crear un artículo',
          'resumir un documento'
        ]
      },
      {
        type: 'paragraph',
        content:
          'El cambio mejora el resultado desde el primer intento.'
      },
      {
        type: 'heading',
        content: 'Consejo final'
      },
      {
        type: 'paragraph',
        content: 'La IA produce texto rápido.'
      },
      {
        type: 'paragraph',
        content:
          'Tu trabajo consiste en mejorar el resultado.'
      },
      {
        type: 'paragraph',
        content: 'Haz tres cosas.'
      },
      {
        type: 'list',
        items: [
          'elimina relleno',
          'agrega experiencia propia',
          'agrega ejemplos reales'
        ]
      },
      {
        type: 'paragraph',
        content:
          'La combinación de IA y criterio humano produce mejor contenido.'
      },
      {
        type: 'paragraph',
        content:
          'Si quieres usar este prompt, copia las reglas de estilo al inicio de cada conversación con tu modelo de IA.'
      }
    ]
  },
  {
    slug: 'shopify-integration-checklist',
    title:
      'My Shopify Integration Checklist Before Any Launch Goes Live',
    description:
      'The short list I run through before shipping a Shopify app, storefront integration, or automation for a client.',
    category: 'Shopify',
    publishedAt: '2026-03-10',
    readingTime: '5 min read',
    featured: false,
    hero: 'A clean demo is not the same thing as a production-ready integration.',
    sections: [
      {
        type: 'paragraph',
        content:
          'Most launch issues are not dramatic engineering failures. They are small assumptions that were never tested against real orders, real customers, or real admin workflows.'
      },
      {
        type: 'heading',
        content: 'What I verify every time'
      },
      {
        type: 'list',
        items: [
          'Authentication flows for both new installs and returning merchants.',
          'Webhook retries, duplicate events, and idempotent processing.',
          'Error visibility so the client can understand what failed and why.',
          'Rate limit handling for burst traffic and backfills.',
          'Fallback behavior when a third-party API is slow or unavailable.'
        ]
      },
      {
        type: 'paragraph',
        content:
          'If money, fulfillment, or customer communication is involved, I also test the unhappy paths first. Success cases are easy. Recovery logic is where production work usually gets exposed.'
      },
      {
        type: 'quote',
        content:
          'Production confidence comes from boring checks done thoroughly.'
      },
      {
        type: 'paragraph',
        content:
          'This is the kind of operational detail that turns a freelance deliverable into something a business can actually depend on.'
      }
    ]
  }
]

export function getAllPosts() {
  return [...posts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  )
}

export function getFeaturedPosts() {
  return getAllPosts().filter((post) => post.featured)
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug)
}
