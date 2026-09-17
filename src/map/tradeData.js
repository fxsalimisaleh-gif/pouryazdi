// Route data lives separately from the rendering components.
// Canvas is an abstract 1000 x 620 editorial projection — not a literal
// geographic projection — so silhouettes and positions are stylized, not
// cartographically precise.

export const origin = {
  id: 'kerman',
  x: 640,
  y: 330,
}

export const hub = {
  id: 'armenia',
  x: 560,
  y: 230,
}

// Each route: origin -> hub -> destination is implied; we render hub -> destination
// (the current, active trade network) and hub -> origin (the heritage line) separately.
export const destinations = [
  { id: 'russia', x: 760, y: 90, status: 'active' },
  { id: 'europe', x: 320, y: 150, status: 'active' },
  { id: 'africa', x: 430, y: 470, status: 'active' },
]
