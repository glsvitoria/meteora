interface IFormatNumberDTO {
  type: "currency";
  data: string | number;
}

export default function formatNumber({ data, type }: IFormatNumberDTO): string {
  if (type === "currency") {
    return Intl.NumberFormat("pt-br", {
      currency: "brl",

      style: "currency",
    }).format(Number(data));
  }

  return "invalid";
}
