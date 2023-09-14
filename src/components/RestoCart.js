import restData from "./Body";

const RestoCart = (props) => {
  const { restData } = props;
  return (
    <div>
      <div className="m-5 p-3 w-[240px] bg-gray-300 rounded-lg hover:bg-red-300 shadow-md h-[360px]">
        <img
          className="rounded-lg object-fill h-44 w-96 "
          alt="resto_logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            restData.info.cloudinaryImageId
          }
        />

        <h3 className="font-extrabold py-3">{restData.info.name}</h3>
        <p>{restData.info.cuisines.join(", ")}</p>
        <p className="text-left">{restData.info.avgRating}⭐️</p>
        {/* <p>Cost for Two: {restData.info.costForTwo}</p> */}
      </div>
    </div>
  );
};

export const withPromtedLabel = (RestoCart) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestoCart {...props} />
      </div>
    );
  };
};

export default RestoCart;
