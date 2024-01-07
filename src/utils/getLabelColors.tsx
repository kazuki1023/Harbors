export const getLabelColors = (label: string | undefined) => {
  let colors: [
    string,
    string,
    string
  ] = [ '', '', '' ];

  switch (label) {
    case "業務":
      colors = [
        'text-blue-800',
        'bg-blue-100',
        'border-blue-100'
      ];
      break;
    case "縦・横モク":
      colors = [
        'text-red-800',
        'bg-red-100',
        'border-red-100'
      ];
      break;
    case "カリキュラム":
      colors = [
        'text-green-800',
        'bg-green-100',
        'border-green-100'
      ];
      break;
    case "MU":
      colors = [
        'text-yellow-800',
        'bg-yellow-100',
        'border-yellow-100'
      ];
      break;
    case "その他":
      colors = [
        'text-gray-800',
        'bg-gray-100',
        'border-gray-100'
      ];
      break;
  }

  return colors;
}
