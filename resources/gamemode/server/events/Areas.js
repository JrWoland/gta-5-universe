import alt from 'alt-server';

function createColRectangle({ x, y, width, heigth, _name }) {
  const widthRange = width / 2;
  const heigthRange = heigth / 2;
  const createdArea = new alt.ColshapeRectangle(x + widthRange, y - heigthRange, x - widthRange, y + heigthRange);
  createdArea.Name = _name;
}

export const areas = [
  { x: 791, y: -269, z: 62.6, width: 20, heigth: 40, color: 1, _name: 'Red Area' },
  { x: 770, y: -220, z: 62.6, width: 50, heigth: 40, color: 2, _name: 'Green Area' },
  { x: 730, y: -210, z: 62.6, width: 40, heigth: 40, color: 3, _name: 'Next Area' },
];


areas.forEach(area => createColRectangle(area));
