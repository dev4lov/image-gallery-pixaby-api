import React from "react";
export default function ImageCard({ image }) {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden">
      <img src={image.webformatURL} alt="" />
      <div className="mx-4 my-6">
        <div className="text-purple-500 font-semibold">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong> {image.views}{" "}
          </li>
          <li>
            <strong>Download: </strong> {image.downloads}{" "}
          </li>
          <li>
            <strong>Likes: </strong> {image.likes}{" "}
          </li>
        </ul>
      </div>
      <div className="ml-2">

        {tags.map((tag, ind) => (
        <span key={ind} className="bg-gray-200 rounded-full px-3 py-1 mr-2 text-gray-700">
          #{tag}
        </span>
        ))}
      </div>
    </div>
  );
}
