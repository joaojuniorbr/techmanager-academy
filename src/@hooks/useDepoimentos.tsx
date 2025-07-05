import { api } from "@common/api";
import { useQuery } from "@tanstack/react-query";

export const useDepoimentos = () =>
  useQuery({
    queryKey: ["depoimentos"],
    queryFn: () =>
      api.get<{
        id: string;
        nome: string;
        depoimento: string;
        imagem: string;
        cargo: string;
      }[]>("/api.php", {
        params: {
          action: "depoimentos",
        },
      }).then(res => res.data),
  });
