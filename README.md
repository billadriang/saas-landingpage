# Bill Gaize Site

## Admin de posts

La administracion vive en `/admin`.

### Variables necesarias

Copia `.env.example` a `.env.local` y define:

- `ADMIN_PASSWORD`: password para entrar al panel
- `SESSION_SECRET`: secreto para firmar la cookie de sesion
- `GITHUB_TOKEN`: token con permisos de escritura al repo
- `GITHUB_OWNER`: por defecto `billadriang`
- `GITHUB_REPO`: por defecto `saas-landingpage`
- `GITHUB_BRANCH`: por defecto `main`

### Como funciona

- Los posts se guardan como archivos JSON en `content/posts`.
- En local, si no hay `GITHUB_TOKEN`, el admin escribe esos archivos directo en disco.
- En produccion, con `GITHUB_TOKEN`, el admin crea, edita y borra posts haciendo commits al repo por GitHub API.
- Cada cambio al repo dispara un nuevo deploy del sitio.

### SEO

El sitio ahora genera:

- metadata y canonical por pagina
- metadata por articulo
- `robots.txt`
- `sitemap.xml`
- schema `BlogPosting` para cada post
