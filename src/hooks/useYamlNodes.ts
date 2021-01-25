export function useYamlNodes(
  dataNodes: readonly Record<string, unknown>[],
): Record<string, any> {
  /* eslint-disable functional/no-loop-statement, 
  functional/no-expression-statement,  
  functional/no-expression-statement, 
  functional/immutable-data, 
  functional/no-conditional-statement  */

  const nodes: Record<string, any> = {};

  for (const node of dataNodes) {
    Object.entries(node).forEach(([key, value]: readonly [string, unknown]) => {
      if (value) {
        nodes[key] = value;
      }
    });
  }

  return nodes;
}
