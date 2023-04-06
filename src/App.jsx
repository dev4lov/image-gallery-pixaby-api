import { useState, useEffect } from "react";
import ImageCard from "./assets/components/ImageCard.jsx";
import ImageSearch from "./assets/components/ImageSearch.jsx";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const API_KEY = "35061571-45a2ce6decbd232742bca6891";
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      {isLoading ? (
        <h1 className="text-6xl font-bold text-center mt-32">Loading....</h1>
      ) : (
        <>
          <ImageSearch searchText={(text) => setTerm(text)} />
          {images.length ? (
            <div className="grid grid-cols-3 gap-4">
              {images.map((image) => (
                <ImageCard key={image.id} image={image} />
              ))}
            </div>
          ) : (
            <h1 className="text-6xl font-bold text-center mt-32">
              No Image Found
            </h1>
          )}
        </>
      )}
    </>
  );
}
