export default function dividirArrayEnTres(arr) {
  const longitud = arr.length;
  const tamanoGrupo = Math.ceil(longitud / 3); // Calcula el tamaño de cada grupo

  const grupos = [];

  for (let i = 0; i < longitud; i += tamanoGrupo) {
    const grupo = arr.slice(i, i + tamanoGrupo); // Divide el array en grupos de tamaño tamanoGrupo
    grupos.push(grupo);
  }

  return grupos;
}
