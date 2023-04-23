import React from "react";
import { Image, Shimmer } from 'react-shimmer'

function Item({ data }) {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="img">
          <Image
            src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
            alt={item.title}
            fallback={<Shimmer width={300} height={300}  />}
          />
        </div>
      ))}
    </>
  );
}

export default Item;
