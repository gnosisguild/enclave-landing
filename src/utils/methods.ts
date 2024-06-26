export const stringToBigUint64Array = (str: string): BigUint64Array => {

  const encoder = new TextEncoder();
  const uint8Array = encoder.encode(str);


  const buffer = new ArrayBuffer(Math.ceil(uint8Array.length / 8) * 8);
  const uint8Buffer = new Uint8Array(buffer);
  uint8Buffer.set(uint8Array);


  return new BigUint64Array(buffer);
};