import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-app-by-town-brandcrowd.png"
          alt="Food App Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Restaurant = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime } = {},
    cloudinaryImageId,
  } = resData.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }
      />
      <h3>{name || "Restaurant Name Not Available"}</h3>
      <h4>{cuisines?.join(", ") || "Cuisines not available"}</h4>
      <h4>{avgRating ? `${avgRating} Stars` : "No ratings yet"}</h4>
      <h4>{costForTwo || "Cost information not available"}</h4>
      <h4>
        {deliveryTime
          ? `${deliveryTime} minutes`
          : "Delivery time not available"}
      </h4>
    </div>
  );
};

const resList = [
                  {
                    "info": {
                      "id": "10575",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg",
                      "locality": "Richmond Town",
                      "areaName": "Shanti Nagar",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.3,
                      "parentId": "721",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-12 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹300 OFF",
                        "subHeader": "ABOVE ₹1699",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "1.8K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/pizza-hut-richmond-town-shanti-nagar-rest10575",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "5938",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5938.JPG",
                      "locality": "Tasker Town",
                      "areaName": "Shivaji Nagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.4,
                      "parentId": "166",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "37K+",
                      "sla": {
                        "deliveryTime": 48,
                        "lastMileTravel": 2.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "2.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-12 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/burger-king-tasker-town-shivaji-nagar-rest5938",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "69274",
                      "name": "Chai Point",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/19/4292b0b7-5d2a-44e0-b873-d2fa2b76eaa5_69274.jpg",
                      "locality": "Ashok Nagar",
                      "areaName": "Ashok Nagar",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Bakery",
                        "Beverages",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "South Indian",
                        "Punjabi",
                        "Chaat",
                        "Indian",
                        "American"
                      ],
                      "avgRating": 4.6,
                      "parentId": "1607",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "9.6K+",
                      "sla": {
                        "deliveryTime": 43,
                        "lastMileTravel": 1.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "1.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-11 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹34"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "1.5K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/chai-point-ashok-nagar-rest69274",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "396750",
                      "name": "The Biryani Life",
                      "cloudinaryImageId": "wvjsuvqrd6ahqqyhmnrt",
                      "locality": "Residency Road",
                      "areaName": "Shantinagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Biryani",
                        "Mughlai",
                        "Lucknowi",
                        "Hyderabadi",
                        "Kebabs",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 3.9,
                      "parentId": "8496",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "391",
                      "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-11 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹49"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/the-biryani-life-residency-road-shantinagar-rest396750",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "566497",
                      "name": "Faasos' Signature Wraps & Rolls",
                      "cloudinaryImageId": "c583ca6ce40b426797a78ae2ac91f2ec",
                      "locality": "Residency Road",
                      "areaName": "Shantinagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Fast Food",
                        "Snacks",
                        "North Indian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "340366",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "49",
                      "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-11 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹23"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/faasos-signature-wraps-and-rolls-residency-road-shantinagar-rest566497",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "29673",
                      "name": "Natural Ice Cream",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/3/da31e4ed-4a6c-4fe2-b41d-7eaaea4c1787_29673.JPG",
                      "locality": "St. Marks Road",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "parentId": "2093",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "11K+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 0.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "0.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-12 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹75"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "1.1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/natural-ice-cream-st-marks-road-central-bangalore-rest29673",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "588619",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4398bfb2-6948-484a-9613-2d7628a2457a_588619.JPG",
                      "locality": "Brigade Road",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.4,
                      "parentId": "547",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "2.2K+",
                      "sla": {
                        "deliveryTime": 43,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "2.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-11 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "353"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/kfc-brigade-road-central-bangalore-rest588619",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "23847",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/a6dfc662-f040-4e87-b5e4-daef000ddedf_23847.jpg",
                      "locality": "MG Road",
                      "areaName": "Brigade Road",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "2456",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "5.9K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-11 22:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹89"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "4.9K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/dominos-pizza-mg-road-brigade-road-rest23847",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "570511",
                      "name": "Bakingo",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/7/bd99adc6-9b49-4540-b8d7-a7d55cdb142d_570511.jpg",
                      "locality": "Puhlong X-road",
                      "areaName": "Vasanth Nagar",
                      "costForTwo": "₹299 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "Snacks"
                      ],
                      "avgRating": 4.6,
                      "parentId": "3818",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "3.9K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 3.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-12 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/bakingo-puhlong-x-road-vasanth-nagar-rest570511",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "435405",
                      "name": "Chaayos Chai+Snacks=Relax",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG",
                      "locality": "Cunningham Road",
                      "areaName": "RT Nagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Bakery",
                        "Beverages",
                        "Chaat",
                        "Desserts",
                        "Home Food",
                        "Italian",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "Sweets"
                      ],
                      "avgRating": 4.6,
                      "parentId": "281782",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "1.9K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-12 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹85"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "376"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/chaayos-chai-snacks-relax-cunningham-road-rt-nagar-rest435405",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "59146",
                      "name": "Krispy Kreme - Doughnuts & Coffee",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/f0a8ca99-3f15-4a3e-8cab-f3b46183a0bd_59146.JPG",
                      "locality": "Austin town",
                      "areaName": "Richmond Road",
                      "costForTwo": "₹170 for two",
                      "cuisines": [
                        "Desserts",
                        "Cafe",
                        "Bakery",
                        "Coffee",
                        "Beverages",
                        "Snacks"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "594464",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "5.0K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 2.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-11 22:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/krispy-kreme-doughnuts-and-coffee-austin-town-richmond-road-rest59146",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "426730",
                      "name": "Theobroma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/d9cf35fc-2891-47bc-b5e8-f7d5cef27b18_426730.jpg",
                      "locality": "Lavelle Road",
                      "areaName": "Ashok Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Desserts",
                        "Bakery",
                        "Beverages"
                      ],
                      "avgRating": 4.7,
                      "parentId": "1040",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "5.2K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 0.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "0.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-11 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "427"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/theobroma-lavelle-road-ashok-nagar-rest426730",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "53608",
                      "name": "Sweet Chariot",
                      "cloudinaryImageId": "r91ay2xujwrwvmj5oat8",
                      "locality": "Residency Road",
                      "areaName": "Ashok Nagar",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Desserts"
                      ],
                      "avgRating": 4.6,
                      "parentId": "912",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "3.5K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-11 22:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/sweet-chariot-residency-road-ashok-nagar-rest53608",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "792357",
                      "name": "Wendy's Flavor Fresh Burgers",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/64958dd3-3535-48dc-b9a1-2e49c38e6a01_792357.jpg",
                      "locality": "Residency Road",
                      "areaName": "Shantinagar",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Burgers",
                        "American",
                        "Fast Food",
                        "Snacks",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "470493",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "30",
                      "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-11 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹75"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/wendys-flavor-fresh-burgers-residency-road-shantinagar-rest792357",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "17376",
                      "name": "Glen's Bakehouse",
                      "cloudinaryImageId": "m6jahioyu7zrodei5pcq",
                      "locality": "Lavelle Road",
                      "areaName": "Ashok Nagar",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Desserts",
                        "Bakery",
                        "Beverages",
                        "Continental",
                        "Italian"
                      ],
                      "avgRating": 4.7,
                      "parentId": "3220",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "25K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-11 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "10K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/glens-bakehouse-lavelle-road-ashok-nagar-rest17376",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "622202",
                      "name": "MOJO Pizza - 2X Toppings",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/e7ccd786-be92-4743-8e0c-f3d3a577d48f_622202.jpg",
                      "locality": "Langford Road",
                      "areaName": "Shantinagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Fast Food",
                        "Desserts"
                      ],
                      "avgRating": 4.6,
                      "parentId": "11329",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "590",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "2.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-12 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/mojo-pizza-2x-toppings-langford-road-shantinagar-rest622202",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "643832",
                      "name": "WeFit - Protein Bowls, Salads & Sandwiches",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/59e251dc-b6d9-4566-97c3-931b83ef7061_643832.JPG",
                      "locality": "Langford Road",
                      "areaName": "Santhinagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Healthy Food",
                        "Salads",
                        "Keto",
                        "Snacks"
                      ],
                      "avgRating": 4.8,
                      "parentId": "355285",
                      "avgRatingString": "4.8",
                      "totalRatingsString": "602",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "2.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-12 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "brand"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/wefit-protein-bowls-salads-and-sandwiches-langford-road-santhinagar-rest643832",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "160120",
                      "name": "Asha Sweet Center - Since 1951",
                      "cloudinaryImageId": "egm3aym4fa73hst2tv9b",
                      "locality": "Gandhi Bazaar",
                      "areaName": "Basavanagudi",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Sweets",
                        "Snacks",
                        "Fast Food",
                        "Bakery",
                        "Beverages"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "472555",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "4.8K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 4.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "4.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-11 21:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/asha-sweet-center-since-1951-gandhi-bazaar-basavanagudi-rest160120",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "800081",
                      "name": "Quick Crave",
                      "cloudinaryImageId": "63a3c2a8873eb3e8d5c86f68defd5370",
                      "locality": "Residency Road",
                      "areaName": "Shantinagar",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Fast Food",
                        "Biryani",
                        "North Indian",
                        "Desserts",
                        "Burgers"
                      ],
                      "avgRating": 4.3,
                      "parentId": "478149",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "27",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-11 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "brand"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹75"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/quick-crave-residency-road-shantinagar-rest800081",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "3434",
                      "name": "Nandhini Deluxe",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/3/7f19aaac-7299-4b54-a22d-69fd67f8fb65_3434.jpg",
                      "locality": "St. Marks Road",
                      "areaName": "St Marks Road",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Andhra",
                        "Biryani",
                        "Chinese",
                        "North Indian"
                      ],
                      "avgRating": 4.3,
                      "parentId": "2451",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "18K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 0.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "0.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-01-11 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹749",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.8",
                          "ratingCount": "1.5K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-cd5c3167-f758-44e9-9843-b00fd717a2a7"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/nandhini-deluxe-st-marks-road-rest3434",
                      "type": "WEBLINK"
                    }
                  }
  ];
                
  

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <Restaurant key={restaurant.info.id} resData={restaurant} />
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
