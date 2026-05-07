export type AiSkinProfileInput = {
  skinConcern?: string;
  skinType?: string;
  routineStep?: string;
};

export async function getAiRoutineSuggestion(
  input: AiSkinProfileInput,
): Promise<string> {
  // Future AI integration: connect this boundary to a server-side API route.
  return Promise.resolve(
    `Personalized routine placeholder for ${input.skinType ?? "all skin types"}.`,
  );
}
