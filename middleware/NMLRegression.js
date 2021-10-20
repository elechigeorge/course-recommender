class NodeMLRegression {
  constructor(x, y) {
    // check if argument is an array
    this.x = x;
    this.y = y;
    this.student_performance = {};
    this.isSimilar;
  }

  predictPossibleCourseMatches() {
    const evals = this.x.map((_x) =>
      this.y.filter(
        (_y) =>
          _y.subject === _x.subject &&
          _x.grade >= Math.round((_y.grade * 10) / 100)
      )
    );

    // return this.isSimilar;
    return evals;
  }
}

export default NodeMLRegression;
