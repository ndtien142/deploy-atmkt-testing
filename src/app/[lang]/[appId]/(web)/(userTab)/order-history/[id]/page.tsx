import React from "react";
import OrderHistoryDetailContainer from "./components/OrderHistoryDetailContainer";

export default function OrderHistoryDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <OrderHistoryDetailContainer orderId={params.id} />
    </>
  );
}
