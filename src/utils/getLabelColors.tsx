export const getLabelColors = (label: string | undefined) => {
  let colors: [
    string,
    string,
    string
  ] = [ '', '', '' ];

  switch (label) {
    case "test":
      colors = [
        'text-blue-800',
        'bg-blue-100',
        'border-blue-100'
      ];
      break;
    case "test2":
      colors = [
        'text-red-800',
        'bg-red-100',
        'border-red-100'
      ];
      break;
    case "test3":
      colors = [
        'text-green-800',
        'bg-green-100',
        'border-green-100'
      ]
      ;
      break;
  }

  return colors;
}
