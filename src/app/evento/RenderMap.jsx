"use client";
import Card from "@/components/NewCard/Card/Card";
export const dynamic = "force-dynamic";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allfetchEvents } from "@/redux/alleventos/actions";

const RenderMapCard = ({ category, price, page }) => {
  const dataEvent = useSelector((state) => state.allevents.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allfetchEvents(category, price, page));
  }, [category, dispatch, page, price]);

  return dataEvent?.map((data) => (
    <Card key={data._id} data={data} id={data._id} user={data.user} />
  ));
};

export default RenderMapCard;
