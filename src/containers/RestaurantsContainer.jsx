import { Restaurants } from "@/components/Restaurants/Restaurants";
import { STATUSES } from "@/constants/statuses";
import { useRequest } from "@/hooks/useRequest";
import { selectRequestStatus } from "@/redux/features/request/selectors";
import { selectRestaurantIds } from "@/redux/features/restaurant/selectors";
import { fetchRestaurantsIfNotExist } from "@/redux/features/restaurant/thunks/fetchRestaurantsIfNotExist";
import { useGetRestaurantsQuery } from "@/redux/services/api";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantsContainer = () => {
  const restaurantIds = useSelector(selectRestaurantIds);

  const restaurantLoadingStatus = useRequest(fetchRestaurantsIfNotExist);

  if (restaurantLoadingStatus === STATUSES.pending) {
    return <div>Loading...</div>;
  }

  if (!restaurantIds) {
    return null;
  }

  return (
    <div>
      <Restaurants restaurantIds={restaurantIds} />
    </div>
  );
};
