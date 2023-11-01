const createSlugFromString = (inputString: string) => {
    const slug = inputString
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();

    return slug;
}
  
export default createSlugFromString;