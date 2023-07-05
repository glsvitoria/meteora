import pix from "../assets/Desktop/Ícones/x-diamond (2).png";
import flower from "../assets/Desktop/Ícones/flower1 (3).png";
import arrows from "../assets/Desktop/Ícones/arrow-repeat (2).png";

interface IFacility {
  image: string;
  title: string;
  description: string;
}

const facilitiesList: IFacility[] = [
  {
    image: pix,
    title: "Pague pelo Pix",
    description: "Ganhe 5% OFF em pagamentos via PIX",
  },
  {
    image: arrows,
    title: "Troca grátis",
    description: "Fique livre para trocar em até 30 dias.",
  },
  {
    image: flower,
    title: "Sustentabilidade",
    description: "Moda responsável, que respeita o meio ambiente.",
  },
];

export function Facilities() {
  return (
    <section className="bg-black py-10 mt-20 flex flex-col items-center">
      <h1 className="sm:text-3xl text-2xl font-medium font-sans text-white text-center">
        Conheça todas as nossas facilidades
      </h1>

      <div className="flex lg:flex-row flex-col lg:items-center justify-center lg:w-4/5 sm:mx-auto mx-6 mt-10 gap-8">
        {facilitiesList.map(facility => (
          <FacilityItem key={facility.image} facility={facility} />
        ))}
      </div>
    </section>
  );
}

interface IFacilityItemProps {
  facility: IFacility;
}

function FacilityItem({ facility }: IFacilityItemProps) {
  return (
    <div className="flex gap-6">
      <img src={facility.image} className="sm:w-20 sm:h-20 w-14 h-14" alt="" />
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-yellow uppercase w-max">
          {facility.title}
        </h3>
        <p className="text-xs text-white leading-6">{facility.description}</p>
      </div>
    </div>
  );
}
