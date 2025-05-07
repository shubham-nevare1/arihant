
const baseUrl = process.env.BASE_API_URL;

export async function fetchProducts(pageSlug) {
  try {
    // const res = await fetch('https://stag-api.arihantplus.com/api/pages/by-slug/home-page');
    // const res = await fetch(process.env.BASE_API_URL);
    // const res = await fetch(`${process.env.BASE_API_URL}/pages/by-slug/home-page`);
    const res = await fetch(`${baseUrl}/pages/by-slug/${pageSlug}`,{
      cache: "no-store",
    });
    const data = await res.json();
    return data?.data?.[0]?.attributes?.templates?.[0] || [];
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}


// Fetch Home Page data
// const homePageData = await fetchProducts("home-page");

// Fetch About Page data
// const aboutPageData = await fetchProducts("about-page");                                       
