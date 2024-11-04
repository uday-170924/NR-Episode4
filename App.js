import React from "react";
import ReactDOM from "react-dom/client";
const App = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQDxEREhESFhIWFRYYEhUVFRUYExYTGR4XFxcWGBcZHSogGR0lGxcVIT0iJSkrLjAuFyAzODMsNygtLisBCgoKDg0OGhAQGi4mICUtNystNystLS8tKystLS0tLS8tLy0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQEDBAYHAgj/xABEEAABAwIEBAMEBAsGBwAAAAABAAIDBBEFEiExBgcTQSJRYRQycYFCkbHSCBcjUlNicoKSoaMVM0NzlNFUg5OisvDx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAIFBv/EAC4RAQACAgEDAgQEBwEAAAAAAAABAgMRBBIhMUFRE3GRoQUVIlIjMkJhwdHxgf/aAAwDAQACEQMRAD8A7igICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgjOJcbjoKSWqlDiyMAkNALiSQ1oF9NSQg57+PGj/4Or/o/fQZ9Nzkw58Er3CaORjSWQvaM0h1s1haSN7b2te50QaPhPMbFq6qkaKhkEYhqJbMhjcGtijc8C8gJOoaCfXYIO64bMZIInuFnOjY4jyJAJ+1BkoCAgICAgICAgICAgICAgICAgILVTUsiY6SRzWsaCXOcbNa0bkk7BBxXj/m02ohkpaAStDi0GpzGNxaDdwY22YXAtc5TYnRSMDl5zSNDH7PWCaaMvu2XPnfE0gDLldq5oNzvfWwCDueF4lDVQsngkbJE8XY5uxH2g+h1UDLQWaumZMx0cjGvjcLOY9oc1w8iDoUEE7gTCrW/s+k/6LP9kHznxjhVLSVT4KWpdOxtw9xaBkfcjIHDR9hbXzupS6VwNy7pqumjroKmoibP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"
          alt="logo"
        />
      </div>
      <div className="links-container">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const RestroCard = (props) => {
  // console.log(props)

  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;
  return (
    <div className="restro-card">
      <div>
        <img
          className="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        ></img>
      </div>
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}</p>
      <p>{costForTwo}</p>
      <p>{sla.deliveryTime} min</p>
    </div>
  );
};
// const resObj = {
//     info: {
//         id: "10582",
//         name: "Pizza Hut",
//         cloudinaryImageId:
//             "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/737b12ff-5c41-46eb-af2d-a346f35cb464_10582.jpg",
//         locality: "Maruti Nagar",
//         areaName: "Koramangala",
//         costForTwo: "₹300 for two",
//         cuisines: ["Pizzas","Burger"],
//         avgRating: 4.3,
//         parentId: "721",
//         avgRatingString: "4.3",
//         totalRatingsString: "11K+",
//         sla: {
//             deliveryTime: 18,
//             lastMileTravel: 0.1,
//             serviceability: "SERVICEABLE",
//             slaString: "15-20 mins",
//             lastMileTravelString: "0.1 km",
//             iconType: "ICON_TYPE_EMPTY",
//         },
//         availability: {
//             nextCloseTime: "2024-11-05 06:00:00",
//             opened: true,
//         },
//         badges: {},
//         isOpen: true,
//         type: "F",
//         badgesV2: {
//             entityBadges: {
//                 imageBased: {},
//                 textBased: {},
//                 textExtendedBadges: {},
//             },
//         },
//         aggregatedDiscountInfoV3: {
//             header: "50% OFF",
//             subHeader: "UPTO ₹100",
//         },
//         differentiatedUi: {
//             displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             differentiatedUiMediaDetails: {
//                 lottie: {},
//                 video: {},
//             },
//         },
//         reviewsSummary: {},
//         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         restaurantOfferPresentationInfo: {},
//         externalRatings: {
//             aggregatedRating: {
//                 rating: "4.9",
//                 ratingCount: "743",
//             },
//             source: "GOOGLE",
//             sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
//         },
//         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//     },
//     analytics: {
//         context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
//     },
//     cta: {
//         link: "https://www.swiggy.com/city/bangalore/pizza-hut-maruti-nagar-koramangala-rest10582",
//         type: "WEBLINK",
//     },
// };
const resObj = [
  {
    info: {
      id: "334475",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_334475.JPG",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "9.1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-05 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kfc-2nd-stage-btm-layout-rest334475",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "42060",
      name: "Sharief Bhai Biryani",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/4/7a62098a-6aad-4a11-8fe3-9c16a6d189ff_42060.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Arabian",
        "South Indian",
        "Rolls & Wraps",
        "Street Food",
        "Fast Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.2,
      parentId: "469102",
      avgRatingString: "4.2",
      totalRatingsString: "51K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-05 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "4.6K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/sharief-bhai-biryani-koramangala-rest42060",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "496612",
      name: "Wow! China",
      cloudinaryImageId: "95982cfa57cb3b7e504f2015c375fd55",
      locality: "The Nexus Mall",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: [
        "Tibetan",
        "Chinese",
        "Asian",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4,
      parentId: "226836",
      avgRatingString: "4.0",
      totalRatingsString: "660",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-04 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/wow-china-the-nexus-mall-koramangala-rest496612",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "596949",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/19/da31f33d-4eac-4452-a54f-47d76339af10_596949.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Italian"],
      avgRating: 4.3,
      parentId: "11633",
      avgRatingString: "4.3",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-05 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.7",
          ratingCount: "3",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/olio-the-wood-fired-pizzeria-koramangala-rest596949",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "718430",
      name: "The Pizza Bakery - Wood Fired Sourdough",
      cloudinaryImageId: "0335dd45be555d0a4187255e57d2ca88",
      locality: "BTM Layout",
      areaName: "Koramangala",
      costForTwo: "₹700 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Continental",
        "Beverages",
      ],
      avgRating: 4.4,
      parentId: "522292",
      avgRatingString: "4.4",
      totalRatingsString: "1.7K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-04 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/the-pizza-bakery-wood-fired-sourdough-btm-layout-koramangala-rest718430",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "209557",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/6591e288-b992-4aad-949b-9a874da06c50_209557.JPG",
      locality: "JNC College Road",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "2",
      avgRatingString: "4.3",
      totalRatingsString: "6.0K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-05 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Sandwiches.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Sandwiches.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/subway-jnc-college-road-koramangala-rest209557",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "307",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId: "gxe4mn4ubw70yx3flyar",
      locality: "BTM Layout",
      areaName: "Btm Layout",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
      avgRating: 4.5,
      parentId: "22",
      avgRatingString: "4.5",
      totalRatingsString: "75K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-04 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "10K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-btm-layout-rest307",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "819539",
      name: "MOJO Pizza - 2X Toppings",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/8e40a0af-a787-4729-816a-c9c6885b7278_819539.JPG",
      locality: "BTM Layout",
      areaName: "Madiwala",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
      avgRating: 4.6,
      parentId: "11329",
      avgRatingString: "4.6",
      totalRatingsString: "437",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-05 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mojo-pizza-2x-toppings-btm-layout-madiwala-rest819539",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "506324",
      name: "Louis Burger",
      cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
      locality: "6Th Block, Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.3,
      parentId: "22485",
      avgRatingString: "4.3",
      totalRatingsString: "5.5K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-05 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/louis-burger-6th-block-koramangala-rest506324",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "211192",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "lczhp9lptdzbqn09nfns",
      locality: "2nd Stage",
      areaName: "BTM Layout",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "4961",
      avgRatingString: "4.3",
      totalRatingsString: "11K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-05 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "1.1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/la-pinoz-pizza-2nd-stage-btm-layout-rest211192",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "65797",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_65797.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.5,
      parentId: "371281",
      avgRatingString: "4.5",
      totalRatingsString: "53K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-05 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.5",
          ratingCount: "4.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-koramangala-rest65797",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "18973",
      name: "Nandhana Palace",
      cloudinaryImageId: "195876a3181ef63f76e45e3a7b49b585",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Andhra", "South Indian", "North Indian"],
      avgRating: 4.4,
      parentId: "2120",
      avgRatingString: "4.4",
      totalRatingsString: "37K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-05 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Andhra.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Andhra.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹3000",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "8.1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/nandhana-palace-koramangala-rest18973",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "158855",
      name: "Candice's Gourmet Sandwiches & Wraps",
      cloudinaryImageId: "d1331113564b015c9d55c48ff48a2553",
      locality: "5th Block",
      areaName: "Koramangala",
      costForTwo: "₹600 for two",
      cuisines: ["Salads", "sandwich", "Snacks"],
      avgRating: 4.5,
      parentId: "465403",
      avgRatingString: "4.5",
      totalRatingsString: "3.8K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-04 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/candices-gourmet-sandwiches-and-wraps-5th-block-koramangala-rest158855",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "758322",
      name: "Grameen Kulfi",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/23/0439d30c-a3ce-4db9-b822-ca1a1f91af68_758322 (2).jpg",
      locality: "MICO Employees Grinirman",
      areaName: "BTM layout",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "12175",
      avgRatingString: "4.7",
      totalRatingsString: "103",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-04 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹110",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/grameen-kulfi-mico-employees-grinirman-btm-layout-rest758322",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "534235",
      name: "Cheesecake & Co.",
      cloudinaryImageId: "b318c0b4bc2169550145ace1d6e791a2",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery"],
      avgRating: 4.6,
      parentId: "387417",
      avgRatingString: "4.6",
      totalRatingsString: "2.8K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-05 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.4",
          ratingCount: "106",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/cheesecake-and-co-koramangala-rest534235",
      type: "WEBLINK",
    },
  }
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {resObj.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => (
  <div className="app">
    <App />
    <Body />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
