#!/usr/bin/env bash

set -Eeuo pipefail

echo "🚀 Reorganizando estructura del proyecto..."

#
# Verificar repositorio Git
#

git rev-parse --git-dir >/dev/null 2>&1 || {
  echo "❌ Debes ejecutar este script desde la raíz del repositorio."
  exit 1
}

#
# Helper
#

move() {
  local source="$1"
  local target="$2"

  if [[ -e "$source" ]]; then
    mkdir -p "$(dirname "$target")"
    git mv "$source" "$target"
    echo "✅ $source → $target"
  else
    echo "⚠️  Omitido: $source"
  fi
}

#
# Crear estructura destino
#

mkdir -p src/components/blog
mkdir -p src/components/projects
mkdir -p src/components/site

mkdir -p src/config

#
# Site components
#

move \
  src/components/critical/Container.astro \
  src/components/site/Container.astro

move \
  src/components/critical/Footer.astro \
  src/components/site/Footer.astro

move \
  src/components/critical/Navigation.astro \
  src/components/site/Navigation.astro

move \
  src/components/critical/Section.astro \
  src/components/site/Section.astro

move \
  src/components/critical/SectionHeader.astro \
  src/components/site/SectionHeader.astro

#
# Standalone components
#

move \
  src/components/critical/Heading.astro \
  src/components/Heading.astro

move \
  src/components/critical/Hero.astro \
  src/components/Hero.astro

#
# Blog components
#

move \
  src/components/non-critical/BlogPostList.astro \
  src/components/blog/BlogPostList.astro

move \
  src/components/non-critical/ReadingProgressBar.astro \
  src/components/blog/ReadingProgressBar.astro

move \
  src/components/non-critical/ReadingTime.astro \
  src/components/blog/ReadingTime.astro

move \
  src/components/non-critical/RelatedPosts.astro \
  src/components/blog/RelatedPosts.astro

move \
  src/components/non-critical/ShareButtons.astro \
  src/components/blog/ShareButtons.astro

move \
  src/components/non-critical/TableOfContents.astro \
  src/components/blog/TableOfContents.astro

move \
  src/components/non-critical/TagCloud.astro \
  src/components/blog/TagCloud.astro

#
# Project / OSS related
#

move \
  src/components/non-critical/ContributionItem.astro \
  src/components/projects/ContributionItem.astro

move \
  src/components/non-critical/ProjectCategorySection.astro \
  src/components/projects/ProjectCategorySection.astro

#
# Configuración
#

move \
  src/data/config/navigation.ts \
  src/config/navigation.ts

move \
  src/data/config/site.ts \
  src/config/site.ts

#
# Design tokens
#

move \
  src/styles/components/design-tokens.css \
  src/styles/tokens.css

echo
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Migración completada"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo
echo "Próximos pasos:"
echo
echo "1. Actualizar imports manualmente"
echo "2. Revisar git diff"
echo "3. Ejecutar:"
echo
echo "   npm run lint"
echo "   npx astro check"
echo "   npm run build"
echo
echo "4. Si todo compila:"
echo
echo "   rmdir src/components/critical"
echo "   rmdir src/components/non-critical"
echo "   rmdir src/data/config"
echo "   rmdir src/styles/components"
echo
echo "5. Evaluar si siguen siendo necesarias:"
echo
echo "   src/components/layout"
echo "   src/components/shared"
echo "   src/components/projects (antigua)"
