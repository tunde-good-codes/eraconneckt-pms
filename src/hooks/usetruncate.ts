



export const useTruncate = (characters: string, maxLength: number) => {
    return characters?.length > maxLength ? `${characters?.slice(0, maxLength)} ...` : characters
  };