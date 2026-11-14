// Single-choice alternatives are each accepted; multi-select questions require the full set.
export function correctChoiceIndices(q) {
  if (q.uncertain) return [];
  if (q.qType === 'multi') return q.answerIndices || [];
  return q.acceptedAnswerIndices?.length ? q.acceptedAnswerIndices : [q.answerIndex];
}

export function gradeQuestion(q, answer) {
  if (q.uncertain) return null;
  if (q.qType === 'short') return answer.isCorrect;
  if (q.qType === 'multi') {
    const selected = [...new Set(answer.selectedIndices || [])].sort((a, b) => a - b);
    const expected = [...new Set(q.answerIndices || [])].sort((a, b) => a - b);
    return expected.length > 0 && selected.length === expected.length && selected.every((v, i) => v === expected[i]);
  }
  return correctChoiceIndices(q).includes(answer.selectedIdx);
}
