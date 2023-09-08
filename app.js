import React from "react";
import ReactDOM from "react-dom/client";

/*
*Header
    -Logo
    -Nav items
*Body
    -Search
    -Restaurant container
        - Restaurant card
            -image
            -name of res, star rating, cuisine, delivery time
*Footer
    -Copyright
    -Links
    -Address
    -Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/thumbnails/011/468/885/small/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "30531",
      name: "Hotel Empire",
      cloudinaryImageId: "icpycagtwmqflonmjud8",
      locality: "Brigade Road",
      areaName: "Church Street",
      costForTwo: "₹450 for two",
      cuisines: ["North Indian", "Kebabs", "Biryani"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "30531",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "475",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=8048087~p=1~eid=0000018a-738a-78dd-0cc5-67a800010153~srvts=1694155569373~63141",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "10% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off up to ₹40 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-83a08660-5c7c-44c0-becf-60e540c98117",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-empire-brigade-road-church-street-bangalore-30531",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "281469",
      name: "Lavonne",
      cloudinaryImageId: "emlehbuwgsmryxhwzhvq",
      locality: "St. Marks Road",
      areaName: "St. Marks Road",
      costForTwo: "₹750 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.6,
      feeDetails: {
        restaurantId: "281469",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "10530",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 0.6,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "0.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-08 22:40:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
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
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-83a08660-5c7c-44c0-becf-60e540c98117",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/lavonne-st-marks-road-bangalore-281469",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "289970",
      name: "The Fatty Bao",
      cloudinaryImageId: "pmhtkcd6vcyjokvhlszc",
      locality: "Lavelle Road",
      areaName: "Lavelle Road",
      costForTwo: "₹1000 for two",
      cuisines: ["Asian", "Japanese", "Chinese"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "289970",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "3526",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=8223621~p=2~eid=0000018a-738a-78dd-0cc5-67a90001020a~srvts=1694155569373~63141",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-08 23:00:00",
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
      aggregatedDiscountInfoV2: {
        header: "₹150 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLAT150",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹150 off on orders above ₹1199 | Use code FLAT150",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
      },
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
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-83a08660-5c7c-44c0-becf-60e540c98117",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-fatty-bao-lavelle-road-bangalore-289970",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "23846",
      name: "Domino's Pizza",
      cloudinaryImageId: "aadw5xxrjtv6xxhtscai",
      locality: "Rehinus Street",
      areaName: "Richmond Town",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "23846",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "2456",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 02:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "₹100 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLAT100",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹100 off on orders above ₹999 | Use code FLAT100",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-83a08660-5c7c-44c0-becf-60e540c98117",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-rehinus-street-richmond-town-bangalore-23846",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "642747",
      name: "Foo Brigade Road",
      cloudinaryImageId: "f10ae4046bd7de2c06df880324b67a58",
      locality: "PRESTIGE FORUM REX",
      areaName: "Brigade Road",
      costForTwo: "₹1000 for two",
      cuisines: ["Asian", "Chinese", "Sushi"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "642747",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "393646",
      avgRatingString: "4.3",
      totalRatingsString: "50+",
      promoted: true,
      adTrackingId:
        "cid=8052056~p=3~eid=0000018a-738a-78dd-0cc5-67aa00010376~srvts=1694155569373~63141",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "51 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-08 23:30:00",
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
      aggregatedDiscountInfoV2: {},
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
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-83a08660-5c7c-44c0-becf-60e540c98117",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/foo-brigade-road-prestige-forum-rex-brigade-road-bangalore-642747",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "3369",
      name: "Truffles",
      cloudinaryImageId: "bqbf3nybmshrvscwrmfy",
      locality: "St. Marks Road",
      areaName: "St. Marks Road",
      costForTwo: "₹450 for two",
      cuisines: ["American", "Desserts", "Continental", "Italian"],
      avgRating: 4.5,
      feeDetails: {
        restaurantId: "3369",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "218065",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-08 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-83a08660-5c7c-44c0-becf-60e540c98117",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/truffles-st-marks-road-bangalore-3369",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "121603",
      name: "Kannur Food Point",
      cloudinaryImageId: "g0ouljeutq0onjuho5jt",
      locality: "SG Palya",
      areaName: "Tavarekere",
      costForTwo: "₹300 for two",
      cuisines: ["Kerala", "Chinese"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "121603",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6100,
      },
      parentId: "20974",
      avgRatingString: "3.9",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=8273584~p=4~eid=0000018a-738a-78dd-0cc5-67ab0001047f~srvts=1694155569373~63141",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 6.7,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "6.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 02:50:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-83a08660-5c7c-44c0-becf-60e540c98117",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kannur-food-point-sg-palya-tavarekere-bangalore-121603",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "10238",
      name: "Smoke House Deli",
      cloudinaryImageId: "zzkjr3jcrl1pqop1pybu",
      locality: "Ashok Nagar",
      areaName: "Lavelle Road",
      costForTwo: "₹800 for two",
      cuisines: [
        "Italian",
        "Continental",
        "Fast Food",
        "Salads",
        "Healthy Food",
        "Pizzas",
        "Desserts",
      ],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "10238",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "874",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-08 23:30:00",
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
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
      },
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
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-83a08660-5c7c-44c0-becf-60e540c98117",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/smoke-house-deli-ashok-nagar-lavelle-road-bangalore-10238",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
  {
    info: {
      id: "34301",
      name: "Sri Udupi Park (100ft Road)",
      cloudinaryImageId: "jxp8y1chnqljwqylpkov",
      locality: "Defence Colony",
      areaName: "Indiranagar",
      costForTwo: "₹100 for two",
      cuisines: [
        "South Indian",
        "North Indian",
        "Chaat",
        "Beverages",
        "Chinese",
      ],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "34301",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6100,
      },
      parentId: "194697",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=8047493~p=5~eid=0000018a-738a-78dd-0cc5-67ac00010514~srvts=1694155569373~63141",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 6.9,
        serviceability: "SERVICEABLE",
        slaString: "40 mins",
        lastMileTravelString: "6.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-08 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-83a08660-5c7c-44c0-becf-60e540c98117",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/sri-udupi-park-100ft-road-defence-colony-indiranagar-bangalore-34301",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_byName",
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
