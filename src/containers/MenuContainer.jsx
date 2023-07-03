import { Menu } from "@/components/Menu/Menu";
import { MenuSkeleton } from "@/components/Menu/MenuSkeleton";
import { useGetDishesQuery } from "@/redux/services/api";
import React from "react";

export const MenuContainer = ({ restaurantId, className }) => {
  const { data: dishes, isFetching, error } = useGetDishesQuery(restaurantId);

  if (isFetching) {
    return <MenuSkeleton />;
  }

  if (!dishes?.length || error) {
    return null;
  }

  return <Menu dishes={dishes} className={className} />;
};
