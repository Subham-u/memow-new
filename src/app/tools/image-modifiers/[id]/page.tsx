import Balance from "@/components/tools/balance";
import ImageEditingSuite from "@/components/tools/form";

export default function Home(
  {
    params,
  }: {
    params: Promise<{ id: string }>
  }
) {
    return (
      <>
      <ImageEditingSuite/>
      <Balance/>
      </>    
      );
  }