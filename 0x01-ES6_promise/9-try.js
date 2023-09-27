// A funtion that uses try/catch/finally to catch any error
// and stringify the error object

export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(String(error));
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
