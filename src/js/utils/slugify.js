/**
 * Converte string para slug URL-friendly
 * Exemplo: "Rastro da Serpente" -> "rastro-da-serpente"
 * @param {string} str - Texto a ser convertido
 * @returns {string} Slug em lowercase com hífens
 */
export function slugify(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
