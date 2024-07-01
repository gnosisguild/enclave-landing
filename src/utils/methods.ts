export const stringToBigUint64Array = (str: string): BigUint64Array => {
  const encoder = new TextEncoder()
  const uint8Array = encoder.encode(str)

  const buffer = new ArrayBuffer(Math.ceil(uint8Array.length / 8) * 8)
  const uint8Buffer = new Uint8Array(buffer)
  uint8Buffer.set(uint8Array)

  return new BigUint64Array(buffer)
}

export const loadBinaryFile = async (filename: RequestInfo | URL) => {
  const response = await fetch(filename)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${filename}`)
  }

  if (!response.body) {
    throw new Error(`Failed to fetch ${filename}`)
  }

  const reader = response?.body?.getReader()

  let receivedLength = 0
  const chunks = []

  while (true) {
    const { done, value } = await reader.read()
    if (done) {
      break
    }
    chunks.push(value)
    receivedLength += value.length
  }
  const chunksAll = new Uint8Array(receivedLength)
  let position = 0
  for (let chunk of chunks) {
    chunksAll.set(chunk, position)
    position += chunk.length
  }
  return chunksAll
}

export const binaryToHex = (uint8Array: Uint8Array): string => {
  return Array.from(uint8Array)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}
