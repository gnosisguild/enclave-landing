export const handleGenericError = (functionName: string, error: Error) => {
  console.error(`[${functionName}] - ${error.message}`)
}
