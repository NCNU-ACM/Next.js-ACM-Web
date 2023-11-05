import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface Props {}

export function Contact(Props:Props) {
  return (
    <>
      <Card className="w-screen h-[200px] bg-cyan-950">
        <CardHeader>
          <CardTitle className="text-white">聯絡資訊</CardTitle>
        </CardHeader>
        <CardContent>
          
        </CardContent>
        <CardFooter>
          
        </CardFooter>
      </Card>
    </>
  );
}
