/**
 * @method blobToBase64
 * @description convert File/Blob to base64
 * @param {Blob} file
 * @returns {Promise<string>} base64 blob
 */
export function blobToBase64(file: Blob): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result?.toString() || "");
    reader.onerror = (error) => reject(error);
  });
}
