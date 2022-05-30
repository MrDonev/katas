const countValidTriangles = (trianglesArr) => {
  if (trianglesArr===undefined || !trianglesArr.length) return 0;
  const validTriangles = trianglesArr.filter((triangle) => {
    if (
      triangle[0] + triangle[1] > triangle[2] &&
      triangle[0] + triangle[2] > triangle[1] &&
      triangle[1] + triangle[2] > triangle[0]
    ) {
      return triangle;
    }
  });
  return validTriangles.length;
};

module.exports = countValidTriangles;
