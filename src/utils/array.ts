export const arrayUtils = {
  createChunks<T>(array: Array<T>, size: number) {
    try {
      const chunks: Array<Array<T>> = [];

      for (let i = 0; i < array.length; i++) {
        const last = chunks[chunks.length - 1];

        if (!last || last.length === size) {
          chunks.push([array[i]]);
        } else {
          last.push(array[i]);
        }
      }

      return chunks;
    } catch (error: any) {
      console.log({ array }, error.message, this.createChunks);

      throw error;
    }
  },
};
